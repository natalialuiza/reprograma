/*
  Exercício 2
  -----------

  Instruções:

  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. Substitua cada span com informações suas.

  3. Percorra por cada li e altere sua propriedade class para "list-item". Em seguida adicione no HTML a tag style com a classe "list-item"
  para que a propriedade color de cada li seja red.

  4. Crie um elemento img e coloque no atributo src uma foto sua. Não se esqueça de adicionar o novo elemento na página.
  
*/

const body = document.querySelector('body')
const nickname = document.querySelector('#nickname');
const favorites =  document.querySelector('#favorites');
const hometown = document.querySelector('#hometown');
const nome = document.querySelector('h1');
const li = document.querySelectorAll('li');
const newPhoto = document.createElement('img');

body.style.fontFamily = 'Arial, sans-serif';
nome.innerText = 'Natália Luiza';
nickname.innerText = 'natxlu';
favorites.innerHTML = 'mtb, cozinhar, series';
hometown.innerText = 'São Paulo, SP';

for(let i = 0; i < li.length; i++){
  li[i].classList = 'list-item';
}

newPhoto.src = 'https://avatars3.githubusercontent.com/u/43760157?s=460&u=280f28bb99ed985034c25ea905f0b389444158b8&v=4';

body.appendChild(newPhoto);


