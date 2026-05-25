const container = document.querySelector('.slide_container');

document.querySelector('.next').addEventListener('click', () => {
    container.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

document.querySelector('.prev').addEventListener('click', () => {
    container.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});