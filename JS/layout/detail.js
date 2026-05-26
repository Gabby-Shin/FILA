
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
