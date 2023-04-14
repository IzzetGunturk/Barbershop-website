import React, { useEffect } from 'react';
import '../../App.css'; 
import './Section.scss';
import Store from '../../images/barbershop.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

function HeroSection() {
    // AOS effect
    useEffect (() => {
    Aos.init({duration: 2000 });
    }, []);
    return (
        <div className='hero-container'>
            <img className='heroImage' src={Store} alt='Winkel' />
            <div className='text-block'>
                <h1 data-aos="fade-up">BARBERSHOP LOREM IPSUM</h1>
                <div className="hero-btns">
                    <button className="buttonAfspraak">Book now</button>
                </div>
                <i className="fas fa-chevron-down scroll-down"></i>
            </div>
        </div>
    )
}

export default HeroSection;
