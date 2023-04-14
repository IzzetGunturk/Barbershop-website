// import van bestanden/componenten
import React from 'react';
import '../../App.css';
import HeroSection from '../Sections/HeroSection';
import AboutSection from '../Sections/AboutSection'
import PriceSection from '../Sections/PriceSection';
import TimeSection from '../Sections/TimeSection';
import FooterSection from '../Footer/FooterSection';

// functie voor de home pagina
function Home () {
    // in return zijn de secties verwerkt voor de pagina
    return(
        <>
            <HeroSection />
            <AboutSection />
            <PriceSection />
            <TimeSection />
            <FooterSection />
        </>
    );
}

export default Home;