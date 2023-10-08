// Configure Firebase
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

// Reference to the database
var database = firebase.database().ref('emails');

// Function to send an email
function sendEmail() {
    var recipient = document.getElementById('recipient').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (recipient && subject && message) {
        database.push().set({
            recipient: recipient,
            subject: subject,
            message: message
        });
        document.getElementById('recipient').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    }
}

// Listen for new emails
database.on('child_added', function(snapshot) {
    var email = snapshot.val();
    var inbox = document.getElementById('inbox');
    inbox.innerHTML += '<p>From: ' + email.recipient + '<br>Subject: ' + email.subject + '<br>Message: ' + email.message + '</p>';
});
