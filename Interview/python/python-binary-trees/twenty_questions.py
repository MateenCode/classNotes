class QuestionNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
class QuestionTree:
    def __init__(self):
        self.root = QuestionNode("hippo")
        
    def play_game(self):
        print("Welcome to 20 Questions.")
        self.root = self.play_game_helper(self.root)
        
    def play_game_helper(self, node):
        if node.left == None and node.right == None:
            print("You're thinking of:", node.data)
            response = input("y/n? ")
            if response == "y":
                print("I win!!")
                return node
            else:
                # call a function that will insert a new question node
                return self.add_answer(node)
        else:
            print(node.data)
            response = input("y/n? ")
            if response == "y":
                node.right = self.play_game_helper(node.right)
            elif response == "n":
                node.left = self.play_game_helper(node.left)
            else:
                # if someone put in bad in put just ask the question again.
                self.play_game_helper(node)
            return node
          
    # create a new node that adds a dis-ambiguiating question
    # and a new answer.
    def add_answer(self, old_node):
        your_thing = input("enter the thing you were thinking of: ")
        question = input("enter your disambiguating question: ")
        yes_or_no = input("enter y/n for your thing: ")
        
        your_thing = QuestionNode(your_thing)
        new_question = QuestionNode(question)
        if yes_or_no == "y":
            new_question.right = your_thing
            new_question.left = old_node
        elif yes_or_no == "n":
            new_question.right = old_node
            new_question.left = your_thing
        else:
            print("Invalid y/n input. Try again.")
            return self.add_answer(old_node)
        return new_question
        
# use the built-in shelve module to save our tree object to
# memory so we can save/load it easily between games.
import shelve

savefile = shelve.open("twenty_questions.save")
if "tree" in savefile:
    twenty_questions = savefile["tree"]
else:
    twenty_questions = QuestionTree()
    
twenty_questions.play_game()
keep_playing = True
while keep_playing:
    savefile["tree"] = twenty_questions
    response = input("do you want to play again? ")
    if response == "y":
      twenty_questions.play_game()
    elif response == "n":
      print("Thanks for playing! Goodbye.")
      keep_playing = False
    else:
        print("I'm sorry I didn't understand you. enter y/n")
        
savefile.close()
