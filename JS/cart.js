window.addEventListener('DOMContentLoaded', function () {
    const selectAll = document.querySelector('#selectAll');
    const cartChecks = document.querySelectorAll('.cart_check');

    if (!selectAll || cartChecks.length === 0) {
        return;
    }

    selectAll.addEventListener('change', function () {
        cartChecks.forEach(function (checkbox) {
            checkbox.checked = selectAll.checked;
        });
    });

    cartChecks.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const checkedCount = document.querySelectorAll('.cart_check:checked').length;

            selectAll.checked = checkedCount === cartChecks.length;
        });
    });
});
