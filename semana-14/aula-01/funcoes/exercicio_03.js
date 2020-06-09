/*Crie uma função que receba uma string e
retorne a quantidade de letras que contém
armazenada na string que foi recebida por parâmetro.

** Dica: Utilize a propriedade chamda
length para retornar a quantidade de letras
na palavra recebida na função*/

const qtdLetras = string => {
  const regex = /\w/gi
  const match = string.match(regex)
  return match.length;
}

console.log(qtdLetras('Oi, tudo bem com voce?'))