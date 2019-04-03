import React from 'react';
import PropTypes from 'prop-types';

class CodeContainer extends React.Component {

  static propTypes = {
    command: PropTypes.string.isRequired,
    isCommandUnbold: PropTypes.bool
  }

  render() {

    const stylesTerminal = {
      padding: '10px 10px',
      margin: '0 auto',
      backgroundColor: '#273746',
      color: '#F7F9F9',
      fontSize: '15px',
      width: '80%', 
      display: 'block',
      textAlign: 'left',
      fontWeight: 'normal'
    }

    const stylesUser = {
      color: '#F1C40F',
      fontWeight: 'bold',
    }

    const ruteStyles = {
      color:'#5DADE2'
    }

    const { command } = this.props;
    return (
    <code style={stylesTerminal}>
      <span style={stylesUser}>estudiante@tic</span>:<span style={ruteStyles}>~/</span> $ {command}
    </code>
    )
  }
}

export default CodeContainer;