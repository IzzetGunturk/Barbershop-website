import React, { useEffect } from 'react';
import '../../App.css'; 
import './Section.scss';
import haircut from '../../images/haircut.webp'
import haircutbeard from '../../images/haircutbeard.webp'
import Aos from 'aos';
import 'aos/dist/aos.css';


function PriceSection() {
  // AOS effect
  useEffect (() => {
    Aos.init({duration: 1000 });
  }, []);
    return (
      <section className="about bg-white py-5" id="priceListSection">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h1 className="fw-bold mb-5">Price list</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sx-12">
            </div>
            <div data-aos="fade-up" className="col-md-3 col-sx-12">
              <div className="card">
                <img className="card-img-top" src={haircut} alt="haircut" />
                <div className="card-body">
                  <h5 className="card-title titleCard" id='Titel'>Haircut</h5>
                  <p className="card-text priceCard" id='Kopje'>€15,00</p>
                  <button className='buttonBook'>Book now</button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-3 col-sx-12">
              <div className="card2">
                <img className="card-img-top" src={haircutbeard} alt="haircutbeard" />
                <div className="card-body">
                  <h5 className="card-title titleCard" id='Titel'>Haircut + beard</h5>
                  <p className="card-text priceCard" id='Kopje'>€20,00</p>
                  <button className='buttonBook'>Book now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sx-12">
            </div>
          </div>
        </div>
      </section>
    )
}

export default PriceSection;