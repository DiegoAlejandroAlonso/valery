import React from "react";


const Listarpersonajes = ({name,apellido, tipo,describe,img}) => (
    
    
    <>
    
    
   

    <center>
    
    <div className="col-md-8" >
        <div className="card"  class="text-dark bg-light" style={{width: '600px', margin:'30px',height:'700px'}}>
        <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{name ? name : "name not found"}</p>
                <p className="card-text">{tipo}</p>
                <p className="card-text">{describe}</p>
                <p className="card-text">{apellido}</p>
                
            </div>
        </div>
    </div>
    </center>
    
    </>
);

export default Listarpersonajes;