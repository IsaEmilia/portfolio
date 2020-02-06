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

// Gallery

let modal = document.getElementById('myModal');
let img = document.getElementById('myImg');
let modalImg = document.getElementById('img01');
let captionTxt = document.getElementById('caption');
let span = document.getElementsByClassName('close')[0];

img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.alt;
    captionTxt.innerHTML = this.alt;

}

span.onclick = function(){
    modal.style.display = 'none'
}


function openImg() {

}

