// OPENT EN SLUIT HET HAMBURGER MENU

// selecteert de elementen die aangesproken moeten worden
const hamMenu = document.querySelector('.ham-menu');
const hamItems = document.querySelector('.ham-items');

// voegt een functie toe die moet gebeuren bij het klikken
hamMenu.addEventListener('click', openMenu)

// vertelt wat de functie moet zijn (een class togglen)
function openMenu(){
    hamMenu.classList.toggle('active')
    hamItems.classList.toggle('active')
}


// LAAT HARRY DRAAIEN

// selecteert het element wat aangesproken moet worden
let rotate = document.querySelector('.harry')

// voegt een funnctie toe die moet gebeuren bij het klikken
rotate.addEventListener('click', harryRotate)

// vertelt wat de functie moet zijn (harry laten draaien met keyframes)
function harryRotate() {
  rotate.classList.toggle('rotate')
}

// zorgt dat de class die is toegevoegd eraf gaat als de animatie klaar is
rotate.addEventListener('animationend', harryRotate)