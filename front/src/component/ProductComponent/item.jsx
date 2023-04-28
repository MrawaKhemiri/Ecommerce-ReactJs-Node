
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from "react-redux";
function Item({ item }) {
  const { role } = useSelector((state) => state.userSession.value);
  let navigate = useNavigate()
  async function deleteItem(id) {
    await axios.delete('http://localhost:8001/delete/' + id)
      .then(response => response.data)
      .then(res => { navigate(0) })
  }
  return (


    <Col sm={6}  lg={role === "ADMIN" ? 4 : 3}xs={12} style={{ marginTop: '2%' }}>
      <Card style={{ border: '1px solid green', fontSize: '2rem', height: '100%' }} >
        <Card.Img variant="top" src={`http://localhost:8001/upload/${item.image}`} />
        <Card.Body>
          <Card.Title style={{ fontSize: '2rem' }}>{item.name}</Card.Title>
          <Card.Text >
            {item.description}
          </Card.Text>
          <div style={{textAlign:"center"}}>
            <Button style={{ fontSize: '2rem'  }} className=" button" variant="primary"><Link style={{ color: "white", textDecoration: 'none' }} to={`/details/${item._id}`}>  Product details </Link></Button>
            {role==="ADMIN" ? 
            <div>
            <Button style={{ fontSize: '2rem' ,marginTop:'1rem' }} className="justify-content-center button" variant="primary"><Link style={{ color: "white", textDecoration: 'none' }} to={`/adminpage/updateProduct/${item._id}`}>   Update Product  </Link></Button>
            <Button onClick={() => deleteItem(item._id)} style={{ fontSize: '2rem',marginTop:'1rem' }} className="justify-content-center button" variant="danger">  Delete Product</Button>
            </div>
            :null}
            </div>
        </Card.Body>
      </Card></Col>



  );
}

export default Item;