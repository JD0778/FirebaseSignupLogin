import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChvVHtd9NiMgn_ARCb-zExK35eXh9TE4U",
  authDomain: "fir-demo-ddcbc.firebaseapp.com",
  projectId: "fir-demo-ddcbc",
  storageBucket: "fir-demo-ddcbc.firebasestorage.app",
  messagingSenderId: "160899992298",
  appId: "1:160899992298:web:329b278ae39d54934c2593"
};
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { app, auth, db };