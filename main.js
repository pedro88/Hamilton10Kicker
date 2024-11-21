let recordedPlayers = [];
const addingNewPlayer = () => {
    const newPlayerSubmit = document.getElementById('newPlayer');
    const newPlayer = newPlayerSubmit.value;
    recordedPlayers.push(newPlayer);
    console.log('new player :')
    console.log(newPlayer);
    console.log('recorded players :')
    console.log(recordedPlayers);
}

const newMatch = () => {

const player1Form = document.createElement("form");
player1Form.id = "player1Form";
matchChart.appendChild(player1Form);
const player2Form = document.createElement("form"); 
player2Form.id = "player2Form";
matchChart.appendChild(player2Form);
const player1Select = document.createElement("select");
player1Select.id = "player1Select";
player1Select.label = 'Choose first player';
player1Form.appendChild(player1Select);
const player2Select = document.createElement("select");
player2Select.id = "player2Select";
player2Form.appendChild(player2Select);
}