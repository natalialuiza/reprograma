/*Escreva uma função que aceita um parâmetro e retorna um tipo.
Obs.: Existem seis tipos de valores possíveis que typeof retorna: object, boolean,
function, number, string e undefined. */

const tipoVariavel = variavel => typeof variavel

console.log(tipoVariavel('Oi'))
console.log(tipoVariavel(10))
console.log(tipoVariavel({ nome: 'Natalia'}))
console.log(tipoVariavel([ 10,20,30]))
console.log(tipoVariavel(function(){ }))
console.log(tipoVariavel(true))
