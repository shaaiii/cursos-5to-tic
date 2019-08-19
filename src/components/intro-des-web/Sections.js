import React from 'react';

import './Sections.scss'

import profileImage from '../../assets/perfil.JPG'

export default class Sections extends React.Component {
  render() {
    return (
      <div className='container-fluid contenedor-intro-des-web'>
        <div className='row'>
          <div className='col-12 seccion seccion-1 p-5 text-center'>
            <h1 className='pt-3'>Sección 1</h1>
            <div className='text-left mb-5'>
              <code style={{ color: '#943126' }}>{`.seccion `}</code><code style={{ color: '#0E6655' }}>{`{ `}</code>
              <br></br>
              <code style={{ color: '#F4D03F', marginLeft: '1em' }}> {`\t height: 100vh;`}</code>
              <br></br>
              <code style={{ color: '#0E6655' }}>{` }`}</code>
            </div>
            <div className='row justify-content-center pt-xl-5'>
              <div className='col-12 col-md-10'>
                <h4><i>Las secciones funcionan para separar el contenido en diferentes vistas. Es algo que se está utilizando mucho en el mundo de las páginas web Landings. Para crear una sección lo que tenemos que hacer es tener un DIV con una altura seteada a 100vh</i></h4>
              </div>
            </div>
            <div className='pt-3'>
              <h3>Hacé scroll y descubrí la próxima sección...</h3>
            </div>
          </div>
        </div>
        <div className='row seccion seccion-2 justify-content-center align-items-center'>

          <div className='col-6 mt-5 col-md-6 col-xl-4 mt-xl-5'>

            <img className="img-fluid border-img" src={profileImage} alt="Imagen Perfil Francisco"></img>

          </div>

          <div className="col-12 text-center mt-3 col-md-6 mt-md-5">

            <h1 className="mt-md-3">¡HOLA!</h1>

            <p className="mt-md-4">Mi nombres es Francisco Cobas y soy Programador Web y docente en <a href='https://anima.edu.uy/'>Ánima Bachillerato Tecnológico</a>, soy apasionado de la tecnología y me gusta vincularlo con cosas que me interesan. Por ejemplo con la educación y otros hobbies como la bicicleta o el deporte. </p>
          </div>
          <div className="col-2">
            <img className="img-fluid" src="https://www.freeiconspng.com/uploads/cycling-icon-png-bicycle-bike-biking-cycling-2.png" alt="Bicicleta" srcSet=""></img>
          </div>

        </div>
        <div className='row'>
          <div className='col-12 seccion seccion-3 p-5 text-center'>

            <h1 className='pt-3'>Sección 3</h1>
            <div className='text-left mb-5'>
              <code style={{ color: '#943126' }}>{`.seccion `}</code><code style={{ color: '#0E6655' }}>{`{ `}</code>
              <br></br>
              <code style={{ color: '#F4D03F', marginLeft: '1em' }}> {`\t height: 100vh;`}</code>
              <br></br>
              <code style={{ color: '#0E6655' }}>{` }`}</code>
            </div>
            <div className='pt-5'>
              <h3>Se pueden crear tantas secciones como queremos.</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}