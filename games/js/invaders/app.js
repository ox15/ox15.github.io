document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll('.grid div')
	const resultDisplay = document.querySelector('#result')
	const resultDisplay2 = document.querySelector('#shotscore')
	const highscoreDisplay = document.querySelector('.high')
	const HIGHSCORE_KEY = "invaders";
	let highScore
	let width = 15
	let currentShooterIndex = 202
	let currentInvaderIndex = 0
	let alienInvadersTakenDown = []
	let score = 0
	let shotScore = 0
	let direction = 1
	let invaderId
	let gameOver = false

	const upBtn = document.querySelector('.up')
	const leftBtn = document.querySelector('.left')
	const rightBtn = document.querySelector('.right')

	const alienInvaders = [
		0,1,2,3,4,5,6,7,8,9,
		15,16,17,18,19,20,21,22,23,24,
		30,31,32,33,34,35,36,37,38,39
	]

	alienInvaders.forEach( invader => squares[currentInvaderIndex + invader].classList.add('invader'))

	squares[currentShooterIndex].classList.add('shooter')

	function getHighscore() {
		var scoreStr = localStorage.getItem(HIGHSCORE_KEY);
		if (scoreStr == null) highScore = 0;
		else highScore = parseInt(scoreStr);
		if(highScore == 30) {
			highScore = 0
			localStorage.setItem(HIGHSCORE_KEY, highScore);
		}
		highscoreDisplay.textContent = highScore
	}

	function setNewHighscore() {
		if (score > highScore) {
			highScore = score;
			localStorage.setItem(HIGHSCORE_KEY, highScore);
		}
	}

	function moveLeft() {
		squares[currentShooterIndex].classList.remove('shooter')
		if(currentShooterIndex % width !== 0) currentShooterIndex -= 1
		squares[currentShooterIndex].classList.add('shooter')

	}
	function moveRight() {
		squares[currentShooterIndex].classList.remove('shooter')
		if(currentShooterIndex % width < width -1) currentShooterIndex += 1
		squares[currentShooterIndex].classList.add('shooter')
	}

	function moveShooter(e) {
		if(gameOver) return

		
		switch(e.keyCode) {
			case 37:
				moveLeft()
				break
			case 39:
				moveRight()
				break
		}
		
		
	}

	document.addEventListener('keydown', moveShooter)

	function moveInvaders() {
		const leftEdge = alienInvaders[0] % width === 0
		const rightEdge = alienInvaders[alienInvaders.length -1] % width === width -1

		if((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
			direction = width
		} else if (direction === width){
			if(leftEdge) direction = 1
			else direction = -1
		}
		for (let i = 0; i <= alienInvaders.length -1; i++){
			squares[alienInvaders[i]].classList.remove('invader')
		}
		for (let i = 0; i <= alienInvaders.length -1; i++){
			alienInvaders[i] += direction
		}
		for (let i = 0; i <= alienInvaders.length -1; i++){
			if (!alienInvadersTakenDown.includes(i)){
				squares[alienInvaders[i]].classList.add('invader')
			}
		}

		if(squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
			resultDisplay.textContent = 'Game Over'
			gameOver = true
			squares[currentShooterIndex].classList.add('boom')
			clearInterval(invaderId)
		}

		

		for(let i = 0; i <= alienInvaders.length -1; i++) {
			if(alienInvaders[i] > (squares.length - (width-1)) && 
                (alienInvadersTakenDown.length !== alienInvaders)) {
				resultDisplay.textContent = 'Game Over'
				gameOver = true
				clearInterval(invaderId)
			}
		}
		if(alienInvadersTakenDown.length === alienInvaders.length) {
			// supposed to be after 77
			resultDisplay.textContent = "You Win"
			gameOver = true
			clearInterval(invaderId)
		}
		
	}
	invaderId = setInterval(moveInvaders, 500)

	function shoot(e) {
		if(gameOver) return

		let laserId
		let currentLaserIndex = currentShooterIndex
		
		function moveLaser() {
			squares[currentLaserIndex].classList.remove('laser')
			currentLaserIndex -= width
			squares[currentLaserIndex].classList.add('laser')
			if(squares[currentLaserIndex].classList.contains('invader')) {
				squares[currentLaserIndex].classList.remove('laser')
				squares[currentLaserIndex].classList.remove('invader')
				squares[currentLaserIndex].classList.add('boom')
				setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250)
				clearInterval(laserId)

				const alienTakenDown = alienInvaders.indexOf(currentLaserIndex)
				alienInvadersTakenDown.push(alienTakenDown)
				score++
				shotScore +=2
				setNewHighscore()
				getHighscore()
				resultDisplay.textContent = score
				resultDisplay2.textContent = shotScore
			}
			if(currentLaserIndex < width) {
				clearInterval(laserId)
				setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100)
			}
		}
		/* document.addEventListener('keyup', e => {
			if (e.keyCode === 32) {
				laserId = setInterval(moveLaser, 100)
			}
		}) */

		switch(e.keyCode) {
			case 32:
				laserId = setInterval(moveLaser, 100)
				shotScore--
				resultDisplay2.textContent = shotScore
				break
		}
	}
	document.addEventListener('keyup', shoot)
	upBtn.addEventListener('click', shoot)
	leftBtn.addEventListener('click', moveLeft)
	rightBtn.addEventListener('click', moveRight)
	getHighscore()

})