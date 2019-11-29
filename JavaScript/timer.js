var seconds = 0;
var minutes = 0;

var displaySeconds = 0;
var displayMinutes = 0;

var interval = null;


function stopWatch(){
    seconds++;
    if(seconds / 60 === 1)
    {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1)
        {
            minutes = 0;
        }
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    document.getElementById("timerLable").innerHTML =  displayMinutes + ":" + displaySeconds;

}


interval = window.setInterval(stopWatch, 1000);
