import React, { Component } from 'react';

// Exemplo usando Função

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


// EXEMPLO USANDO CLASS

// class Card extends Component{
//    constructor(props) {
//     super(props) 
//       this.state;
//     }
   
//   render(){
//     return (
//       <>
//       <div>
//          <h1>{props.titulo}</h1>
//          <img src={props.arquivo} alt=""/>
//          <p>{props.texto}</p>
//        </div>
//      </>
//      )  
//   }
// }

export default Card;
