import { useState,useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";


import { useNavigate } from "react-router-dom";

function Inscription() {

    const[email,setemail]=useState("")
    const[firstName,setfirstName]=useState("")
    const[lastName,setlastName]=useState("")
    const [password,setpassword]=useState("")
    const [role,setrole]=useState("select  your role")
    let passcomfirm = useRef(null);
   
    let navigate=useNavigate()
    const { register, handleSubmit,formState: { errors }  } = useForm({
        mode: "onBlur"
      });
      const onErrors = errors => console.error(errors);
const registerOptions = {
  firstName: { required: "FirstName is required" },
  lastName:{ required: "LastName is required" },
  email: { 
    required: "Email is required",
    pattern:{
      value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:" Not valid email address  "
  }
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters"
    }
  },
  role:{ required: "  Role is required",}
};



async function onFormSubmit(users) {
 
  let user={
    nom:users.firstName,
    prenom:users.lastName,
      email:users.email,
      mdp:users.password,
      role:role,
      passcomfirm:passcomfirm.current.value
  }
  await axios.post('http://localhost:8001/inscription',user)
 .then(response=>response.data)
 .then(res=>{ if (res=='non valid') {
  console.log(res)
    navigate(0) 
   
 } else if(res==200) {

    navigate('/')
 }})
    
}
    return ( 
    <div >
         <Form method="post" onSubmit={handleSubmit(onFormSubmit, onErrors)}  className=" p-3  m-auto mt-3 mb-3 inner ">
        <h1 className="text-center m-3">REGISTRATION</h1>
        <Form.Group className="mb-3">
        <Form.Label className="Forminput">First Name</Form.Label>
        <Form.Control onChange={(e)=>setfirstName(e.target.value)}  placeholder="Enter First Name" name="firstName" type="text" style={{fontSize:"2rem",borderRadius:"15px"}} {...register('firstName', registerOptions.firstName)}  />
        <div> {errors?.firstName && errors.firstName.message }</div>
       
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label className="Forminput">Last Name</Form.Label>
        <Form.Control  onChange={(e)=>setlastName(e.target.value)}  placeholder="Enter Last Name" style={{fontSize:"2rem",borderRadius:"15px"}} name="lastName" type="text" {...register('lastName', registerOptions.lastName)} />
        <div> {errors?.lastName && errors.lastName.message }</div>
        
    </Form.Group>
  
    <Form.Group className="mb-3">
        <Form.Label className="Forminput">Email</Form.Label>
        <Form.Control onChange={(e)=>setemail(e.target.value)} style={{fontSize:"2rem",borderRadius:"15px"}} name="email" type="email" placeholder="Enter email" {...register('email', registerOptions.email)} />
        <div> {errors?.email && errors.email.message}</div>
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label className="Forminput">Password</Form.Label>
        <Form.Control onChange={(e)=>setpassword(e.target.value)} 
         style={{fontSize:"2rem",borderRadius:"15px"}}
          name="password" type="password"
           placeholder="Enter Password" {...register('password', registerOptions.password)} />
        <div>{errors?.password && errors.password.message}</div>
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label className="Forminput"> Confirm Password</Form.Label>
        <Form.Control ref={passcomfirm}  style={{fontSize:"2rem",borderRadius:"15px"}} name="passcomfirm" type="password" placeholder="Enter Confirm Password" />
    
   
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label className="Forminput"> Role</Form.Label>
        <Form.Select value={role} onChange={(e)=>setrole(e.target.value)}  style={{fontSize:"2rem",borderRadius:"15px"}} >
        <option disabled value='select  your role'>select  your role</option>
        <option >USER</option>
        <option>ADMIN</option>
      </Form.Select>
    </Form.Group>
    <Button type="submit" className="py-1 my-3" variant="warning" style={{fontSize:"2rem",fontFamily: 'Dosis'}}>REGISTER NOW</Button>
    </Form>
   
    </div> );
}

export default Inscription;