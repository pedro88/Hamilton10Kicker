
const userInput = document.getElementById("user");
const submitButton = document.getElementById("sub");
const getUserButton = document.getElementById("getUsers");

const addNewUser = async (username) => {
    // Je me suis arrêter ici
    if(username){
        try{
            const response = await fetch("url",{
                method: "POST",
                body: JSON.stringify({username: `${username}`})
            });
        }catch(err){
            console.log("une Error de mort : ", err);
        }
    }else{
        console.log('No username');
    }
} 

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
})
