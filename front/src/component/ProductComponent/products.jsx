import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./item";
import Slider from "../slider";
import { Container,Row } from "react-bootstrap";
import { useSelector } from "react-redux";
function Products({article,setarticle}) {
    const { role } = useSelector((state) => state.userSession.value);
  
 
   
    async function getArticle(){
        await axios('http://localhost:8001/getarticle')
        .then(response=>response.data)
        .then(res=>{setarticle(res)})
    }
    useEffect(()=>{
        getArticle()
    },[])
    return ( <div>
        {role!=="ADMIN" ? 
            <Slider></Slider>:null}
            <h2 className="mt-3 mb-4  sectionproduct titleproduct "><span className="bg-secondary pr-3 ">Recent Products</span></h2>
      <Container fluid  style={{height: '100%'}}  >
        <Row className="d-flex  justify-content-between" style={{ height: '100%',margin:'2%' }}>
       {article.map((item)=>
       <Item item={item}></Item>
       )} 
        </Row>
       
        </Container>
    </div> );
}

export default Products;