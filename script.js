const countdown = document.querySelector('#countdown')
let counter = 0;
let a = 0;
let b = 0;
let isPaused = true;
let hasStarted = false;
let pomodoroTally = 0;
let initialCustomPomodoro = 25;
let initialCustomShortBreak = 5;
let initialCustomLongBreak = 30;
let seconds = 1500;
let pomodoroSeconds = 1500;
let shortBreakSeconds = 300;
let longBreakSeconds = 1800;


let display1 = document.querySelector('.display1');
let display2 = document.querySelector('.display2');
let display3 = document.querySelector('.display3');


// let pomodoroSeconds = Number(slider.value);
const pause = document.querySelector('#pause')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const pomodorosCompleted = document.querySelector('#pomodorosCompleted')
const beep = document.querySelector('#beep')
const arrowUp1 = document.querySelector('.arrow-up1')
const arrowUp2 = document.querySelector('.arrow-up2')
const arrowUp3 = document.querySelector('.arrow-up3')
const arrowDown1 = document.querySelector('.arrow-down1')
const arrowDown2 = document.querySelector('.arrow-down2')
const arrowDown3 = document.querySelector('.arrow-down3')





arrowUp1.addEventListener('click', function(e) {
    initialCustomPomodoro++
    display1.innerHTML = initialCustomPomodoro + ':00'

    pomodoroSeconds = display1.innerHTML[0] + display1.innerHTML[1]
    pomodoroSeconds = Number(pomodoroSeconds)
    pomodoroSeconds = 60 * pomodoroSeconds
});

arrowDown1.addEventListener('click', function(e) {
    initialCustomPomodoro--
    display1.innerHTML = initialCustomPomodoro + ':00'
    if (display1.innerHTML.length == 5) {
        pomodoroSeconds = display1.innerHTML[0] + display1.innerHTML[1]
        pomodoroSeconds = Number(pomodoroSeconds)
        pomodoroSeconds = 60 * pomodoroSeconds
    } else {
        pomodoroSeconds = display1.innerHTML[0]
        pomodoroSeconds = Number(pomodoroSeconds)
        pomodoroSeconds = 60 * pomodoroSeconds
    }

    console.log(display1.innerHTML.length)

});
arrowUp2.addEventListener('click', function(e) {
    initialCustomShortBreak++
    display2.innerHTML = initialCustomShortBreak + ':00'

    if (display2.innerHTML.length == 5) {
        shortBreakSeconds = display2.innerHTML[0] + display2.innerHTML[1]
        shortBreakSeconds = Number(shortBreakSeconds)
        shortBreakSeconds = 60 * shortBreakSeconds
    } else {
        shortBreakSeconds = display2.innerHTML[0]
        shortBreakSeconds = Number(shortBreakSeconds)
        shortBreakSeconds = 60 * shortBreakSeconds
    }

});

arrowDown2.addEventListener('click', function(e) {
    initialCustomShortBreak--
    display2.innerHTML = initialCustomShortBreak + ':00'
    if (display2.innerHTML.length == 5) {
        shortBreakSeconds = display2.innerHTML[0] + display2.innerHTML[1]
        shortBreakSeconds = Number(shortBreakSeconds)
        shortBreakSeconds = 60 * shortBreakSeconds
    } else {
        shortBreakSeconds = display2.innerHTML[0]
        shortBreakSeconds = Number(shortBreakSeconds)
        shortBreakSeconds = 60 * shortBreakSeconds
    }
});

arrowUp3.addEventListener('click', function(e) {
    initialCustomLongBreak++
    display3.innerHTML = initialCustomLongBreak + ':00'
    longBreakSeconds = display3.innerHTML[0] + display3.innerHTML[1]
    longBreakSeconds = Number(longBreakSeconds)
    longBreakSeconds = 60 * longBreakSeconds
});

arrowDown3.addEventListener('click', function(e) {
    initialCustomLongBreak--
    display3.innerHTML = initialCustomLongBreak + ':00'

    if (display3.innerHTML.length == 5) {
        longBreakSeconds = display3.innerHTML[0] + display3.innerHTML[1]
        longBreakSeconds = Number(longBreakSeconds)
        longBreakSeconds = 60 * longBreakSeconds
    } else {
        longBreakSeconds = display3.innerHTML[0]
        longBreakSeconds = Number(longBreakSeconds)
        longBreakSeconds = 60 * longBreakSeconds
    }

});



/*pomodoroSlider.addEventListener('input', function(e) {

    pomodoroTimer = Number(e.target.value);

});


shortBreakSlider.addEventListener('input', function(e) {

    shortBreakTimer = Number(e.target.value);

});

longBreakSlider.addEventListener('input', function(e) {

    longBreakTimer = Number(e.target.value);

});

*/



pause.addEventListener('click', function() {

    isPaused = true
})

start.addEventListener('click', function() {

    isPaused = false;
    hasStarted = true;
})

reset.addEventListener('click', function() {

    isPaused = true;
    if (counter % 2 == 0 && counter % 8 == 7) {
        countdown.innerHTML = display1.innerHTML
        seconds = pomodoroSeconds


    } else if (counter == 0) {
        countdown.innerHTML = display1.innerHTML
        seconds = pomodoroSeconds

    } else if (counter % 8 == 7) {
        countdown.innerHTML = display3.innerHTML
        seconds = longBreakSeconds


    } else if (counter % 2 == 1 && counter % 8 == 7) {
        countdown.innerHTML = display2.innerHTML
        seconds = shortBreakSeconds

    }

})



let timer = function() {

    if (hasStarted == false) {
        seconds = pomodoroSeconds
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
                countdown.innerHTML = a + ':0' + b
            } else { countdown.innerHTML = a + ':' + b }
        }



        if (seconds == 0) {

            beep.play()
            counter++

            console.log(counter)



            if (counter % 2 == 0 && counter % 8 != 7) {
                seconds = pomodoroSeconds

                //seconds = display1.innerHTML[0] + display1.innerHTML[1]
                // seconds = Number(seconds)

            } else if (counter % 8 == 7) {

                seconds = longBreakSeconds
                pomodoroTally++
                pomodorosCompleted.innerHTML = 'Pomodoros Completed: ' + (pomodoroTally)



            } else if (counter % 2 == 1 && counter % 8 != 7) {

                seconds = shortBreakSeconds
                pomodoroTally++
                pomodorosCompleted.innerHTML = 'Pomodoros Completed: ' + (pomodoroTally)

            }



        }

    }

}



let pomodoro = setInterval(timer, 1);