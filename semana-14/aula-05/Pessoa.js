import { Habilidade } from "./Habilidade";

export class Pessoa extends Habilidade{
  constructor(habilidade, nome, sobrenome, idade){
    super(habilidade)
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  getNomeCompleto(){
    return `${this.nome} ${this.sobrenome}`
  }
}