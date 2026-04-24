// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0b5jHmIvIlPansH0p_qoUvxsrt1k7DBk",
  authDomain: "airbnb-login-4e12e.firebaseapp.com",
  projectId: "airbnb-login-4e12e",
  storageBucket: "airbnb-login-4e12e.firebasestorage.app",
  messagingSenderId: "708441069324",
  appId: "1:708441069324:web:4308db8ec7d7c3b572db29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
