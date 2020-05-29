// map(): faz uma iteração com todos os elementos da lista e retorna outra
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];

const profissionaisMelhores = profissionais.map( item => item + 'a');


// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

const novaFrutas = frutas.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()
)

// 3)

const notasAlunas = [
  { nome: "Julia", notas: [
      { materia: "matemática", nota: 7, peso: 1.5 },
      { materia: "portugues", nota: 3, peso: 2 }
    ]
  },
  { nome: "Zelia", notas: [
      { materia: "matemática", nota: 6, peso: 1.5 },
      { materia: "portugues", nota: 5, peso: 2 }
    ]
  },
  { nome: "Jussara", notas: [
      { materia: "matemática", nota: 8, peso: 1.5 },
      { materia: "portugues", nota: 2, peso: 2 }
    ]
  }
]

const notasAlunasFinais = notasAlunas.map(({ nome, notas}) => {
  let somaNotas = 0;
  let somaPesos = 0
  
    for(let i =0; i< notas.length; i++){
      const nota = notas[i].nota;
      const peso = notas[i].peso;
      somaNotas += nota * peso
      somaPesos += peso;
    }
   

  // const somaNotas = notas.reduce((somaNotas, {nota}) => { 
  //   return somaNotas += nota
  // }, 0)

  // const somaPesos = notas.reduce((somaPesos, {peso}) => { 
  //   return somaPesos += peso
  // }, 0)
  let notaFinal = somaNotas / somaPesos

   return { nome, notaFinal}
})



// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = num.filter(numero => numero % 2 === 0)


// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

const profissionaisTI = pessoas.filter(({area}) => area === "TI")

// 3) Criar um array somente com alunas que passaram de ano (media > 5)

const alunasPassantes = notasFinaisAlunas.filter(({ notaFinal }) => notaFinal > 5)



// reduce(): recebe uma array e retorna um valor só. Redutor.

// 1) Dado uma array de números, retornar a soma de todos eles
const newNumbers = [1,2,3,4,5]

const reduce = newNumbers.reduce((accumulator, atual) => {
  return accumulator += atual
}, 0)


// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

const lucro = transacoes.reduce((acumulador, {tipo, valor})  => {
  return tipo === 'entrada' ? (acumulador + valor) : (acumulador - valor);
}, 0)


// sort(): organiza itens da array de acordo com uma verificação

// 1) Organizar números de forma decrescente
const numbers = [10,30,68,95,45,96,100,22]

numbers.sort()


// 2) Organizar pessoas por ordem alfabética

const newPessoas = [ 'Natalia', 'Brenda', 'Ana Laura', 'Geovanna', 'Isabel', 'Ester']

newPessoas.sort()

