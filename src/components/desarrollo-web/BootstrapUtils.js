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

              <div className='col-12 col-lg-6'>
                <div className='row align-items-center justify-content-center mb-2'>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/borders/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Bordes</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/close-icon/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Close Icon</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/colors/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Colores</a>
                  </p>
                </div>
                <div className='row align-items-center justify-content-center mb-2'>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/display/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Propiedad de CSS Display</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/flex/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Flex</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/overflow/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Propiedad de CSS Overflow</a>
                  </p>
                </div>
                <div className='row align-items-center justify-content-center mb-2'>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/position/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Propiedad de CSS Postiion</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/shadows/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Propiedad de CSS box-shadow</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/sizing/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Ancho y Alto (Width & Height)</a>
                  </p>
                </div>
                <div className='row align-items-center justify-content-center'>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/spacing/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Spacing (Padding & Margin)</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/text/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Texto</a>
                  </p>
                  <p className='d-table col-4'>
                    <a 
                      href='https://getbootstrap.com/docs/4.3/utilities/vertical-align/' 
                      target='_blank' rel='noopener noreferrer' className='d-table-cell btn btn-outline-custom'>Vertical Alignment</a>
                  </p>
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