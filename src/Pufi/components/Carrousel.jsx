import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import cat from '../../assets/img/cat.jpg';
import cat2 from '../../assets/img/cat2.jpg';
import chair from '../../assets/img/chair.jpg';
import './css/style.css';

export function Carrousel() {
  return (
    <Carousel fade className='carrusel1'
      controls={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cat}
          alt="First slide"
        />
        <Carousel.Caption>
         <h1>ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cat2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chair}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}