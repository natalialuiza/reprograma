// 1. Crie um algoritmo que dado um valor, calcule 5% de desconto e retorne o valor do desconto;

const valor = parseFloat(prompt('Informe o valor'));
alert(`O valor do desconto ${valor * 0.05}`)

// exemplo professora 
// alert(`O valor do desconto ${valor *= 0.05}`)

// 2. Crie um algoritmo que receba dois valores e exiba o resultado e o resto da divisão entre eles;
const num1 = parseFloat(prompt('Informe o valor 1'));
const num2 = parseFloat(prompt('Informe o valor 2'));
alert(`O resto de ${num1} e ${num2} = ${num1 % num2}`)

// 3. Crie um algoritmo que calcule quantos dias o usuário viveu, baseado na idade (considere que a pessoa tenha a idade exata);
const idade = parseInt(prompt('Informe a sua idade'));

alert(`Quantos dias voce viveu ${idade * 365}`)

// 4. Faça um algoritmo que leia a idade de uma pessoa em dias e mostre-a em anos, meses e dias (assuma que todos os meses tem 30 dias, e todos os anos 365 dias);
const idadeEmDias = parseInt(prompt('Informe a sua idade em dias'));

const idadePessoa = parseInt(idadeEmDias / 365);
const idadeMes = parseInt((idadeEmDias % 365) / 30);
const idadeDias = parseInt(idadeEmDias % 365) % 30;

alert(`Sua idade e ${idadePessoa}, ${idadeMes} meses,  ${idadeDias} dias`);


// (TODAS AS QUESTÕES ABAIXO SÃO DE UM MUNDO SEM COVID-19. TODO MUNDO TAVA NA RUA. VOCÊS FIQUEM EM CASA)

// 5. Wenceslay gostaria de saber quantos litros por quilômetro, sua moto gastou em média. Ele sabe a distância rodada e a quantidade de litros de combustível que ele utilizou. Crie um algoritmo que mostre a Wenceslay qual a média de combustível gasto por quilômetro.
const distancia = parseFloat(prompt('Informe a distancia'));
const qtdLitros = parseFloat(prompt('Informe a quantidade de litros'));

alert(`A média de combustível gasto por quilômetro ${ distancia / qtdLitros }`);


// 6. O gerente ficou louco! E agora não sabe quanto de desconto deu nos seus produtos para fazer o anúncio. Ele sabe o preço sem o desconto e com o desconto. Faça um algoritmo que calcule o percentual de desconto do produto.
const precoDesconto = parseFloat(prompt('Informe o valor do produto com desconto'));
const precoBruto = parseFloat(prompt('Informe o valor do produto sem desconto'));

let porcentagem =  100 - (( precoDesconto / precoBruto) * 100);

alert(`Porcentagem de desconto do produto ${porcentagem} % ` )


// 7. Zenir é responsável por colocar a duração dos filmes no letreiro do cinema comunitário. A duração deve ser mostrada em minutos, mas alguns dos filmes exibidos vieram com a informação em horas e minutos. Ajude Zenir, ela tem mais o que fazer do que ficar fazendo conta.
const duracaoHoras = parseInt(prompt('Informe a duracao do filme em horas'));
const duracaoMin = parseInt(prompt('Informe a duracao do filme em min'));

let duracao = parseInt(duracaoHoras * 60) + duracaoMin;
alert(`A duração do filme  é ${duracao} min`);
