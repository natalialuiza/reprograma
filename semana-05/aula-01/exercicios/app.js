// 1. Faça uma mensagem de "Olá Mundo!";
alert('Hello Wolrd');

// 2. Faça uma saída de soma de 2 números;
alert( 10 + 85);


// 3. Crie um algoritmo que receba nome, endereço e telefone, e depois mostre-os;
const nome = prompt('Informe o seu nome');
const endereco = prompt ('informe seu endereco');
const telefone = prompt('informe o seu telefone');

// 4. Solicite o ano de nascimento do usuário, calcule sua idade e mostre-a;
const anoNascimento = parseFloat(prompt(`informe a sua data de Nascimento`));
alert(`Sua idade e ${2020 - anoNascimento}`);

// 5. Receba do usuários 3 números e calcule a média entre eles.
const value1 = parseFloat(prompt('informe o valor 1'));
const value2 = parseFloat(prompt('informe o valor 2'));
const value3 = parseFloat(prompt('informe o valor 3'));

alert(`a media dos tres valores e ${(value1 + value2 + value3) / 3}`)


