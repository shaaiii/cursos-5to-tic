import React from 'react';
import BackButton from '../BackButton';

export default function TrabajoBasicCommands (props) {
  console.log(props);
  const parentRoute = props.history.location.pathname;

  const parentPath = parentRoute.substring(0, parentRoute.lastIndexOf('/'));

  const goBackTo = () => {
    props.history.push(parentPath);
  };

  return (
    <div>
      <div style={{textAlign: 'left'}}>
        <BackButton to={goBackTo} />
      </div>
      <iframe 
        style={{marginTop: '2em'}}
        title='Most used commands task' 
        src="https://docs.google.com/forms/d/e/1FAIpQLScytLcwdDz634KXsAh-BxKpwGIPuVXfNXtt70OIrOSRcCHPQg/viewform?embedded=true" 
        width="640" 
        height="1496" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0"
      >Loading...</iframe>
    </div>
  )
}