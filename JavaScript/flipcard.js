function MenuClick(x)
{
    x.classList.toggle("change");
    if (document.getElementById("myDropdown").classList.contains('show'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content")[0];
            {
                var openDropdown = dropdowns;
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
            }
        }
    }
    else
    {
        document.getElementById("myDropdown").classList.add("show");
    }
}
var playButton=document.getElementsByClassName("playSubmit")[0];
playButton.addEventListener('click',function(){ 
    window.location="gameBoard.html"

});


//----------------sound----------------
var sound = document.getElementsByClassName("audio_Image")[0];
var soundPaly = 0;
function print()
{
    console.log(sound.src.name)    
    if(soundPaly == 0)
    {
        soundPaly = 1;
        sound.setAttribute('src', "srcs/audio.jpg");
        document.getElementById("audio").play();
        document.getElementById("audio").loop = true;
    }
    else
    {
        soundPaly = 0;
        sound.setAttribute('src', "srcs/mute.png");
        document.getElementById("audio").pause();
    }
    
}
sound.addEventListener('click', print);