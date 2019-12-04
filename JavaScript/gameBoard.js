//This Code will be Modified for OOP but this only kept now for testing the card rotation
var gameBoard = function(cards)
{
    this.cards = cards;
    this.firstCard = null;
    this.secondCard = null;
    this.hasFlippedCard = false;
    this.lockBoard = false;
    
}

gameBoard.prototype.flipCard = function()
{
    this.classList.add('flip');

    if(gameBoardObj.lockBoard)
        return;
    
    if(this === gameBoardObj.firstCard)
        return;

    if(gameBoardObj.hasFlippedCard)
    {
        gameBoardObj.secondCard = this;
        if(gameBoardObj.checkMatch(gameBoardObj.firstCard, gameBoardObj.secondCard))
        {
            //disable both cards from being flipped back again
            gameBoardObj.firstCard.removeEventListener('click', gameBoardObj.flipCard);
            gameBoardObj.secondCard.removeEventListener('click', gameBoardObj.flipCard); 
            gameBoardObj.resetBoardVars();
        }
        else
        {
            gameBoardObj.lockBoard = true;
            setTimeout(gameBoardObj.unflipCards, 1000, gameBoardObj.firstCard, gameBoardObj.secondCard);
        }
    }
    else
    {
        gameBoardObj.hasFlippedCard = true;
        gameBoardObj.firstCard = this;
    }

}

gameBoard.prototype.unflipCards = function(firstCard, secondCard)
{
    gameBoardObj.firstCard.classList.remove('flip');
    gameBoardObj.secondCard.classList.remove('flip');
    gameBoardObj.resetBoardVars();
}

gameBoard.prototype.checkMatch = function(firstCard, secondCard)
{
    if(gameBoardObj.firstCard.children[0].src === gameBoardObj.secondCard.children[0].src)
        return true;
    return false;
}

gameBoard.prototype.resetBoardVars = function()
{
    gameBoardObj.firstCard = null;
    gameBoardObj.secondCard = null;
    gameBoardObj.hasFlippedCard = false;
    gameBoardObj.lockBoard = false;
}

const cards = document.getElementsByClassName('cellDiv');
var gameBoardObj = new gameBoard(cards);
for(var i = 0; i < gameBoardObj.cards.length; i++)
{
    gameBoardObj.cards[i].addEventListener('click', gameBoardObj.flipCard);
}