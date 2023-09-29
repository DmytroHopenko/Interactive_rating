const urlParams = new URLSearchParams(window.location.search);
const rating = urlParams.get("rating");
const ratingResultSpan = document.getElementById("rating-result");

if (rating !== null) {
ratingResultSpan.textContent = `You selected ${rating} out of 5`;
} else {
ratingResultSpan.textContent = "Rating not found!";
}