var character = function()
{
    this.charName;
    //these arrays should store the sources of the characters' photos
    this.harry = ['Harry/Harry1','Harry/Harry2','Harry/Harry3','Harry/Harry4','Harry/Harry5','Harry/Harry6','Harry/Harry7','Harry/Harry8'];
    this.hermonie = ['Hermione/Hermione1','Hermione/Hermione2','Hermione/Hermione3','Hermione/Hermione4','Hermione/Hermione5','Hermione/Hermione6','Hermione/Hermione7','Hermione/Hermione8'];
    this.ron = ['Ron/Ron1','Ron/Ron2','Ron/Ron3','Ron/Ron4','Ron/Ron5','Ron/Ron6','Ron/Ron7','Ron/Ron8'];
    //this array will be returned
    this.charArr=[];
}

character.prototype.setCharArr = function(chosenChar)
{
    if(chosenChar === "harry")
        this.charArr = this.harry;
    else if(chosenChar === "hermione")
        this.charArr = this.hermonie;
    else
        this.charArr = this.ron;
    localStorage.setItem( 'chosenChar', this.charArr);
    }


var obj = new character();
var divClicked;


var divs = document.getElementsByClassName('photo');
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', prepareCharacter);
}

function prepareCharacter() {
    // this.classList.add('clicked');
    if (divClicked != this) {
        divClicked = this;
        obj.setCharArr(divClicked.id);
        // this.classList.remove('clicked');
    }
    //console.log(obj.getCharArr());
    //return divClicked;
}
//console.log(divClicked);
