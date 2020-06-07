const chamarDemoBtn = document.getElementById('chamarDemo');

const chamarRequisicao = () => {
  // cria um novo construtor XMLHttpRequest
  const request = new XMLHttpRequest();
  
  // inicializa a requisição
  request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/", true);
  
  // adiciona um evento para ser ativado quando o readyState mudar
  request.addEventListener("readystatechange", function () {
      // verifica se a conexão foi bem sucedida
    if (request.readyState == 4 && request.status == 200) {
      // atribui a uma nova variável o JSON já transformado em objeto Javascript (através do parse())
      const data = JSON.parse(request.response);
      // atribuindo a div html
      document.getElementById("demo").innerHTML = data.species.name;
    } else {
      document.getElementById("demo").innerHTML = 'API sem resposta';
    }
  })
  
 // envia a requisição para o servidor
  request.send();
}

chamarDemoBtn.addEventListener('click', chamarRequisicao);
