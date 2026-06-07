document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
    const products = Array.from(productList.querySelectorAll(":scope > li"));
    const paginationButtons = document.querySelectorAll(".pagination_btn");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const productListHeader = document.querySelector(".product_list_header");
    const imageInfoBlocks = document.querySelectorAll(".image_info");

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

    imageInfoBlocks.forEach(function (block) {
        block.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

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


document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
    const products = Array.from(productList.querySelectorAll(":scope > li"));
    const paginationButtons = document.querySelectorAll(".pagination_btn");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const productListHeader = document.querySelector(".product_list_header");
    const imageInfoBlocks = document.querySelectorAll(".image_info");
    const footerAccordionItems = document.querySelectorAll("footer .site_nav > div");
    const footerAccordionButtons = document.querySelectorAll("footer .footer_accordion_btn");

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

    imageInfoBlocks.forEach(function (block) {
        block.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

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

    if (footerAccordionItems.length > 0 && footerAccordionButtons.length > 0) {
        const mobileAccordionQuery = window.matchMedia("(max-width: 480px)");

        function setAccordionState(item, expanded) {
            const button = item.querySelector(".footer_accordion_btn");
            const panel = item.querySelector("ul");

            if (!button || !panel) {
                return;
            }

            item.classList.toggle("is-open", expanded);
            button.setAttribute("aria-expanded", String(expanded));
            panel.setAttribute("aria-hidden", String(!expanded));

            if (mobileAccordionQuery.matches) {
                panel.style.maxHeight = expanded ? panel.scrollHeight + "px" : "0px";
            } else {
                panel.style.maxHeight = "";
                panel.removeAttribute("aria-hidden");
            }
        }

        function syncAccordionMode() {
            footerAccordionItems.forEach(function (item) {
                setAccordionState(item, !mobileAccordionQuery.matches);
            });
        }

        footerAccordionButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                if (!mobileAccordionQuery.matches) {
                    return;
                }

                const item = button.closest(".site_nav > div");

                if (!item) {
                    return;
                }

                const isOpen = item.classList.contains("is-open");

                footerAccordionItems.forEach(function (otherItem) {
                    setAccordionState(otherItem, false);
                });

                setAccordionState(item, !isOpen);
            });
        });

        syncAccordionMode();
        mobileAccordionQuery.addEventListener("change", syncAccordionMode);
    }

    showPage(currentPage);
    updateActiveButton(currentPage);
});