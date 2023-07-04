// import van bestanden/componenten
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from './components/Pages/Home';
import Pictures from './components/Pages/Pictures';
import Contact from './components/Pages/Contact';

// functie voor de app/website
function App() {
  //  in return zijn de bestanden van 'react-router-dom' verwerkt
  return (
    <>
      <Router>
          <Navbar />
            <Switch>
              {/* in switch komen de pagina's */}
              <Route path= "/barbershopconcept/home" exact component={Home}/>
              <Route path="/barbershopconcept/pictures" exact component={Pictures}/>
              <Route path="/barbershopconcept/contact" exact component={Contact}/>
            </Switch>
      </Router>
    </>
  );
}

export default App;
