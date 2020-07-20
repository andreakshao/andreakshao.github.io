const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    const navbar = document.getElementById('nav')

    
    menu.addEventListener('click',()=>{
        // Toggle navigation
        nav.classList.toggle('navActive');
        
        navbar.style.background = "#A79797";
    
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        // Menu animation
        menu.classList.toggle('toggle');
    });    
}

const navBarTransparent = () => {
    var nav = document.getElementById('nav');
    window.onscroll = function(){
        if (window.pageYOffset > 100) {
                nav.style.background = "#A79797";
            }
        else {
            nav.style.background = "transparent"
        }
    }
}

navBarTransparent();
navSlide();