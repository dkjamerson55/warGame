/**
 * 
 * 
// objects
    * suit
    * cards
    *   * value
    *   * suit
    *   * face cards
    * 
    * // Deck object
    * players
    * playerpile of 26 cards
// actions
    * create a deck using values & suits
    * 26 rounds with 1 point awarded to plyer w/ high card
    * player with high card wins round message
    * 2 players have cards shown
    *  divide deck into half
    *  show top card from each players hand
    *  evaluate and add points to winner

 **/
console.log("WAR! 🔥👨‍✈️🔥");
// card class to create 52 cards that have a suit, value cards 2-10, & face cards (K, Q, J, A).

// define what a card is
class Card{ 
    constructor (suit, face, value){ 
        this.suit = suit;
        this.value = value;
        this.face = face;
        
    }
    
}

// player class should be made of player1/player2 name and the hands delt to them.
class Player{
    constructor(name, hand, score){
        this.name = name;
        this.hand = hand; 
    }


}

class Deck{
    constructor(){
        this.entiredeck = this.makeDeck(); // return value for makeDeck function inside
    }

    makeDeck(){ // function creating cards for the deck

        let values = [2,3,4,5,6,7,8,9,10,"J","Q", "K", "A"]; // value of cards for each possible suit.
        let suits = ["♣", "♥", "♠", "♦"]; // place to hold array of suits.
        let deckOfCards = []; // array to hold deck of cards

        const firstCard = new Card("♣", 14, "A");

        for (let x = 0; x < values.length; x++){ // for loop to iterate through values array.
            for(let s = 0; s < suits.length; s++){ // going through each suit, creating a value and a face.
                 let card = new Card(suits[s], values[x], x + 2); // values of cards needs to start from 2. for loop creates 4 of each value/suit.
                 deckOfCards.push(card); // pushing each card to [] for storing cards.
             }
        }

        deckOfCards = deckOfCards.sort((a, b) => 0.5 - Math.random()); // shuffles deck

        return deckOfCards; // returns the values stored in array for makeDeck function.
    }
}


const WarDeck = new Deck(); // instantiates new deck and runs through constructor method 

console.log(WarDeck);

playGame(WarDeck.entiredeck);


function playGame (deck){
   alert(`Lets play WAR! 🔥🔥🔥`)
    this.deckOfCards;

    let player1 = {
        hand: deck.splice(0, 26),
    }
    let player2 = {
        hand: deck, // player 2 recieves remainder of deck.
    }

    
    //alert (`Player 1 plays ${player1.hand[0].face}; Player 2 plays ${player2.hand[0].face}`);
    
   let player1Score = 0;
   let player2Score = 0;
   //let i = deck;
   

   for(let i = 0; i < 26; i++){ // turns where each player will go through hand once
    alert (`Player 1 plays ${player1.hand[i].face}; Player 2 plays ${player2.hand[i].face}`);

     if(player1.hand[i].value > player2.hand[i].value){
         player1Score += 1; // 1 point given for higher card value
         alert(`Player 1 Score: ${player1Score}, Player 2 Score:${player2Score}.`);

        } else if(player2.hand[i].value > player1.hand[i].value){
            player2Score += 1;
            alert(`Player 1 Score: ${player1Score}, Player 2 Score:${player2Score}.`);

           } else{
                (player1.hand[i].value === player2.hand[i].value); // cards are even, there is a tie.
                player1Score += 0;
                player2Score += 0;
                alert (`Tie! Player cards are even! Player 1 Score: ${player1Score}, Player 2 Score:${player2Score}.`);
           }
    }
    

    // this loop will run after the previous for loop iterates through 26 times, then a winner is declared based on whose score is >.
    if(player1Score > player2Score || player1Score === 26){
        alert(`Player 1 is the Winner! Player 1 Score: ${player1Score}, Player 2 Score: ${player2Score}.`);
       } else if(player2Score > player1Score || player2Score === 26){
        alert(`Player 2 is the Winner! Player 2 Score: ${player2Score}, Player 1 Score: ${player1Score}.`);
       } else if(player1Score === 26 && player2Score ===26){
        alert(`We have a tie!`);
       }
}
