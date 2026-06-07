
    document.addEventListener('DOMContentLoaded', () => {
    const dates = document.querySelectorAll('.date');

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    dates.forEach(el => {
    el.textContent = `${year}.${month}.${day}`;
});
});

    document.addEventListener("DOMContentLoaded", function () {
        const checkpointImages = document.querySelectorAll("#checkpoint .card .image_container");

        if (checkpointImages.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.25
            }
        );

        checkpointImages.forEach(function (image) {
            observer.observe(image);
        });
    });
    /******************************/
    document.addEventListener("DOMContentLoaded", function () {
        const checkpointImages = document.querySelectorAll("#checkpoint .card .image_container");
        const modelCutImages = document.querySelectorAll("#model_cut .image_container_card");

        const revealItems = [
            ...checkpointImages,
            ...modelCutImages
        ];

        if (revealItems.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.25
            }
        );

        revealItems.forEach(function (item) {
            observer.observe(item);
        });
    });


    // ... existing code ...

    document.addEventListener("DOMContentLoaded", function () {
        const checkpointPrevButton = document.querySelector("#checkpoint .buttons button:first-child");
        const checkpointNextButton = document.querySelector("#checkpoint .buttons button:last-child");
        const checkpointSlider = document.querySelector("#checkpoint .cardbox");

        const modelCutPrevButton = document.querySelector("#model_cut .buttons button:first-child");
        const modelCutNextButton = document.querySelector("#model_cut .buttons button:last-child");
        const modelCutSlider = document.querySelector("#model_cut .image_container");

        function slideByCard(slider, direction) {
            if (!slider) {
                return;
            }

            const firstItem = slider.children[0];

            if (!firstItem) {
                return;
            }

            const gap = 16;
            const moveSize = firstItem.getBoundingClientRect().width + gap;

            slider.scrollBy({
                left: moveSize * direction,
                behavior: "smooth"
            });
        }

        if (checkpointPrevButton && checkpointNextButton && checkpointSlider) {
            checkpointPrevButton.addEventListener("click", function () {
                slideByCard(checkpointSlider, -1);
            });

            checkpointNextButton.addEventListener("click", function () {
                slideByCard(checkpointSlider, 1);
            });
        }

        if (modelCutPrevButton && modelCutNextButton && modelCutSlider) {
            modelCutPrevButton.addEventListener("click", function () {
                slideByCard(modelCutSlider, -1);
            });

            modelCutNextButton.addEventListener("click", function () {
                slideByCard(modelCutSlider, 1);
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const footerAccordionItems = document.querySelectorAll("footer .site_nav > div");
        const footerAccordionButtons = document.querySelectorAll("footer .footer_accordion_btn");

        if (footerAccordionItems.length === 0 || footerAccordionButtons.length === 0) {
            return;
        }

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
    });