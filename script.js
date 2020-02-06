// Code for the sticky nav

const nav = document.querySelector('#nav');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

// Code for opening tabs from nav bar

const tab = document.getElementsByClassName('tab-content')
const tabLink = document.getElementsByClassName('tablink')
const defaultOpen = document.getElementById('defaultOpen')


function openTab() {

console.log('hello')

}

