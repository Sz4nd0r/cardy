const startButton = document.getElementById('start-btn')
const mainCardsGame = document.querySelector('main')
const cardsContainer = document.getElementById('cards__container')

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Important function also used in rotate card 

//Makes the main section hidden at the beginning and show it after clicking the start button
mainCardsGame.style.height = '0'
mainCardsGame.style.display = 'none'

if (mainCardsGame.style.display === 'none') {
    startButton.addEventListener('click', openCardsGame)
}

async function openCardsGame() {
    mainCardsGame.style.display = 'grid'
    mainCardsGame.style.animation = 'open-main-cards 1s ease-in-out 0.3s 1'
    await sleep(1000) //takes 1 second because that's the exact time of the animation
    mainCardsGame.style.height = '100vh' //Now is 100vh but It'll be fit-content or something similar when the number of cards grows
}

//This adds the start button a hover effect on desktops
startButton.style.display = 'inline-block'
startButton.style.transition = 'all 0.2s ease-in-out'
startButton.addEventListener('mouseenter', () => {
    startButton.style.transform = "scale(1.05) translateY(-1px)"
    startButton.style.boxShadow = '0 0 30px 2px rgba(0,0,0,0.2)'
})
startButton.addEventListener('mouseout', () => {
    startButton.style.transform = 'scale(1)'
    startButton.style.boxShadow = 'none'
})

// Creates the class card and a list of cards objects to group them all
class Card {
    constructor(id, element, mainFunction) {
        this.id = id
        this.element = element
        this.mainFunction = mainFunction
    }
    mainFunction() {
        this.mainFunction()
    }
}

let cards = [] //Should remember to push my cards after creating them in a separated file

document.addEventListener('DOMContentLoaded', () => { //waits untill the cards are creaated
    for (let i = 0; i < cards.length; i++) {
        cards[i].element.addEventListener('click', () => {
            return cards[i].mainFunction()
        }) //When the user clicks on a card the card is selected and the app can perform the desired operations
    }
})

