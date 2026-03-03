import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");

const firebaseConfig = {
    apiKey: "AIzaSyCHgCz-zy_wBe67R0j3Y1dyPH_yVQTutHs",
    authDomain: "learningfirebase-9944a.firebaseapp.com",
    projectId: "learningfirebase-9944a",
    storageBucket: "learningfirebase-9944a.firebasestorage.app",
    messagingSenderId: "481174995932",
    appId: "1:481174995932:web:1e9ae5cc95c51a2f9d8519"
  };
  
loginForm.addEventListener("submit", function(e){
 e.preventDefault();

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 

 signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
       console.log("User Logged In:", userCredential.user);
       alert("Login successful!");
   })
   .catch((error) => {
       console.log("Login Error:", error.message);
         alert("Login failed: " + error.message);
   })
});
