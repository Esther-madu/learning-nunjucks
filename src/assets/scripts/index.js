const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
// const navLogo = document.querySelector("#beans-logo");

// Display Mobilemenu
function handleMenuClick() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", handleMenuClick);