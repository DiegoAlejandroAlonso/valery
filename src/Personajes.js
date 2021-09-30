import Listarpersonajes from "./listapersonajes";
import './css/menu.css'
import './css/scri.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<br/>
const students = [
  {
    "name":" Nombre: Wander  ",
    "img":"https://p4.wallpaperbetter.com/wallpaper/2/408/1014/shadow-of-the-colossus-pc-game-shadow-of-the-colossus-game-wallpaper-preview.jpg",
    
    
    "Tipo":" Raza: Guerro",
    "Describe":"Wander es un chico de piel cetrina, ojos azules y cabello de color rojo oscuro y largo. Usa un típico atuendo guerrero medieval: Pantalones cortos verde oscuro, camisa marrón claro cubierta por un chal con símbolos; vendajes en los antebrazos y las piernas; sandalias de cuero con cintos alrededor de las piernas y una banda color verde en la cabeza. A medida que avanza el juego su apariencia cambia: su piel se vuelve más grisácea, sin vida, y se va llenando de heridas y raspones; su cabello se vuelve oscuro, sus ojos se vuelven cada vez mas blancos y su ropa se llena cada vez más de sangre y tierra. ."
  
  
  
  },
  {
    "name":" Nombre: Mono ",
    "img":"http://sm.ign.com/ign_br/screenshot/default/monoawake-02_cu8g.jpg",
    
    
    "Tipo":" Raza: Guerrea ",
    "Describe":"Mono es el objetivo principal y el interes de Wander en Shadow of the Colossus. Antes de los acontecimientos del juego, fue asesinada porque se creía que tenia un destino maldito. Wander robó la espada mágica y tomó su cuerpo a la tierra prohibida con el fin de reanimarla. Cada vez que Wander mata a un coloso, oye su voz más clara cada vez que ella le pide que detenga el ritual. En un momento dado, se la ve levantarse como un sueño después de que Wander mata al octavo coloso, Kuromori."
  
  
  
  },
  {
    "name":" Nombre: Valus ",
    "img":"https://i.blogs.es/75f818/shadow-of-the-colossus-01/450_1000.jpg",
    
    
    "Tipo":" Raza: Coloso ",
    "Describe":"Valus tiene la vaga apariencia de un ser humano, su cuerpo se asemeja al de un hombre, a excepción de sus pies que son cascos y su cabeza que se parece a la de un oso. La pierna derecha de Valus está completamente hecha de piedra mientras que su pierna izquierda esta hecha tanto de piedra como de piel. La piel crece desde la espalda pasando por el cuello y la cabeza. También cuenta con tres plataformas en su espalda que la mayoría de los principiantes utilizan como forma para recuperar energía. Valus tiene unos hombros grandes y  una cabeza agachada  a comparación de su espalda amplia. "
  
  
  
  },
  {
    "name":" Nombre: Gaius ",
    "img":"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700710192.jpg",
    
    
    "Tipo":" Raza: Coloso ",
    "Describe":"La táctica para subirse a este coloso es dejar que golpee su enorme mazo contra el suelo, para así escalar a través de dicho mazo hasta su brazo, cosa que parece imposible, porque tiene un brazalete de hierro enorme, y ni siquiera el ágil Wander puede saltarlo ¿qué hacer entonces? Te habrás dado cuenta de que el lugar donde estás es como una enorme plataforma sobre un lago: en el centro de esta plataforma hay una especie de panel de piedra. Párate ahí. "
  
  
  
  }
  ]
  
  const Personajes = () => (
    <>
    
        <ul class="nav nav-pills">
  <li class="nav-item">
  
  </li>
  <li class="nav-item">
 
  </li>
  <li class="nav-item">
  
  </li>
  <li class="nav-item">
  
  </li>
  <nav>
      
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a class="active" href="/">Inicio</a></li>
        <li><a href="Iniciar">Iniciar</a></li>
        <li><a href="Footer">Footer</a></li>
        
        
      </ul>
    </nav>
    <div class="content">
      
    </div>
    <br/>
    <br/>
    <br/>
  
  
</ul>
    {
        students.map( c => <Listarpersonajes name={c.name}   tipo={c.Tipo} describe ={c.Describe} img={c.img} apellido={c.apellido} /> )
        
       
      }
    
    
      
  
     
      
     
    </>
   
    
  )
  
  export default Personajes;