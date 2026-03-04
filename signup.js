// We are importing the necessary functions from the Firebase SDK to 
// initialize the app, handle authentication, and interact with Firestore. 
// We are also importing the auth and db instances from our firebase-config.js file,
// which we will use to create users and store their information in Firestore. JD
import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// We are using DOM manipulation to grab the signup form from Signup.html JD
document.addEventListener("DOMContentLoaded",() => {

    // Obtain the signup form element from the DOM using its ID "signup-form" 
    // and store it in the variable signupForm. JD
    const signupForm = document.getElementById("signup-form");
    
    // We are adding an event listener to the signup form that listens for the "submit" event.
    // Stops page from refreshing on submit. JD
    signupForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        
        // making variables to store the values of the username, email, and password fields from the form. JD
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // We are using a try-catch block to handle any errors that may occur during the signup process. JD
        try {
            // We are using the createUserWithEmailAndPassword function from the Firebase Authentication SDK
            // to create a new user with the provided email and password.  JD
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Save user info to Firestore
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                createdAt: serverTimestamp()
            });

            // If the signup is successful, send an alert and redirect to Login.html. JD
            alert("User Signed Up Successfully!");
            window.location.href = "Login.html"; 

        } catch (error) {
            // If there is an error, send an alert containing the error message. JD
            alert("Signup failed: " + error.message);
            console.error("Signup Error:", error.message);
        }
    })
});