import React from 'react';
import './Input.css'

function Input(props){
  let valor = "informe o valor";
  return (
    <div>
      <input onChange={(event) => {valor = event.target.value}}/>
      <p>{valor.value}</p>   
    </div>
  );
}

export default Input;