const startButton = document.getElementById('start-btn')
const mainCardsGame = document.querySelector('main')

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // This function creates a promise in ms

//Makes the main section hidden at the beginning and show it after clicking the start button
mainCardsGame.style.height = '0'
mainCardsGame.style.display = 'none'

if (mainCardsGame.style.display === 'none') {
    startButton.addEventListener('click', openCardsGame)
    startButton.addEventListener('touchend', openCardsGame)
}

async function openCardsGame() {
    mainCardsGame.style.display = 'grid'
    mainCardsGame.style.animation = 'open-main-cards 1s ease-in-out 0.3s 1'
    await sleep(1000)
    mainCardsGame.style.height = '100vh' //Now is 100vh but It'll be fit-content or something similar when the number of cards grows
}

//This adds the start button a hover effect on desktops
startButton.style.display = 'inline-block'
startButton.style.transition = 'transform 0.2s ease-in-out'
startButton.addEventListener('mouseenter', () => {
    startButton.style.transform = "scale(1.05)"
})
startButton.addEventListener('mouseout', () => {
    startButton.style.transform = 'scale(1)'
})
