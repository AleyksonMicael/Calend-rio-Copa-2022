
function createGame(player1, hour, player2) {
  return `
        <li>
          <div id="passar_mouse"><img src="./assets/bandeiras/icon-${player1}.svg" alt="Bandeira do ${player1}"> <div id="mostrar">${player1} </div></div>
          <strong>${hour}</strong>
          <div id="passar_mouse"><img src="./assets/bandeiras/icon-${player2}.svg" alt="Bandeira do ${player2}"> <div id="mostrar">${player2} </div></div>
        </li>
      
  `
}
function createCard(data, diaSemana, games){
  return`
  <div class="card">
    <h2> ${data} <span>${diaSemana}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}


document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda-feira",
    createGame("inglaterra", "10:00", "irã") +
      createGame("senegal", "13:00", "holanda") +
      createGame("estados Unidos", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça-feira",
    createGame("argentina", "07:00", "arabia Saudita") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("frança", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta-feira",
    createGame("marrocos", "13:00", "croacia") +
      createGame("alemanha", "13:00", "japao") +
      createGame("espanha", "13:00", "costa Rica") +
      createGame("belgica", "13:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta-feira",
    createGame("suiça", "07:00", "camaroes") +
      createGame("uruguai", "10:00", "coreia Do Sul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "25/11",
    "sexta-feira",
    createGame("gales", "07:00", "irã") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estados Unidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunisia", "07:00", "australia") +
      createGame("polonia", "10:00", "arabia Saudita") +
      createGame("frança", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "07:00", "costa Rica") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canada") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda-feira",
    createGame("camaroes", "07:00", "servia") +
      createGame("coreia Do Sul", "10:00", "gana") +
      createGame("brasil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça-feira",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "catar") +
      createGame("irã", "16:00", "estados Unidos") +
      createGame("gales", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta-feira",
    createGame("tunisia", "12:00", "frança") +
      createGame("australia", "12:00", "dinamarca") +
      createGame("polonia", "16:00", "argentina") +
      createGame("arabia Saudita", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta-feira",
    createGame("croacia", "12:00", "belgica") +
      createGame("canada", "12:00", "marrocos") +
      createGame("japao", "16:00", "espanha") +
      createGame("costa Rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta-feira",
    createGame("coreia Do Sul", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("servia", "16:00", "suiça") +
      createGame("camaroes", "16:00", "brasil")
  ) 
  
  