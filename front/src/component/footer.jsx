import Nav from 'react-bootstrap/Nav';
import  NavDropdown from 'react-bootstrap/NavDropdown';import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return ( <div  className=" text-secondary bg-dark">
        <section className="d-flex justify-content-between ">
            <div className=" ms-3"><span >Get connected with us on social networks:</span></div>
            <div className="d-flex justify-content-around w-25">
           <a href=""><i className="fa-brands fa-facebook text-light"></i></a>
           <a href=""><i className="fa-brands fa-linkedin text-light"></i> </a>
           </div>
          
        </section>
       <hr className=" m-2 bg-secondary" />
       <section className="m-3 d-lg-flex justify-content-lg-around  ">
        <div className='d-flex  flex-column align-items-center  ' >
           <h2 className='text-center'>ECOMMERCE</h2> 
           <p>Smooth and convenient online shopping</p>
        </div>
        <div className='d-flex  flex-column align-items-center m-3' >
            <Nav className='d-flex flex-column footernav '>
        <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2" >Link</Nav.Link>
            <NavDropdown   title="Categories"
     id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </div>
        <div className=' mt-3 d-flex flex-column justify-content-center  align-items-center '>
<h2>CONTACT US</h2>
<p className='mb-0'>SOUSSE-TUNISIA</p>
<a  className="text-secondary  " style={{textDecoration:'none'}} href = "mailto: Ecommerce@example.com">Ecommerce@example.com</a>
<a className="text-secondary " style={{textDecoration:'none'}} href="tel:+21623355867">+216 23355867</a>
        </div>
       </section>
    </div> );
}

export default Footer;