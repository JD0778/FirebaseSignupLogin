const orderForm = document.getElementById("orderForm");
//We are using DOM manipulation to grab the form from Order.html

//We want to listen for the submit event on the form, and when it happens, we want to prevent the default behavior (which is to refresh the page) and instead run our own code to send the order data to Firestore.
orderForm.addEventListener("submit", async(event) => {

 event.preventDefault();//prevent the default form submission behavior

 const user = auth.currentUser;
 //Whoever is currently logged in, we want to associate the order with that user. If there is no user logged in, we want to alert the user that they must be logged in to place an order and then return from the function to prevent any further code from running.

 if (!user) {
   alert("You must be logged in.");
   return;
 }
//if user is not logged in, send an alert and stop the function from running

 const item = document.getElementById("item").value;
 const quantity = Number(document.getElementById("quantity").value);
 const total = Number(document.getElementById("total").value);
 //We are grabbing the values from the form and converting them to the apporopiate data types (quantity and total should be numbers, while item is a string)

 //try-catch is done for error handling
 try {
   await addDoc(collection(db, "orders"), {
     userId: user.uid,
     item: item,
     quantity: quantity,
     total: total,
     createdAt: serverTimestamp()
   });

   alert("Order placed successfully!");
   orderForm.reset();

 } catch (error) {
   console.error("Error adding order:", error);
 }
});
