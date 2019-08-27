import React from 'react'

import './Functions.scss'

import img_declaraciones_named from '../../assets/declaraciones_funciones_named.png'

import img_declaraciones_arrow from '../../assets/declaraciones_funciones.png';
import img_llamdas from '../../assets/llamadas_funciones.png';

import img_llamda_objeto_1 from '../../assets/llamada_objeto1.png'
import img_llamda_objeto_2 from '../../assets/llamada_objeto2.png'

export default class Functions extends React.Component {
  render() {
    return (
      <div className='functions-container'>

        <div style={{ textAlign: 'center' }}>
          <h1>Las funciones y su uso (clave en el manejo de Javascript)</h1>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3>Definición de funciones. <i>Escribir las instrucciones de qué es lo que tiene que hacer (escribir la receta)</i>
          </h3>
        </div>

        <h4><b>Funciones de nombre</b></h4>

        <p>Son aquellas que tienen un nombre y es por ello que se las llama así. En la versión ES5 eran muy usadas. Luego que
          vinieron las Arrow functions (<a href='#arrow-functions'>ver abajo</a>) se sustituyeron.</p>

        <div className='text-center'>
          <img style={{ width: '40%' }} src={img_declaraciones_named} alt='Declaraciones de funciones named imagen' />
        </div>

        <h4 id='arrow-functions'><b>Arrow Functions</b></h4>

        <p>Se las conoce como Arrow functions debido a que tienen una flecha dibujada => . Fueron introducidas en la versión
          ES6 de javascript en el año 2015.</p>

        <div className='text-center mb-3'>
          <img style={{ width: '40%' }} src={img_declaraciones_arrow} alt='Declaraciones de funciones imagen' />
        </div>

        <div className='text-center'>
          <h3>Invocación de funciones. <i>Hacer lo que dice que hace la función.</i></h3>
        </div>

        <p>Cuando invocamos una función estamos diciendo que haga lo que dice que hace. Por lo tanto nosotros podemos invocar
          a una función cuantas veces querramos.</p>

        <p>Imaginen que una definición de una función es una receta. Vos tenes la receta una sola vez, no escribís la receta 5
          veces. Sin embargo la comida/postre que hay escrita en la receta la podes hacer inifintas (N) veces. Entonces
          llamamos invocación a la ejecución de esa función. </p>

        <div className='text-center'>
          <img src={img_llamdas} alt='Imagen Llamada funciones' style={{ width: '60%' }} />
        </div>

        <p className='mb-none'>Si invoco a una función que no existe nos va a dar un error.</p>

        <div className='text-center'>
          <h3>Llamar a una función pasandole un objeto como parámetro. 1era forma: </h3>
        </div>

        <div className='text-center'>
          <img style={{ width: '40%' }} src={img_llamda_objeto_1} alt='Llamada objeto 1 img' />
        </div>

        <div className='text-center'>
          <h3>Llamar a una función pasandole un objeto como parámetro. 2nda forma: </h3>
        </div>

        <div className='text-center mt-2 pb-5 mb-1'>
          <img style={{ width: '40%' }} src={img_llamda_objeto_2} alt='Llamada objeto 2 img' />
        </div>

      </div>
    )
  }
}