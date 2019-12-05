
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