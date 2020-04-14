// 1. leia um numero e verifique se ele é par ou impar utilizando % 2 === 0 

const number = Number(prompt('Informe um numero'));

number % 2 === 0 ? alert(`${number} é par`) : alert(`${number} é impar`);

/* 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

const nota1 = Number(prompt('Informe a nota 1'));
const nota2 = Number(prompt('Informe a numero '));

const media = (nota1 * nota2 / 10);

if(media >= 7 && media < 10){
    alert('Aprovado');
} else if(media === 10) {
    alert('Aprovado com Distinção');
} else {
    alert('reprovado');
}

// 3. Faça um script que leia três números inteiros e mostre o maior deles.
// const numero1 = Number(prompt('Informe a numero 1'));
// const numero2 = Number(prompt('Informe a numero 2'));
// const numero3 = Number(prompt('Informe a numero 3'));

// if(numero1 > numero2 && numer1 > numero3){
//     alert('Numero 1 é maior')
// } else if (numero2 > numero1 && numero2 > numero3){
//     alert('Numero 2 é maior')
// } else {
//     alert('Numero 3 é maior')
// }

/*4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
Fazer duas variáveis trocarem de valores entre si - Variável Auxiliar*/

let numero1 = parseInt(prompt('Informe a numero 1'));
let numero2 = parseInt(prompt('Informe a numero 2'));
alert(`O numero 1 é: ${numero1}, o numero 2 é ${numero2}`)
let auxiliar = numero1;
numero1 = numero2;
numero2 = auxiliar;
alert(`O numero 1 é: ${numero1}, o numero 2 é ${numero2}`)