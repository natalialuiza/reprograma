import React, { Component } from "react";
import "./Contador.css";

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  aumentarContador = () => {
     this.setState((estadoAnterior) => ({
      contador: estadoAnterior.contador + 1
     }))
  };

  diminuirContador = () => {
    this.setState({
      contador: this.state.contador - 1
     })
  };

  render() {
    return (
      <div className="content">
        <button className="btn btn-menos" onClick={this.diminuirContador}>
          {" "}
          -{" "}
        </button>
        <p className="count">{this.state.contador}</p>
        <button className="btn btn-mais" onClick={this.aumentarContador}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default Contador;
