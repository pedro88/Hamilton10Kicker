const historyList = document.getElementById("insertHistory");

const convertDate = (dateInput) => {
    // Create a new Date object from the ISO string
    const rawDate = dateInput;
    const date = new Date(rawDate);

    // Format the date in French (fr-FR)
    const formattedDate = new Intl.DateTimeFormat("fr-FR", {
        year: "numeric", // e.g., "2025"
        month: "2-digit", // e.g., "janvier"
        day: "numeric", // e.g., "27"
        hour: "2-digit", // e.g., "09"
        minute: "2-digit", // e.g., "42"
        timeZone: "UTC", // Ensure the time is treated as UTC
    }).format(date);

    return formattedDate;
};

const getHistory = async () => {
    const response = await fetch("http://185.207.226.6:30125/game/history");
    const json = await response.json();
    console.log(json.length);
    for (let i = 0; i < json.length; i++) {
        const list = document.createElement("tr");
        const match = json[i];
        const player1 = match.id_player_1;
        const player2 = match.id_player_2;
        const versus = document.createElement("td");
        versus.textContent = `${player1} vs ${player2}`;

        const score1 = match.score_player_1;
        const score2 = match.score_player_2;
        const scoring = document.createElement("td");
        scoring.textContent = `${score1} - ${score2}`;

        const winPlayerHistory = document.createElement("td");
        winPlayerHistory.textContent = match.id_winner;

        const date = document.createElement("tr");
        date.textContent = convertDate(match.created_at);

        list.appendChild(versus);
        list.appendChild(scoring);
        list.appendChild(winPlayerHistory);
        list.appendChild(date);
        historyList.appendChild(list);

    }
    console.log("hey");
};

addEventListener("load", async (event) => {
    await getHistory();
});
