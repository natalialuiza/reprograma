const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

cepInput.addEventListener("blur", () => {
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
     .then(response => response.json())
     .then(obj => preencherInputs(obj))
})

const preencherInputs = (obj) => {
    logradouroInput.value = obj.logradouro
    complementoInput.value = obj.complemento
    bairroInput.value = obj.bairro
    localidadeInput.value = obj.localidade
    ufInput.value = obj.uf
}

