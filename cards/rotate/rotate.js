const rotateCard = document.createElement('div')

rotateCard.className = 'rotate-card card'
rotateCard.id = 'rotate-card'
rotateCard.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24"><title xmlns="">rotate-right-outline</title><g class="rotate-right-outline"><g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><path d="M12 6.05c-3.869 0-7 3.126-7 6.975C5 16.875 8.131 20 12 20s7-3.126 7-6.975a6.9 6.9 0 0 0-.673-2.987a1 1 0 0 1 1.806-.86A8.9 8.9 0 0 1 21 13.024C21 17.985 16.968 22 12 22s-9-4.015-9-8.975s4.032-8.974 9-8.974c1.24 0 2.425.25 3.502.705l-.777 1.843A7 7 0 0 0 12 6.05"/><path d="M13.806 2.233a.857.857 0 0 1 1.15.385l1.332 2.683c.267.537.046 1.19-.493 1.456l-2.691 1.329a.857.857 0 1 1-.758-1.536L14.47 5.5l-1.053-2.118a.857.857 0 0 1 .388-1.149Z"/></g></g></svg>`
rotateCard.style.height = rotateCard.style.width = '45vw'
rotateCard.style.transform = 'rotate(0)'

cardsContainer.append(rotateCard)

rotateCardObject = new Card(1, rotateCard, rotate)
cards.push(rotateCardObject)


let t = 0
let instant = 0
let f = 1 //force 
let mu = 0.3 //friccion coeficient
const m = 500 //mass 
let w = 0 //angle in radians
let intervalId = null
let stop = false

// If using requestAnimationFrame() method instead it will improve the performance and softness
function rotate() {
    rotateCard.addEventListener('mousedown', () => {
        f = 1
        instant = 0
        if (intervalId == null) intervalId = setInterval(rotation, 5)
    })
    window.addEventListener('mouseup', stopRotation)
}


const rotation = () => { //this function partially works
    w = (f / m) * (1 - mu) * (t ** 2) + w
    if (f <= 0) {
        instant = 0
        t = 0
        f = 1
    } else {
        f -= instant
    }
    if (!(w > 29)) t += 0.005 // this is the time: each 5 ms the function executes and adds 5ms to the time, acuratly taking the time with a precision of 5ms
    rotateCard.style.transform = `rotate(${w}rad)`
}

const stopRotation = () => {
    instant = 0.005
}
