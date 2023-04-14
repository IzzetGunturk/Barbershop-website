// import van bestanden/componenten
import React from 'react';
import '../../App.css';
import PicturesSection from '../Sections/PicturesSection';
import FooterSection from '../Footer/FooterSection';

// functie voor de foto's pagina
function Fotos () {
    // in return zijn de secties verwerkt voor de pagina
    return(
        <>
            <PicturesSection />
            <FooterSection />
        </>
    );
}

export default Fotos;