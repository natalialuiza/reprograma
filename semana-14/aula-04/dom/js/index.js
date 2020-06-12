const formulario = document.querySelector(".lista__form");
const item = document.querySelector('#item')
const valor = document.querySelector('#value')
const data = document.querySelector('#date')
const table = document.querySelector('table')
let tBody = document.createElement('tbody')
let total = document.querySelector('#total')
let somaTotal = 0;



table.appendChild(tBody)
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  if (!item.value.trim() && !valor.value.trim() && !data.value.trim()) {
    return alert("Preencha todos os campos");
  };

  if (!item.value.trim()) {
    item.focus()
    return alert("Informe o item");
  };
  if (!valor.value.trim()) {
    valor.focus()
    return alert("Informe o valor");

  };

  if (!data.value.trim()) {
    data.focus()
    return alert("Informe a data");
  };

  const linha = document.createElement('tr');
  const coluna1 = document.createElement('td');
  const coluna2 = document.createElement('td');
  const coluna3 = document.createElement('td');
  const coluna4 = document.createElement('td');
  const btnExcluir = document.createElement('button')
  
  coluna1.textContent = item.value;
  coluna2.textContent = valor.value;
  coluna3.textContent = data.value;
  btnExcluir.textContent = 'x'
  total.textContent =  somaTotal += Number(valor.value);

  tBody.appendChild(linha);
  linha.appendChild(coluna1);
  linha.appendChild(coluna2);
  linha.appendChild(coluna3);
  coluna4.appendChild(btnExcluir)
  linha.appendChild(coluna4)

  formulario.reset() // <3

  btnExcluir.addEventListener('click', ()=>{
    linha.remove()
  })
});