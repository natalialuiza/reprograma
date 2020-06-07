// 1. Exercicio 01
const mes = parseInt(prompt('Informe o numero do mês'));
let nomeMes;

switch(mes){
    case 1: 
      nomeMes = 'Janeiro';
    break;
    case 2:
    nomeMes = 'Fevereiro';
    break;
    case 3:
     nomeMes = 'Março';
    break;
    case 4:
        nomeMes = 'Abril';
    break;
    case 5:
        nomeMes = 'Maio';
    break;
    case 6:
        nomeMes = 'Junho';
    break;
    case 7:
        nomeMes = 'Julho';
    break;
    case 8:
        nomeMes = 'Agosto';
    break;
    case 9:
        nomeMes = 'Setembro';
    break;
    case 10:
        nomeMes = 'Outubro';
    break;
    case 11:
        nomeMes = 'Novembro';
    break;
    case 12:
        nomeMes = 'Dezembro';
    break;
    default: 
      nomeMes = 'Opss opção invalida'
}

console.log(nomeMes);

/* 3. Calcule o valor do salario do dev conforme valores abaixos.
salario Base: R$ 2.500,00
salario Junior = salario base + 20%
salario Pleno = salario base + 35%
salario senior = salario base + 50% */

const cargo = prompt('Informe o seu cargo');

let salarioBase = 2500;
let porcentagem = 0;

switch(cargo){
    case 'junior':
        porcentagem = .2;
        break;
    case 'pleno':
        porcentagem = .35;
    break;
    case 'senior':
        porcentagem = .50;
    break;
}

salarioBase += salarioBase * porcentagem;

console.log(`calculo do seu salario, baseado no cargo é: ${salarioBase}`);



