// 1. Faça um algoritmo que imprima números inteiros de n a 1;

let number = parseInt(prompt('Informe um numero'));
for(let i = number; i>= 1; i--){
    console.log(i);
}

// 2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)

// exemplo for
for(let i= 1; i <= 100; i++){
  
    if(i % 2 !== 0){
        console.log(i);
    }
}

// exemplo while 
let num = 1;

while(num <= 100){
    if(num % 2 !== 0){
        console.log(num--);
    }
}



// 3. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.

let soma = 0;
for(let i= 0; i < 1000; i++){
  
    if(i % 3 === 0 && i % 5 === 0){
        soma += i;
    }
}
console.log(`a soma dos números múltiplos de 3 e 5, é ${soma}`);


// 4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

let numero = parseFloat(prompt('Informe um numero'));

// exemplo for
for(let i= 0; i <= 10; i++){
   console.log(`${numero} x ${i} = ${numero * i}`)
}

// exemplo while 
let tab = 0;

while(tab <= 10){
    console.log(`${numero} x ${tab} = ${numero * tab}`);
    tab--;
}

/*5. Faça um programa que leia um array e informe o maior número. (Fazer com a mamãe)*/

const listaNumero = [8, 16, 31, 25, 24, 40, 93, 2, 54];

let maiorNumero = 0;

for (let i = 0; i < listaNumero.length; i++) {
    if (listaNumero[i] > maiorNumero) {
        maiorNumero = listaNumero[i];
    }
}


// 6. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)

const myArray = [10,25,32,46,58];

let contador = 0;

// exemplo com for

for(let i=0; i <= myArray.length; i++){
    console.log(myArray[i]);
}

// exemplo while
while(contador < myArray.length){
    console.log(myArray[contador]);
    contador++;
}

/*7. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

Lojas Quase Dois - Tabela de preços

1 - R$ 1.99

2 - R$ 3.98

...

50 - R$ 99.50
*/

let valorTotal = 0;

// exemplo com for
for(let i = 1; i <=50; i++){
    valorTotal += 1.99;
    console.log(`${i} - R$ ${valorTotal.toFixed(2)} `);
}

// exemplo while
let count = 1;
while( count <= 50){
    valorTotal += 1.99;
    console.log(`${count} - R$ ${valorTotal.toFixed(2)} `);
    count++;
}

/*
8. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1. Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Faça um algoritmo que dado um número calcule o fatorial do mesmo..*/

const numero =(Number(prompt('Informe um numero')));

let fatorial = 1;
for( let i = numero; i >= 1; i--){
    fatorial += i;
}


/*9. Escreva um algoritmo que printe o seguinte padrão no console:

*******

******

*****

****

***

**

*

*/

for(let i= 7; i >= 1; i--){
    for(let j= i; j >= 1;j-- ){
      console.log('*')
    }
}

/*10. Escreva um algoritmo que printe o seguinte padrão no console:

1

22

333

4444

55555
*/

/*
Momentos de Tensão
11. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.*/

const numeroPrimo = (Number(prompt('Informe o Numero')));

 numeroPrimo % numeroPrimo === 0 ? console.log(`O numero ${numeroPrimo} é primo`) : console.log(`O numero ${numeroPrimo} não é primo`);


/*12. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.*/

/*13. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:

Lojas Tabajara

Produto 1: R$ 2.20

Produto 2: R$ 5.80

Produto 3: R$ 0

Total: R$ 9.00

Dinheiro: R$ 20.00

Troco: R$ 11.00
*/

/*
14. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.*/


/*
15. Faça um algoritmo que sortei cara (0) ou coroa (1) n vezes. E no fim mostre quantas vezes deu cara e quantas coroa.*/

/*16. Pangrama é uma frase que possui todas as letras do alfabeto. Faça um algoritmo que verifique se uma frase é um pangrama ou não.*/

/*17. Crie um algoritmo que dados dois números calcule o MMC (Mínimo Múltiplo Comum)*/

/*18. Escreva um loop em Javascript que printa o seguinte padrão no console: 

1******

12*****

123****

1234***

12345**

123456*

1234567

*/