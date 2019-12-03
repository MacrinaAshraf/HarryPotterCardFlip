
//This Code will be Modified for OOP but this only kept now for testing the card rotation
const cards = document.getElementsByClassName('cellDiv');

var hasFlippedCard = false;
var firstCard, secondCard;
var lockBoard = false ; //used to lock the board from receiving any clicks until different cards finish unflipping

function flipCard()
{
    //if the user tries to flip cards while another two cards are being unflipped at the same time
    //disregard his action to avoid crashes
    if(lockBoard)
        return;

    if(this === firstCard)
        return;

    this.classList.add('flip');
    
    if(hasFlippedCard)
    {
        secondCard = this;
        if(checkMatch(firstCard, secondCard))
        {
            //disable both cards from being flipped back again
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard); 
            resetBoardVars();
        }
        else
        {
            lockBoard = true;
            setTimeout(unflipCards, 1000, firstCard, secondCard);
        }
    }
    else
    { 
        hasFlippedCard = true;
        firstCard = this;
    }
}

/**
 * unflipCards removes the flip class from the class list of the selected cards to unflip them back again
 * @param {cellDiv} firstCard 
 * @param {cellDiv} secondCard 
 */
function unflipCards(firstCard, secondCard)
{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoardVars();
}

/**
 * checkMatch checks if the front face images' sources if both sources are the same then it returns true else it returns false
 * @param {cellDiv} firstCard 
 * @param {cellDiv} secondCard 
 */
function checkMatch(firstCard, secondCard)
{
    if(firstCard.children[0].src === secondCard.children[0].src)
        return true;
    return false;
}

/**
 * This function resets the used variables in the board
 */
function resetBoardVars()
{
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
}

for(var i = 0; i < cards.length; i++)
{
    cards[i].addEventListener('click', flipCard);
}
