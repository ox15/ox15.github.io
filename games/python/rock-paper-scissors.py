#!/usr/bin/python
import random
class Game(object):
    def __init__(self):
        self.myScore = 0
        self.yourScore = 0
        self.ties = 0
    def strings(self):
        self.yourScore=str(self.yourScore)
        self.myScore=str(self.myScore)
        self.ties=str(self.ties)
    def ints(self):
        self.yourScore=int(self.yourScore)
        self.myScore=int(self.myScore)
        self.ties=int(self.ties)
    def scores(self):
        print("You: " + self.yourScore)
        print("Me : " + self.myScore)
        print("Tie: " + self.ties)
    def gameResult(self):
        self.strings()
        print("Total score: ")
        self.scores()
        if self.yourScore>self.myScore:
            print("You won the game!")
        elif self.myScore>self.yourScore:
            print("I won the game.")
        elif self.yourScore==self.myScore:
            print("We tied the game.")
    def items(self):
        """Ask the user to play rock, paper, or scissors. Make yourItem based on the input. Play another round if the input is invalid."""
    def getResult(self):
        if self.yours==self.mine:
            self.result="We tied"
            self.ties += 1
        elif self.yourItem=="Rock" and self.myItem=="Paper":
            self.result="I win. Paper beats rock."
            self.myScore += 1
        elif self.yourItem=="Rock" and self.myItem=="Scissors":
            self.result="You win. Rock beats scissors."
            self.yourScore += 1
        elif self.yourItem=="Paper" and self.myItem=="Rock":
            self.result="You win. Paper beats rock."
            self.yourScore += 1
        elif self.yourItem=="Paper" and self.myItem=="Scissors":
            self.result="I win. Scissors beats paper."
            self.myScore += 1
        elif self.yourItem=="Scissors" and self.myItem=="Rock":
            self.result="I win. Rock beats scissors."
            self.myScore += 1
        elif self.yourItem=="Scissors" and self.myItem=="Paper":
            self.result="You win. Scissors beats paper."
            self.yourScore += 1
        else:
            self.result="Unknown result"
    def play(self):
        while True:
            self.mine=random.randint(0,2)
            try:
                self.yours=int(input("Press 1 to play rock, 2 to play paper, 3 to play scissors, or 0 to end: "))
                if self.yours==1: self.yourItem="Rock"
                elif self.yours==2: self.yourItem="Paper"
                elif self.yours==3: self.yourItem="Scissors"
                elif self.yours==0:
                    self.gameResult()
                    break
                else:
                    self.end=input("That's not a valid option. Let's play another round.")
                    if self.end==".":
                        break
                    continue
            except ValueError:
                self.end=input("You need to input a number. Let's play another round.")
                if self.end==".":
                    break
                continue
            print("You played "+self.yourItem)
            self.mine+=1
            if self.mine==1: self.myItem="Rock"
            elif self.mine==2: self.myItem="Paper"
            elif self.mine==3: self.myItem="Scissors"
            print("I played "+self.myItem)
            self.ints()
            self.getResult()
            self.strings()
            self.mine-=1
            print(self.result+"\nHere's the current score")
            self.scores()
g=Game()
g.play()