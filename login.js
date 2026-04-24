import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById("loginForm");
const btn = document.querySelector(".login-btn");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert("Fill all fields");
        return;
    }

    btn.innerText = "Logging in...";
    btn.disabled = true;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User:", userCredential.user);
            alert("Login Successful 🔥");

            window.location.href = "mainpage.html";
        })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            btn.innerText = "Login";
            btn.disabled = false;
        });
});
