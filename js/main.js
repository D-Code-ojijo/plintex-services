/*SHOW MENU */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*SCROLL SECTION ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*CHANGE BACKGROUND HEADER*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*SHOW SCROLL TOP*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// automatic 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

/*MIXITUP FILETR PORTFOLIO*/
const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});


/*link active portfolio */
// const linkPortfolio = document.querrySelectorAll('.portfolio_item')

// function activePortfolio() {
//     if (linkPortfolio) {
//         linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
//         this.classList.add('active-portfolio')
//     }
// }
// linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


/**SWIPER CAROUSEL */
const swiper = new Swiper('.bd-container', {
        spaceBetween: 16,
        loop: true,
        grubCursor: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPeriew: 2,
            },
            1024: {
                slidesPerview: 3,
            },
        }

    })
// gsap
gsap.to(".bg_img", {duration: 2, x:300});
    
    /*GSAP ANIMATION*/
gsap.from('.top_img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home_data', { opacity: 0, duration: 2, delay: .8, x: 25 })
gsap.from('.home_greeting, .home_name, .home_profession, .home_button', { opacity: 0, duration: 2, delay: .1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.logo_img, .nav_toggle', { opacity: 0, duration: 2, delay: .1, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav_item', { opacity: 0, duration: 2, delay: .1, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.cname', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })
