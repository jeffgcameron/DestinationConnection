// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav')
//     const navLinks = document.querySelectorAll('.nav li');

//     burger.addEventListener('click',() =>{
//         nav.classList.toggle('nav-active');
//     })
// }

// navSlide();

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});