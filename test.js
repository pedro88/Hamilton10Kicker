const submit = document.getElementById('sub');
const username = document.getElementById('username');
const password = document.getElementById('password');

const sendApi = async (pseudo) => {
    console.log("IN sendApi function");
    try {
        const response = await fetch(`http://185.207.226.6:30125/addPlayer/${pseudo}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pseudo })
        });
        const data = await response.json();
        console.log("Response data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

submit.addEventListener("click", (event) => {
    console.log("Submit button clicked");
    event.preventDefault();
    const pseudo = username.value;
    console.log("Username value:", pseudo);
    sendApi(pseudo);
});
