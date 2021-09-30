import { Component } from "react";
import './css/formulario.css'
import './css/menu.css'




class Formulario  extends  Component{
    
    render(){
        
            
        
        return(
          <>
                <ul class="nav nav-pills">
 
  <nav>
     
  <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a class="active" href="Iniciar">Iniciar</a></li>
        <li><a href="Footer">Footer</a></li>
        
        
      </ul>
    </nav>
    <div class="content">
      
    </div>
    <br/>
  
  
</ul>
<div class="center">
<h1>Inciar Sesion </h1>
      
      <br/>
      <form method="post">
        <div class="txt_field">
          <input placeholder="Nombre" type="text" required/>
          <span></span>
          
        </div>
        <div class="txt_field">
          <input placeholder="Correo" type="password" required/>
          <span></span>
          
        </div>            
       
        <br/>
        <div class="signup_link">
           <a ></a>
        </div>
      </form>
    </div>
          </>
        )
    }

}
export default Formulario;