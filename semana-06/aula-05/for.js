// 1. Faca um loop que mostre 15 vezes uma mensagem ("Ola Reprograma")

for(let i = 0; i < 15; i++){
  console.log('Olá reprograma');
}

// 2. Criem array de string, percorram (for of) exibindo cada texto do array.
const meuArray = ['Olá', 'Tudo ', 'Bom?', 'Sextooou']

for (value of meuArray){
  console.log(value);
}

/*3. Criem um array de objetos e percorra (for of) mostrando apenas uma propriedade.
[
{nome: "",
idade:0
},
{nome: "",
idade: 1
}
]
x console.log(x.propriedade); */
const usuarios = [ { nome: 'Natalia Luiza', email: 'natalialuiza@email.com'}, { nome: 'Bruna Vieira', email: 'brunav@email.com'} ]

for (usuario of usuarios){
  console.log(`O usuário ${usuario.nome}, email: ${usuario.email}`)
}

/* 4. Um loop que leia (prompt) o nome de 5 pessoas. */


let arrayDeNomes = [];

for(let i=0; i < 5; i++){
  nome = prompt('Informe o nome:');
  arrayDeNomes.push(nome);
}

