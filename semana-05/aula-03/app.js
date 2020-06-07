// 1. Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
  
const letra = prompt(`Informe uma Letra`);
 if (letra === 'a'|| letra === 'o' || letra === 'e' || letra === 'i' || letra === 'u') {
     alert(`Letra ${letra} é vogal`)
 } else {
    alert(`Letra ${letra} é consoante`)
 }

 switch (letra) {
     case 'a':
     case 'e':
     case 'i':
     case 'o':
     case 'u':
        alert(`Letra ${letra} é vogal`);
     break;
     default:
        alert(`Letra ${letra} é consoante`);
 }

// 2. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente;

const dia = parseInt(prompt(`Informe a semana (1-7)`));

  switch(dia) {
    case 1:
        alert('Domingo');
     break;
     case 2:
        alert('Segunda-feira');
     break;
     case 3:
        alert('Terca-feira');
     break;
     case 4:
        alert('Quarta-feira');
     break;
     case 5:
        alert('Quinta-feira');
     break;
     case 6:
        alert('Sexta-feira');
     break;
     case 7:
        alert('Sabado');
     break;
     default:
        alert('resposta errada');
  }

// 3. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem;

const mes = parseInt(prompt(`Informe o mes (1-12)`));

  switch(mes) {
    case 2:
        alert(`Fevereiro é o mês ${mes} e possui 28 ou 29 dias` );
     break;
     case 4:
     case 6:
     case 9:
     case 11: {
          let nomeMes;
          if(mes === 4) {
            nomeMes = 'Abril';
          } else if (mes === 6){
             nomeMes = 'Junho';
          } else if (mes === 9){
             nomeMes = 'Setembro';
          } else {
             nomeMes = 'Novembro';
          }
          alert(`${nomeMes} é o mês ${mes} e possui 30 dias`);
      }
      break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:  {
         let nomeMes;
         if(mes === 1) {
           nomeMes = 'Janeiro';
         } else if (mes === 3){
            nomeMes = 'Marco';
         } else if (mes === 5){
            nomeMes = 'Maio';
         } else if (mes === 7){
            nomeMes = 'Julho';
         } else if (mes === 8){
            nomeMes = 'Agosto';
         } else if (mes === 10){
            nomeMes = 'Outubro';
         } else {
            nomeMes = 'Dezembro';
         }
         alert(`${nomeMes} é o mês ${mes} e possui 31 dias`);
     }
     break;
     default:
        alert('resposta errada');
  }

// 4. Escreva um código que receba dois número e determine qual o maior entre eles;
 const number1 = parseFloat(prompt(`Informe o Numero 1`));
 const number2 = parseFloat(prompt(`Informe o Numero 2`));

 if (number1 > number2){
     alert(`O numero ${number1} é maior que ${number2}`)
 } else {
    alert(`O numero ${number2} é maior que ${number1}`)
 }


// 5. Escreva um código que receba um número e determine se ele é par ou ímpar, e se é negativo ou positivo;
  const number = parseFloat(prompt(`Informe o Numero`));

  if (number % 2 === 0){
       number > 0 ? alert('Numero é par e positivo') : alert('Numero é par e negativo');
     } else {
       number > 0 ? alert('Numero é impar e positivo') : alert('Numero é impar e negativo');
   }


// 6. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.
const angulo1 = parseFloat(prompt(`Informe o angulo 1`));
const angulo2 = parseFloat(prompt(`Informe o angulo 2`));
const angulo3 = parseFloat(prompt(`Informe o angulo 3`));

(angulo1 + angulo2 + angulo3) === 180 ? alert('triângulo válido') : alert('triângulo invalido');

// 7. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.
const a = parseFloat(prompt(`Informe o valor 1`));
const b = parseFloat(prompt(`Informe o valor 2`));

if( a % b === 0 || b % a === 0 ) {
   alert(`Multiplos`)
} else {
   alert(`Nao Multiplos`)
}

// 8. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.)
const resultado = parseFloat(prompt(`Qual foi resultado do jogo? \n 1. Venceu \n 2. Empate \n 3. Perdeu`));

switch(resultado) {
   case 1:
      alert('Seu time ganhou 3 pontos');
   break;
   case 2:
      alert('Seu time ganhou 1 ponto');
   break;
   case 3:
      alert('Seu time nao ganhou ponto');
   break;
   default:
      alert('resposta errada');
}


/* 9. Elabore um programa que dada a idade de um nadador classifica-o em uma das seguintes categorias:
     Infantil A = 5 - 7 anos
     Infantil B = 8-10 anos
     Juvenil A = 11-13 anos
     Juvenil B = 14-17 anos
     Adulto = maiores de 18 anos*/

 const idade = parseInt(prompt(`Informe o valor 1`));

  if(idade >= 5 && idade <=7){
     alert(`Infantil A `)
  } else if (idade >= 8 && idade <= 10) {
   alert(`Infantil B `)
  } else if (idade >= 11 && idade <= 13) {
   alert(`Juvenil A `)
  } else if (idade >= 14 && idade <= 17) {
   alert(`Juvenil B `)
  } else if (idade >= 18){
   alert(` Adulto`)
  }


// 10. Faça um algoritmo que dado um número, retorne a classificação do ângulo. (Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto: ângulo com medida igual a 90°; Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; Ângulo raso: ângulo com medida igual a 0° ou 180°; Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo: ângulo com medida igual a 360°).
const angulo = parseFloat(prompt(`Informe o angulo `));

if(angulo > 0 && angulo < 90){
  alert('Ângulo agudo');
} else if (angulo === 90) {
   alert('Ângulo reto');
} else if (angulo > 90 && angulo < 180) {
   alert('Ângulo obtuso');
} else if (angulo === 0 || angulo === 180) {
   alert('Ângulo raso');
} else if (angulo > 180 && angulo < 360) {
   alert('Ângulo Côncavo');
} else if (angulo >= 360){
   alert('Ângulo completo');
} else {
   alert('Ângulo invalido');
}


/* 1. Baseado na tabela abaixo, retorne a classificação de um produto.

 Código             Classificação
   1	             Alimento não-perecível
   2,3 ou 4	        Alimento perecível
   5 ou 6	           Vestuário
   7	             Higiene Pessoal
   8 até 15	      Limpeza e Utensílios Domésticos
   Qualquer outro código Código inválido */

   const produto = parseInt(prompt(`Informe o codigo do produto [1 - 15]`));
   
   if(produto === 1){
      alert('Alimento não-perecível');
   } else if( produto >= 2 && produto <= 4) {
      alert('Alimento perecível');
   } else if ( produto === 5 || produto === 6 ) {
      alert(' Vestuário');
   } else if (produto === 7){
      alert('Higiene Pessoal');
   } else if(produto >= 8 && produto <= 15){
      alert('Limpeza e Utensílios Domésticos');
   } else {
      alert('Código inválido');
   }

   /*2. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.

   Código	 Produto	     Preço Unitário (R$)
   100  	 Cachorro quente	    R$ 1,70
   101  	 Bauru Simples	       R$ 2,30
   102    Bauru com ovo	       R$ 2,60
   103  	 Hamburguer      	    R$ 2,40
   104	 Cheeseburguer	       R$ 2,50
   105	 Refrigerante	       R$ 1,00 */

   const codProduto = parseInt(prompt(`Informe o codigo do produto \n 100 - Cachorro quente R$ 1,70 \n  101 Bauru Simples	R$ 2,30 \n  102 Bauru com ovo	R$ 2,60 \n 103 Hamburguer R$ 2,40 \n 104	Cheeseburguer	R$ 2,50 \n 
   105 Refrigerante R$ 1,00 `));

   const quantidade = parseInt(prompt('Informe a quantidade do produto'));
   const valor;
   const produto;
   switch(codProduto){
      case 100:
          valor = 1.70;
          produto = 'Cachorro Quente';
      break;
      case 101:
         valor = 2.30;
         produto = 'Bauru Simples';
      break;
      case 102: 
         valor = 2.60;
         produto = 'Bauru com Ovo';
      break;
      case 103: 
         valor = 2.40;
         produto = 'Hamburguer';
      break;
      case 104:
         valor = 2.50;
         produto = 'Cheeseburguer';
      break;
      case 105: 
         valor = 1.00;
         produto = 'Refrigerante';
      break;
      default: 
      alert('Produto Invalido');
   }
   alert(`Produto comprado foi ${quantidade} ${produto}, valor total: ${valor * quantidade}`)


//    3. Escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível de notas de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto. Escrever o valor lido e a relação de notas necessárias.

const valorReal = parseFloat(prompt(`Informe o valor em reais`));

const cem = parseInt(valorReal / 100);
const cinquenta =  parseInt(((valorReal % 100) / 50));
const dez =  parseInt((((valorReal % 100) % 50) / 10));
const cinco =  parseInt(((((valorReal % 100) % 50) % 10) / 5));
const um =  parseInt(((((valorReal % 100) % 50) % 10) % 5));

alert(` Nota de 100: ${cem}, Nota de 50: ${cinquenta}, Nota de 10: ${dez}, Nota de 5: ${cinco}, Nota de um ${um}`);



/*4. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.

Código	Cargo     Percentual
101	    Gerente	     10%
102	    Engenheiro   20%
103	    Técnico	     30%*/


const cargo = parseInt(prompt(`Informe o seu cargo [101 - 103]`));
const antigoSalario = parseFloat(prompt(`Informe o seu salario`));

const porcentagem = 0.40;

switch(cargo){
   case 101:
      porcentagem = 0.10;
      break;
   case 102:
      porcentagem = 0.20;
      break;
   case 103:
      porcentagem = 0.30;
      break;    
}

const novoSalario = antigoSalario + (antigoSalario * porcentagem);

 alert(`O salario antigo seu era ${antigoSalario}, novo salario e ${novoSalario}, diferenca ${novoSalario - antigoSalario}`)

/*5. Escrever um algoritmo que lê o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula:

MA = (Nota1 + Nota2 x 2 + Nota3 x 3 + ME )/7

A atribuição de conceitos obedece a tabela abaixo:

Média de Aproveitamento	Conceito
9,0	                       A
7,5 e < 9,0	                 B
6,0 e < 7,5	                 C
4,0 e < 6,0                  D
< 4,0	                       E

O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem: APROVADO se o conceito for A,B ou C e REPROVADO se o conceito for D ou E.*/

const numeroIndetificacao = parseInt(prompt(`Informe número de identificação`));

const nota1 = parseInt(prompt(`Informe a nota 1`));
const nota2 = parseInt(prompt(`Informe a nota 2`));
const nota3 = parseInt(prompt(`Informe a nota 3`));
const mediaExercicio = parseInt(prompt(`Informe a media dos exercicios`));

const media = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicio) / 7;

let statusAprovacao;

if (media > 6 && media <= 9  ){
   statusAprovacao = 'APROVADO'
} else {
   statusAprovacao = 'REPROVADO'
}

alert(`Numero do Aluno: ${numeroIndetificacao} \n nota 1: ${nota1} \n nota 2: ${nota2} \n nota 3: ${nota3} \n media de exercicios: ${mediaExercicio} \n Status: ${statusAprovacao} `)

