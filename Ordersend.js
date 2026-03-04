import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");
  const userStatus = document.getElementById("userStatus");
  const logoutBtn = document.getElementById("logoutBtn");

  // Listen for auth state changes
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

  // Handle order submission
  orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to place an order");
      window.location.href = "login.html";
      return;
    }

    const item = document.getElementById("item").value;
    const quantity = Number(document.getElementById("quantity").value);
    const totalPrice = Number(document.getElementById("totalPrice").value);

    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        email: user.email,
        item: item,
        quantity: quantity,
        totalPrice: totalPrice,
        timestamp: serverTimestamp()
      });
      alert("Order placed successfully!");
      orderForm.reset();
    } catch (error) {
      alert("Error placing order: " + error.message);
      console.error("Order error:", error);
    }
  });

  // Handle logout
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      window.location.href = "login.html";
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  });
});