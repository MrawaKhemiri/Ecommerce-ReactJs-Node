
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsPersonCircle } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch } from "react-redux";
import '../css/style.css';
import { logout } from "../features/session/userSessionSlice";
import axios from "axios";
function Header({setsearch,searchp}) {
  const dispatch=useDispatch()

  const { userName, connect } = useSelector((state) => state.userSession.value);
  async function singnup() {
    await axios.get("http://localhost:8001/logout")
    .then(response=>response.data)
    .then(res=>dispatch(logout()))

  }
   return ( <>
    <Navbar style={{ fontSize: '2rem'}} bg="warning" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ fontSize: '2rem'}} >ECOMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            
            
          </Nav>
         <div className="d-flex justify-content-around  w-50">
          <Form className="d-flex" method="post" onSubmit={searchp}>
            <Form.Control
            name="serachprod"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ fontSize: '2rem'}}
              
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Button type="submit" style={{ fontSize: '2rem'}} variant="outline-secondary">Search</Button>
          </Form>
          <div> {connect?(<div><span className="login">{userName}</span> <BsPersonCircle/>  <button className="bg-warning border-0"onClick={singnup}><span  onClick={logout}>logout</span></button></div>)
            :( <Link className="link" to={"/login"}><span>login</span></Link>)} </div>
         
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    

    
  </> );
}

export default Header;