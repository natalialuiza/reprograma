/*
   Exercício 3
  -----------

  Instruções:

  1. crie uma página com um h1 de "Minha lista de Livros"

  2. crie um array com objetos contendo informações dos livros que você mais gosta.
  
  ex.: {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
  }

  4. percorra pelo array de livros e, para cada livro, crie uma div com o título e autor do livro e 
  adicione ele na página.

  Bonus: adicione uma propriedade com a URL da imagem da capa do livro e crie também um img para cada livro

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