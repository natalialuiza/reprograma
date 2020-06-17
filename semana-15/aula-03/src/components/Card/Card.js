import React from 'react';

function Card(props){
  return (
    <>
    <div>
      <h1>{props.titulo}</h1>
      <img src={props.arquivo} alt=""/>
      <p>{props.texto}</p>
    </div>
    </>
  );
}

export default Card;
