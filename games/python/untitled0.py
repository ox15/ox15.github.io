# -*- coding: utf-8 -*-
"""
Created on Tue Nov 27 11:41:16 2018

@author: ME
"""



"""
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
"""