import random, sys
"""
Letter Guessing Game
"""


class Game(object):
    def __init__(self):
        # Split a string of uppercase letters into a list.
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

    def makeWord(self, length):
        """Returns a string of letters used to make a word."""
        self.wordChoices = ""
        for i in range(length):
            self.letterChoices = random.choice(self.vowels) + \
                random.choice(self.cons) + random.choice(self.cons)
            self.wordChoices = self.wordChoices + "\n" + self.letterChoices
        return self.wordChoices
    def wordMaker(self):
        """Ask the user to make a word using the provided sets of letters."""
        length=int(input("How long should the word be? "))
        self.wordChoices = ""
        for i in range(length):
            self.letterChoices = random.choice(self.vowels) + \
                random.choice(self.cons) + random.choice(self.cons)
            self.wordChoices = self.wordChoices + "\n" + self.letterChoices
        return self.wordChoices
        print("Your choices are:", self.wordChoices)
        word=input("Please make a word, or type '.' to exit: ")
        if word in self.wordList:
            print("That's a valid word!")
        elif word == ".":
            sys.exit()
        else:
            print("That's not a valid word.")
    def guesser(self):
        """Computer makes a word, you are the guesser."""
        length = 3
        while True:
            word = ""
            choices=self.makeWord(length)#random.randint(3, 10)
            #print("choices:", str(choices))
            choiceList=choices.split("\n")[1:]
            choiceList2=choiceList[:]
            #print("choice list:", str(choiceList))
            #letterChoices = random.choice(choiceList)
            #print("letter choices:", str(letterChoices))
            for i in range(3):
                #choices=self.makeWord(3)#random.randint(3, 10)
                print("choices:", str(choices))
                #choiceList=choices.split("\n")[1:]
                print("choice list:", str(choiceList))
                letterChoices = random.choice(choiceList)
                print("letter choices:", str(letterChoices))
                letter=random.choice(letterChoices)
                print("letter:", letter)
                word=word+letter
                choiceList.remove(letterChoices)
                print("word:", word)
                print("i", i)
                i += 1
                #print(i)
                x=input(">")
                if x==".":
                    sys.exit()
                if word in self.wordList and len(word)==length:
                    i=0
                    print("The computer's word is "+ word)
                    print("The computer found a word using these letters:", str(choiceList2))
                    while True:
                        guess=str(input("Enter your guess: ")).upper()
                        if guess==word:
                            print("You guessed right, the word was "+word)
                            break
                        elif guess=="XXX":
                            break
                        else:
                            print("No, try again")
    def play(self):
        self.mode=int(input("Do you want to be the WORD-MAKER (1) " \
                        "or the GUESSER (2)? "))
        if self.mode==1:
            self.wordMaker()
        else:
            self.guesser()


g=Game()
g.play()
