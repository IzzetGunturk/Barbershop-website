// import van bestanden/componenten
import React, {useEffect} from 'react';
import '../../App.css'; 
import './Section.scss';
import barberpicture from '../../images/barberpicture.jpg' 
import Aos from 'aos';
import 'aos/dist/aos.css'

// functie gemaakt voor de about sectie
function AboutSection() {
  // AOS effect
  useEffect (() => {
    Aos.init({duration: 1000 });
  }, []);
    return (
        <section className="about bg-white py-5" id="about">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h1 className="fw-bold mb-5">About</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div data-aos="fade-up" className="col-md-6 col-sx-12">
              <h3 className="about-tekst">Barbershop Lorem Ipsum</h3>
              <p className="about-tekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                <br></br>
                <div data-aos="fade-up" className="row">
                <i className='bx bxl-instagram' id='icons'></i>
                <i className='bx bxl-facebook' id='icons'></i>
                </div>
            </div>
            <div data-aos="fade-up" className="col-md-6 col-sx-12">
              <img className="barberPicture" src={barberpicture} alt='barberpicture' />
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutSection;