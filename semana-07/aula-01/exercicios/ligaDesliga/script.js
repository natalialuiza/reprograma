/*
  Exercício 1
  -----------

  Liga e desliga

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/
 const body = document.querySelector('body')

 const changeBg = () => {
  if(body.style.backgroundColor === 'green') {
     return  body.style.backgroundColor = 'red';
  }
   body.style.backgroundColor = 'green'
 }