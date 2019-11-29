
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