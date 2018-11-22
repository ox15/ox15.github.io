#!/usr/bin/python
from time import sleep
import random
sleepTime=1
myScore = 0
yourScore = 0
ties = 0
def strings():
    global yourScore
    global myScore
    global ties
    yourScore=str(yourScore)
    myScore=str(myScore)
    ties=str(ties)
def ints():
    global yourScore
    global myScore
    global ties
    yourScore=int(yourScore)
    myScore=int(myScore)
    ties=int(ties)
def scores():
    global yourScore
    global myScore
    global ties
    print("You: "+yourScore)
    print("Me : "+myScore)
    print("Tie: "+ties)
while True:
    mine=random.randint(0,2)
    yours=int(input("Press 1 to play rock, 2 to play paper, 3 to play scissors, or 0 to end: "))
    if yours==1: yourItem="Rock"
    elif yours==2: yourItem="Paper"
    elif yours==3: yourItem="Scissors"
    elif yours==0:
        strings()
        print("Total score: ")
        scores()
        if yourScore>myScore:
            print("You won the game!")
        elif myScore>yourScore:
            print("I won the game.")
        elif yourScore==myScore:
            print("We tied the game.")
        break
    else:
        end=input("That's not a valid option. Let's play another round.")
        if end==".":
            break
        continue
    print("You played "+yourItem)
    sleep(sleepTime)
    mine+=1
    if mine==1: myItem="Rock"
    elif mine==2: myItem="Paper"
    elif mine==3: myItem="Scissors"
    print("I played "+myItem)
    sleep(sleepTime)
    ints()
    if yours==mine:
        result="We tied"
        ties += 1
    elif yourItem=="Rock" and myItem=="Paper":
        result="I win. Paper beats rock."
        myScore += 1
    elif yourItem=="Rock" and myItem=="Scissors":
        result="You win. Rock beats scissors."
        yourScore += 1
    elif yourItem=="Paper" and myItem=="Rock":
        result="You win. Paper beats rock."
        yourScore += 1
    elif yourItem=="Paper" and myItem=="Scissors":
        result="I win. Scissors beats paper."
        myScore += 1
    elif yourItem=="Scissors" and myItem=="Rock":
        result="I win. Rock beats scissors."
        myScore += 1
    elif yourItem=="Scissors" and myItem=="Paper":
        result="You win. Scissors beats paper."
        yourScore += 1
    else:
        result="Unknown result"
    strings()
    mine-=1
    print(result+"\nHere's the current score")
    sleep(sleepTime)
    scores()
