

document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll('.grid div')
	const scoreDisplay = document.querySelector('.score')
	const startBtn = document.querySelector('.start')
	const highscoreDisplay = document.querySelector('.high')

	const downBtn = document.querySelector('.down')
	const upBtn = document.querySelector('.up')
	const leftBtn = document.querySelector('.left')
	const rightBtn = document.querySelector('.right')

	const width = 10
	const HIGHSCORE_KEY = "highscore";
	let appleIndex = 0
	let currentSnake = [2,1,0]
	let direction = 1
	let score = 0
	let speed = 0.9
	let intervalTime = 0
	let interval = 0
	let highScore

	function startGame() {
		currentSnake.forEach(index => squares[index].classList.remove('snake'))
		squares[appleIndex].classList.remove('apple')
		clearInterval(interval)
		score = 0
		direction = 1
		scoreDisplay.innerText = score
		intervalTime = 1000
		currentSnake = [2,1,0]
		currentSnake.forEach(index => squares[index].classList.add('snake'))
		randomApple()
		interval = setInterval(moveOutcomes, intervalTime)
	}

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

	function moveOutcomes() {
		if (
			(currentSnake[0] + width >= (width * width) && direction === width ) ||
			(currentSnake[0] % width === width -1 && direction === 1) ||
			(currentSnake[0] % width === 0 && direction === -1) ||
			(currentSnake[0] - width < 0 && direction === -width ) ||
			squares[currentSnake[0] + direction].classList.contains('snake')
		) {
			return clearInterval(interval)
		}

		const tail = currentSnake.pop()
		squares[tail].classList.remove('snake')
		currentSnake.unshift(currentSnake[0] + direction)

		if(squares[currentSnake[0]].classList.contains('apple')) {
			
			squares[currentSnake[0]].classList.remove('apple')
			squares[tail].classList.add('snake')
			currentSnake.push(tail)
			randomApple()
			score++
			setNewHighscore()
			getHighscore()
			scoreDisplay.textContent = score
			clearInterval(interval)
			intervalTime = intervalTime * speed
			interval = setInterval(moveOutcomes, intervalTime)
		}
		squares[currentSnake[0]].classList.add('snake')
	

	}

	function randomApple() {
		do {
			appleIndex = Math.floor(Math.random() * squares.length)
		} while(squares[appleIndex].classList.contains('snake'))
		squares[appleIndex].classList.add('apple')
	}

	function control(e) {
		if(e.keyCode === 39) { //right
			moveRight()
		} else if (e.keyCode === 38) { //up
			moveUp()
		} else if (e.keyCode === 37) { //left
			moveLeft()
		} else if (e.keyCode === 40) { //down
			moveDown()
		} 
	}
	getHighscore()

	function moveDown() {
		direction = +width
	}
	function moveUp() {
		direction = -width
	}
	function moveRight() {
		direction = 1
	}
	function moveLeft() {
		direction = -1
	}

	downBtn.addEventListener("click", moveDown)
	upBtn.addEventListener('click', moveUp)
	leftBtn.addEventListener('click', moveLeft)
	rightBtn.addEventListener('click', moveRight)

	document.addEventListener('keyup', control)
	startBtn.addEventListener('click', startGame)

	
})