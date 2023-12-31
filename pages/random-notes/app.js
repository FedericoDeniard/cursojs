let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indiceAleatorio = randomNumber(0, quotes.length);
    citaElem.innerText = `"${quotes[indiceAleatorio].texto}"`;
    autorElem.innerText = quotes[indiceAleatorio].autor;

}


cambiarCita();

botonElem.addEventListener('click', cambiarCita);

const savedTheme = window.getSavedTheme;
console.log(savedTheme);