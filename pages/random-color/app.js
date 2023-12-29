const button = document.querySelector('button');
const color = document.getElementById('color');

function randomHexColor(){
    let range = '0123456789ABCDEF';
    let colorHex = '#';
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random()*16);
        colorHex += range[randomNumber];
    }

    return colorHex;
}

button.addEventListener('click', function(){
    let randomColor = randomHexColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
})