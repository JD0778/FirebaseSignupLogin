import { doc, updateDoc, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db, auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


const userStatus = document.getElementById("userStatus");

onAuthStateChanged(auth, (user) => {
    if (user) {
      userStatus.textContent = "Logged in as: " + user.email;
    } else {
      userStatus.textContent = "Not logged in. Redirecting...";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }
});

const button = document.getElementById("updateBtn");

button.addEventListener("click", async () => {
  
    const newStatus = document.getElementById("statusInput").value;
    
    const orderRef = doc(db, "orders", "order1");
    
    await updateDoc(orderRef, {
        status: newStatus
    });
  
});
  