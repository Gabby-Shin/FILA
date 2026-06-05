const slideContainer = document.querySelector(".slide_container");

if (slideContainer) {
    const originalSlideItems = Array.from(slideContainer.children);

    originalSlideItems.forEach((item) => {
        const cloneItem = item.cloneNode(true);
        cloneItem.setAttribute("aria-hidden", "true");
        slideContainer.appendChild(cloneItem);
    });

    let animationId = null;
    let isDragging = false;
    let isHovering = false;
    let startX = 0;
    let startScrollLeft = 0;
    let dragDistance = 0;

    const slideSpeed = 0.8;

    function getHalfScrollWidth() {
        return slideContainer.scrollWidth / 2;
    }

    function resetInfiniteScroll() {
        const halfScrollWidth = getHalfScrollWidth();

        if (slideContainer.scrollLeft >= halfScrollWidth) {
            slideContainer.scrollLeft -= halfScrollWidth;
        }

        if (slideContainer.scrollLeft <= 0) {
            slideContainer.scrollLeft += halfScrollWidth;
        }
    }

    function autoSlide() {
        if (!isHovering && !isDragging) {
            slideContainer.scrollLeft += slideSpeed;
            resetInfiniteScroll();
        }

        animationId = requestAnimationFrame(autoSlide);
    }

    function startAutoSlide() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        animationId = requestAnimationFrame(autoSlide);
    }

    function getPageX(event) {
        if (event.touches && event.touches.length > 0) {
            return event.touches[0].pageX;
        }

        return event.pageX;
    }

    slideContainer.addEventListener("mouseenter", () => {
        isHovering = true;
    });

    slideContainer.addEventListener("mouseleave", () => {
        isHovering = false;
        isDragging = false;
        slideContainer.classList.remove("dragging");
    });

    slideContainer.addEventListener("mousedown", (event) => {
        isDragging = true;
        isHovering = true;
        startX = getPageX(event);
        startScrollLeft = slideContainer.scrollLeft;
        dragDistance = 0;
        slideContainer.classList.add("dragging");
    });

    slideContainer.addEventListener("mousemove", (event) => {
        if (!isDragging) {
            return;
        }

        event.preventDefault();

        const currentX = getPageX(event);
        const moveX = currentX - startX;

        dragDistance = Math.abs(moveX);
        slideContainer.scrollLeft = startScrollLeft - moveX;
        resetInfiniteScroll();
    });

    slideContainer.addEventListener("mouseup", () => {
        isDragging = false;
        slideContainer.classList.remove("dragging");
    });

    slideContainer.addEventListener("touchstart", (event) => {
        isDragging = true;
        isHovering = true;
        startX = getPageX(event);
        startScrollLeft = slideContainer.scrollLeft;
        dragDistance = 0;
    });

    slideContainer.addEventListener("touchmove", (event) => {
        if (!isDragging) {
            return;
        }

        const currentX = getPageX(event);
        const moveX = currentX - startX;

        dragDistance = Math.abs(moveX);
        slideContainer.scrollLeft = startScrollLeft - moveX;
        resetInfiniteScroll();
    });

    slideContainer.addEventListener("touchend", () => {
        isDragging = false;
        isHovering = false;
    });

    slideContainer.addEventListener("click", (event) => {
        if (dragDistance > 5) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, true);

    window.addEventListener("resize", resetInfiniteScroll);

    startAutoSlide();
}
