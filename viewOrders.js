// This file retrieves and displays orders from the Firestore database
import {db} from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Get all orders from the "orders" collection
const Orders = await getDocs(collection(db, "orders"));

// create variable to store the list element where orders will be displayed (connects to the orderList element from ViewOrders.html)
const list = document.getElementById("orderList");

// Loop through orders and display them in the list
Orders.forEach((doc) => {

    // Get the data for each order
    const data = doc.data();

    // Create a list item for each order and append it to the list
    const li = document.createElement("li");

    // Display the order details 
    li.textContent = data.name + " ordered " + data.quantity + " " + data.item;
    
    // Append the list item to the order list
    list.appendChild(li);
});
