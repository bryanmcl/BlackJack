let firstCard 
let secondCard 
let cards = []

let sum = 0
let hasBj = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name :  "Bryan",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips

function getRandomCard(){
    let card = Math.floor(Math.random()*13)+1
    if(card === 1){
        return 11
    }
    else if(card >= 11){
        return 10
    }
    else return card
}

function startGame(){
    while (cards.length != 0) {
        cards.pop()
    }
    firstCard =  getRandomCard()
    secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    isAlive = true
    hasBj = false
    renderGame()
}

function renderGame(){  
    sumEl.textContent = "Sum: " + sum 
    cardsEl.textContent = "Cards:"

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += " " + cards[i]
    }
    if(sum < 21){
        message = "Roll new card?"
    }
    else if(sum === 21){
        message = "You got blackjack"
        hasBj = true
    }
    else {
        message = "You lost"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBj === false){
        console.log("Drawing a new card from the deck")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}