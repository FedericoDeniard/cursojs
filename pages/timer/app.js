const chronometer = document.getElementById('timer');
const startStopButton = document.getElementById('start-stop');
const restartButton = document.getElementById('restart');


let [hours, min, sec] = [0,0,0];

let timer;
let timerState = 'paused';

function updateTimer(){
    sec++;
    if (sec / 60 === 1){
        sec = 0;
        min++;
            if (min / 60 === 1){
                min = 0;
                hours++;
            }
    }
    const secText = asignText(sec);
    const minText = asignText(min);
    const hoursText = asignText(hours);

    chronometer.innerText = `${hoursText}:${minText}:${secText}`;

}

function asignText(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}

startStopButton.addEventListener('click', function(){
    if(timerState === 'paused'){
        timer = window.setInterval(updateTimer, 1000);
        startStopButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        startStopButton.classList.remove('start');
        startStopButton.classList.add('stop');
        timerState = 'active';
    } else{
        window.clearInterval(timer);
        startStopButton.innerHTML = '<i class="bi bi-play-fill"></i>';
        startStopButton.classList.add('start');
        startStopButton.classList.remove('stop');
        timerState = 'paused';

    }
});

restartButton.addEventListener('click', function(){
    window.clearInterval(timer);
    sec=0;
    min=0;
    hours=0;
    startStopButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    chronometer.innerText =`00:00:00`;
    startStopButton.classList.add('start');
    startStopButton.classList.remove('stop');
    timerState = 'paused';
})