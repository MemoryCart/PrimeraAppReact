import React, {useState} from 'react';

export const PrimerComponente = () => {

    // let nombre = "Fabian Concha Mena";
    let web = "https://issuu.com/fabianignacio.cm/docs/-portafolio-";

    const[nombre, setNombre] = useState("Memex")

    let proyectos = [
      "Proyecto 1",
      "Proyecto 2",
      "Proyecto 3"
    ];

    const cambiarNombre = (nuevoNombre) => {
      setNombre(nuevoNombre);
    }

  

  return (
    <div>
        <h1> Mi primer Componente</h1>
        <p>Este es un texto random en mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ?'verde' : 'rojo'}>{nombre}</strong> </p>
        <p>Mi web es: {web} </p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="Cambia el nombnre"/>
        
        <button onClick={e => {
          console.log("El valor guardado en tu estado es:", nombre)
        }}> Mostrar valor de estado </button>

        <button onClick={ e => cambiarNombre("FABIAN MENA")}>
          Cambiar nombre
        </button>
      


        <h2>Proyectos</h2>
        <ul>
          {
            proyectos.map( (proyectos, indice) => {
                 return (<li key={indice}>
                  {proyectos}
                 </li>);
            
            })
          }
        </ul>

      </div>
  )
}
