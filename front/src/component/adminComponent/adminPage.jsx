import { Container,Row,Col } from "react-bootstrap";
import Dashboard from "./dashboard";
import Navadmin from "./navAdmin";
import { Outlet } from "react-router-dom";
function Adminpage() {
    return (  <div>
     
            <Row>
                <Col md={3} className="navadmin bg-dark" >
                 
                    <Navadmin ></Navadmin>
                </Col>
               
<Col xs={12} md={9} className="navadmin d-flex  align-items-center justify-content-center">

      <Outlet></Outlet>
     

</Col> 

 </Row>


    </div>);
}

export default Adminpage;