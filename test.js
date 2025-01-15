const userInput = document.getElementById("user");
const submitButton = document.getElementById("sub");
const getUserButton = document.querySelector("#getUsers");

const addNewUser = async (username) => {
    // Je me suis arrêter ici
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
        const response = await fetch("http://185.207.226.6:30125/player/prout");
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.log("Mec la galère : ", err);
    }
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addNewUser(userInput.value);
});

getUserButton.addEventListener("click", (event) => {
    event.preventDefault();
    apiUsers();
});
