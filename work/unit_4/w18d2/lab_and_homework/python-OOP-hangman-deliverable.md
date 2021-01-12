![GA Cog](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Python OOP Hangman Game

## Deliverable

- Fork and clone this repo. Make a pull request when it is finished.

- A console hangman game, where the user can guess letters until they either win or lose.

## MVP -- requirements

- _You must have a `Word` class_.

- It should print the letters of a word to be guessed like this `_ _ _ _ _ _`
- As the user guesses letters:
  - If they get it right:
    - The letter should be filled in everywhere it appears, so if the word is cheese, after they type "e" and hit enter, they should see `_ _ e e _ e`.
    - They should be praised somehow (something like "Yes!")
    - If that guess completes the word, **Game over—Win!** --> they should be told the word, praised for winning, and the game should stop (i.e. stop prompting them for input, and the program should exit).
  - If they guess a wrong letter:
    - They should be admonished ("No, silly" or whatver)
    - If that guess uses up their last remaining guess, **Game over—Lose!** --> they should be told they lost and the game should stop (i.e. stop prompting them for input, and the program should exit).
  - If the game is _not_ over, then after each guess, it should tell the user how many guesses are remaining, and which letters have already been guessed, and re-print the word with blanks

The structure of your MVP will be:

```python
class Word():
  def__init__(self, chosen_word):
    # this method will split the word up into a list of dictionaries with 2 attributes:
    # the letter/character, and a boolean representing whether or not it has been guessed

  # ...other methods here... (refer back to JS hangman for ideas -- may not translate exactly, but
  # should be close enough)


# some variables here to prepare the wordlist, initialize things like
# `remaining_guesses` (start a round with 8), `letters_used`, the `chosen_word` (randomly
# chosen from a list of words you also declare here perhaps?),
#and whatever else you might want to keep track of


# a loop here that will cause game to play and be exited when user either wins or loses
# see below for tips on how to structure this loop
```

## Wondering how to start?

Here is a JavaScript version for hangman [here](OOP-DOM-Hangman.md) to get some ideas about how that might look.

But bear in mind you're building a console game that asks for user input and waits vs a browser game based on (innately asynchronous) user events, so some of the overall game structure might be slightly different. But in many ways that could make it easier!

## Nice-to-have

- If the user guesses a letter they have already guessed, they should be told "you already guessed that", and it should not count against their guesses remaining.
- If the user enters something that isn't a letter, they should be told "that is not a letter", and it should not count against their guesses remaining.
- It should work regardless of uppercase or lowercase (guessing "X" and "x" should count as a repeated guess, and not count in against their guesses remaining).

## Stretch Goals/"Hungry for More?"

- Make it track rounds
- It should be able to handle words with punctuation/non-letter characgers and ignore them, i.e. "Miles O'Brien" or "Jean-Luc Picard" (user should guess only letters, not other characters)

## Tips

You can synchronously read user input from the terminal with the `input()` method like this:

```python
user_input = input()
print('You typed', user_input)
```

...But you may want to prompt them before you collect user input

```python
print('Type something')
user_input = input()
print('You typed', user_input)
```

...And wouldn't it be nicer if the cursor didn't go down to the next line? You can achieve that like this:

```python
print('Type something', end=": ") # add colon + space to end; instead of line break, nice for user input
user_input = input()
print('You typed', user_input)
```

So putting all of that together, the following tiny program will keep asking the user to type something, and repeat it back to them, unless they type `q`, then it will stop

```python
while True:
  print("type something", end=": ")
  user_input = input()
  if(user_input == "q"):
    print("bye!")
    break
  else:
    print("you typed:", user_input)
```
