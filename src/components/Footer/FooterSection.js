// import van bestanden/componenten
import React from 'react';
import '../../App.css'; 
import './FooterSection.scss';

// functie voor de footer
function FooterSection() {
    return (
    <div className="text-center text-white" id="footer">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h1 className="fw-bold mb-5">Contact</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-6 col-sx-12">
              <div className="gmap_canvas2">
                <iframe title='gmap' width="525" height="300" id="gmap_canvas"
                    src="https://www.google.com/maps/embed?LINK"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
              </div>
            </div>
            <div className="col-md-6 col-sx-12">
              <div className='informationBarbershop'>
                <p>Redwood Avenue</p>
                <p>90210 Cedarville</p>
                <a href='mailto:barbershop@gmail.com' className='email'><p>barbershop@gmail.com</p></a>
                <a href='tel:+1-202-555-0170' className='phoneNumber'><p>+1-202-555-0170</p></a>
                <i className='bx bxl-instagram socialMediaButtons'></i>
                <i className='bx bxl-facebook socialMediaButtons'></i>
              </div>
            </div>
          </div>
        <div className="text-center text-dark p-3">
          <p className="copyright">Copyright © Barbershop 2021 - Designed by: Izzet Güntürk</p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection;
