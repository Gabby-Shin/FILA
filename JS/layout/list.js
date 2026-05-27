document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
    const products = Array.from(productList.querySelectorAll(":scope > li"));
    const paginationButtons = document.querySelectorAll(".pagination_btn");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const productListHeader = document.querySelector(".product_list_header");

    const itemsPerPage = 10;
    let currentPage = 1;

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        products.forEach(function (product, index) {
            if (index >= startIndex && index < endIndex) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    function updateActiveButton(pageNumber) {
        paginationButtons.forEach(function (button) {
            button.classList.remove("active");

            if (Number(button.dataset.page) === pageNumber) {
                button.classList.add("active");
            }
        });
    }

    function moveToProductTop() {
        productListHeader.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function changePage(pageNumber) {
        currentPage = pageNumber;

        showPage(currentPage);
        updateActiveButton(currentPage);
        moveToProductTop();
    }

    paginationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const pageNumber = Number(button.dataset.page);
            changePage(pageNumber);
        });
    });

    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    });

    nextPageButton.addEventListener("click", function () {
        if (currentPage < paginationButtons.length) {
            changePage(currentPage + 1);
        }
    });

    showPage(currentPage);
    updateActiveButton(currentPage);
});