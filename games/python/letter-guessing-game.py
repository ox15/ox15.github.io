import random
import sys


class Game(object):
    def __init__(self):
        # Split a string of uppercase letters into a list.
        self.score= 3
        self.vowels = "A,E,I,O,U".split(",")
        self.cons = "B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z".split(",")
        self.alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",") 
        self.WORDLIST_FILENAME = "words.txt"
        try:
            print("Loading word list from file: "+self.WORDLIST_FILENAME)
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
        finally:
            inFile.close()
    
    def pickWord(self):
        # Make a new list of words with the same length as the user's choice.
        myList = []
       
        i = 0
        for w in self.wordList:
            if len(w) == self.length:
                myList.append(w)
            
        # Pick a random word from the list.
        self.word = random.choice(myList)
        print("In pickWord, the word is", self.word)

    def showScore(self):
        print("Your score is", str(self.score))
        if self.score == 0:
            self.showWord(True)

    def showWord(self, stop=False):
        if stop:
            print("Game over! The word was", self.word)
            sys.exit()
        else:
            print("Good job! The word was", self.word)

    def getLetters(self, length):
        """Returns a string of letters used to make a word."""
        self.wordChoices = ""
        for i in range(length):
            self.letterChoices = ""
            for j in range(3):
                self.letterChoices += random.choice(self.alphabet)
            self.wordChoices = self.wordChoices + "\n" + self.letterChoices
        return self.wordChoices

    def guess(self):
        rightPoints = 1
        wrongPoints = 1
        while True:
            guess = str(input("Enter your guess: ")).upper()
            if guess == self.word:
                self.score += rightPoints
                
            elif guess==".":
                self.showWord(True)
            else:
                print("No, try again")
                self.score -= wrongPoints
            self.showScore()

    def makeWord(self):
        """This function will not run."""
        for i in range(self.length):
            if self.stop==True: break
            for j in range(len(self.choiceList)-1, -1, -1):
                letterChoices = self.choiceList[j]
                letter=random.choice(letterChoices)
            self.word=self.word+letter
            self.choiceList.remove(letterChoices)
            i += 1
            if len(self.word)==self.length and self.word in self.wordList:
                i=0
                print("The computer found a word using these letters:", str(self.choices))
                self.guess()

    def makeChoices(self):
        self.pickWord()
        # Split the word into a list of letters.
        letterList = list(self.word)
        for letter in letterList:
            print("letter:", letter)
            # Add 2 letters to each item in the list to make the guesses.
            letter = letter + random.choice(self.alphabet) + random.choice(self.alphabet)
            random.shuffle(list(letter))
            print("new letter:", letter)
        print("The computer has chosen a word with these letters:")
        for i in letterList:
            print(i)
        self.guess()
        '''self.word = ""
        self.choices=self.getLetters(self.length)
        self.choiceList=self.choices.split("\n")[1:]
        self.makeWord()'''

    def play(self):
        while True:
            self.mode = input("Type '.' to quit or press enter to play")
            if self.mode == ".":
                print("Your score is", str(self.score))
                break
            else:
                self.length = int(input("How long do you want the word to be? (6 or more will take a while) "))
                self.stop=False
                print("Finding a valid "+str(self.length)+"-letter word...")
                self.makeChoices()
# Play the game
g=Game()
g.play()
