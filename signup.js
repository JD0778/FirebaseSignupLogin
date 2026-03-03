import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const signupForm = document.getElementById("signup-form");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHgCz-zy_wBe67R0j3Y1dyPH_yVQTutHs",
  authDomain: "learningfirebase-9944a.firebaseapp.com",
  projectId: "learningfirebase-9944a",
  storageBucket: "learningfirebase-9944a.firebasestorage.app",
  messagingSenderId: "481174995932",
  appId: "1:481174995932:web:1e9ae5cc95c51a2f9d8519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add an event listener to handle form submission
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User Created:", userCredential.user);
            alert("User created successfully!");
        })
        .catch((error) => {
            console.log("Error:", error.message);
            alert("idiot didnt work");
        });
});
