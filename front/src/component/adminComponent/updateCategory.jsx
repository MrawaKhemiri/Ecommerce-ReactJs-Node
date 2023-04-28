import { Form,Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function Updatecategory() {
    let params=useParams()
    let navigate=useNavigate()
  
    const [categoryid,setcategoryid]=useState("")
    const [cat,setCat]=useState('')
    let category = {
        category:cat
    }
    async function updateCategory(e){
        e.preventDefault()
        await axios.post('http://localhost:8001/updatecategory/'+params.id,category)
        .then(res=>{navigate('/adminpage/listCategory')})

    }
    async function getCategoryById(){
        await axios.get('http://localhost:8001/getcategory/'+params.id)
      .then(response=>response.data)
      .then(res=>{setcategoryid(res.category)
    setCat(res.category)})
    }
    useEffect(()=>{
        getCategoryById()},[])
    return ( 
     
        <div style={{paddingBottom:'5%', paddingTop:'2%',width:"100%"}}>
        <h1 style={{textAlign:'center'}}>Update Category</h1>
        <Form method="post" onSubmit={updateCategory} className="formadd " >
            <Form.Group  >
                <Form.Label > Update Category</Form.Label>
                <Form.Control  defaultValue={categoryid}   onChange={(e)=>setCat(e.target.value)} name="cat" style={{ fontSize: '2rem ' }} type="text" placeholder="Enter category" />
            </Form.Group>
            <Button style={{ fontSize: '2rem',margin:"1rem"}} variant="success" type="submit">
        Submit
      </Button>
        </Form>
    
    </div>);
}

export default Updatecategory;