const userInput = document.getElementById("user");
const submitButton = document.getElementById("sub");
const theList = document.getElementById("list");
const getUserButton = document.querySelector("#getUsers");

const addNewUser = async (username) => {
    if (username) {
        try {
            const response = await fetch("http://185.207.226.6:30125/player/addPlayer", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: `${username}` })
            });
        } catch (err) {
            console.log("une Error de mort : ", err);
        }
    } else {
        console.log("No username");
    }
};

const apiUsers = async () => {
    try {
        const response = await fetch("http://localhost:30125/player/playerList");
        const json = await response.json();
        console.log(json);
        return json;
    } catch (err) {
        console.log("Mec la galère : ", err);
    }
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addNewUser(userInput.value);
});

getUserButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const json = await apiUsers();

    for(let i = 0; i <= json.length -1; i++){
        const item = document.createElement("li");
        item.textContent = `${json[i].pseudo} Win : ${json[i].won_game} Loose : ${json[i].lost_game} Register Since : ${json[i].created_at}`
        theList.appendChild(item);
    };

});
