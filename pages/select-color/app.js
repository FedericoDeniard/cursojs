const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;

redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

function changeColor(red, green, blue){
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB;
}

redInput.addEventListener('change', (e) =>{
    red = e.target.value;
    redText.innerText = red;
    changeColor(red, green, blue)
})

greenInput.addEventListener('change', (e) =>{
    green = e.target.value;
    greenText.innerText = green;
    changeColor(red, green, blue)
})

blueInput.addEventListener('change', (e) =>{
    blue = e.target.value;
    blueText.innerText = blue;
    changeColor(red, green, blue)
})