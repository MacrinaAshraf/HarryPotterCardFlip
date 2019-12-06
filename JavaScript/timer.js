if(localStorage['time'])
{

    var minutes = localStorage['time'] - 1;
    var seconds = 59;

    var condition = seconds + minutes * 60;
    var displaySeconds = 0;
    var displayMinutes = 0;

    var interval = null;

    localStorage.removeItem('time');
   
    function stopWatch()
    {
        console.log(condition);
        console.log("condition");
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
                Status.classList.remove('hide');
                Status.classList.add("show");
            }

            else
            {
                displayMinutes = minutes;
            }

            document.getElementById("timerLable").innerHTML =  displayMinutes + ":" + displaySeconds;
        }
    }
    interval = window.setInterval(stopWatch, 1000);
}
else
{
    alert('you should chose character and level');
    window.location="mainPage.html";
}