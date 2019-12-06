
var character = function()
{
    this.charName;
    //these arrays should store the sources of the characters' photos
    this.harry = ['Harry1','Harry2','Harry3','Harry4','Harry5','Harry6','Harry7','Harry8'];
    this.hermonie = ['Hermonie1','Hermonie2','Hermonie3','Hermonie4','Hermonie5','Hermonie6','Hermonie7','Hermonie8'];
    this.ron = ['Ron1','Ron2','Ron3','Ron4','Ron5','Ron6','Ron7','Ron8'];
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