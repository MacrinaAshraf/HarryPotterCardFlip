function progressFunction()
{
    var prg=document.getElementById("progress");
    var precent=document.getElementById("percentCount");
    var counter =5;
    var progress=25;
    var id=setInterval(function()
    {
        if(progress === 500 && counter === 100)
        {
            precent.style.color = "white";
            precent.innerHTML = precent.innerHTML ;
            clearInterval(id);
            setTimeout(function(){ window.location="flipCard.html";}, 3000);
        }
        else{
            progress=progress+5;
            counter=counter+1;
            prg.style.width = progress+"px";
            precent.innerHTML = counter+"%";
        }

    }
    ,50);
}
var startButton=document.getElementsByTagName("button")[0];
function print()
{
    startButton.style.display="none";
    var percentCount=document.getElementsByClassName("percent_count")[0];
    var progress_bar=document.getElementsByClassName("progress_bar")[0];
    percentCount.style.display="block";
    progress_bar.style.display="block";
    document.getElementById("audio").play();
    document.getElementById("audio").loop = true;
    progressFunction();
}
startButton.addEventListener('click',print)

