class T9Node:
    def __init__(self):
        # Each node stores a list of words.
        self.words = []
        # Each node stores a dictionary referencing other nodes
        self.nodes = {}

class T9Tree:
    def __init__(self):
        self.root = T9Node()
        
    def add_word(self, word):
        self.add_word_helper(word, word, self.root)
        
    def add_word_helper(self, letters, full_word, node):
        if len(letters) == 0:
            node.words.append(full_word)
            return
        digit = get_digit(letters[0])
        digit = str(digit)
        
        if digit not in node.nodes:
            node.nodes[digit] = T9Node()
        next_node = node.nodes[digit]
        self.add_word_helper(letters[1:], full_word, next_node)
        
    def get_words(self, code):
        return self.get_words_helper(code, self.root)
        
    # traverse the tree following branches according to the digit of
    # the code. If you ever get to a leaf node then return the list of
    # words stores there.
    def get_words_helper(self, code, node):
        if len(code) == 0:
            return node.words
        
        # peel off the current digit. obtain a reference to the next node.
        digit = code[0]
        next_node = node.nodes[digit]
        # iterate forward recursively slashing off the digit we just used
        return self.get_words_helper(code[1:], next_node)
        
    def get_digit(letter):
        if letter in "abc":
            return 2
        elif letter in "def":
            return 3
        elif letter in "ghi":
            return 4
        elif letter in "jkl":
            return 5
        elif letter in "mno":
            return 6
        elif letter in "pqrs":
            return 7
        elif letter in "tuv":
            return 8
        elif letter in "wxyz":
            return 9
        
print("loading dictionary...")
t9 = T9Tree()
dictionary = open("twl3.txt")
for word in dictionary:
    word = word.strip()
    t9.add_word(word)

keep_playing = True
while keep_playing:
    response = input("enter your t9 code: ")
    words = t9.get_words(response)
    print(words)
    print()
    
    response = input("want to enter another word? ")
    if response == "n":
      print("Thanks for texting! Goodbye.")
      keep_playing = False
