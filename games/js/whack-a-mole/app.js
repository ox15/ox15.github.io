const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const highscoreDisplay = document.querySelector('.high')
const HIGHSCORE_KEY = "whack-a-mole";
let highScore
const scoreDisplay = document.querySelector('#score')
let hitPosition = -1
let score = 0
let currentTime = timeLeft.textContent
let canScore = true

getHighscore()

function getHighscore() {
	var scoreStr = localStorage.getItem(HIGHSCORE_KEY);
	if (scoreStr == null) highScore = 0;
	else highScore = parseInt(scoreStr);
	highscoreDisplay.textContent = highScore
}

function setNewHighscore() {
	if (score > highScore) {
		highScore = score;
		localStorage.setItem(HIGHSCORE_KEY, highScore);
	}
}

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
		if(id.id === hitPosition && canScore) {
			score++
			setNewHighscore()
			getHighscore()
			scoreDisplay.textContent = score
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
		alert('Game Over! Your score is ' + score)
		canScore = false
	}
}


let timerId = setInterval(countDown, 1000)

