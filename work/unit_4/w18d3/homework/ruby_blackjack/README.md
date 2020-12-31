
Title: Ruby Black Jack<br>
Creator: Karolin Rafalski <br>
Competencies: Basic Ruby and Classes<br>

---

# Ruby Blackjack
![Card image](https://i.imgur.com/a62n4Kz.png) ![Card image](https://i.imgur.com/9KINWK9.png)

Blackjack is a card game. Ruby is an Object Oriented Language. Use the following outline to guide you to build a Ruby Blackjack game. You may have other approaches, different features you want to add, but to get the most out of practicing Classes, try our way and if you have time, build the stuff you want as bonus.

This game will be made up of two players. One will be a person interacting with the console, the other will be The House, which will be played by the computer.


## Players

- Using classes, make a human player, a player should have a name, a bankroll (start with 100 - keep it as an integer don't worry about converting to money), and a hand (an array to store cards). The player name, bankroll amount and hand should be accessable.

- Using classes, make a computer player called the house, the house should have a name, a bankroll (start with 10000 - keep it as an interger, don't worry about converting it to money), and a hand (an array to store cards). The player name, bankroll amount and hand should be accessable.

## The Deck
- Create an empty array that will hold your card objects. This can just be an array, it does not need to be a class

## Cards
- Using classes, make 52 card objects which should be made up of 4 sets of 13 cards.
  - Hint: as you make each card, put it into your deck array
- Cards should have at least one property `value`
- Cards can have more properties like `face` and `suit`, but these are not needed for the core functionality of your game. Try pracicing YAGNI (You Ain't Gonna Need It). Perhaps in building your cards, your solution will make more sense to have one or both properties, but don't add them just for the sake of adding them.

### 13 cards:
  - cards 2 - 10 have the same face and value (a card with a face of 2 is worth 2 points)
  - cards Jack, Queen and King are all worth 10
  - An Ace should start out with a value of 11

### 4 sets of 13
  - Find a way to make 4 sets of the 13 cards

**Bonus**
  - Add a suit of 'hearts', 'diamonds', 'spades' or 'clubs' to each set of 13 cards
  - use symbols (google which work with ruby/ your console)

### Card Properties
 - a value that is between 1 - 11 that is readable, it should not be allowed to be overwritten when created

 **Bonus**
 - a face: cards 2-10 have the same face as their value, but Jack, Queen, and King have a value of 10. An Ace has a starting value of 11

 ### Shuffle the Deck
 - Research how to shuffle the values in the array, the cards should be shuffled before playing


### Getting Started
- Create a console game that lets a player choose their name and then starts the game
- Make sure the console is printing informative messages to allow the player to know what is happening and what to do next
- Each player gets two random cards
- The player with the larger sum of their wins the round
 - Hint: What if the Player class had a method that summed the values of the two cards? Note, there are also numerous other ways to solve it, but this would let you practice with class methods.
  - Hint 2: Practice YAGNI (You Ain't Gonna Need It), for now your game just needs to sum 2 cards, find the simplest solution to do that. Don't worry about coming up with a soution that will let you sum any number of cards until you get to the point where you need to be able to do it(that's in the bonus section).
- By default a round is worth 10 dollars.
  - If the human player wins, 10 dollars should be subtracted from the house and added to the player
  - If the human player loses, 10 dollars should be subtrated from the player and added to the house
- If there is a tie, let the players know there is a tie and no bankrolls are affected
- The game ends after one round

### Getting Loopy
- Write a loop that lets the player choose "(d)eal or "(q)uit"
- If the player chooses "q" the game exits
- If the player chooses "d" the game starts a new round, players get 2 new cards and the sums are compared again and the bankroll is updated again...
- BUG! If you play too many rounds, you may end up running out of cards, find a way to fix it!

### Win/Lose Logic
- If neither sum is above 21, the player with the larger sum wins the hand
- If the sum of the card values is 21 the player automatically wins
- If the sum of the cards is greater than 21 the player automatically loses

**Bonus** - Ace is worth 11 unless it puts the player over 21, then it should be worth 1

**Bonus** - Allow a player to add a card to their hand


### User Experience in the console

- Let the player check their bankroll at any time
- Let the player lose if their bankroll falls below 0
- Let the player choose another amount of money to bet if they don't want to bet the default

Bonus add functionality for a player to choose to 'stay' (keep current cards' or 'hit' add one more card to their hand)

## Considerations
- Should there be a game object/game class? How can you tell when you need one?

<hr>


## Submission Guidelines
- :heavy_check_mark: Submit your project via [this google form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform).

</hr>

## Hungry For More
- Polish the game play to make it smoother, clearer, informative and fun to play
- allow for player to add more cards to their hand
- only allow the player to see one of The House's cards, until the round is over
- allow more game play options, like double-down and split
- allow creation of a new deck if the deck is used up
- allow player to choose how many decks of cards are used for gameplay
- sky is the limit with functionality. Add text colors, fun messaging, dealer hand logic of whether or not to add a card. Provide a suggestion for the player of whether to stay, hit, split, etc...
