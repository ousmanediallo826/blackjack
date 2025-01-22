let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips





function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    if(isBet){
        renderGame()
        playerEl.textContent = player.name + ": $" + totalPrice()
    } else {
        messageEl.textContent = "Please place your bet before start the game"
    }
   
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

const firstBtn = "Bet 20";
const secondBtn = "Bet 40";
const thirdBtn = "Bet 80";
let isBet = false;
console.log("Is bet" + isBet)
let firstButton  = document.getElementById("first-bet")
let secondButton  = document.getElementById("second-bet")
let thirdButton  = document.getElementById("third-bet")
let bet = document.getElementById("bet-el")
firstButton.addEventListener("click", () => betme(firstBtn));
secondButton.addEventListener("click", () => betme(secondBtn));
thirdButton.addEventListener("click", () => betme(thirdBtn));
let currentBet = 0;


function updatePlayerEl() {
    playerEl.textContent = `${player.name}: $${player.chips}`;
}
updatePlayerEl();

function betme(value) {
    currentBet = value;
    bet.textContent = `Current Bet: ${value}`;
    isBet = true;
    console.log(isBet)
   
}

function totalPrice() {
     player.chips -= currentBet;
     playerEl.textContent = `${player.name}: $${player.chips}`;
     return player.chips;
}








function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
