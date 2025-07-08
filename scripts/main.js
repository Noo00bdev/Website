
let menuList = document.getElementById("menuList");
let icon = document.querySelector(".menu-icon-img")

function toggleMenu(){
    menuList.classList.toggle("open");
    if (icon.getAttribute('src').includes('menu.png')) {
        icon.setAttribute('src', 'Logo/close.png');
    } else {
        icon.setAttribute('src', 'Logo/menu.png');
    }   
}
function toggleMenu_black(){
    menuList.classList.toggle("open");
    if (icon.getAttribute('src').includes('menu-black.png')) {
        icon.setAttribute('src', 'Logo/close-black.png');
    } else {
        icon.setAttribute('src', 'Logo/menu-black.png');
    }   
}
