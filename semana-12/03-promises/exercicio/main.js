const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")
const complemento_input = document.getElementById("complemento")
const bairro_input = document.getElementById("bairro")
const localidade_input = document.getElementById("localidade")
const uf_input = document.getElementById("uf")
const cep_error = document.getElementById("cep-error")

cep_input.addEventListener('blur', () => {
    get_data(`https://viacep.com.br/ws/${cep_input.value}/json/`)
    .then((data) => { 
     const rua = JSON.parse(data)
     return rua;
   }).then((rua) => {
     logradouro_input.value = rua.logradouro
     complemento_input.value = rua.complemento
     bairro_input.value = rua.bairro
     localidade_input.value = rua.localidade
     uf_input.value = rua.uf
     cep_error.textContent = 'Este CEP é valido'
   }).catch((err) => {
     cep_error.textContent = 'Este CEP é inválido.'
   })
})

 
