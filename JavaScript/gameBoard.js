var sound=document.getElementsByClassName("audio_Image")[0];
var soundPaly=0;
function print()
{
    console.log(sound.src.name)    
    if(soundPaly==0)
    {
        soundPaly=1;
        sound.setAttribute('src' , "srcs/audio-icon.png");
        document.getElementById("audio").play();
        document.getElementById("audio").loop = true;
    }
    else
    {
        soundPaly=0;
        sound.setAttribute('src' , "srcs/mute-logo.png");
        document.getElementById("audio").pause();
    }
    
}
sound.addEventListener('click',print)


var gameBoard = function()
{
    this.firstCard = null;
    this.secondCard = null;
    this.hasFlippedCard = false;
    this.lockBoard = false;
    
}

gameBoard.prototype.checkMatch = function(firstCard, secondCard)
{
    if(firstCard.children[0].src === secondCard.children[0].src)
        return true;
    return false;
}

gameBoard.prototype.resetBoardVars = function()
{
    this.firstCard = null;
    this.secondCard = null;
    this.hasFlippedCard = false;
    this.lockBoard = false;
}

gameBoard.prototype.Winner = function()
{
    var Cells = document.getElementsByClassName('cellDiv');
    var Status = document.getElementsByClassName("Status")[0];
    var flag = false;
    for(var i = 0;i<Cells.length;i++)
    {
        if(Cells[i].classList.contains('flip'))
        {
            flag = true;
        }
        else 
        {
            return false;
        }
    }
    for(var i = 0;i<Cells.length;i++)
    {
        Cells[i].classList.add("hide");
    }
    Status.setAttribute('src' , "srcs/tenor.gif");
    Status.classList.remove('Win');
    Status.classList.add("show");
    return flag;
}

var gameBoardObj = new gameBoard();
flipCard = function()
{
    if(gameBoardObj.lockBoard)
        return;
    
    if(this === gameBoardObj.firstCard)
        return;

    this.classList.add('flip');
    
    if(gameBoardObj.hasFlippedCard)
    {
        gameBoardObj.secondCard = this;
        if(gameBoardObj.checkMatch(gameBoardObj.firstCard, gameBoardObj.secondCard))
        {
            //disable both cards from being flipped back again
            gameBoardObj.firstCard.removeEventListener('click', flipCard);
            gameBoardObj.secondCard.removeEventListener('click', flipCard); 
            gameBoardObj.resetBoardVars();
            gameBoardObj.Winner();
        }
        else
        {
            gameBoardObj.lockBoard = true;
            setTimeout(unflipCards, 1000, gameBoardObj.firstCard, gameBoardObj.secondCard);
        }
    }
    else
    {
        gameBoardObj.hasFlippedCard = true;
        gameBoardObj.firstCard = this;
    }
}

unflipCards = function(firstCard, secondCard)
{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    gameBoardObj.resetBoardVars();
}

const cards = document.getElementsByClassName('cellDiv');
for(var i = 0; i < cards.length; i++)
{
    cards[i].addEventListener('click', flipCard);
    
}

/*
 * Shuffles array in place.
 * rechange indexes randomly.
 */

var indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function shuffle(indexes) {
    var randomNumber, tempVariable, loopStart;
    for (loopStart = indexes.length - 1; loopStart > 0; loopStart--) {
        randomNumber = Math.floor(Math.random() * (loopStart + 1));
        tempVariable = indexes[loopStart];
        indexes[loopStart] = indexes[randomNumber];
        indexes[randomNumber] = tempVariable;
    }
    return indexes;
}
var randomInesxes = shuffle(indexes);

var srces=["Harry1","Hermione1","Harry2","Ron2","Ron1","Harry3","Harry4","Harry5"];

var board = document.getElementsByClassName("front-face");

for(var i = 0;i<board.length;i+=2)
{
    source = "srcs/"+srces[i/2]+".jpg";
    board[randomInesxes[i]].setAttribute('src' , source);
    board[randomInesxes[i+1]].setAttribute('src' , source);
}
