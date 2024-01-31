menu_mobile = document.querySelector('.icone-menu');
nav = document.getElementsByTagName('nav')[0];
menu_mobile.addEventListener("click", function() {
    if (nav.classList.length === 0) {
        nav.classList.add("mobile");
        menu_mobile.src = "img/x_icon.svg";
    } else {
        nav.classList.remove("mobile");
        menu_mobile.src = "img/menu_icon.svg"
    }
});