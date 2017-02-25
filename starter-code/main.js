console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

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

var cards = [cardOne, cardTwo, cardThree, cardFour];

var boardForGame = document.getElementById('game-board');

function createCards() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		boardForGame.appendChild(cardElement);
	}
}

createCards();