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

