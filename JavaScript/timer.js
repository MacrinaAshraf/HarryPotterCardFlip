var seconds = 9;
var minutes = 1;

var condition=seconds+minutes*60;
var displaySeconds = 0;
var displayMinutes = 0;

var interval = null;


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
        var Cells = document.getElementsByClassName('cellDiv');
        var Status = document.getElementsByClassName("Status")[0];
        if(!Status.classList.contains('show'))
        {
            for(var i = 0;i<Cells.length;i++)
            {
                Cells[i].classList.add("hide");
            }
            Status.setAttribute('src' , "srcs/Lose.gif");
            Status.classList.remove('Win');
            Status.classList.add("show");
        }
    }

}


interval = window.setInterval(stopWatch, 1000);
