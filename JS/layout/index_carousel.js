document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel_container");

    if (!carouselContainer) {
        return;
    }

    const carousel = carouselContainer.querySelector(".carousel");
    const slides = carousel.querySelectorAll(".slide");
    const leftBtn = carouselContainer.querySelector(".button_container > button:first-child");
    const rightBtn = carouselContainer.querySelector(".button_container > button:last-child");

    if (!carousel || slides.length === 0 || !leftBtn || !rightBtn) {
        return;
    }

    let currentIndex = 0;
    let isMoving = false;
    let autoplayTimer = null;

    const slideMoveMillisecond = 800;
    const autoplayDelay = 5000;

    let carouselMousePosition = {
        startX: 0,
        endX: 0
    };

    function moveToSlide(index) {
        if (isMoving) {
            return;
        }

        isMoving = true;

        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        carousel.style.transitionDuration = `${slideMoveMillisecond}ms`;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        setTimeout(function () {
            isMoving = false;
            playCurrentVideo();
        }, slideMoveMillisecond);
    }

    function moveLeft() {
        moveToSlide(currentIndex - 1);
        restartAutoplay();
    }

    function moveRight() {
        moveToSlide(currentIndex + 1);
        restartAutoplay();
    }

    function playCurrentVideo() {
        const currentSlide = slides[currentIndex];
        const currentVideo = currentSlide.querySelector("video");

        if (!currentVideo) {
            return;
        }

        const playPromise = currentVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(function () {
                // 자동재생이 막히는 경우 무시
            });
        }
    }

    function startAutoplay() {
        stopAutoplay();

        autoplayTimer = setInterval(function () {
            moveToSlide(currentIndex + 1);
        }, autoplayDelay);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
        }
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    function carouselMouseDown(event) {
        carouselMousePosition.startX = event.clientX;
    }

    function carouselMouseUp(event) {
        carouselMousePosition.endX = event.clientX;

        const threshold = 50;
        const diffX = carouselMousePosition.startX - carouselMousePosition.endX;

        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                moveRight();
            } else {
                moveLeft();
            }
        }
    }

    leftBtn.addEventListener("click", moveLeft);
    rightBtn.addEventListener("click", moveRight);

    carouselContainer.addEventListener("mousedown", carouselMouseDown);
    carouselContainer.addEventListener("mouseup", carouselMouseUp);

    carouselContainer.addEventListener("mouseenter", stopAutoplay);
    carouselContainer.addEventListener("mouseleave", startAutoplay);

    playCurrentVideo();
    startAutoplay();
});