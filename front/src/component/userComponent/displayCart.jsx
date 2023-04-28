import { Row, Table,Button } from "react-bootstrap";
import {Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { useDispatch,useSelector } from "react-redux";
import { deleteCart } from "../../features/card/CardSlice";
import { getCart} from '../../features/card/CardSlice';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Displaycart() {
    const {cart,isloading,error} = useSelector((state) => state.carts);
const navigate=useNavigate()
const dispatch = useDispatch();
const [status,setstatus]=useState("Ordred")
let somme=0
function sum() {
  cart.map((item) => 

  somme=somme+item.qantite*item.IDproduct.prix
  )
  return somme
}
async function shop(){
await axios.get("http://localhost:8001/shop")
.then(response => response.data)
.then(res=>console.log(res))
navigate('/');

}
  useEffect(()=>{
 dispatch(getCart())

},[dispatch])
 
    return ( <div className="container" >
        <h1>Cart</h1>
        <Row>
          <Col xs={12} lg={8}>
        <Table  className="  w-75 mx-auto  table-borderless  text-center  " style={{textAlign:"center",borderSpacing:"2rem"}}>
      <thead style={{ borderBottom:"2rem solid  #dee2e6"}} >
        <tr >
          <th>Products</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>

      </thead>
      <tbody className="align-middle">
   
      {error&&<div> error</div>}
        {isloading? ('loading...'):
        (
            cart.length>0?cart.map((item)=>
  
     
     <tr style={{textAlign:"center", borderBottom:"2rem solid #dee2e6"}}  >
     <td ><img   className="imageproduct" src={`http://localhost:8001/upload/${item.IDproduct.image}`} alt="product" style={{height:"5rem",width:"15%"}}/>
     <h2>{item.IDproduct.name}</h2>
     </td>
     
     <td >{item.IDproduct.prix}</td>
     <td >{item.qantite}</td>
     <td >{item.status}</td>
     <td >{item.qantite*item.IDproduct.prix}$</td>
     
     <td >
       <button onClick={()=>dispatch(deleteCart(item.IDproduct._id))
      .unwrap()
      .then(()=>navigate(0))
      } style={{border:"none",backgroundColor:"white",width:"100%"}}>< FontAwesomeIcon style ={{color:"red",height:"3rem",width:"100%"}}  icon={ faCircleXmark}/></button>
       
     </td>
  
   </tr>
  
        ):'no cart found'
          
       )
          }
      </tbody>
    </Table>
    </Col>
    <Col xs={12} lg={3} >
    <h2 className="mt-3 mb-4  sectionproduct titleproduct w-50"><span className="bg-warning pr-3 ">CART SUMMARY</span></h2>
    <div className="d-flex justify-content-around "><h3>TOTAL</h3> <span>{sum()}$</span></div>
    <Button onClick={shop} className="py-1 my-3 w-100 "  variant="warning" style={{fontSize:"2rem",fontFamily: 'Dosis'}}>SHOP NOW</Button>
    </Col>
    </Row>
    </div> );
}

export default Displaycart;