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
            clearInterval(id);
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

progressFunction();
