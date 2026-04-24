document.addEventListener("DOMContentLoaded", () => {

    const reserveBtn = document.getElementById("reserveBtn");

    if (reserveBtn) {
        reserveBtn.addEventListener("click", () => {
            window.location.href = "payment.html";
        });
    }

});
console.log(localStorage.getItem("propertyName"));
const name = localStorage.getItem("propertyName");

document.getElementById("title").innerText = name;
