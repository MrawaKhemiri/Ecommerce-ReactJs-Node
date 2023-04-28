import slideimg1 from'../img/carousel-1.jpg';
import slideimg2 from'../img/carousel-2.jpg';
import slideimg3 from'../img/carousel-3.jpg';
import { Carousel } from 'react-bootstrap';
function Slider() {
    return ( <div>
        <Carousel className="  mt-3">
      <Carousel.Item >
        <img
      className="d-block img "
          src={slideimg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block  img"
          src={slideimg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block img"
          src={slideimg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>  );
}

export default Slider;