
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
