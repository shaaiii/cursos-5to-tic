import React from 'react';
import { NavLink } from 'react-router-dom';

import CodeContainer from '../CodeContainer';
import './ElShell.scss';


class ElShell extends React.Component {
  render() {
    return (
      <div className='shell-container'>
        <div style={{textAlign: 'left'}}>
          <NavLink className='img-back-link' to='/ss-oo'><i className="fas fa-arrow-left"></i></NavLink>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <h2>El Shell y el Sistema Operativo</h2>
              <p>El Shell es el intérprete de comandos de UNIX. Aunque no forma parte del Sistema Operativo, utiliza con frecuencia muchas características del mismo y, por ende, sirve como un buen ejemplo de la forma en que se pueden utilizar las llamadas al sistema.</p>
              <p>Existen muchos shells, incluyendo <b>sh</b>, <b>csh</b>, <b>ksh</b> y <b>bash</b>. Todos ellos soportan la funcionalidad antes descrita, que se deriva del shell original (sh).</p>
              <p>La interfaz de línea de comandos del shell es más rápida de utilizar, más poderosa, se extiende con facilidad y no hace que el usuario contraiga una lesión por esfuerzo repetitivo por tener que usar un ratón todo el tiempo.</p>
              <p>A continuación veremos una breve descripción del <span style={{color: '#FF5733'}}>bash</span> shell. Este shell se basa en gran parte en el <u>shell original de UNIX</u>, <span className='italic'>Bourne shell</span>, y de hecho su nombre es un acrónimo para SHell vuelto a nacer (<b>B</b>ourne <b>A</b>gain <b>S</b>Hell).</p>
              <p>Cuando el shell inicia, se inicializa a sí mismo y después escribe un carácter indicador (a menudo, un signo de por ciento o de dólar mejor conocido como <b>prompt</b>) en la pantalla y espera a que el usuario escriba una línea de comandos. En el caso de la versión de Debian que estamos utilizando primero se muestra el nombre de usuario, luego un arroba "@" y luego el nombre de <span className='italic'>host</span>. Observemos.</p>
            </div>
            <div className='col-9 mb-5'>
              <CodeContainer command=''></CodeContainer>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <h2>Programa</h2>
              <p>Cuando el usuario escribe una línea de comandos, el shell extrae la primera palabra, asume que es el nombre de un <b>programa a ejecutar</b>, busca este programa y si lo encuentra, lo ejecuta.</p>
            </div>
            <div className='col-9 mb-5'>
              <CodeContainer command='ls'></CodeContainer>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <h2>Argumentos</h2>
              <p>Los comandos pueden recibir <b>argumentos</b>, que se pasan al programa al que se llamó como cadenas de caracteres. Por ejemplo, la línea de comandos.</p>
            </div>
            <div className='col-9 mb-2'>
              <CodeContainer command='touch /home/estudiante/index.html'></CodeContainer>
            </div>
            <div className='col-8'>
              <p>Pueden haber 1 o más argumentos depende el programa que ejecutemos. Por ejemplo en este caso tenemos 2 argumentos</p>
            </div>
            <div className='col-9 mb-5'>
              <CodeContainer command='cp ~/index.html /home/profesor/'></CodeContainer>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-8'>
              <h2>Banderas</h2>
              <p>Los argumentos que controlan la operación de un comando, o que especifican un valor opcional, son <b>banderas</b> y por convención se indican mediante un guión corto.</p>
            </div>
            <div className='col-9 mb-5'>
              <CodeContainer command='head –20 ~/index.html'></CodeContainer>
            </div>
          </div>
          <div className='row justify-content-center mb-5'>
            <div className='col-8'>
              <p><u>Por lo tanto llamamos comando de Unix a la utilización de un programa con la combinación opcional de una o varios argumentos y/o banderas</u>. La mayoría de los comandos de Linux aceptan varias banderas y argumentos.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ElShell;