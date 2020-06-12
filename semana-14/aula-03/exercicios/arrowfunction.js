const sum = (a, b) => a + b;

console.log(sum(10,20))
console.log(sum(10,50))

const retornarBiografia = () => {
 return { 
   nome: 'Mulheres, raça e classe', 
   descricao: 'Da mesma forma que gênero é a maneira como a raça é viver'}
}

console.log(retornarBiografia())

const objetoUsuario = (id, nome) => {
  return {
    id: id,
    nome: nome
  }
}

console.log(objetoUsuario(1,'Natalia'))