// Configureer Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAytIUAfY5ROb56_FLRMDyoHAbzDJY9Uy0",
    authDomain: "jhos-2.firebaseapp.com",
    projectId: "jhos-2",
    storageBucket: "jhos-2.appspot.com",
    messagingSenderId: "675775504646",
    appId: "1:675775504646:web:46e27069c5732b2146fe87",
    measurementId: "G-BH5VVLXYGD"
};
firebase.initializeApp(firebaseConfig);

// Verwijzing naar de database
var database = firebase.database().ref();

// Functie om een bericht te verzenden
function sendMessage() {
    var message = document.getElementById('message').value;

    if (message !== '') {
        database.push().set({
            message: message
        });
        document.getElementById('message').value = '';
    }
}

// Luister naar nieuwe berichten
database.on('child_added', function(snapshot) {
    var message = snapshot.val().message;
    var chat = document.getElementById('chat');
    chat.innerHTML += '<p>' + message + '</p>';
});
