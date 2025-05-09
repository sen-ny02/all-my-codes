class bankAccount:
    def __init__(self, name, age, balance, password):
        self.name = name
        self.age = age
        self.balance = balance
        self.password = password

    def addMoney(self, moneyInput):
        self.balance += moneyInput
        return self.balance

    def withdrawMoney(self, moneyInput):
        if moneyInput > self.balance:
            print(f"Sorry, the amount entered [£{moneyInput}] is higher than your current balance [£{self.balance}]"
                  "\nYour balance has not been altered.")
        else:
            self.balance -= moneyInput
        return (f"£{self.balance}")

    def showBalance(self):
        print(f"Your current balance is: {self.balance}")

print("------------------------------------------------")
print("Before widthrawl:")
Edward = bankAccount("Edward", 27, 800, "Senitha123")
Edward.showBalance() 
print()
print("After valid withdrawl:")
Edward.withdrawMoney(60)
Edward.showBalance()
print()
print("After invalid withdrawl:")
Edward.withdrawMoney(900)
Edward.showBalance()
print("------------------------------------------------")


