import React from 'react';
import '../../App.css'; 
import './Section.scss';

function TijdSection() {
    return (
      <section className="about bg-white py-5">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h1 className="fw-bold mb-5">Opening hours</h1>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <div className="col-md-12 col-sx-12 timeSection">
            <div>Monday: 10:00 - 17:00</div>
            <div>Tuesday: Closed</div>
            <div>Wednesday: 10:00 - 17:00</div>
            <div>Thursday: 10:00 - 17:00</div>
            <div>Friday: 10:00 - 17:00</div>
            <div>Saturday: 10:00 - 17:00</div>
            <div>Sunday: 10:00 - 17:00</div>
          </div>
        </div>
      </section>
    )
}

export default TijdSection;
