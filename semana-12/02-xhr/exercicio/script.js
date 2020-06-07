// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const chamarRequisicao = (e) => {
  e.preventDefault();
  const nomePokemon = input.value;
  const request = new XMLHttpRequest();

  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${nomePokemon}/`, true);
 
  request.addEventListener("readystatechange", function () {
   
  if (request.readyState == 4 && request.status == 200) {
    const data = JSON.parse(request.response);
    const id = data.id;
    const img = document.createElement('img');
    const p = document.createElement('p')
    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
    pkmPlaceholder.textContent = data.species.name
    pkmPlaceholder.appendChild(img)
  } else {
    pkmPlaceholder.textContent = 'Não foi possivel encontrar pokemon'
  }
})
   request.send();
}

form.addEventListener('submit', (e) => chamarRequisicao(e));