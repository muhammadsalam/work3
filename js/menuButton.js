const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__inner-nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('header__menu-button--active');
    menu.classList.toggle('header__inner-nav--active');
});

document.addEventListener('click', (event) => {
    const target = event.target;

    if ((target !== menu && !menu.contains(target) && target !== menuButton && !menuButton.contains(target))
        || target.classList.contains('header__nav-link')) {
        menuButton.classList.remove('header__menu-button--active');
        menu.classList.remove('header__inner-nav--active');
    }
});
