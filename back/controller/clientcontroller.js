import asynchandler from 'express-async-handler'
import bcrypt from"bcrypt"

import clientmodel from'../model/clientmodel.js'

const addclient=asynchandler(async(req,resp)=>{
let hashedpass=await bcrypt.hash(req.body.mdp,10)
  const clients=new clientmodel({
    nom:req.body.nom,
    prenom:req.body.prenom,
    email:req.body.email,
    mdp:hashedpass,
    role:req.body.role,
  })
  
  let clientexist=await clientmodel.findOne({email:req.body.email})
  if((req.body.passcomfirm==req.body.mdp)&&(clientexist==null)){
    clients.save()
    console.log(clients)
    const sessUser = { id: clients._id, nom: clients.nom, email: clients.email };
    req.session.clientsession=sessUser
    req.session.save()
    console.log(sessUser)
    resp.json(200)
  }
  else{
  
    resp.json('non valid')
  }

 
  

})


//connect
const connectclient=asynchandler(async(req,resp)=>{
  console.log('Session in connectclient:', req.session);
  let client=await clientmodel.findOne({email:req.body.email})
  
  if(client!=null){
    const isPasswordValid = await bcrypt.compare(req.body.mdp, client.mdp);
    if(isPasswordValid){
      
      const sessUser = { id: client._id, nom: client.nom, email: client.email,role:client.role };
      req.session.clientsession=sessUser
      
      await req.session.save(); // Wait for the session to be saved



   let msg='login'
   console.log("success login:nom"+req.session.clientsession.nom)
resp.json({keysession:sessUser,keymsg:msg})

    }
    else{
    
      console.log("failed login:password not exist")
     let msg='failed login:password not exist'
      resp.json({keymsg:msg})
    }
  }
  else{
   console.log("failed login:mail not exist")
   let msg='sign up first:(failed login:mail not exist)'
    resp.json({keymsg:msg})
  }
  



})
//deconnecter
const Signup=asynchandler(async(req,resp)=>{

  req.session.destroy();

  resp.json('logout')
  

})




export {addclient,connectclient,Signup}