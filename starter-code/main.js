console.log("JS file is connected to HTML! Woo!")


/*
if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardThree) {
	alert("You found a match!");
} else if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else if (cardTwo === cardThree) {
	alert("You found a match!");
} else if (cardOne === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};

*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var boardForGame = document.getElementById('game-board');

function createCards() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
    	cardElement.addEventListener('click', isTwoCards);
		boardForGame.appendChild(cardElement);
	}
}


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king_img.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen_img.png'>"; //queen
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}



function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createCards();


