import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
function Updateproduct() {
  const [name, setName] = useState("")
  const [image, setimage] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
  const [Quantity, setQuantity] = useState(0)
  const [description, setdescription] = useState("")
  const [brand, setbrand] = useState("")
  const navigate = useNavigate()
  const [categories, setcategories] = useState([])
  const [product, setproduct] = useState({})
  let params = useParams()
  async function getCategory() {
    await axios('http://localhost:8001/getcategory')
      .then(response => response.data)
      .then(res => { setcategories(res) })
     
  }
  async function getOneProduct() {
    await axios.get('http://localhost:8001/details/' + params.id)
      .then(response => response.data)
    
     
  }
  useEffect(() => {
  
    getCategory()
  }, [])
  async function updateArticle(e) {
    e.preventDefault()
    let prod={
      name:name,
      price:price,
      image:image
    }
  
    await axios.put('http://localhost:8001/updateProduct/'+params.id, prod)
      .then(res => { navigate('/') })

  }
  return (<div style={{ backgroundColor: 'grey', paddingBottom: '5%', paddingTop: '2%' }}>
    <Form method="post" onSubmit={updateArticle} style={{ border: '1px solid grey', borderRadius: '20px', backgroundColor: 'white' }} className="py-3 w-75 m-auto mt-3">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group  >
              <Form.Label >Name</Form.Label>
              <Form.Control defaultValue={product.name} onChange={(e) => setName(e.target.value)} name="name" style={{ fontSize: '2rem ' }} type="text" placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group  >
              <Form.Label >Brand</Form.Label>
              <Form.Control defaultValue={product.brand} onChange={(e) => setbrand(e.target.value)} name="brand" style={{ fontSize: '2rem ' }} type="text" placeholder="Enter Brand" />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group >
              <Form.Label>Category</Form.Label>
              {product.category!=null?
              <Form.Control defaultValue={product.category} name="category" style={{ fontSize: '2rem ' }} className="text-secondary" as="select" onChange={(e) => setCategory(e.target.value)}>

                {categories.map((item, index) =>
                  product._id !== item._id ? <option key={index} value={item._id}>{item.category}</option>
                    : null)}

              </Form.Control>:null}
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group  >
              <Form.Label>Price</Form.Label>
              <Form.Control defaultValue={product.prix} onChange={(e) => setPrice(e.target.value)} name="price" style={{ fontSize: '2rem ' }} type="number" placeholder="Enter price" />
            </Form.Group>
          </Col>




          <Col xs={12} lg={6}>
            <Form.Group >
              <Form.Label>Quantity</Form.Label>
              <Form.Control defaultValue={product.Qtestock} onChange={(e) => setQuantity(e.target.value)} name="Quantity" style={{ fontSize: '2rem ' }} type="number" placeholder="Enter quantity" />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group  >
              <Form.Label>File</Form.Label>
             
             </Form.Group>
            
         <label for="upload" class="custom-upload">
              <input type="file" id="upload" name="image" onChange={(e)=>setimage(e.target.files[0])} />
              
            </label>
           
             <span >{product.image}</span>
           
         

          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" >
            <Form.Label>Example textarea</Form.Label>
            <Form.Control defaultValue={product.description} onChange={(e) => setdescription(e.target.value)} name="description" style={{ fontSize: '2rem ' }} as="textarea" rows={3} />
          </Form.Group>
        </Row>
        <Button style={{ fontSize: '2rem' }} variant="success" type="submit">
          Submit
        </Button>
      </Container>
    </Form>
  </div>);
}

export default Updateproduct;