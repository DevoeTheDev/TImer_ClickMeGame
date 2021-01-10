// Timer Script ...

var leftCounterLabel, rightCounterLabel, timerLabel, timerInputField;
var leftCounter = 0, rightCounter = 0;

var IsCountdownStarted = false;
var counter = 0;

window.onload = function() {
    leftCounterLabel = document.querySelector('#leftCounter');
    rightCounterLabel = document.querySelector('#rightCounter');
    timerLabel = document.querySelector('#timerCounter');
    timerInputField = document.querySelector('#timerSeconds')
}

function OnRightLeftButtonClicked(IsLeft) {
    if(IsCountdownStarted == false) {
        alert('Time is not running.. Please start the timer first.');
        return;
    }

    if(IsLeft){
        leftCounter++;
        leftCounterLabel.textContent = leftCounter;
    }
    else{
        rightCounter++;
        rightCounterLabel.textContent = rightCounter;
    }
}

function OnStartButtonClick(){
    var timerSeconds =  timerInputField.value;
    if(timerSeconds == 0 || timerSeconds < 0 )
    {
        alert('Timer value should not be zero or negative.');
    }
    else{
        //Start the countdown..
        StartCountdown(timerSeconds, timerLabel)
    }
}

function OnResetButtonClick() {
    //Reset the timer
    counter = 0;
    IsCountdownStarted = false;
    timerInputField.value = 0;
    leftCounterLabel.textContent = '0';
    rightCounterLabel.textContent = '0';
}

function StartCountdown(timeInSeconds, label){
    
    if(IsCountdownStarted == false) {
        
        IsCountdownStarted = true;
        counter = timeInSeconds;
        label.textContent = counter < 10 ? '0' + counter : counter;
        const intervalId = setInterval(() => {
            counter--;
            label.textContent = counter < 10 ? '0' + counter : counter;
    
            if(counter <= 0)
            {
                IsCountdownStarted = false;
                clearInterval(intervalId);
                label.textContent = '00';
            }
        }, 1000)
    }
    else{
        alert('Timer already started... wait for completion or use the reset button.');
    }
}