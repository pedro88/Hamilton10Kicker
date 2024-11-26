// Fonction pour charger la liste des utilisateurs
async function chargerUtilisateurs() {
  try {
      const response = await fetch('http://localhost:3000/api/utilisateurs')
      const utilisateurs = await response.json()
      
      const usersList = document.getElementById('usersList')
      usersList.innerHTML = '' // Vider la liste actuelle
      
      utilisateurs.forEach(user => {
          const li = document.createElement('li')
          li.textContent = `${user.nom} - ${user.email}`
          usersList.appendChild(li)
      })
  } catch (error) {
      console.error('Erreur:', error)
  }
}

// Fonction pour ajouter un utilisateur
async function ajouterUtilisateur(nom, email) {
  try {
      const response = await fetch('http://localhost:3000/api/utilisateurs', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nom, email })
      })
      
      if (response.ok) {
          // Recharger la liste après l'ajout
          chargerUtilisateurs()
          // Vider le formulaire
          document.getElementById('userForm').reset()
      }
  } catch (error) {
      console.error('Erreur:', error)
  }
}

// Gérer la soumission du formulaire
document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const nom = document.getElementById('nom').value
  const email = document.getElementById('email').value
  await ajouterUtilisateur(nom, email)
})

// Charger les utilisateurs au chargement de la page
chargerUtilisateurs()