import { Component } from "react";
import './css/menu.css'
import './css/footer.css'



class Footer  extends  Component{
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
        <li><a  href="/">Inicio</a></li>
        <li><a href="Iniciar">Iniciar</a></li>
        <li><a class="active" href="Footer">Footer</a></li>
        
        
      </ul>
    </nav>
  
</ul>
<footer>
        <div class="footer-content">
            
            <p>! Valery Juliana Morantes !</p>
            <p>! Taller React !</p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              
            </ul>
        </div>
       
    </footer>
   </>
   
   
        )
    }

}
export default Footer;