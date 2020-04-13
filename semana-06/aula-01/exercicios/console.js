// 1 . Com base no exemplo do link do slide 1 (o que é javascript), crie um arquivo com um button, que ao clicar exiba a mensagem “Bem vindo ao Reprograma”. 
// Obs. Utilize javascript externo.

const message = document.querySelector('#bemvinda')

message.addEventListener('click', bemVinda);

function bemVinda() {
    alert("Bem vindo ao Reprograma!")
}

// 2. Crie 3 variais, e exiba no console o tipo de cada uma, utilizando o typeof
const variavel1 = true;
const variavel2 = 'Natália Luiza'
const variavel3 = {};

console.log('Tipo da Variavel 1 é', typeof(variavel1));
console.log('Tipo da Variavel 2 é', typeof(variavel2));
console.log('Tipo da Variavel 3 é', typeof(variavel3));

/* 3. Crie um botao, que ao ser clicado, exiba:
   - 1 console.log()
   - 1 console.error() 
   - 1 console.info() */

 const log = document.querySelector('#log');
 const info = document.querySelector('#info');
 const buttonError = document.querySelector('#error')


 log.addEventListener('click', messageLog);
 info.addEventListener('click', messageInfo);
 buttonError.addEventListener('click', messageError);

 function messageLog() {
     console.log('Oi, isso é uma mensagem de log');
 }

 function messageInfo() {
     console.info('Oi, isso é uma mensagem de informação');
 }

 function messageError() {
     console.error('Oi, isso é uma mensagem de erro');
 }