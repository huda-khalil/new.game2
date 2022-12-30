let cards = []
let sum = 0
let message = " "
let isAlive = false 
let hasBlackJack = false

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function newGame() {
    isAlive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    sum = card1 + card2
    cards = [card1, card2]
    
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber <= 2) {
        return 1
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " - "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 25) {
        message = "Do you want to draw a new card?"
    } else if (sum === 25) {
        hasBlackJack = true
        message = "You've got Blackjack!"
    } else {
        message = "OOOOh Maryooooom! You are out of the Gam!!!!!!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()

    }
}
