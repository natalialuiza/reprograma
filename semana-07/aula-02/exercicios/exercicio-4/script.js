/*
  Exercício 4
  -----------

    Instruções:

    1. Crie um array com o nome de todas as alunas da turma
    2. selecione o elemento "lista-alunas"
    3. crie uma função com a lógica que cria elementos "li" com o nome de cada aluna, e adicione na lista de alunas.
    

*/

const alunas = [
  'Natalia Luiza',
  'Natalia',
  'Maria Jose',
  'Marisa',
  'Liana',
  'Maria Claudia',
  'Viviane',
  'Millena',
  'Sara',
  'Suzelen',
  'Ode',
  'Patricia',
  'Tabata',
  'Caroline',
  'Ilza',
  'Adela',
  'Debora',
  'Nayla',
  'Jordana',
  'Raquel Andradre',
  'Raquel Pinheiro',
  'Gabrielle Fernandes',
  'Gabrielli verenando',
  'Sindi',
  'Talisia',
  'Jemima',
  'Lorena',
  'Vanessa',
  'Ariane',
  'giulia'
]

const listaAlunas = document.querySelector('#lista-alunas');



for(let i = 0; i < alunas.length; i++){
   const li = document.createElement('li')
   li.innerText = alunas[i];
   listaAlunas.appendChild(li);
}