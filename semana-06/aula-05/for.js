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


//5. Faça um programa que receba 10 números, 
//calcule e imprima a soma dos números pares e a soma dos números ímpares.

// - for para ler 10 prompt 
let numero = 0, somaImpares = 0, somaPares = 0,  contPar = 0, contImpar = 0;

for (let num = 1; num <= 10; num++) {
    numero = parseInt(prompt(`Digite o número ${num} :`));

    if (numero % 2 === 0) {
        contPar++;
        somaPares += numero;
    }
    else {
        contImpar++; 
        somaImpares += numero;
    }
}

console.log(somaImpares, 'soma de numero impares');
console.log(somaPares, 'soma de numeros pares');


/*6.Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres. */

let mulheres = 0, homens = 0, mediaIdadeH = 0, mediaPesoM = 0, peso, sexo;

for(let i = 0; i< 10; i++){
   sexo = prompt('Informe seu sexo F - (Feminino) M - (Masculino)')

   if(sexo === 'F') {
    peso = parseInt(prompt('Informe o peso'));
    idade = parseInt(prompt('Informe a idade'));
    mediaPesoM += peso;
    mulheres++;
   } else {
    peso = parseInt(prompt('Informe o peso'));
    idade = parseInt(prompt('Informe a idade'));
    mediaIdadeH += idade;
    homens++;
   }
}
 mediaIdadeH /= homens;
 mediaPesoM /= mulheres;

console.log('Total de homens', homens);
console.log('Total de mulheres', mulheres);
console.log('Média das idades dos homens:', mediaIdadeH)
console.log('Média dos pesos das mulheres:', mediaPesoM)


