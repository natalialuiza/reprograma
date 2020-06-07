class Conta{
  constructor(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
  }
}

class ContaCorrente {
  constructor(agencia){
    this.agencia = agencia;
    this.saldo = 0;
  }

  depositar(valor){
    return this.saldo += valor;
  }

  sacar(valor){
    if(this.saldo > valor){
    return this.saldo -= valor;
    }
    return `Saldo Indisponivel`;
}
}

const conta = new Conta('Natália Luiza', '44444444')
const contaCorrente = new ContaCorrente(0065)

console.log(conta)
console.log(contaCorrente)

contaCorrente.depositar(1000)
console.log(contaCorrente)

contaCorrente.sacar(500)
console.log(contaCorrente)

console.log(contaCorrente.sacar(6000))
console.log(contaCorrente)