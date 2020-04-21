const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let hitPosition = -1

let result = 0
let currentTime = timeLeft.textContent
let canScore = true

function randomSquare() {
	square.forEach(className => {
		className.classList.remove('mole')
	})
	if(canScore) {
		let index = Math.floor(Math.random() * 9)
		let randomPosition = square[index]
	
		randomPosition.classList.add('mole')
		hitPosition = randomPosition.id
	}
	
}

square.forEach(id => {
	id.addEventListener('mouseup', () => {
		if(id.id === hitPosition) {
			result += 1
			score.textContent = result
		}
	})
})

function moveMole() {
	let timerId = null
	timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
	currentTime--
	timeLeft.textContent = currentTime

	if(currentTime === 0) {
		clearInterval(timerId)
		alert('Game Over! Your score is ' + result)
		document.getElementsByClassName('grid').style.display = "none"
		canScore = false
		
	}
}


let timerId = setInterval(countDown, 1000)

