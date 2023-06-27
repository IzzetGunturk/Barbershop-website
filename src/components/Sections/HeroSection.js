import React from 'react';
import '../../App.css'; 
import './Section.scss';
import Store from '../../images/barbershop.jpg'

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className='heroImage' src={Store} alt='Winkel' />
            <div className='text-block'>
                <h1>BARBERSHOP LOREM IPSUM</h1>
                <div className="hero-btns">
                    <button className="buttonAfspraak">Book now</button>
                </div>
                <a href='#about'><i className="fas fa-chevron-down scroll-down"></i></a>
            </div>
        </div>
    )
}

export default HeroSection;
