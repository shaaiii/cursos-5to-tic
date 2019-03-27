import React from 'react'

import './clase2.scss'

class Clase2 extends React.Component {

  render() {

    const date = new Date();
    const month = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const displayedDate = `${date.getDay()}/${month}/${date.getFullYear()}`

    return (
      <div className='clase2-container container pt-5'>
        <div className='grilla-actividad'>
          <div className='row justify-content-center'>
            <div className='col-10'>
              <h1>Actividad del día {displayedDate}:</h1>
              <p>Debemos crear una página Responsive utilizando el patrón de <b>Mobile First</b></p>
              <p>Ademas necesitamos que sea responsive con 3 tamaños diferentes. Uno que sea para <b>teléfonos</b>, otro que sea para <b>tablets</b> y otro que sea para <b>Escritorio</b>. </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <p>Para cuando se visualiza desde el teléfono es necesario que se desplieguen 10 ítems en forma vertical. O sea 10 filas.</p>
            </div>
            <div className='w-100'></div>
            <div className='col-3'>
              <div className='custom-grid'>
                <div className='custom-row'>Item 1</div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'></div>
                <div className='custom-row'>Item 10</div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-3'>
            <div className='col-8'>
              <p>Para cuando se visualiza desde la tablet es necesario que se desplieguen 2 ítems por fila, o sea 5 filas.</p>
            </div>
            <div className='w-100'></div>
            <div className='col-3'>
              <div className='custom-grid row'>
                <div className='custom-row col-6'>Item 1</div>
                <div className='custom-row col-6'>Item 2</div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'></div>
                <div className='custom-row col-6'>Item 10</div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-3'>
            <div className='col-8'>
              <p>Para cuando se visualiza desde el Escritorio es necesario que se desplieguen 5 ítems por fila, o sea 2 filas.</p>
            </div>
            <div className='w-100'></div>
            <div className='col-6'>
              <div className='row'>
                <div className='custom-row col-2 offset-1'>Item 1</div>
                <div className='custom-row col-2'>Item 2</div>
                <div className='custom-row col-2'></div>
                <div className='custom-row col-2'></div>
                <div className='custom-row col-2'></div>
                <div className='custom-row col-2 offset-1'></div>
                <div className='custom-row col-2'></div>
                <div className='custom-row col-2'></div>
                <div className='custom-row col-2'></div>
                <div className='custom-row col-2'>Item 10</div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-4 list-container'>
              <ul>
                <li>El trabajo es individual</li>
                <li>El contenido de los items lo sacan de la siguiente página: <a href='https://getbootstrap.com/docs/4.1/layout/grid/'>Grids</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Clase2;