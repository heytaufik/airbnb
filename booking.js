const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const price = document.getElementById("price");

const rate = 3200;

function calculatePrice() {
    if (!checkin.value || !checkout.value) return;

    const start = new Date(checkin.value);
    const end = new Date(checkout.value);

    const nights = (end - start) / (1000 * 60 * 60 * 24);

    if (nights > 0) {
        const total = nights * rate;
        price.innerText = `Total ₹${total} for ${nights} nights`;
    } else {
        price.innerText = "Check dates properly";
    }
}

checkin.addEventListener("change", calculatePrice);
checkout.addEventListener("change", calculatePrice);
