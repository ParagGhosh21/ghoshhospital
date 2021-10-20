import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../images/hospital-background-images-hd-9.jpg'
import second from '../../images/photo-1587351021355-a479a299d2f9.jpg'
import third from '../../images/various-doctor-hospital-medical.jpg'
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import './Home.css'
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div id="home" className=''>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>24 Hour Service</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img x
            className="d-block w-100 image"
            src={second}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>World Class Doctors</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={third}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>24 hour Medicine Supply</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Services></Services>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
      </div>



    </div>
  );
};

export default Home;