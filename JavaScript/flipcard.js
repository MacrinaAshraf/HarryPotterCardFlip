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


var levels=document.getElementsByClassName('element_radio');
var play=document.getElementsByClassName('play')[0];
function Time (){
    this.time=0;
    this.level;

}

Time.prototype.getlevel=function(){
    return this.level;
}

Time.prototype.setlevel=function(){
    var elementChecked, selector ;
    for(i = 0; i < levels.length; i++)
    {
        if(levels[i].checked)
        {
            selector = 'label[for=' + levels[i].id+ ']';
            var label=document.querySelector(selector);
            elementChecked=label.innerHTML;
        }

    }  
    this.level=elementChecked;
 }
 Time.prototype.gettime=function(){
    console.log(this.time);
}


Time.prototype.settime=function(){
    if(this.level=="easy")
    {
        this.time=3000;
    }

    if(this.level=="intermediate")
    {
        this.time=2000;
    }
    if(this.level=="hard")
    {
        this.time=1000;
    }
}


 var easy = new Time();
  play.addEventListener("click",function()
{
    if(time!=0)
    {easy.setlevel();
    easy.getlevel();
    easy.settime();
    easy.gettime();}
});
