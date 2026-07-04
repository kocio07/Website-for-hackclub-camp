// hi jenin or someone else who is reading this, if u see these comments in this script 
// these are in my nation language so i can remember what
//  is certain function doing i was using w3schools and other tutorials.
// i also use Claude AI few times to explain something to me. Thanks!

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

// to sa zmienne z danymi kordami myszki
let mouseX = 0, mouseY = 0;

// a to zmienne z kordami obwodki
let ringX = 0, ringY = 0;

//  odpala za kazdym razem jak rusze myszja
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;  // kordy x myszka na ekranie
  mouseY = e.clientY;  // kordy y myszki

  // podazqanie korpki za myszka 
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

// animacja obwodki czyli opoznienie (w3schools)
function animate() {
  ringX += (mouseX - ringX) * 0.3;
  ringY += (mouseY - ringY) * 0.3;

  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';

  // odswiezenia ekranu 
  requestAnimationFrame(animate);
}
animate(); // petla animacja

// znajdudujen linki
const interactiveElements = document.querySelectorAll('a, button');

// hover 
interactiveElements.forEach(el => {
  //gdy wchodzi to sie powieksza
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  
  // gdy wychodzi to wraca tak jak bylo
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});