import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Menu.js';
import Footer from './Footer';
import Formulario from './Formulario';
import Listarpersonajes from './listapersonajes';
import Personajes from './Personajes';
import Juego from './Personajes';




class  App extends Component {
  render(){
      <h1>Hola xD</h1>
  
  return (
   
    <Router>
     
    <Switch>
  
    
  <Route path="/"  exact component >
    
  
   <Personajes/>
  
  </Route>
  <Route path="/Footer"  exact component >
    <Footer/>
  </Route>
  <Route path="/Iniciar"  exact component >
    <Formulario/>
    
   
  </Route>
  
    
   
  
  <Route    >
   <h1> UPS!   </h1>
    
   
  </Route>
  
  
  
   
  
  
  </Switch>
    

  
     
      
     
    </Router>
   
    
  )
        

        
     
  
}
}

export default App;
