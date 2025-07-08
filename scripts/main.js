
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


// Function to handle form submission

const btn = document.querySelector(".btn-form")
function show(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const show = document.querySelector('.show')
    let div = document.createElement('div')
    div.innerHTML = `<h3>${name} </h3>`
    show.appendChild(div)
}

btn.addEventListener("click", show)