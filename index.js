// Elements select karo
const btn = document.querySelector('.login-btn');
const emailInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");

// Button click
btn.addEventListener('click', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // 🔴 Validation
    if (email === "" || password === "") {
        alert("Fill all fields");
        return;
    }

    // ⏳ Loading effect
    btn.innerText = "Loading...";
    btn.disabled = true;

    setTimeout(() => {

        // Saved data lo
        const savedEmail = localStorage.getItem("userEmail");
        const savedPass = localStorage.getItem("userPass");

        // 🔐 Check login
        if (email === savedEmail && password === savedPass) {
            alert("Login Successful ✅");
        } else {
            alert("Wrong Email or Password ❌");
        }

        btn.innerText = "Login";
        btn.disabled = false;

    }, 1000);
});


// 💫 Ripple effect (optional but nice UI)
btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();

    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});
localStorage.setItem("userEmail", email);
localStorage.setItem("userPass", password);
const savedEmail = localStorage.getItem("userEmail");
const savedPass = localStorage.getItem("userPass");
if(email === savedEmail && password === savedPass){
   alert("Login Successful");
}

