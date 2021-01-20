class BankAccount():
  def __init__(self, kind):
    self.kind = kind
    self.balance = 0
    self.overdraft_fees = 0
  
  def deposit(self, amount):
    self.balance += amount
  
  def withdraw(self, amount):
    self.balance -= amount
    if (self.balance < 0):
      self.overdraft_fees += 20
    return amount

savings = BankAccount("savings")
checking = BankAccount("checking")

print("My new {} account has ${}.".format(savings.kind, savings.balance))
print("My new {} account has ${}.".format(checking.kind, checking.balance))
print()

wages = 800
savings.deposit(wages)


cash = savings.withdraw(150)
checking.deposit(cash)

print("I deposited ${} into my {} account.".format(wages, savings.kind))
print("I transferred ${} from {} to {}.".format(cash, savings.kind, checking.kind))
print()

print("My {} account now has ${}.".format(savings.kind, savings.balance))
print("My {} account now has ${}.".format(checking.kind, checking.balance))
