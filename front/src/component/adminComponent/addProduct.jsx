import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Row,Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

import Form from 'react-bootstrap/Form';
function AddProduct() {
  const [name,setName]=useState("")
  const[image,setimage]=useState("")
const [category,setCategory]=useState("")
const [price,setPrice]=useState(0)
const [Quantity,setQuantity]=useState(0)
const [description,setdescription]=useState("")
const [brand,setbrand]=useState("")
const navigate=useNavigate()
const [categories,setcategories]=useState([])
async function getCategory(){
  await axios('http://localhost:8001/getcategory')
  .then(response=>response.data)
  .then(res=>{setcategories(res)})
}
useEffect(()=>{
  getCategory()
},[])
async function addArticle(e) {
  e.preventDefault()
  const formdata=new FormData()
  formdata.append('image',image)
  formdata.append( 'Qtestock',Quantity)
  formdata.append( 'prix',price)
  formdata.append( 'description', description)
  formdata.append( 'category',category)
  formdata.append( 'brand',brand)
  formdata.append( 'name',name)
 await axios.post('http://localhost:8001/addproduct',formdata)
   .then(res=>{navigate('/')})
    
}
    return (
        <div style={{backgroundColor:'grey',paddingBottom:'5%', paddingTop:'2%'}}>
            <Form method="post" onSubmit={addArticle} className=" formadd ">
                <Container>
      <Row>
        <Col xs={12} lg={6}>
        <Form.Group  >
          <Form.Label >Name</Form.Label>
          <Form.Control onChange={(e)=>setName(e.target.value)} name="name" style={{fontSize: '2rem '}} type="text" placeholder="Enter name" />
        </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
        <Form.Group  >
          <Form.Label >Brand</Form.Label>
          <Form.Control onChange={(e)=>setbrand(e.target.value)} name="brand" style={{fontSize: '2rem '}} type="text" placeholder="Enter Brand" />
        </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
        <Form.Group >
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" style={{fontSize: '2rem '}} className="text-secondary" as="select" onChange={(e)=>setCategory(e.target.value)}>
            <option selected disabled>Choose...</option>
           {categories.map((item,index)=>
           <option key={index} value={item._id}>{item.category}</option>
           )}
            
          </Form.Control>
        </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
      <Form.Group  >
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={(e)=>setPrice(e.target.value)}  name="price" style={{fontSize: '2rem '}}  type="number" placeholder="Enter price" />
      </Form.Group>
      </Col>
      
      


<Col xs={12} lg={6}>
      <Form.Group >
        <Form.Label>Quantity</Form.Label>
        <Form.Control onChange={(e)=>setQuantity(e.target.value)} name="Quantity" style={{fontSize: '2rem '}}  type="number" placeholder="Enter quantity" />
      </Form.Group>
      </Col>
      <Col xs={12} lg={6}>
      <Form.Group >
        <Form.Label>File</Form.Label>
        <Form.Control name="image" onChange={(e)=>setimage(e.target.files[0])} style={{fontSize: '2rem '}}  type="file" />
    </Form.Group>
      </Col>
      </Row>
      <Row>
      <Form.Group className="mb-3" >
        <Form.Label>Example textarea</Form.Label>
        <Form.Control onChange={(e)=>setdescription(e.target.value)} name="description" style={{fontSize: '2rem '}}  as="textarea" rows={3} />
      </Form.Group>
      </Row>
      <Button style={{ fontSize: '2rem'}} variant="primary" type="submit">
        Submit
      </Button>
      </Container>
    </Form>
        </div>
      );
}

export default AddProduct;