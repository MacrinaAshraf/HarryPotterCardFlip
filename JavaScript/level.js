var levels=document.getElementsByClassName('element_radio');
var play=document.getElementsByClassName('play')[0];

var Level = function(){
    this.Time;
    this.level;
}

Level.prototype.getlevel = function(){
    return this.level;
}

Level.prototype.setlevel = function(){
    var elementChecked, selector ;
    for(i = 0; i < levels.length; i++)
    {
        if(levels[i].checked)
        {
            selector = 'label[for=' + levels[i].id+ ']';
            var label = document.querySelector(selector);
            elementChecked = label.innerHTML;
        }

    }
    this.level = elementChecked;
}

Level.prototype.gettime = function(){
    return this.Time;
}


Level.prototype.settime = function(){
    if(this.level == "Easy")
    {
        this.Time = 3;
    }
    else if(this.level == "Intermediate")
    {
        this.Time = 2;
    }
    else if(this.level == "Hard")
    {
        this.Time = 1;
    }
    localStorage.setItem('time', this.Time);
}


var easy = new Level();
play.addEventListener("click",function()
{
    if(easy.gettime() != 0)
    {
        easy.setlevel();
        easy.getlevel()
        easy.settime();
        easy.gettime();
    }
    console.log(easy.gettime());
});
