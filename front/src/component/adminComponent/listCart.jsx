import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import axios from'axios'
import { useEffect, useState } from "react";
function Listcart() {
 const[cart, setCart]=useState([])
 const[ status,setstatus]=useState('')
  async function getCart() {
  await axios.get('http://localhost:8001/getcart')
  .then(response=>response.data)
  .then(res=>setCart(res))
 }
 async function comfirmorder(iduser) {
  await axios.post('http://localhost:8001/comfirmorder'+iduser)
  .then(response=>response.data)

 }
useEffect(()=>{getCart()},[])

    return ( <div style={{paddingBottom:'5%', paddingTop:'2%',width:"100%"}}>
    <h1 style={{textAlign:'center' ,marginBottom:'5%'}}>List Cart</h1>
    <form>
    <Table  className="  w-75 mx-auto  table-borderless  text-center  " style={{textAlign:"center",borderSpacing:"2rem"}}>
  <thead style={{ borderBottom:"2rem solid  #dee2e6"}} >
    <tr >
      <th>Product name</th>
      <th>Quantity</th>
      <th>Cart status</th>
      <th>User name</th>

      <th>Comfirm</th>
    </tr>

  </thead>
  <tbody className="align-middle">
    {
cart.map((item)=>
   


<tr style={{textAlign:"center", borderBottom:"2rem solid #dee2e6"}}  >
 <td >
 {item.carts.map((el)=>
 <h2>{el.product[0].name}</h2>
 )}
 </td>
 <td >
 {item.carts.map((el)=>
 <h2>{el.quantite}</h2>
 )}
 </td>
 <td  >
 {item.carts.map((el)=>
 <div>
    <select name="status" defaultValue={el.status} onChange={(e)=>{setstatus(e.target.value)}}>
        <option value="Ordred">Ordred</option>
        <option value="Delivery">Delivery</option>
    </select></div>
 )}
 </td>

 <td rowSpan={item.carts.length}>
  <h2>{item._id[0].nom}</h2> 
 </td>
 
 <td rowSpan={item.carts.length}  >
   <button onClick={comfirmorder} type="submit" style={{border:"none",backgroundColor:"white",width:"100%"}}>< FontAwesomeIcon style ={{color:"green"}}  icon={ faCheck}/> Comfirm</button>
   
 </td>

</tr>
) }
   </tbody>
</Table>
</form>
</div> );
}

export default Listcart;