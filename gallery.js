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


window.addEventListener('load', fixNav)
window.addEventListener('scroll', fixNav);



const elements = document.getElementsByClassName('column');



function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
    console.log('i work');
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
    console.log('i work too');
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}


// Modal styling

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const span = document.getElementsByClassName('close')[0];

const image = document.querySelectorAll('.open-modal').forEach((i) => {
        console.log(i);
        i.addEventListener("click", (event) => {
            modal.style.display = "block"
            console.log(event);
            
            modalImg.src = event.target.src
        })
      
})

span.addEventListener('click', function () {
    modal.style.display = "none"
    });
