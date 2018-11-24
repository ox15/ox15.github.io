import random, sys

class Game(object):
    def __init__(self):
        self.money=1000
        self.sold=False
        self.item=None
    def makeItem(self, quantity, item, price):
        print("You bought "+str(quantity)+" "+item+" for $"+str(price))
        self.money -= price
        print("You now have $"+str(self.money))
    def start(self):
        print("You have $"+str(self.money)+". Select something to buy:")
        print("1. Guitar: $40")
        print("2. Up to 50 chickens: $10 each")
        self.item = int(input("Buy item "))
    def guitar(self):
        if self.item == 1:
            self.albumPrice = random.randint(1, 10)
            self.copies = random.randint(10, 100)
            self.makeItem(1, "guitar", 40)
            self.money = (self.albumPrice * self.copies) + self.money
            print("You record an album with your new guitar and make "+str(self.copies)+" copies of it. You sell them for $"+str(self.albumPrice)+" each. You now have $"+str(self.money))
    def layEggs(self):
        self.eggsPerChicken=[]
        for i in range(self.chickens):
            self.eggPrice=0.1
            self.eggs=random.randint(1, 6)
            self.eggsPerChicken.append(self.eggs)
    def sellEggs(self):
        self.feedPrice=15
        self.eggTotal=sum(self.eggsPerChicken[0:self.chickens])
        self.total=self.eggTotal*self.eggPrice
        self.money=self.money-self.feedPrice
        print("Eggs laid by each chicken: "+str(self.eggsPerChicken))
        print("You spend $"+str(self.feedPrice)+" on chicken feed. ($"+str(self.feedPrice/self.chickens)+" per chicken). You now have $"+str(self.money))
        self.money=self.total+self.money
        print("You sell "+str(self.eggTotal)+" eggs for $"+str(self.total)+" at a rate of $"+str(self.eggPrice)+" per egg. You now have $"+str(self.money))
    def end(self):
        self.endMonth=int(input("The month is over. You can sell your chickens (1), or end the game (0)"))
        if self.endMonth==1:
            self.money=self.money+(self.chickens*15)
            print("You sell your chickens for $15 each. You now have $"+str(self.money))
            self.sold=True
            del(self.endMonth)
            sys.exit()
        elif self.endMonth==0:
            sys.exit()

    def noMoney(self):
        if self.money<=0:
            print("You ran out of money. Game over.")
            sys.exit()
    def chickens(self):
        if self.item == 2:
            self.chickens=int(input("How many chickens do you want to buy? "))
            self.makeItem(self.chickens, "chickens", self.chickens*10)
            if self.chickens>50:
                raise AssertionError("There are only 50 chickens")
            while True:
                if self.sold==False:
                    self.noMoney()
                    self.layEggs()
                    self.sellEggs()
                    self.end()
    def play(self):
        self.start()
        self.guitar()
        self.chickens()
g=Game()
g.play()

