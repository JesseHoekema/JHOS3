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

const auth = firebase.auth()

 console.log(auth)



let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")
  
  auth.signOut()
  alert("Signed Out")
  window.location = "index.html";
})