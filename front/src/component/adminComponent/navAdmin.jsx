import { Container, Nav ,Navbar,NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge} from '@fortawesome/free-solid-svg-icons'
function Navadmin() {
    return (  <div>
       
        <Navbar  collapseOnSelect expand="md"  variant="dark" >
     <Container className="navbaradmin">
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="flex-column">
      <Nav.Link href="/adminpage"><FontAwesomeIcon icon={faGauge} /> Dashboard</Nav.Link>
      
      <span style={{color:"white"}}>Product</span>
      <Nav.Link  href='/adminpage/addProduct'>Add Product</Nav.Link>
      <Nav.Link  href="/adminpage/listproduct"> Product List</Nav.Link>
      <span style={{color:"white"}}>Category</span>
      <Nav.Link href="/adminpage/addcategory">Add Category</Nav.Link>
      <Nav.Link href="/adminpage/listCategory">  Category List</Nav.Link>
      <span style={{color:"white"}}>Cart</span>
      <Nav.Link href="/adminpage/listCart">List Cart</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>);
}

export default Navadmin;