const rates = document.querySelectorAll(".rate");

let selectedRate = 0; 

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        selectedRate = parseInt(rate.getAttribute("data-rate"));
        const isActive = rate.classList.contains("active");

        if (isActive) {
         
            resetRates();
        } else {
            
            resetRates();
            highlightRates(selectedRate);

            
            selectedRate = selectedRate; 
        }
    });
});

function getSelectedRate() {
    return selectedRate;
}

function resetRates() {
    rates.forEach((rate) => {
        rate.classList.remove("active");
    });
}

function highlightRates(selectedRate) {
    rates.forEach((rate, index) => {
        if (index < selectedRate) {
            rate.classList.add("active");
        }
    });
}
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    const selectedRate = getSelectedRate();

    if (selectedRate > 0) {
        window.location.href = `thanks.html?rating=${selectedRate}`;
    } else {
        alert('Choose a rate before submitting!');
    }
});