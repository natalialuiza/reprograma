const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
const btn = document.getElementById('btn-novaCarta')
// Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
  nome: "Carta não carregada",
  tipo: "Arcano Maior",
  descricao: "Sem descrição",
  imagem: "http://via.placeholder.com/250X500",
  link: "https://www.astrolink.com.br/"
}

const renderizaCarta = carta => {
  const novaCarta = new Card(carta).render()
  cardSection.innerHTML = novaCarta 
}

renderizaCarta(placeholderCard)

const randomCard = cartas => cartas[(Math.floor(Math.random() * cartas.length))]

btn.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/reprograma/T9-JS-III/final/04-fetch/exercicio/tarot.json')
  .then(dadosCartas => dadosCartas.json())
  .then(cartas => {
    let cartaSorteada = randomCard(cartas)
   return renderizaCarta(cartaSorteada)
  })
})











