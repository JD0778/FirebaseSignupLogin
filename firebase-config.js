import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHgCz-zy_wBe67R0j3Y1dyPH_yVQTutHs",
    authDomain: "learningfirebase-9944a.firebaseapp.com",
    projectId: "learningfirebase-9944a",
    storageBucket: "learningfirebase-9944a.firebasestorage.app",
    messagingSenderId: "481174995932",
    appId: "1:481174995932:web:1e9ae5cc95c51a2f9d8519"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { app, auth, db };