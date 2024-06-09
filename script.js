document.addEventListener('DOMContentLoaded', () => {
    const moreMenu = document.querySelector('.more-menu');
    const moreButton = document.querySelector('.sidebar ul li a[href="#"]');

    moreButton.addEventListener('click', () => {
        moreMenu.classList.toggle('show');
    });
});
