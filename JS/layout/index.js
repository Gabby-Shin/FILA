document.addEventListener("DOMContentLoaded", function () {
    const trendButtons = document.querySelectorAll(".trend_btn");
    const trendingProductList = document.getElementById("trendingProductList");

    if (!trendingProductList || trendButtons.length === 0) {
        return;
    }

    const productItems = trendingProductList.querySelectorAll(":scope > li");

    function showCategory(category) {
        productItems.forEach(function (item) {
            if (item.dataset.category === category) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }

    function updateActiveButton(activeButton) {
        trendButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        activeButton.classList.add("active");
    }

    trendButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const category = button.dataset.category;

            showCategory(category);
            updateActiveButton(button);
        });
    });

    showCategory("mytee");
});