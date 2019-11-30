
var backToMainBtn = document.getElementsByClassName('backToMain')[0];

function returnToMenu()
{
    window.location.href="flipcard.html";
}

backToMainBtn.addEventListener('click', returnToMenu);