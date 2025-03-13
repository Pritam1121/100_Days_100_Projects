

const inputTime = document.getElementById('inputTime');
const startCounterElement = document.getElementById('startCounter');
const displayMessaageElement = document.getElementById('displayMessaage');

function startCountdown() {
    let InputValue = parseInt(inputTime.value)

    if (isNaN(InputValue)) {
        displayMessaageElement.innerText = 'Please enter the Input'
        return
    }

    if (InputValue <= 0) {
        displayMessaageElement.innerText = 'Please enter the valid Input'
        return
    }

    const timer = setInterval(() => {
        InputValue--;
        displayMessaageElement.innerText = `The remaining time is the ${InputValue} seconds`

        if (InputValue <= 0) {
            clearInterval(timer);
            displayMessaageElement.innerText = `⏳--TIME IS UP--⏳`
        }

    }, 1000)

}
startCounterElement.addEventListener('click', startCountdown)

const stopTimerElement = document.getElementById('stopTimer');
const resumeTimerElement = document.getElementById('resumeTimer');

//     var paused = false; // is the clock paused?
//     var time_left;

//     function stopTimerElement(){
//         if(!paused){
// 	paused = true;
// 	clearInterval(timeinterval); // stop the clock
// 	time_left = time_remaining(deadline).total; // preserve remaining time
// }
//     }

