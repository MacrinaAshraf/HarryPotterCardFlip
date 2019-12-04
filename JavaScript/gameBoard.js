
//This Code will be Modified for OOP but this only kept now for testing the card rotation
const cards = document.getElementsByClassName('cellDiv');

function flipCard()
{
    this.classList.toggle('flip');
}

for(var i = 0; i < cards.length; i++)
{
    cards[i].addEventListener('click', flipCard);
}

/*
 * Shuffles array in place.
 * Create Random Indexes.
 */
var a = [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
var random = shuffle(a);

var srces=["Harry","Hermione","BPotter","Rj_V4lBh","Ron","Back","fantasyart","Harry"];

var board = document.getElementsByClassName("front-face");

for(var i = 0;i<board.length;i+=2)
{
    source = "srcs/"+srces[i/2]+".jpg";
    board[random[i]].setAttribute('src' , source);
    board[random[i+1]].setAttribute('src' , source);
}
