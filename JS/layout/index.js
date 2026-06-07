document.addEventListener("DOMContentLoaded", function () {
    const trendButtons = document.querySelectorAll(".trend_btn");
    const trendingProductList = document.getElementById("trendingProductList");
    const footerAccordionItems = document.querySelectorAll("footer .site_nav > div");
    const footerAccordionButtons = document.querySelectorAll("footer .footer_accordion_btn");

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
            footerAccordionItems.forEach(function (item, index) {
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
