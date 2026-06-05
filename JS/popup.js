const popupOverlay = document.getElementById("popupOverlay");
const closePopupButton = document.getElementById("closePopup");
const closeButtons = document.querySelectorAll(".close_btn");
const checkAll = document.getElementById("checkAll");
const itemChecks = document.querySelectorAll(".item_check");

function openPopup() {
    if (!popupOverlay) {
        return;
    }

    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePopup() {
    if (!popupOverlay) {
        return;
    }

    popupOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

document.addEventListener("click", function (event) {
    const popupOpenImage = event.target.closest(".open_popup");

    if (!popupOpenImage) {
        return;
    }

    openPopup();
});

if (closePopupButton) {
    closePopupButton.addEventListener("click", closePopup);
}

closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup);
});

if (popupOverlay) {
    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePopup();
    }
});

function syncCheckAll() {
    if (!checkAll || itemChecks.length === 0) {
        return;
    }

    let checkedCount = 0;

    itemChecks.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedCount += 1;
        }
    });

    checkAll.checked = checkedCount === itemChecks.length;
}

if (checkAll && itemChecks.length > 0) {
    checkAll.addEventListener("change", function () {
        itemChecks.forEach(function (checkbox) {
            checkbox.checked = checkAll.checked;
        });
    });

    itemChecks.forEach(function (checkbox) {
        checkbox.addEventListener("change", syncCheckAll);
    });

    syncCheckAll();
}
