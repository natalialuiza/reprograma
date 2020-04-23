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

const arrayList = [
  {
    titulo:'Harry potter e a Pedra Filosofal',
    autora: 'J. K. Rowling',
    capa: 'img/harry1.jpg'
  },
  {
    titulo:'Harry potter e a Câmara Secreta',
    autora: 'J. K. Rowling',
    capa: 'img/harry2.jpg'
  },
  {
    titulo:'Harry potter e a Ordem da Fênix',
    autora: 'J. K. Rowling',
    capa: 'img/harry3.jpg'
  },
  {
    titulo:'Harry potter e a Enigma do principe',
    autora: 'J. K. Rowling',
    capa: 'img/harry4.jpg'
  },

]
 

const body = document.querySelector('body')

for(let count = 0; count < arrayList.length; count++){

  const divBook = document.createElement('div')
  const paragraph = document.createElement('p')
  const title = document.createElement('h2')
  const imgCapa = document.createElement('img')
  title.innerText = `Titulo: ${arrayList[count].titulo}`
  paragraph.innerText = `Autora ${arrayList[count].autora}`
  imgCapa.src = arrayList[count].capa
  divBook.appendChild(title);
  divBook.appendChild(paragraph);
  divBook.appendChild(imgCapa);
  body.appendChild(divBook);
  console.log(divBook)
}