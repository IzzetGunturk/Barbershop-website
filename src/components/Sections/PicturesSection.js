import React, { useEffect } from 'react';
import '../../App.css'; 
import './Section.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'



function FotosSection() {
   // AOS effect
   useEffect (() => {
    Aos.init({duration: 2000 });
  }, []);
    return (
        <section className="about bg-white py-5">
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h1 className="fw-bold mb-5">Pictures</h1>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />

                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
              </div>

              <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                  />

                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                  />
              </div>

              <div className="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                  />

                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                  />
              </div>
            </div>
          </div>
        </section>
      )
}

export default FotosSection;