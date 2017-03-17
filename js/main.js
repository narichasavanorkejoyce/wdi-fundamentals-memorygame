console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

// Create a function that stores actions taken when users flips a card
var flipCard = function(cardID) {

	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

	checkForMatch();
	
}

flipCard(0);
flipCard(2);