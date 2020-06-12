// 1
const obterNome = 'Natalia'
const repetirNome = 5;


for (let i = 0; i < 5; i++){
  console.log(obterNome)
}

// ou

let count = 0;

while (count < repetirNome){
  console.log(obterNome)
  count++
}


// 2
const users = [
  { nome: 'Natalia', idade: 24  },
  { nome: 'Brenda', idade: 22  },
  { nome: 'Geovanna', idade: 11  },
  { nome: 'Maria', idade: 35  },
  { nome: 'Ester', idade: 65 }
]

for (user of users) {
  console.log(`${user.nome} \n ${user.idade}`)
}
// ou 
users.forEach(user => {
  console.log(`${user.nome} \n ${user.idade}`)
})

// 03

for(let i = 0; i<=50; i++){
  i % 2 === 0 ? console.log(`É par ${i}`) : console.log(`É impar ${i}`)
}

// ou 

let counter = 0;

while(counter <= 50){
  counter % 2 === 0 ? console.log(`É par ${counter}`) : console.log(`É impar ${counter}`)
  counter++
}

//04 
const livros = {
   1: {
     'titulo': 'JavaScript Eloquente',
     'quemEscreveu': 'Merijn Haverbeke',
     'link': 'https:github.com/braziljs/eloquent-javascript'

   },
   2: {
     'titulo': 'Você não sabe JS',
     'quemEscreveu': 'Kyle Simpson',
     'link': 'https:github.com/cezaraugusto/You-Dont-Know-JS'

   },
   3: {
     'titulo': 'Mulheres, raça e classe',
     'quemEscreveu': 'Angela Devis',
     'link': 'https://edisciplinas.usp.br'
   }
}

for (value in livros){
  console.log(`
  ${livros[value].titulo} \n 
  ${livros[value].quemEscreveu} \n
  ${livros[value].link}`)
}

for (value in livros){
  console.log(`
  ${livros[value]['titulo']} \n 
  ${livros[value]['quemEscreveu']} \n
  ${livros[value]['link']}`)
}

