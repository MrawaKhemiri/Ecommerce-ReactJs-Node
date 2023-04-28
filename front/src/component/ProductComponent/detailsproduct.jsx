import Modal from 'react-bootstrap/Modal'
import { Container } from "react-bootstrap";
import {Col,Row,Form} from "react-bootstrap";
import NumericInput from 'react-numeric-input';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { addCart} from '../../features/card/CardSlice';
import { useNavigate } from "react-router-dom"
function Detailsproduct() {
    const [Quantity,setQuantity]=useState(0)
    const [show, setShow] = useState(false);
    const navigate=useNavigate();
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
     let params=useParams()
     let dispatch=useDispatch()
     
    
     const [product,setProduct]=useState({})
     let idprod=params.id
     let data={
      qantite:Quantity,
      id:idprod
     
     }

    
  
    function confirm(e) {
 e.preventDefault();
     dispatch(addCart(data,idprod))
     setShow(false)   
     navigate('/') 
    }
    async function getDetail() {
        await axios.get('http://localhost:8001/details/'+params.id)
        .then(response=>response.data)
        .then(res=>{setProduct(res)})
    }
    useEffect(()=>{
        getDetail()   
    },[])
    return (
        <Container fluid className=" m- p-3" style={{backgroundColor:'#DCDCDC'}}>
<Row >
    <Col className="bg-light  " md={{ span: 4, offset: 1 }} sm={12} xs={12} >
<img   className="imageproduct" src={`http://localhost:8001/upload/${product.image}`} alt="product" style={{height:"40rem",width:"80%"}}/>
    </Col>
  
   
    <Col className="  bg-light " md={{ span: 4, offset: 1 }} sm={12} xs={12}>

    <Row >
        <Row>
    <Col className="    h-100 w-75">

       <h3 className="fw-bold my-4 py-3">{product.name}</h3>
       <div className='d-flex mb-4 '>
        <span>Price:</span><p className='ms-3'>£{product.prix}</p></div>
       <div className='d-flex mb-4'> <span>Description:</span> <p className="mb-4 ms-3">{product.description}</p></div>
        
        <Form.Group className='d-flex mb-4  w-75'  >
        <Form.Label className='me-3' >Quantity</Form.Label>
        <Form.Control  onChange={(e)=>setQuantity(e.target.value)} name="Quantity" style={{fontSize: '2rem',width:"50%"}}  type="number" placeholder="Enter quantity" />
      </Form.Group>
    
    </Col>
    </Row>
    <Row className="my-4" >
        <Col>
    <Button onClick={handleShow} style={{ fontSize: '2rem',width:'40%' }}   variant="warning"><FontAwesomeIcon icon={ faCartPlus }/>  Add to Card</Button>
    </Col>
   
    </Row>

</Row>
</Col>

</Row>
<Modal show={show} onHide={handleClose}>
    <Container>
    <Form methode="post" onSubmit={confirm}>
        <Row>
        <Modal.Header style={{backgroundColor:"#ffc107"}} closeButton>
       
          <Modal.Title style={{color:"white",fontFamily:'Playfair Display SC'}} > Add product:name to your card</Modal.Title>
        </Modal.Header>
        </Row>
        <Row>
        <Modal.Body>
        
          
          
            <Col xs={12} lg={6}>
            <Form.Group  >

        <Form.Label className='me-3'>Price</Form.Label>
       <span>£{product.prix}</span>
      </Form.Group>
      </Col>
      <Col xs={12} lg={6}>
      <Form.Group >
        <Form.Label className='me-3'>Quantity</Form.Label>
        <span>{Quantity}</span>
        </Form.Group>
      </Col>
        
          
        </Modal.Body>
        </Row>
        <Row>
        <Modal.Footer>
          <Button style={{ fontSize: '2rem'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' style={{ fontSize: '2rem'}}  variant="primary" >
            comfirm
          </Button>
         
        </Modal.Footer>
   
        </Row>
        </Form>
        </Container>
      </Modal>
        </Container>
        
     );
}

export default Detailsproduct;