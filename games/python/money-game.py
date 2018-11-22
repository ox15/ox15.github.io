import random, sys
money=1000
sold=False
def makeItem(quantity, item, price):
    global money
    print("You bought "+str(quantity)+" "+item+" for $"+str(price))
    money-=price
    print("You now have $"+str(money))

print("You have $"+str(money)+". Select something to buy:")
print("1. Guitar: $40")
print("2. Up to 50 chickens: $10 each")
item=int(input("Buy item "))
if item==1:
    albumPrice=random.randint(1, 10)
    copies=random.randint(10, 100)
    makeItem(1, "guitar", 40)
    money=(albumPrice*copies)+money
    print("You record an album with your new guitar and make "+str(copies)+" copies of it. You sell them for $"+str(albumPrice)+" each. You now have $"+str(money))
elif item==2:
    chickens=int(input("How many chickens do you want to buy? "))
    makeItem(chickens, "chickens", chickens*10)
    if chickens>50:
        raise AssertionError("There are only 50 chickens")
    while True:
        if sold==False:
            if money<=0:
                print("You ran out of money. Game over.")
                break
            eggsPerChicken=[]
            for i in range(chickens):
                eggPrice=0.1
                eggs=random.randint(1, 6)
                eggsPerChicken.append(eggs)
            feedPrice=15
            eggTotal=sum(eggsPerChicken[0:chickens])
            total=eggTotal*eggPrice
            money=money-feedPrice
            print("Eggs laid by each chicken: "+str(eggsPerChicken))
            print("You spend $"+str(feedPrice)+" on chicken feed. ($"+str(feedPrice/chickens)+" per chicken). You now have $"+str(money))
            money=total+money
            print("You sell "+str(eggTotal)+" eggs for $"+str(total)+" at a rate of $"+str(eggPrice)+" per egg. You now have $"+str(money))
            endMonth=int(input("The month is over. You can sell your chickens (1) "))
        if endMonth==1:
            money=money+(chickens*15)
            print("You sell your chickens for $15 each. "+str(feedPrice)+". You now have $"+str(money))
            sold=True
            del(endMonth)
        if endMonth==0:
            sys.exit()