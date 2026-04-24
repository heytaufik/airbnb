import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();

    if (!email || !password) {
        alert("Fill all fields");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        alert("Signup Successful ✅");
        window.location.href = "index.html";

    } catch (error) {

        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
            alert("⚠️ You already have an account. Please login instead.");
            window.location.href = "index.html";
        } 
        
        else if (errorCode === "auth/weak-password") {
            alert("Password should be at least 6 characters.");
        } 
        
        else {
            alert(error.message);
        }
    }
});
