import React from 'react';

import BackButton from '../BackButton'

import './BootstrapUtils.scss';

class BootstrapUtils extends React.Component {

  backTo = () => {
    return this.props.history.push('/des-web')
  }

  render() {

    return (

      <div className='bootstrap-utils-container'>

        <header className='pb-2'>
          <BackButton to={this.backTo} />
          <a href='https://getbootstrap.com/' target='_blank' rel='noopener noreferrer'>
            <i id='bootstrap-icon' class="fab fa-bootstrap"></i>
          </a>
        </header>
        <section>
          <div className='container'>

            <div className='row align-items-center'>
              <div className='col-12 col-lg-4'>
                <h1>Utilidades de Bootstrap</h1>
              </div>

              <div className='col-12 col-lg-8'>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/borders/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Bordes</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/close-icon/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Close Icon</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/colors/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Colores</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/display/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Propiedad de CSS Display</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/flex/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Flex</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/overflow/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Propiedad de CSS Overflow</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/position/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Propiedad de CSS Postiion</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/shadows/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Propiedad de CSS box-shadow</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/sizing/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Ancho y Alto (Width & Height)</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/spacing/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Spacing (Padding & Margin)</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/text/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Texto</a>
                  </div>
                </div>
                <div className='row align-items-center justify-content-center mb-2'>
                  <div className='col-8'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/vertical-align/' 
                      target='_blank' rel='noopener noreferrer' className='btn btn-outline-custom mt-2'>Vertical Alignment</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>
    )
  }
}

export default BootstrapUtils;