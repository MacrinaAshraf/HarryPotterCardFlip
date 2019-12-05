
var character = function(charName)
{
    this.charName = charName;
    this.harry = ['harry'];
    this.hermonie = ['hermonie'];
    this.ron = ['ron'];
    this.charArr;
}

character.prototype.setCharArr = function(chosenChar)
{
    if(chosenChar === "harry")
        this.charArr = this.harry;
    else if(chosenChar === "hermonie")
        this.charArr = this.hermonie;
    else
        this.charArr = this.ron;
}

character.prototype.getCharArr = function()
{
    return this.charArr;
}

function prepareCharacter()
{
    this.classList.toggle('clicked');
}

var divs = document.getElementsByClassName('photo');
for(var i = 0; i < divs.length; i++)
{
    divs[i].addEventListener('click', prepareCharacter);
}

// var playButton = document.getElementsByClassName('play')[0];

// function chooseChar()
// {
//     for(var i = 0; i < 3; i++)
//     {
//         if(divs[i].classList.contains('clicked'))
//             return divs[i];
//     }
// }

// console.log(chooseChar().id);
// var obj = new character(chooseChar().id);
