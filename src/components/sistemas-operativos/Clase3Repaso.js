import React from 'react';
import CodeContainer from '../CodeContainer';
import './Clase3Repaso.scss';
import treeLogo from '../../assets/tree_structure.png';
import { NavLink } from 'react-router-dom';

class Clase3Repaso extends React.Component {
  render() {

    return (
    <div className='ss-oo-clase-3-container'>
      <div style={{textAlign: 'left'}}>
        <NavLink className='img-back-link' to='/ss-oo'><i class="fas fa-arrow-left"></i></NavLink>
      </div>
      <h1>Repaso de Clase 3 - Jueves 28 de marzo de 2019</h1>
      <div>
        <h2>Al File System de Unix se le llama "Estructura en forma de Árbol".</h2>
        <img src={treeLogo} width='500px' />
      </div>
      <div>
        <h2>Vimos también que hay 2 tipos de rutas.</h2>
        <h3><a href='#rutas-relativas'>Rutas Relativas</a></h3>
        <h3><a href='#rutas-absolutas'>Rutas Absolutas</a></h3>
      </div>
      <div>
        <h1 id='rutas-relativas'>Rutas Relativas</h1>
        <p>Empiezan con 1 punto (.) o con 2 puntos (..)</p>
        <p>1 punto significa que empieza desde donde estamos parados actualmente.</p>
        <p>2 puntos significa que empieza desde el padre de donde estamos parados.</p>
        <p>Ejemplos de rutas relativas</p>
        <ul>
          <li>../home/estudiante/index.html</li>
          <li>./home/estudiante/index.html</li>
          <li>../../etc/ssh/ssh.config</li>
          <li>../../../tmp/</li>
          <li>./estudiante/Documentos/</li>
          <li>../bin/bash/</li>
        </ul>
      </div>
      <div>
        <h1 id='rutas-absolutas'>Rutas Absolutas</h1>
        <p>Empiezan desde el directorio raíz (también llamado directorio 0 «cero» o directorio root o directorio nivel 0)</p>
        <p>Siempre empiezan con la barra "/"</p>
        <p>Ejemplos de rutas absolutas</p>
        <ul>
          <li>/home/estudiante/index.html</li>
          <li>/etc/nano/nano.config</li>
          <li>/tmp/</li>
          <li>/bin/bash/archivo</li>
          <li>/home/profesor/</li>
          <li>/media/cdrom</li>
        </ul>
      </div>
      <div>
        <h1>Comandos vistos</h1>
        <ul className='commands-used-list'>
          <li><code>cd</code> - Cambia de directorio y el uso es el siguiente:</li>
          <li><CodeContainer command='cd /ruta/del/directorio' /></li>
          <li><code>mkdir</code> - Crea una carpeta y el uso es el siguiente:</li>
          <li><CodeContainer command='mkdir /ruta/del/directorio' /></li>
          <li><code>touch</code> - Crea un archivo y el uso es el siguiente:</li>
          <li><CodeContainer command='touch /ruta/del/archivo' /></li>
          <li><code>pwd</code> - Nos dice dónde estamos parados y el uso es el siguiente:</li>
          <li><CodeContainer command='pwd' /></li>
        </ul>
      </div>
    </div>)
  }

}

export default Clase3Repaso;