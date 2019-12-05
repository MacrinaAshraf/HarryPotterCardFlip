
var character = function()
{
    this.charName;
    //these arrays should store the sources of the characters' photos
    this.harry = ['harry'];
    this.hermonie = ['hermonie'];
    this.ron = ['ron'];
    //this array will be returned
    this.charArr;
}

character.prototype.setCharArr = function(chosenChar)
{
    if(chosenChar === "harry")
        this.charArr = this.harry;
    else if(chosenChar === "hermione")
        this.charArr = this.hermonie;
    else
        this.charArr = this.ron;
}

character.prototype.getCharArr = function()
{
    return this.charArr;
}

var obj = new character();
var divClicked;
//function addEve() {
    var divs = document.getElementsByClassName('photo');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', prepareCharacter);
    }
    
//}


function prepareCharacter() {
    // this.classList.add('clicked');
    if (divClicked != this) {
        
        divClicked = this;
        obj.setCharArr(divClicked.id);
        // this.classList.remove('clicked');
    }
    console.log(obj);
    //return divClicked;
}
console.log(divClicked);



// function chooseChar()
// {
//     return divClicked.id;
// }

//addEve();

// obj.getCharArr();
// console.log(obj);

//console.log(obj);
//var playButton = document.getElementsByClassName('play')[0];