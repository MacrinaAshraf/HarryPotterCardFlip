var minutes = localStorage['time']-1;
var seconds = 59;

var condition=seconds+minutes*60;
var displaySeconds = 0;
var displayMinutes = 0;

var interval = null;

localStorage.removeItem( 'time' );
function stopWatch(){
    if(condition!==0)
    {
        condition--;
            seconds--;
        if(seconds  === -1)
        {
            seconds = 59;
            minutes--;
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
    else
    {
        document.getElementById("timerLable").innerHTML =  "00:00";

    }

}


interval = window.setInterval(stopWatch, 1000);
