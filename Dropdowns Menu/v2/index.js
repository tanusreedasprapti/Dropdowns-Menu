const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    const menuList = document.querySelector("#food-menu > .menu-list");

    menuList.classList.toggle("open");
    menuToggle.classList.toggle("open");
});