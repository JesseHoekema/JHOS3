// Voeg hier je Firebase configuratie toe
const firebaseConfig = {
    apiKey: "AIzaSyAytIUAfY5ROb56_FLRMDyoHAbzDJY9Uy0",
    authDomain: "jhos-2.firebaseapp.com",
    projectId: "jhos-2",
    storageBucket: "jhos-2.appspot.com",
    messagingSenderId: "675775504646",
    appId: "1:675775504646:web:46e27069c5732b2146fe87",
    measurementId: "G-BH5VVLXYGD"
  };
  
  // Initialiseren van Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Verwijzing naar de Firebase Authentication service
  const auth = firebase.auth();
  
  // Functie om login gegevens te updaten
  function updateCredentials() {
      const currentEmail = document.getElementById('currentEmail').value;
      const currentPassword = document.getElementById('currentPassword').value;
      const newEmail = document.getElementById('newEmail').value;
      const newPassword = document.getElementById('newPassword').value;
  
      // Inloggen met de huidige gegevens
      auth.signInWithEmailAndPassword(currentEmail, currentPassword)
        .then(() => {
          // Verander hier de login gegevens in Firebase
          return auth.currentUser.updateEmail(newEmail)
            .then(() => {
              return auth.currentUser.updatePassword(newPassword);
            })
            .then(() => {
              alert('Login gegevens zijn bijgewerkt!');
            })
            .catch((error) => {
              console.error(error);
              alert('Er is een fout opgetreden bij het bijwerken van de login gegevens.');
            });
        })
        .catch((error) => {
          console.error(error);
          alert('Huidige inloggegevens zijn onjuist.');
        });
  }
  