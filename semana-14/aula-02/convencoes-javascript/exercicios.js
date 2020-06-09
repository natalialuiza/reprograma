
const comprarNumero = (a, b) => {
  if(a > b){
    return `O maior número entre ${a} e ${b} é ${a}`
  }
  return `O maior número entre ${a} e ${b} é ${b}`
}

console.log(comprarNumero(5,10))


const retornarNota = pontuacao => {
  let letra = '';
  if(pontuacao > 90){
    letra = 'A'
  } else if (pontuacao > 80) {
    letra = 'B'
  } else if (pontuacao > 70){
    letra = 'C'
  } else if (pontuacao > 65){
    letra = 'D'
  } else {
    letra = 'F'
  }
  return letra;
}

console.log(retornarNota(93))
console.log(retornarNota(86))
console.log(retornarNota(75))
console.log(retornarNota(66))
console.log(retornarNota(10))


let diaSemana = '';
switch(new Date().getDay()) {
  case 0:
    diaSemana = 'Domingo';
  break;
  case 1:
    diaSemana = 'Segunda-feira';
  break;
  case 2:
    diaSemana = 'Terça-feira';
  break;
  case 3:
    diaSemana = 'Quarta-feira';
  break;
  case 4:
    diaSemana = 'Quinta-Feira';
  break;
  case 5:
    diaSemana = 'Sexta-feira';
  break;
  case 6:
    diaSemana = 'Sabado';
  break;
}
console.log(diaSemana)


const obterPlanos = idadeCliente => {
  let pacote = '';
  if(idadeCliente >= 12 && idadeCliente <= 17){
     pacote = 'TEEN'
  } else if(idadeCliente >= 18 && idadeCliente <= 29){
     pacote = 'PROFISSIONAL'
  } else if(idadeCliente >= 30){
     pacote = 'EXPERIENTE'
  } else {
    return 'Entrar em contato com a agência de turismo'
  }
  return `Você pode verificar os nossos pacotes ${pacote}`;
}

console.log(obterPlanos(12))
console.log(obterPlanos(18))
console.log(obterPlanos(30))
console.log(obterPlanos(8))