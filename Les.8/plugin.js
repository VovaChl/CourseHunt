// Timer
const buttons = document.querySelectorAll('[data-time]');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound;
    
    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);
        if (settings.alarmSound) {
            alarmSound =  new Audio(settings.alarmSound);
        }
        return this;
    }

    function start(seconds) { 
        if (!timerDisplay || !endTime) return console.log('Please init module first');
        if (!seconds || typeof seconds !== 'number') return console.log('Please provide seconds');

        // Reset timer
        clearInterval(countdown);

        // Reset sound
        alarmSound.pause();
        alarmSound.currentTime = 0;

        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countdown);
                playSound();
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
        return this;
    }

    function displayTimeLeft(seconds) {
        let days = Math.floor(seconds / 3600 / 24);
        const hours = Math.floor(seconds / 3600 ) - days * 24;
        const minutes = Math.floor(seconds / 60) - days * 24 * 60 - hours * 60;
        const reminderSeconds = seconds % 60;
        if (days) {
            if (days % 100 >= 11 && days % 100 <= 14) {
                    days += " дней ";    
                } else if (days % 10 == 1) {
                    days += ' день ';
                } else if (days % 10 == 2 || days % 10 == 3 || days % 10 == 4) {
                    days += ' дня ';
                } else {
                    days += ' дней '
                }   
            } else {
            days = '';
        };

        const display = `${days}${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
        document.title = display;
        timerDisplay.textContent =  display;
    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();

        endTime.textContent = `Be back at ${hour < 10 ? '0' : ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function stop() {
        clearInterval(countdown);
    }

    function playSound() {
        alarmSound.play();
    }

    return {
        init,
        start,
        stop,
    }

})();

//Init timer
timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/bell.mp3'
});

// Start timer by click
function startTimer(e) {
    const seconds = parseInt(this.dataset.time);
    timer.start(seconds);
}

function startTimerBySubmit(e) {
    e.preventDefault();
    const seconds = input.value * 60;
    timer.start(seconds);
    input.value = '';
    input.blur();
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
form.addEventListener('submit', startTimerBySubmit);