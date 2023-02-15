import React, { Fragment, useState } from "react";
import Mostrarusu from "./MostarUsu";


function Formulario(props){
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [estado,setEstado] = useState([]);


    function aggUsu(e){
        e.preventDefault();
        let usuario={
            nombre: nombre,
            apellido: apellido
        }
        setEstado([...estado, usuario]);
        setNombre("")
        setApellido("")
    }

    return(
          <Fragment>
            <form action="" onSubmit={(e)=> aggUsu(e)}>
                 <h4> Usuarios</h4>
                <input type="text" onChange={(e) => setNombre(e.target.value)} id="nombre" name="nombre" value={nombre} placeholder="escribe tu nombre"/>
                <input type="text" onChange={(e) => setApellido(e.target.value)} id="apellido" name="apellido" value={apellido} placeholder="escribe tu apellido"/>
                <button>Agregar</button>
            </form>

            {
        estado.map(i => (

          <p>tu nombre es {i.nombre} y te apellidas {i.apellido}</p>
        )

        )
      }
        

          </Fragment>
    )
}

export default Formulario