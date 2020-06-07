/*
  Exercício bônus
  -----------

  Marque todas as palavras que possuem mais de 8 caracteres com um um background amarelo.

  Dica: pesquise sobre o método de string split, e os métodos de array map e join para ajudar na sua solução.
    
*/

let texto = document.querySelector('p');

let textoArray = texto.innerText.split(' ')
let newContent = []

for(let i = 0; i < textoArray.length; i++){
  if(textoArray[i].length > 8 ) {
    newContent.push('<span style="background-color: yellow"> ' + textoArray[i] + '</span>')
  } else {
    newContent.push(textoArray[i])
  }
}
texto.innerHTML = newContent.join(' ')




