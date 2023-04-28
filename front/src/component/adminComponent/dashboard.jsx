import { Col,Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers,faMoneyBill1Wave,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import axios from'axios'
function Dashboard() {
    const [nbuser,setnbuser]=useState('')
    const [nbprod,setnbprod]=useState('')
    const [nbcart,setnbcart]=useState('')
  async  function getall() {
        await axios.get('http://localhost:8001/getalldata')
        .then(response=>response.data)
        .then(res=>{setnbuser(res.keynbuser)
        setnbcart(res.keynbcart)
    setnbprod(res.keynbprod)})
    }
    useEffect(()=>{getall()},[])
    return (<div>
        <h1>Dashboard</h1>
       <Row className="justify-content-evenly mt-5">
        <Col md={4} xs={9} className=" dashboard   inner  ">
            <span className="spandashdoard text-light"> <FontAwesomeIcon icon={faUsers} /> user number</span>
        <p className="text-center">{nbuser}</p>
        </Col>
        <Col md={{ span: 4, offset: 3 }} xs={9} className="  dashboard   inner  ">
            <span className="spandashdoard text-light">product number</span>
        <p className="text-center">{nbprod}</p>
        </Col>
        <Col md={6} xs={9} className="  dashboard   inner  ">
            <span className="spandashdoard text-light"><FontAwesomeIcon icon= {faCartShopping} /> order number</span>
        <p className="text-center">{nbcart}</p>
        </Col>
        
        </Row>
        <div><p  className="text-center mt-5">WELCOM ADMIN</p></div>
    </div>  );
}

export default Dashboard;