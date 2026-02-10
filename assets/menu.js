document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.getElementById('toogle_menu');
    let menuBox = document.getElementById('header_menu');

    menuButton.addEventListener('click', function () {
        menuBox.classList.toggle('show');
    });
}); 