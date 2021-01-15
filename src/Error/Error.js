import React from 'react';
import loadingImg from '../images/loading.png';

export default function Error(props) {
  return (
    <div style={{"display": "flex"}}>
      <h2 style={{"margin": "auto", "paddingTop": "3em"}}>{props.message}</h2>
    </div>
  )
}
