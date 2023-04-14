import React, { useEffect } from 'react';
import '../../App.css'; 
import './Section.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'

function ContactSection() {
    // AOS effect
    useEffect (() => {
    Aos.init({duration: 1000 });
    }, []);
    return (
      <section className="about bg-white py-5" id="contact">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h1 className="fw-bold mb-5">Contact</h1>
            </div>
          </div>
        </div>
        <div className="row">
        <div data-aos="fade-up" className="col-md-6 col-sx-12">
        <div className="gmap_canvas"><iframe width="525" height="300" id="gmap_canvas"
              src="https://www.google.com/maps/embed?LINK" title='gmap'
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
        <div data-aos="fade-up" className="col-md-6 col-sx-12">
        <div className='informationBarbershop2'>
                <p>Redwood Avenue</p>
                <p>90210 Cedarville</p>
                <a href='mailto:barbershop@gmail.com' className='email2'><p>barbershop@gmail.com</p></a>
                <a href='tel:+1-202-555-0170' className='phoneNumber2'><p>+1-202-555-0170</p></a>
                <i className='bx bxl-instagram socialMediaButtons2'></i>
                <i className='bx bxl-facebook socialMediaButtons2'></i>
              </div>
        </div>
      </div>
    </div>
    <div className="text-center p-3" id='footer1'>
      <p className="copyright">Copyright © Barbershop 2021 - Designed by: Izzet Güntürk</p>
    </div>
    </section>
    )
}

export default ContactSection;
