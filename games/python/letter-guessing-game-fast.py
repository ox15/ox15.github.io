import random
import sys
import string
"""
Letter Guessing Game
"""

class Game(object):
    def __init__(self):
        # Split a string of uppercase letters into a list.
        self.score = 20
        self.iScore = 20
        self.vowels = "A,E,I,O,U".split(",")
        self.cons = "B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z".split(",")
        self.WORDLIST_FILENAME = "words.txt"
        try:
            print("Loading word list from file: "+self.WORDLIST_FILENAME)
            # inFile: file
            inFile = open(self.WORDLIST_FILENAME, 'r')
        except FileNotFoundError:
            print("File not found:", self.WORDLIST_FILENAME)
            sys.exit()
        else:
            # wordList: list of strings
            self.wordList = []
            for line in inFile:
                self.wordList.append(line.strip())
            print("  ", len(self.wordList), "words loaded.")

    def getLetters(self, length):
        """Returns a string of letters used to make a word."""
        self.word = random.choice(self.wordList)
        while True:
            if len(self.word) == length:
                print("Found", self.word)
                break
            elif len(self.word) != length:
                print(self.word, "is not valid")
                self.word = random.choice(self.wordList)
        #print(self.word)
        wordChoices=""
        for i in range(0,length):
            if self.word[i] in self.cons:
                self.letterChoices = self.word[i] + \
                random.choice(self.vowels) + random.choice(self.cons)
            elif self.word[i] in self.vowels:
                self.letterChoices = self.word[i] + \
                random.choice(self.cons) + random.choice(self.cons)
            wordChoices=wordChoices+"\n"+''.join(sorted(self.letterChoices))
        print("Word choices\n"+wordChoices)

    def guess(self):
        while True:
            guess = str(input("Enter your guess: ")).upper()
            if guess == self.word:
                print("You guessed right, the word was "+self.word)
                self.score += 3
                print("Your score is "+str(self.score)+"/"+str(self.iScore))
                break
            elif guess==".":
                print("The word was "+self.word)
                self.stop=True
                break
            else:
                print("No, try again")
                self.score -= 1
                print("Your score is", str(self.score)+"/"+str(self.iScore))

    def makeWord(self):
        for i in range(self.length):
            if self.stop==True: break
            for j in range(len(self.choiceList)-1, -1, -1):
                letterChoices = self.choiceList[j]
                #letterChoices = random.choice(self.choiceList)
                letter=random.choice(letterChoices)
            self.word=self.word+letter
            self.choiceList.remove(letterChoices)
            i += 1
            if len(self.word)==self.length and self.word in self.wordList:
                i=0
                print("The computer's word is "+ self.word)
                print("The computer found a word using these letters:", str(self.choices))
                self.guess()

    def makeChoices(self):
        self.word = ""
        self.choices=self.getLetters(self.length)
        self.choiceList=self.choices.split("\n")[1:]
        self.makeWord()

    def play(self):
        while True:
            self.mode = "."#input("Type '.' to quit or press enter to play")
            if self.mode == ".":
                print("Your score is", str(self.score)+"/"+str(self.iScore))
                break
            else:
                self.length = int(input("How long do you want the word to be? "))
                self.stop=False
                print("Finding a valid "+str(self.length)+"-letter word...")
                while self.stop != True:
                    self.makeChoices()
# Play the game
g=Game()
g.play()
