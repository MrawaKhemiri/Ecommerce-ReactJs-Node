import axios from "axios";
import { useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Addcategory() {
    const navigate=useNavigate()
    const [category,setCategory]=useState("");
   let Category={
    category:category
    }
    async function addCategory(e){
e.preventDefault()
await axios.post('http://localhost:8001/addcategory',Category)
 .then(res=>{navigate('/adminpage/listCategory')})
   }
    return (<div style={{paddingBottom:'5%', paddingTop:'2%',width:"100%"}}>
        <Form method="post" onSubmit={addCategory} className="formadd " >
            <Form.Group  >
                <Form.Label > Add Category</Form.Label>
                <Form.Control onChange={(e) => setCategory(e.target.value)} name="category" style={{ fontSize: '2rem ' }} type="text" placeholder="Enter category" />
            </Form.Group>
            <Button style={{ fontSize: '2rem',margin:"1rem"}} variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    </div>);
}

export default Addcategory;