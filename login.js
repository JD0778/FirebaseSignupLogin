import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// We are using DOM manipulation to grab the login form from Login.htmlJD
document.addEventListener("DOMContentLoaded", () => {

  // Obtain the login form using the element ID "login-form" and store it 
  // in the variable loginForm. JD
  const loginForm = document.getElementById("login-form");

  // Adding an Event listener for loginForm that listens for "submit" events. JD
  loginForm.addEventListener("submit", async (event) => {

    // Prevents page from refreshing on submit. JD
    event.preventDefault();

    // We are creating variables to store the values of the email and password fields
    // from the form. JD
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // We are using a try-catch block to handle any errors that 
    // may occur during the login process. JD
    try {
      
      // We use the signInWithEmailAndPassword function from the 
      // Firebase Authentication SDK to sign in the user
      // with the provided email and password. JD
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      window.location.href = "Order.html";

    // If there is an error during the login process, 
    // we catch it and send an alert containing the error message. JD
    } catch (error) {

      alert("Login failed: " + error.message);
      console.error("Login Error:", error.message);

    }
  });
});