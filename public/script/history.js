
const historyList = document.getElementById("insert");

const getHistory = async () => {
    const response = await fetch("http://185.207.226.6:30125/game/history");
    const list = document.createElement("tr");
    for(let i = 0; i < response.length; i++){
        const player1 = response[i]
        // j'ai stop ici j'ai un soucis avec la réponse qui donne une liste juste pour les noms donc il faut que je corrige le format de réponse !! 
    }
} 
