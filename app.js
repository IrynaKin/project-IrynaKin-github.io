// Slider
$(".slider-block").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
})

// Burger menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click",function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})
// Modal
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal-close-btn");

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/3) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll);


closeBtn.addEventListener("click", closeModal)

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
    console.log(e.target)
    if(e.target===modal) {
        closeModal()
    }
})