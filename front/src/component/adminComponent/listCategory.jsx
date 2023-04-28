import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark,faPen} from '@fortawesome/free-solid-svg-icons'
import {Link, useParams}from'react-router-dom'
import axios from'axios'
import { useEffect, useState } from "react";
function Listcategory() {
  const[category,setCategory]=useState([])
 let params=useParams()
async function getCategory(){
  await axios.get('http://localhost:8001/getcategory')
  .then(response => response.data)
  .then(res=>setCategory(res))
}
async function deleteCategory(id){
  await axios.get('http://localhost:8001/deletecategory/'+id)
 .then(response => response.data)

}
useEffect(()=>{getCategory()},[category])
    return ( <div style={{paddingBottom:'5%', paddingTop:'2%',width:"100%"}}>
        <h1 style={{textAlign:'center' ,marginBottom:'5%'}}>Listcategory</h1>
        <Table  className="  w-50 mx-auto  table-borderless  text-center  " style={{textAlign:"center",borderSpacing:"2rem"}}>
      <thead style={{ borderBottom:"2rem solid  #dee2e6"}} >
        <tr >
          <th>Category name</th>
         
      
          <th>update</th>
          <th>Remove</th>
        </tr>

      </thead>
      <tbody className="align-middle">
   
      
  
   {category.map((item,index)=>
     <tr key={index} style={{  textAlign:"center", borderBottom:"2rem solid #dee2e6"}}  >
     <td >
     <h2>{item.category}</h2>
     </td>
     

 
     <td >
       <Link to={`/adminpage/updateCategory/${item._id}`} style={{textDecoration:"none",color:"black",width:"100%"}}><FontAwesomeIcon icon={faPen} className="text-success" /> Update</Link>
       
     </td>
     
     <td >
       <button onClick={()=>deleteCategory(item._id)}  style={{border:"none",backgroundColor:"white",width:"100%"}}>< FontAwesomeIcon style ={{color:"red"}}  icon={ faCircleXmark}/> Delete</button>
       
     </td>
  
   </tr>
  )}
       
      </tbody>
    </Table>
    </div> );
}

export default Listcategory;