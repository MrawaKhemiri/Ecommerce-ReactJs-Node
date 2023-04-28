import { useState,useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/session/userSessionSlice";

function Login() {
    const dispatch=useDispatch()
    let navigate=useNavigate()
    const[compte,setcompte]=useState("")
    const [err,seterr]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    let user={
        email:email,
        mdp:password,
    }
    
       
    
   async function logi(e) {
    e.preventDefault()
await axios.post('http://localhost:8001/login',user)
     .then(response=>response.data)  
     .then(res=>{if (res.keymsg=='login') {
      dispatch(login({ userName:res.keysession.nom,idClient:res.keysession.id, role:res.keysession.role }));
navigate("/")

     } else if(res.keymsg=='sign up first:(failed login:mail not exist)') {
        
        navigate('/inscription')
     }
    else{
        seterr('failed login:password not exist')
    }
})   
    }
    return ( <div>
         <Form method="post" onSubmit={logi}  className=" p-3  m-auto mt-3 mb-3 inner ">
        <h1 className="text-center m-3">LOGIN</h1>
      
    <Form.Group className="mb-3">
        <Form.Label className="Forminput">Email</Form.Label>
        <Form.Control onChange={(e)=>setemail(e.target.value)} style={{fontSize:"2rem",borderRadius:"15px"}} name="email" type="email" placeholder="Enter email"  />
        
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label className="Forminput">Password</Form.Label>
        <Form.Control onChange={(e)=>setpassword(e.target.value)}  style={{fontSize:"2rem",borderRadius:"15px"}} name="password" type="password" placeholder="Enter Password"  />
      <div>{err}</div>
    </Form.Group>
    
    <Button type="submit"  className="py-1 my-3" variant="warning" style={{fontSize:"2rem",fontFamily: 'Dosis'}}>LOGIN</Button>
    </Form>
    </div> );
}

export default Login;