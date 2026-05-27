const openPopupButton = document.getElementById("openPopup");
const popupOverlay = document.getElementById("popupOverlay");
const popupBox = document.getElementById("popupBox");
const closePopupButton = document.getElementById("closePopup");
const closeButtons = document.querySelectorAll(".close_btn");

function openPopup() {
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePopup() {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

openPopupButton.addEventListener("click", openPopup);

closePopupButton.addEventListener("click", closePopup);

closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup);
});

popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePopup();
    }
});