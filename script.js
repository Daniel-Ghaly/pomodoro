const countdown = document.querySelector('#countdown')
let counter = 0;
let a = 0;
let b = 0;
let isPaused = true;
let pomodoroTally = 0;
let seconds = 1500;


let pomodoroTimer = document.querySelector('#timerContainer1').innerHTML;
let shortBreakTimer = document.querySelector('#timerContainer2').value;
let longBreakTimer = document.querySelector('#timerContainer3').value;


// let seconds = Number(slider.value);
const pause = document.querySelector('#pause')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const pomodorosCompleted = document.querySelector('#pomodorosCompleted')
const beep = document.querySelector('#beep')


pomodoroSlider.addEventListener('input', function(e) {

    pomodoroTimer = Number(e.target.value);

});


shortBreakSlider.addEventListener('input', function(e) {

    shortBreakTimer = Number(e.target.value);

});

longBreakSlider.addEventListener('input', function(e) {

    longBreakTimer = Number(e.target.value);

});



pause.addEventListener('click', function() {

    isPaused = true
})

start.addEventListener('click', function() {

    isPaused = false;
})

reset.addEventListener('click', function() {

    isPaused = true;
    if (counter % 2 == 0 && counter % 7 != 0) {
        countdown.textContent = '25:00'
        seconds = pomodoroTimer;

    } else if (counter == 0) {
        countdown.textContent = '25:00'
        seconds = pomodoroTimer;

    } else if (counter % 7 == 0 && counter != 0) {
        countdown.textContent = '30:00'
        seconds = longBreakTimer;


    } else if (counter % 2 == 1 && counter & 7 != 0) {
        countdown.textContent = '5:00'
        seconds = shortBreakTimer;

    }

})


let timer = function() {

    if (counter == 0) {
        seconds = pomodoroTimer;
    }

    if (isPaused === false) {
        if (seconds > 0) {
            seconds -= 1
            if (seconds < 60) {
                a = '0'
                b = seconds
            } else {
                a = Math.floor(seconds / 60);
                b = seconds % 60
            }

            if (b <= 9) {
                countdown.textContent = a + ':0' + b
            } else { countdown.textContent = a + ':' + b }
        }

        if (seconds == 0) {

            beep.play()
            counter++
            console.log('counter: ' + counter)



            if (counter % 2 == 0 && counter % 8 != 7) {
                seconds = 5

            } else if (counter % 8 == 7) {
                seconds = 1800
                pomodoroTally++
                pomodorosCompleted.textContent = 'Pomodoros Completed: ' + (pomodoroTally)

            } else if (counter % 2 == 1 && counter % 8 != 7) {
                seconds = 300
                pomodoroTally++
                pomodorosCompleted.textContent = 'Pomodoros Completed: ' + (pomodoroTally)


            }

        }

    }

}

let pomodoro = setInterval(timer, 1000);

console.log(pomodoro)