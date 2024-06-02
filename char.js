const character = [
    {
        name: "John",
        image: "player1.jpg"
    },
    {
        name: "Mike",
        image: "player2.jpg"
    },
    {
        name: "Jack",
        image: "player3.jpg"
    },
    {
        name: "Harry",
        image: "player4.jpg"
    }
]
let current = 0
const player = document.querySelector('.player')
const pName = document.querySelector('.name')
const leftA = document.querySelector('.left')
const rightA = document.querySelector('.right')

function setPlayer() {
    player.setAttribute('src', character[current].image)
    pName.textContent = character[current].name
}

setPlayer()

leftA.addEventListener('click', function() {
    if ( current > 0 ) {
        current--
        setPlayer()
    }
})

rightA.addEventListener('click', function() {
    if ( current + 1 < character.length ) {
        current++
        setPlayer()
    }
})