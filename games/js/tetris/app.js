document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid')
	const startBtn = document.querySelector('button')
	const scoreDisplay = document.querySelector('.score-display')
	const highscoreDisplay = document.querySelector('.high')
	const linesDisplay = document.querySelector('.lines-display')
	const overDisplay = document.querySelector('.overdisplay')
	const displaySquares = document.querySelectorAll('.previous-grid div')
	
	const downBtn = document.querySelector('.down')
	const upBtn = document.querySelector('.up')
	const leftBtn = document.querySelector('.left')
	const rightBtn = document.querySelector('.right')

	let squares = Array.from(grid.querySelectorAll('div'))
	const GRID_WIDTH = 10
	let currentPosition = 4
	let currentIndex = 0
	let score = 0
	var rows = 0
	let timerId
	let isGameOver = false
	let highScore
	const HIGHSCORE_KEY = "highscore";

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

	function control(e) {
		if(!isGameOver) {
			if(e.keyCode === 39) {
				moveRight()
			} else if (e.keyCode === 38) {
				rotate()
			} else if (e.keyCode === 37) {
				moveLeft()
			} else if (e.keyCode === 40) {
				moveDown()
			}
		}
		
	}
	getHighscore()
	console.log("got highscore after control")
	document.addEventListener("keydown", control)

	downBtn.addEventListener("click", moveDown)
	upBtn.addEventListener('click', rotate)
	leftBtn.addEventListener('click', moveLeft)
	rightBtn.addEventListener('click', moveRight)

	const lTetromino = [
		[1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
		[GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
		[1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
		[GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
	]

	const zTetromino = [
		[0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
		[GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
		[0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
		[GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
	]

	const tTetromino = [
		[1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
		[1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
		[GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
		[1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
	]

	const oTetromino = [
		[0, 1, GRID_WIDTH, GRID_WIDTH + 1],
		[0, 1, GRID_WIDTH, GRID_WIDTH + 1],
		[0, 1, GRID_WIDTH, GRID_WIDTH + 1],
		[0, 1, GRID_WIDTH, GRID_WIDTH + 1]
	]

	const iTetromino = [
		[1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
		[GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
		[1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
		[GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
	]

	const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

	let random = Math.floor(Math.random()*theTetrominoes.length)
	let currentRotation = 0
	let current = theTetrominoes[random][currentRotation]

	function draw() {
		current.forEach(index => (
			squares[currentPosition + index].classList.add('block')
		))
	}

	function undraw() {
		current.forEach( index => (
			squares[currentPosition + index].classList.remove('block')
		))
	}

	function moveDown() {
		if(!isGameOver) {
			undraw()
			currentPosition = currentPosition += GRID_WIDTH
			draw()
			freeze()
		}
	}

	function moveRight() {
		undraw()
		const isAtRightEdge = current.some(index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1)
		if (!isAtRightEdge) currentPosition += 1
		if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
			currentPosition -=1
		}
		draw()
	}
	
	function moveLeft() {
		undraw()
		const isAtLeftEdge = current.some(index => (currentPosition + index) % GRID_WIDTH === 0)
		if(!isAtLeftEdge) currentPosition -= 1
		if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
			currentPosition += 1
		}
		draw()
	}

	function rotate() {
		undraw()
		currentRotation ++
		if (currentRotation === current.length) {
			currentRotation = 0
		} 
		current = theTetrominoes[random][currentRotation]
		draw()
	}

	const displayWidth = 4
	const displayIndex = 0
	let nextRandom = 0

	const smallTetrominoes = [
		[1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
		[0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
		[1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
		[0, 1, displayWidth, displayWidth + 1], /* oTetromino */
		[1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
	]

	function displayShape() {
		displaySquares.forEach(square => {
			square.classList.remove('block')
		})
		smallTetrominoes[nextRandom].forEach(index => {
			displaySquares[displayIndex + index].classList.add('block')
		})
	}

	function freeze() {
		if(current.some(index => squares[currentPosition + index + GRID_WIDTH].classList.contains('block3')
		|| squares[currentPosition + index + GRID_WIDTH].classList.contains('block2'))) {
			current.forEach(index => squares[index + currentPosition].classList.add('block2'))
			
			random = nextRandom
			nextRandom = Math.floor(Math.random() * theTetrominoes.length)
			current = theTetrominoes[random][currentRotation]
			currentPosition = 4
			draw()
			displayShape()
			gameOver()
			addScore()
		}
	}

	startBtn.addEventListener('click', () => {
		if(timerId) {
			clearInterval(timerId)
			timerId = null
		} else {
			draw()
			timerId = setInterval(moveDown, 1000)
			nextRandom = Math.floor(Math.random(theTetrominoes.length))
			displayShape()
		}
	})

	function gameOver() {
		if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
			overDisplay.innerHTML = 'Game Over!'
			clearInterval('timerId')
			isGameOver = true
		}
	}

	function addScore() {
		let rowsAdded = 0
		for (currentIndex = 0; currentIndex < 199; currentIndex += GRID_WIDTH) {
			const row = [currentIndex, currentIndex+1, currentIndex+2, currentIndex+3, currentIndex+4, currentIndex+5, 	currentIndex+6, currentIndex+7, currentIndex+8, currentIndex+9]

			if(row.every(index => squares[index].classList.contains('block2'))) {
				rowsAdded++
				rows++
				console.log([rows, rowsAdded])
				
				row.forEach(index => {
					squares[index].classList.remove('block2') || squares[index].classList.remove('block')
				})
				const squaresRemoved = squares.splice(currentIndex, GRID_WIDTH)
				squares = squaresRemoved.concat(squares)
				squares.forEach(cell => grid.appendChild(cell))
			}
		}
		score += scoreBonus(rowsAdded)
		setNewHighscore()
		getHighscore()

		scoreDisplay.innerHTML = score
		linesDisplay.innerHTML = rows
	}

	function scoreBonus(rowsAdded) {
		let rowbonus=rowsAdded*rowsAdded*10
		return rowbonus
	}

})