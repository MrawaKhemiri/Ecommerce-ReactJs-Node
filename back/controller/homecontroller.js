import asynchandler from 'express-async-handler'
import paniermodel from '../model/paniermodel.js'
import {productmodel} from '../model/productmodel.js'
const pagehome=asynchandler(async(req,resp)=>{


  const listproduct=await productmodel.find()
  let panier=await paniermodel.find({IDclient:req.session.clientsession}).populate('IDproduct')
    resp.render('home',{keysession:req.session.clientsession,keyproduct:listproduct,keyl:panier.length})
    
  

})
export default pagehome 