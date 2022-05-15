const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('navbar');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', ()=> {
    
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
})



// ------------------------------- Effet machine à écrire -------------------------------

const typeWriter = document.getElementById('typewriter');
let typewriter = new Typewriter(typeWriter, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1000)
    .typeString('<strong>Developpeur Web Full Stack</strong>')
    .pauseFor(500)
    .deleteChars(14)
    .typeString('<span style="color: orange;">HTML 5</span>')
    .pauseFor(500)
    .deleteChars(6)
    .typeString('<span style="color: blue;">CSS 3</span>')
    .pauseFor(500)
    .deleteChars(5)
    .typeString('<span style="color: rgb(199, 165, 16)">JavaScript ES6</span>')
    .pauseFor(500)
    .deleteChars(14)
    .typeString('<span style="color: violet;">PHP 8</span>')
    .pauseFor(500)
    .deleteChars(5)
    .typeString('<span style="color: blue;">SQL</span>')
    .pauseFor(1000)
    .start();