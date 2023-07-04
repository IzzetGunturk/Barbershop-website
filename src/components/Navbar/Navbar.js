import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.scss';
import Logo from '../../images/Logo.svg'

class Navbar extends Component {
    state = { clicked: false }
    
    // functie voor het klikken van de navbar
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
        render() {
            return(
                <nav className="navbarItems">
                   <a href="/barbershopconcept/home"><img className='navbar-logo' src={Logo} alt='Logo'/></a>
                    <div className="menu-icon" onClick={this.handleClick}>
                        {/* Als er op de hamburger menu wordt gedrukt, veranderd het van icoontje */}
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-align-right'}></i>
                    </div>
                    {/* Als er op de hamburger menu wordt gedrukt, is het active en komen de MenuItems tevoorschijn */}
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        )
    }
}

export default Navbar;