
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
