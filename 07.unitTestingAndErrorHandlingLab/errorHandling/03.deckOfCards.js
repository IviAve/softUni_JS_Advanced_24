function printDeckOfCards(cards) {
    
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: "\u2660",  // Spades
            H: "\u2665",  // Hearts
            D: "\u2666",  // Diamonds
            C: "\u2663"   // Clubs
        };

        if (!faces.includes(face) || !suits[suit]) {
            throw new Error('Invalid face or suit');
        }

        let card = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        };

        return card;
    }

    try {
        let printedCards = [];
        for (let card of cards) {
            let face = card.slice(0, -1);
            let suit = card.slice(-1);
            let cardObj = createCard(face, suit);
            printedCards.push(cardObj.toString());
        }
        console.log(printedCards.join(' '));
    } catch (error) {
        console.log(`Invalid card: ${cards.find(card => {
            let face = card.slice(0, -1);
            let suit = card.slice(-1);
            try {
                createCard(face, suit);
            } catch (e) {
                return true;
            }
            return false;
        })}`);
    }
    
}


let deck = ['AS', '10D', 'KH', '2C']; // 'QX' is an invalid card
printDeckOfCards(deck);


// Write a function that takes a deck of cards as an array of strings and prints them as 
// a sequence of cards (space separated). Use the solution from the previous task to generate the cards. 
// Print `Invalid card: ${card}` when an invalid card definition is passed as input. 
// Input / Output
// The function takes an array of strings as a parameter. Print the list of cards as string, separated by space.
