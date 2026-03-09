import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

// import the database and the necessary functions from the Firebase SDK to interact with Firestore.
// ### step-2:
const pizzaQuery = query(
    collection(db, "orders"),
    where("status", "==", "ready")
    // where takes in three clauses, similar to a for loop, serperated by commas.
    // for(int i=0; i<orders.length; i++){}
);

const q = query(
    collection(db, "orders"),
    where("item", "==", "Pizza")
   );   
   

// snapshot returns an object that has a list of documents
const snapshot = await getDocs(pizzaQuery);
const snapshot2 = await getDocs(q);

// ### step-3: Loop through the results
snapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});

// ### step-4: Display the results in the html

// Set list variable to the UL element with the id "orders" in the HTML document. 
const list = document.getElementById("orders");

snapshot2.forEach((doc) => {
    //creating another variable called data to store the data of the current document in the loop. This is just for convenience so we don't have to write doc.data() every time we want to access the data of the current document. 
    const data = doc.data();
    //creating a new list item element using document.createElement("li") and storing it in the variable li. This will be used to display the order information in the HTML list.
    const li = document.createElement("li");
    // Set li's text content to the order information
    li.textContent = data.name + " - " + data.item + " - " + data.status;
    // append the li to the UL "Orders"
    list.appendChild(li);
});

