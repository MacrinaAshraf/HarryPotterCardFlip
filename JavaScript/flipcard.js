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
playButton.addEventListener('click',function(){ window.location="gameBoard.html"});


