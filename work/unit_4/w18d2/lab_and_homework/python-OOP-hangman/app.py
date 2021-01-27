import random

word_tuple = "bibble", "cabotage", "erinaceous", "firman", "gabelle",\
			 "halfpace", "impignorate", "kakorrhaphiophobia", "macrosmatic",\
			 "oxter", "pauciloquy", "quire", "ratoon", "ulotrichous",\
			 "valitudinarian", "winklepicker", "yarborough", "zoanthropy"

class Word():
	def __init__(self, random_word):
		self.random_word = random_word
		self.char_list = [{"char": char, "guessed": False} for char in random_word]

	def to_print(self):
		"""This function prints the underscore for the user to see how many chars they have guessed."""
		letters_to_print = ""
		for char_dict in self.char_list:
			if char_dict["guessed"]:
				c = char_dict["char"]
				letters_to_print += f"{c} "
			else:
				letters_to_print += "_ "
		print(letters_to_print)
		return letters_to_print

	def check_guessed(self, player_input):
		"""This function will flip the Boolean for a character in self.char_list if the character was guessed."""
		for char_dict in self.char_list:
			if char_dict["char"] == player_input:
				char_dict["guessed"] = True

	def give_feedback(self, user_input):
		if user_input in self.random_word:
			return (True, "Nice work!")
		else:
			return (False, "Nope, nope, nope")

	def is_fully_guessed(self):
		fully_guessed = True
		for char_dict in self.char_list:
			if not char_dict["guessed"]:
				return False
		return fully_guessed

print("Welcome to the game, what's your name?", end=": ")
user_input = input()
print(f"Ready to play, {user_input}, y/n", end=": ")
start_game = input()

if start_game == "n":
	print("bye!")
elif start_game == "y":
	chosen_word = random.choice(word_tuple)
	word_in_play = Word(chosen_word)
	remaining_guesses = 8

	while remaining_guesses > 0:
		print(f"You have {remaining_guesses} guesses left!")
		word_in_play.to_print()
		print("Guess a letter", end=": ")
		guessed_letter = input()
		word_in_play.check_guessed(guessed_letter)
		guessed, feedback = word_in_play.give_feedback(guessed_letter)

		if not guessed:
			remaining_guesses -= 1

		# if guessed == True
		print(feedback)
		word_in_play.to_print()

		word_fully_guessed = word_in_play.is_fully_guessed()
		if word_fully_guessed:
			print("Great job guessing the word! You win!")
			break

	if remaining_guesses <= 0:
		print(f"You lost! The word was {chosen_word}. Better luck next time!")