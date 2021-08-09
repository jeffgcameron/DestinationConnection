const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const navLinks = document.querySelectorAll('.nav li');

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
    })
}

navSlide();