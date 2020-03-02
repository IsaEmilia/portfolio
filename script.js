// Code for the sticky nav

const nav = document.querySelector('#nav');
let topOfNav = nav.offsetTop;
let header = document.getElementById('header')

function fixNav(callMe) {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        
    } else {
      document.body.classList.remove('fixed-nav')
      document.body.style.paddingTop = 0;
    }
  } 


window.addEventListener ('load', fixNav)
window.addEventListener('scroll', fixNav);


// // Gallery

// const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//   console.log('Hello');
//   this.classList.toggle('open');
// }

// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes('grid')) {
//     this.classList.toggle('open-active');
//   }
// }

// panels.forEach(panel => panel.addEventListener('onmouseover', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// // Open the Modal
// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }
  
//   // Close the Modal
//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   // Next/previous controls
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   // Thumbnail image controls
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//    let i;
//    let slides = document.getElementsByClassName("mySlides");
//    let dots = document.getElementsByClassName("demo");
//    let captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }

