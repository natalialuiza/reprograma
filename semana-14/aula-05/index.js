import { Pessoa } from './Pessoa.js';
import { Habilidade } from './Habilidade.js';


const pessoaUm = new Pessoa('Natália Luiza', 'da Silva', 24)
const pessoaDois =  new Pessoa('Brenda', 'Melo', 22)

const habilidade1 = new Habilidade('Natália', 'comer bastante')
const habilidade2 = new Habilidade('Brenda', 'reclamar demais')

console.log('Pessoas: ')
console.log(pessoaUm)
console.log(pessoaDois)
console.log('Nome Completo da Pessoa 1', pessoaUm.nomeCompleto())
console.log('Nome Completo da Pessoa 2', pessoaDois.nomeCompleto())

console.log('Habilidades: ')
console.log(habilidade1)
console.log(habilidade2)
console.log('Habilidade da pessoa 1:', habilidade1.mostrarHabilidades())
console.log('Habilidade da pessoa 2:', habilidade2.mostrarHabilidades())
