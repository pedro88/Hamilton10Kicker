const historyList = document.getElementById("insertHistory");

// convert a db date to a real date with intl.DateTimeFormat
const convertDate = (dateInput) => {
    // Create a new Date object
    const rawDate = dateInput;
    const date = new Date(rawDate);

    // Format the date in French
    const formattedDate = new Intl.DateTimeFormat("fr-FR", {
        year: "numeric", 
        month: "2-digit", 
        day: "numeric", 
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
    }).format(date);

    // return this format -> 21/02/2025 14:32
    return formattedDate;
};

const getHistory = async () => {
    // call api
    const response = await fetch("http://185.207.226.6:30125/game/history");
    // convert to json
    const json = await response.json();
    // loop on all object
    for (let i = 0; i < json.length; i++) {
        // get player
        const list = document.createElement("tr");
        const match = json[i];
        const player1 = match.id_player_1;
        const player2 = match.id_player_2;
        const versus = document.createElement("td");
        versus.textContent = `${player1} vs ${player2}`;
        // get score
        const score1 = match.score_player_1;
        const score2 = match.score_player_2;
        const scoring = document.createElement("td");
        scoring.textContent = `${score1} - ${score2}`;
        // get the winner
        const winPlayerHistory = document.createElement("td");
        winPlayerHistory.textContent = match.id_winner;
        // get date
        const date = document.createElement("tr");
        date.textContent = convertDate(match.created_at);
        // append it to the html
        list.appendChild(versus);
        list.appendChild(scoring);
        list.appendChild(winPlayerHistory);
        list.appendChild(date);
        historyList.appendChild(list);

    }
};
// create an event when the user load this page
addEventListener("load", async (event) => {
    await getHistory();
});
