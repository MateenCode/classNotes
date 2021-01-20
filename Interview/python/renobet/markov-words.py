from collections import defaultdict
import random


def main():
  transitions = build_transitions()
  print(get_word(transitions))


def build_transitions():
  transitions = defaultdict(list)

  # set up special word-start and word-end symbols
  transitions["^"] = []
  transitions["$"] = []

  words = open("twl3.txt").readlines()
  for word in words:
    word = word.strip()
    one_for_one(word, transitions)

  return transitions

def one_for_one(word, transitions):
  first_letter = word[0]
  last_letter = word[-1]

  transitions["^"].append(first_letter)
  transitions[last_letter].append("$")

  for index in range(1, len(word)):
    c1 = word[index - 1]
    c2 = word[index]
    transitions[c1].append(c2)

def get_word(transitions, word="", current="^"):
  next_letter = random.choice(transitions[current])
  if next_letter == "$":
    return word
  word += next_letter
  return get_word(transitions, word, next_letter)

