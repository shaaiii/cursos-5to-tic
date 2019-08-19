import React from 'react'

import './Functions.scss'

export default class Functions extends React.Component {
  render() {
    return(
      <div className='functions-container'>

        <div style={{textAlign: 'center'}}>
          <h1>Las funciones y su uso (clave en el manejo de Javascript)</h1>
        </div>

        <div style={{textAlign: 'center'}}>
          <h3>Definición de funciones. <i>Escribir las instrucciones de qué es lo que tiene que hacer (escribir la receta)</i>
          </h3>
        </div>

        <h4><b>Funciones de nombre</b></h4>

        <p>Son aquellas que tienen un nombre y es por ello que se las llama así. En la versión ES5 eran muy usadas. Luego que
          vinieron las Arrow functions (<a href='#arrow-functions'>ver abajo</a>) se sustituyeron.</p>


        <pre>{`
  function nombreFuncion (param1, param2, param3) {

    return 'Algun valor';
  }
        `}</pre>

        <h4 id='arrow-functions'><b>Arrow Functions</b></h4>

        <p>Se las conoce como Arrow functions debido a que tienen una flecha dibujada => . Fueron introducidas en la versión
          ES6 de javascript en el año 2015.</p>

        <pre>{`
  let miFuncion = (param1, param2, param3) => {

    return 'Algun valor';
  }
        `}</pre>

        <pre>
        </pre>

        <div style={{textAlign: 'center'}}>
          <h3>Invocación de funciones. <i>Hacer lo que dice que hace la función.</i></h3>
        </div>

        <p>Cuando invocamos una función estamos diciendo que haga lo que dice que hace. Por lo tanto nosotros podemos invocar
          a una función cuantas veces querramos.</p>

        <p>Imaginen que una definición de una función es una receta. Vos tenes la receta una sola vez, no escribís la receta 5
          veces. Sin embargo la comida/postre que hay escrita en la receta la podes hacer inifintas (N) veces. Entonces
          llamamos invocación a la ejecución de esa función. </p>

        <pre> {`
  miFuncion ('param1', true, {}) // Acá estoy invocando a la función llamada 'miFuncion'

  miFuncion() // Acá la invoco otra vez pero no le paso parámetros.

  miFuncion('param1') // Acá estoy invocando a la función llamada 'miFuncion'"

  let retornoValor = miFuncion('param1') // Acá estoy invocando a la función llamada 'miFuncion' pasandole un parametro y guardando el resultado en una variable.
  `}</pre>

        <p className='mb-none'>Si invoco a una función que no existe nos va a dar un error.</p>


      </div>
    )
  }
}