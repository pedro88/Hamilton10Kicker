

// Exemple de fonction pour récupérer les utilisateurs depuis l'API
fetch('http://localhost:3000/users') // Envoie une requête GET à l'API sur le serveur
  .then(response => response.json()) // Une fois les données reçues, les convertir en JSON
  .then(data => {
    // Affiche les données récupérées dans la console du navigateur
    console.log('Utilisateurs récupérés :', data);

    // Exemple de traitement des données : afficher dans le DOM
    const userList = document.getElementById('user-list'); // Sélectionne un élément HTML avec l'ID "user-list"
    data.forEach(user => {
      const li = document.createElement('li'); // Crée un élément <li> pour chaque utilisateur
      li.textContent = `${user.name} - ${user.email} (${user.age} ans)`; // Définit le texte à afficher
      userList.appendChild(li); // Ajoute l'élément <li> à la liste
    });
  })
  .catch(error => console.error('Erreur lors de la récupération :', error)); // Gère les erreurs en les affichant dans la console



let recordedPlayers = []
const addingNewPlayer = () => {
const newPlayer = document.getElementById('newPlayer');
recordedPlayers.push(newPlayer);
console.log('new player :')
console.log(newPlayer);
console.log('recorded players :')
console.log(recordedPlayers);
}

const newMatch = () => {

}