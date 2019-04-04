import React from 'react';

import { NavLink } from 'react-router-dom';

import './BasicCommands.scss';
import CodeContainer from '../CodeContainer';

class BasicCommands extends React.Component {
  render() {
    return (
      <div className='basic-commands-container'>
        <div style={{textAlign: 'left'}}>
          <NavLink className='img-back-link' to='/ss-oo'><i className="fas fa-arrow-left"></i></NavLink>
        </div>
        <h1>Los 7 comandos básicos</h1>
        <h3>Listar archivos y directorios</h3>
        <div>
          <CodeContainer command='ls ./' />
        </div>
        <h3>Cambiar de directorio</h3>
        <div>
          <CodeContainer command='cd /etc/' />
        </div>
        <h3>Crear directorio</h3>
        <div>
          <CodeContainer command='mkdir ./Documentos' />
        </div>
        <h3>Crear un archivo</h3>
        <div>
          <CodeContainer command='touch ./index.html' />
        </div>
        <h3>Borrar un fichero (archivos o directorios)</h3>
        <div>
          <CodeContainer command='rm ./index.html' />
          <CodeContainer command='rm -r /home/estudiante/Documentos' />
        </div>
        <h3>Copiar un fichero (archivo o directorio)</h3>
        <div>
          <CodeContainer command='cp ./index.html ./Documentos/' />
        </div>
        <h3>Mover un fichero (archivo o directorio)</h3>
        <div className='mb-4'>
          <CodeContainer command='mv ./index.html ./Documentos/' />
        </div>
      </div>
    )
  }
}

export default BasicCommands;