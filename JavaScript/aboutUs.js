var backToMainBtn = document.getElementsByClassName('backToMain')[0];

function returnToMenu()
{
    window.location.href="mainPage.html";
}

backToMainBtn.addEventListener('click', returnToMenu);