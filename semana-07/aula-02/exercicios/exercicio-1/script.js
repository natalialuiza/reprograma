/*
  Exercício 1
  -----------

  A função insertion cria elementos no DOM e para isso recebe três argumentos, o elemento, o ID de um elemento
  já existente no seu HTML e o texto que será inserido no elemento criado. 
  
  
*/

function insertionElement(el,id,text){
  const element = document.createElement(el);
  const elementId = document.querySelector(id);
  element.innerText = text;
  elementId.appendChild(element);
}
 
//a função de criar um parágrafo dentro do elemento com ID "conteudo" e com o texto "Fui criado com Javascript"
insertionElement('h1', "#container", "Fui criado com Javascript")
insertionElement('p', "#texto", "Esse texto foi criado por uma função js")
insertionElement('strong', "#texto2", "feito por js")