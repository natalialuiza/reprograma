let valor1='';
let valor2='';
let total;

function capturarValor1(value){
     valor1 = parseFloat(value);
}

function capturarValor2(value){
  valor2 = parseFloat(value);
}

// Solucao da Professora 

// function somar(){
//    total = valor1 + valor2;
//    alert('O total da soma é', total)
// }

// function subtrair(){
//   total = valor1 - valor2;
//   alert('O total da subtrair é', total)
// }

// function multiplicar(){
//   total = valor1 * valor2;
//   alert('O total da multiplicacao é', total)
// }

// function divisao(){
//   total = valor1 / valor2;
//   alert('O total da divisao é', total)
// }

// solucao minha

const calculator = (operador) => {
  let result;
  let op;
  switch(operador){
    case '+':
       op = 'soma';
       result = valor1 + valor2;
    break;
    case '-':
      op = 'subtrair';
      result = valor1 - valor2;
    break;
    case '*':
      op = 'multiplicacao'
      result = valor1 * valor2;
    break;
    case '/':
      op = 'divisao'
      result = valor1 / valor2;
    break;
  }
  alert(`O total da ${op} é ${result}`)

}