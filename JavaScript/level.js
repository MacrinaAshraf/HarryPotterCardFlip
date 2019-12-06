var levels=document.getElementsByClassName('element_radio');

var Level = function(){
    this.Time = 3;
    this.level;
    localStorage.setItem('defaultTime', this.Time);
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

var radios=document.getElementsByClassName("element_radio");
for(radio in radios) {
    radios[radio].onclick = function() {
        easy.setlevel();
        easy.getlevel()
        easy.settime();
        easy.gettime();
    }
}

        
 
