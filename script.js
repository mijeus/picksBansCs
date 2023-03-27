const team1 = "FALLEN";
const team2 = "TRYBE";
let turn = team1;

let mappool = ["Train", "Mirage", "Cache", "Inferno", "Cobblestone", "Nuke"];

const turnText = document.querySelector("#turnText");

turnText.innerText = `É a vez da equipe ${turn} Banir o mapa`;

const maps = document.querySelectorAll(".card");

function choosemap(event) {
  if (turn == team1) {
    turn = team2
  } else {
    turn = team1
  }
  turnText.innerText = `É a vez da equipe ${turn} Banir o mapa`;

  event.currentTarget.classList.add("selected")

  event.currentTarget.removeEventListener("click", choosemap)

  event.currentTarget.querySelector(".accept").innerText = "BANIDO";

  const clickedMap = event.currentTarget.querySelector(".map-name").innerText;

  mappool = mappool.filter(map => map != clickedMap)

  if (mappool.length == 1) {
    const decidedMap = document.querySelector(".card:not(.selected)");
    decidedMap.classList.add("picked");
    decidedMap.removeEventListener("click", choosemap)
    decidedMap.classList.add("disable-hover")
    turnText.innerText = `O mapa escolhido foi ${mappool[0]}`
  }
}

for (let index = 0; index < maps.length; index++) {
  maps[index].addEventListener("click", choosemap)
}

