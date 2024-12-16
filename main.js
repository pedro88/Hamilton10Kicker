const recordedPlayers = [];

const addingNewPlayer = () => {
  const newPlayerSubmit = document.getElementById("newPlayer");
  const newPlayer = newPlayerSubmit.value;
  recordedPlayers.push(newPlayer);
  console.log("new player :" + newPlayer);
  console.log("recorded players :" + recordedPlayers);
  player1Selector();
  player2Selector();
};

// const newMatch = () => {

//     const player1Form = document.createElement("form");
//     player1Form.id = "player1Form";
//     matchChart.appendChild(player1Form);
//     const player2Form = document.createElement("form");
//     player2Form.id = "player2Form";
//     matchChart.appendChild(player2Form);

//     const player1Select = document.createElement("select");
//     player1Select.id = "player1Select";
//    // player1Select.label = 'Choose first player';
//     player1Form.appendChild(player1Select);
//     const player2Select = document.createElement("select");
//     player2Select.id = "player2Select";
//     player2Form.appendChild(player2Select);

//     const SelectorPlayer1 = document.getElementById("player1Select");
//     const SelectorPlayer2 = document.getElementById("player2Select");

//     recordedPlayers.forEach((playerid) => {
//         const optionPlayer1 = document.createElement("option");

//     });
// }

let selectPlayer1 = document.getElementById("player1-select");
let selectPlayer2 = document.getElementById("player2-select");
let elements = recordedPlayers;

function player1Selector() {
  for (let i = 0; i < elements.length; i++) {
    let optn = elements[i];
    let el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    selectPlayer1.appendChild(el);
  }
}
function player2Selector() {
    for (let i = 0; i < elements.length; i++) {
      let optn = elements[i];
      let el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      selectPlayer2.appendChild(el);
    }
  }
  

