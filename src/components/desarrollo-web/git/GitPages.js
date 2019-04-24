import React from 'react';

import CodeContainer from '../../CodeContainer';

import './GitPages.scss';

function GitConfigRepository(props) {
  return (
    <div className='git-commands-sections-container'>
      <h2>¿Cómo hago para configurar el repositorio?</h2>

      <div className='git-command-section-odd'>
        <h4>1 - Iniciación de nuestro repositorio local con Git</h4>
        <div>
          <CodeContainer command='git init' />
        </div>
      </div>

      <div className='git-command-section-even'>
        <h4>2 - Vinculación de nuestro repositorio <b>local</b> con nuestro repositorio <b>remoto</b></h4>
        <div>
          <CodeContainer command='git remote add origin «URL de nuestro REPOSITORIO»' />
        </div>
        <p>Ejemplo real: </p>
        <div>
          <CodeContainer command='git remote add origin https://github.com/franciscocobas/cursos-5to-tic.git' />
        </div>
      </div>

    </div>
  )
}

function GitChanges(props) {
  return (
    <div className='git-commands-sections-container'>
      <h2>¿Cómo hago para subir mi primer commit?</h2>

      <div className='git-command-section-odd'>
        <h4>1 - Agregar los archivos que tenemos</h4>
        <div>
          <CodeContainer command='git add .' />
        </div>
        <p>Nota: Con el "." estamos diciendo que queremos agregar TODOS los archivos.</p>
        <p>Podemos agregar algunos archivos en particular, por ejemplo si tenemos 4 archivos y queremos agregar uno llamado "index.html", entonces ejecutamos el siguiente comando:</p>

        <div>
          <CodeContainer command='git add index.html' />
        </div>
      </div>

      <div className='git-command-section-even'>
        <h4>2 - <i>Commitear</i> los cambios y agregarle un mensaje al commit.</h4>
        <div>
          <CodeContainer command="git commit -m '«Mensaje del commit»'" />
        </div>
      </div>

      <div className='git-command-section-odd'>
        <h4>3 - Subir los cambios al repositorio <b>remoto</b>.</h4>
        <div>
          <CodeContainer command='git push origin master' />
        </div>
      </div>
    </div>
  )
}

function GitModel(props) {
  return (
  <div className='model-container'>
    <h2>Vamos a ver una slide</h2>
    <a href='https://docs.google.com/presentation/d/1k962C70yZzAXOU5uGxgd60gS6zqVnnglsD2R_A80CHc/edit?usp=sharing' target='_blank' rel='noopener noreferrer'><img src='https://blogs.shu.ac.uk/shutel/files/2014/08/GSlides.png' alt='Google Slide Logo' /></a>
  </div>
  )
}

function GitHome(props) {
  return (
  <div className='home-container'>
    <header className='header-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <img src='https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png' alt='Logo Git' />
          </div>
          <div className='col-12'>
            <img src='https://i2.wp.com/www.globalemancipation.ngo/wp-content/uploads/2017/09/github-logo.png?ssl=1' alt='Logo Github' />
          </div>
        </div>
      </div>
    </header>
    <section id='que-es-git'>
      <div>
        <a href='https://git-scm.com/' target='_blank'  rel='noopener noreferrer'><img src='https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png' alt='Logo Git' /></a>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-8 mt-5'>
            <p>Git es un sistema de control de versiones distribuido, gratis y de código abierto, diseñado para manejar con rapidez y eficiencia proyectos, desde los más chicos hasta los más grandes.</p>
            <p>Fue diseñado por el gran Linus Torvalds en el año 2005.</p>
            <p>Su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos.</p>
          </div>
          <div className='col-4'>
            <img id='linus-torvalds-img' src='https://regmedia.co.uk/2016/08/26/torvalds.jpg?x=442&y=293&crop=1' alt='Linus Torvalds' />
          </div>
        </div>
      </div>
    </section>
    <section id='que-es-github'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <a href='https://github.com/' target='_blank'  rel='noopener noreferrer'><img id='logo-github' src='https://i2.wp.com/www.globalemancipation.ngo/wp-content/uploads/2017/09/github-logo.png?ssl=1' alt='Logo GitHub' /></a>
          </div>
          <div className='col-12 col-md-8 git-description'>
            <p>Github es una plataforma y un programa de software de desarrollo colaborativo para alojar proyectos y que utiliza el sistema de control de versiones <b>Git</b>.</p>
            <p>Fue lanzado el 8 de febrero de 2008 y actualmente es de la empresa <b>Microsoft</b> que lo compró por 7.500 millones de dólares el 3 de junio de 2018.</p>
          </div>
        </div>
      </div>
      <div>
        <a href='#menu-bar'>Back to Top</a>
      </div>
    </section>
  </div>
  )
}

export {
  GitChanges,
  GitModel, 
  GitHome,
  GitConfigRepository
}