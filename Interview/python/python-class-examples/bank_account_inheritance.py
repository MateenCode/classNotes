class BankAccount():
    def __init__(self, kind):
        self.kind = kind
        self.balance = 0
        self.overdraft_fees = 0

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount
        # check and see if I have overdrafted
        if (self.balance < 0):
            self.overdraft_fees += 20
        return amount

class Savings(BankAccount):
    def __init__(self, kind, initial_deposit):
        super().__init__(kind)
        self.initial_deposit = initial_deposit
        

becu_savings = Savings("savings", 200)


print("My new account type is " + str(becu_savings.kind))
print("My initial deposit is " + str(becu_savings.initial_deposit))
