
// 1. Crie uma lista (string), que contenha o nome de 10 alunas da reprograma.
// Em seguida, verifique o tamanho, e qual aluna está na posição 5.

const alunas =['Natália Luiza', 'Natalia', 'Jemima', 'Maria', 'Talisia', 'tabita', 'Caroline','Milena', 'Marisa', 'Viviane' ]

console.log(alunas[5])

// 2. Crie uma lista de matérias que contenha 6 matérias, e mostre qual matéria está na posição 4.
const materias = ['HTML5', 'CS33', 'javascript', 'sass', 'github e git', 'react']

console.log(materias[4])

// 3. Crie uma lista de números fora de ordem e ordene-a utilizando o método .sort();
const myArray = [10,20,58,63,68,45,99]

console.log(myArray.sort());

// 4. Crie uma lista vazia e verifique se o length == 0 (se a lista estiver vazia) .push() inserindo algum valor dentro. Se o length for maior > 0 alert() mostrando o tamanho.

const list = [];

if(list === 0){
    list.push(10)
} else if (list > 0){
  alert(list.legnth)
}