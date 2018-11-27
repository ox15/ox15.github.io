import random
import sys
"""
Letter Guessing Game
"""

class Game(object):
    def __init__(self):
        # Split a string of uppercase letters into a list.
        self.stop = False
        self.guessAgain=False
        self.length = 4
        self.score = 5
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

    def getScore(self):
        if self.score > 0:
            print("Your score is", str(self.score))
        else:
            print("You have 0 points. Game over.")
            self.stop=True

    def getWord(self, length):
        if self.guessAgain == False:
            try: self.length = int(input("How long do you want the word to be? "))
            except ValueError: self.length=3
        print(self.length)
        self.stop=False
        print("Finding a valid "+str(self.length)+"-letter word...")
        print(self.length)
        self.word = random.choice(self.wordList)
        print(self.length)
        while True:
            print(self.length)
            if len(self.word) == length:
                print("Found", self.word)
                print(self.length)
                self.makeChoices()
                break
            elif len(self.word) != length:
                print(self.word, "is not valid")
                self.word = random.choice(self.wordList)
        #print(self.word)



    def makeChoices(self):
        self.wordChoices=""
        for i in range(0,self.length):
            if self.word[i] in self.cons:
                self.letterChoices = self.word[i] + \
                random.choice(self.vowels) + random.choice(self.cons)
            elif self.word[i] in self.vowels:
                self.letterChoices = self.word[i] + \
                random.choice(self.cons) + random.choice(self.cons)
            self.wordChoices = self.wordChoices \
            +"\n"+''.join(sorted(self.letterChoices))
        print("Word choices\n"+self.wordChoices)
        self.guess()

    def guess(self):
        while True:
            if self.stop == True: break
            guess = str(input("Enter your guess: ")).upper()
            if guess == self.word:
                print("You guessed right, the word was "+self.word)
                self.score += 3
                self.getScore()
                mode = int(input("Do you want to guess a "+str(self.length)+
                             "-letter word (1) or guess another word (2) or "
                             "quit (0) "))
                if mode == 1:
                    break
                elif mode == 2:
                    self.guessAgain=True
                    self.length=input("How long should the word be? ")
                    self.getWord(self.length)

                elif mode == 0:
                    self.stop = True
            elif guess==".":
                print("The word was "+self.word)
                self.stop=True
                self.play()
            else:
                print("No, try again")
                self.score -= 1
                self.getScore()


    def play(self):
        while self.stop == False:
            mode = input("Type '.' to quit or press enter to play")
            if mode == ".":
                self.getScore()
                break
            else:
                self.getWord(self.length)
# Play the game
g=Game()
g.play()
