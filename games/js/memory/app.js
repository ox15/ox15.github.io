document.addEventListener('DOMContentLoaded', () => {
	console.log("DOMContentLoaded")
//card options
	const cardArray = [
		{
		  name: 'fries',
		  img: 'images/fries.png'
		},
		{
		  name: 'cheeseburger',
		  img: 'images/cheeseburger.png'
		},
		{
		  name: 'ice-cream',
		  img: 'images/ice-cream.png'
		},
		{
		  name: 'pizza',
		  img: 'images/pizza.png'
		},
		{
		  name: 'milkshake',
		  img: 'images/milkshake.png'
		},
		{
		  name: 'hotdog',
		  img: 'images/hotdog.png'
		},
		{
		  name: 'fries',
		  img: 'images/fries.png'
		},
		{
		  name: 'cheeseburger',
		  img: 'images/cheeseburger.png'
		},
		{
		  name: 'ice-cream',
		  img: 'images/ice-cream.png'
		},
		{
		  name: 'pizza',
		  img: 'images/pizza.png'
		},
		{
		  name: 'milkshake',
		  img: 'images/milkshake.png'
		},
		{
		  name: 'hotdog',
		  img: 'images/hotdog.png'
		}
	]
	cardArray.sort(() => 0.5 - Math.random())
		
	  

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	const status = document.querySelector('#status')
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []
	const matchMsg = "You found a match!"
	const noMatchMsg = "Sorry, try again!"

	function resetClassesTo(newClass) {
		status.className=""
		status.classList.add("alert")
		status.classList.add(newClass)
	}

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}

	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if(cardsChosen[0] === cardsChosen[1]) {
			status.textContent = matchMsg
			resetClassesTo("alert-success")
			cards[optionOneId].setAttribute('src', 'images/white.png')
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cardsWon.push(cardsChosen)
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			status.textContent = noMatchMsg
			resetClassesTo("alert-danger")
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length === cardArray.length/2) {
			resetClassesTo("alert-info")
			status.textContent = 'You won the round! Reload to play again.'
		}
	}

	function flipCard() {
		console.log("flipCard")
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500)
		}
	}

createBoard()
})
