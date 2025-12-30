const rotateCard = document.createElement('div')

rotateCard.className = 'rotate-card card'
rotateCard.id = 'rotate-card'
rotateCard.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 24 24"><title xmlns="">arrow-right</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>`
rotateCard.style.height = rotateCard.style.width = '45vw'
rotateCard.style.transition = 'all 0.00005s ease-in'

cardsContainer.append(rotateCard)

rotateCardObject = new Card(1, rotateCard, rotate)
cards.push(rotateCardObject)


let alpha = 0 // This is the angle rotation to left, it's always going to be negative
let alphaAccelerator = 1
let beta = 0 // This is the angle rotation to right, it's always going to be positive
let betaAccelerator = 1
//both accelerator are goin to increase the speed for as long as the keydown is pressed, until a certain amount

const pageStyles = document.getElementById('js-styles-rotate')


function rotate() {
    document.addEventListener('keydown', (e) => {
        if (Event.repeat) return // prevents the OS from repeating the keydown event
        if (e.key === 'ArrowLeft') {
            --alpha
            rotateCard.style.transform = `rotate(${alpha * alphaAccelerator + beta * betaAccelerator}deg)`
            alphaAccelerator < 6 ? alphaAccelerator *= 1.02 : alphaAccelerator
        } else if (e.key === 'ArrowRight') {
            ++beta
            rotateCard.style.transform = `rotate(${alpha * alphaAccelerator + beta * betaAccelerator}deg)`
            betaAccelerator < 6 ? betaAccelerator *= 1.02 : betaAccelerator
        }
    })
}


