#!/usr/bin/python
import random, sys # random for random cards; sys for the enter key
def war(): # What do we do in a war?
    print("WAR!") # Show that we're in a war
    myCard=random.randint(1,cards) # Draw another card for me
    yourCard=random.randint(1,cards) # Draw another card for you
    print("I have a "+str(myCard)+", and you have a "+str(yourCard)) # Show what cards we have
    if yourCard>myCard: print("Your card is higher. You win.")
    elif myCard>yourCard: print("My card is higher. I win.")
    else: war() # If we have the same card, have another war!

myScore=0; yourScore=0; wars=0; cards=13; rounds=10 # Set default score, number of wars, cards, and rounds (in case we don't type anything in)
try: rounds=input("How many rounds do you want to play? ")
except: print("There are 10 rounds.")
try: cards=input("How many cards are there? (default is 13; higher numbers mean less chance of a war) ")
except: print("There are 13 cards.")

print("Press enter to play your card") # Game on!
for r in range(0, rounds): # Go through the card-playing loop for the specified number of rounds
	sys.stdin.read(1) # Listen for when we press the enter key
	print("Round "+str(r+1)) # Print the number of the current round
	yourCard=random.randint(1,cards) # Draw a card for you...
	print("You played a "+str(yourCard)) # ...and show it.
	myCard=random.randint(1,cards) # Draw a card for me...
	print("I played a "+str(myCard)) # ...and show it.
	if yourCard>myCard:
		print("Your card is higher. You win.")
		yourScore=yourScore+1
		continue
	elif myCard>yourCard:
		print("My card is higher. I win.")
		myScore=myScore+1
		continue
	else:
		war() # If the cards are the same, have a war!
		wars=wars+1
print("SCORES\n==========\nMe:   "+str(myScore)+"\nYou:  "+str(yourScore)+"\nWars: "+str(wars)) # When the game is over, print the scores
if myScore>yourScore: print("I won the game by "+str(myScore-yourScore)+" rounds.")
elif yourScore>myScore: print("You won the game by "+str(yourScore-myScore)+" rounds!")
else: print("We tied.")
print("\nCheck out my website! https://jcadcell.github.io\n")
