# Ruby's way of converting strings to lowercase.
# Calling the downcase method on a string will return the lowercase version of the string
# # but the original variable won't change

# example
# name = 'Foo'
# puts name          
# puts name.downcase  
# puts name           


# Calling the same methods followed by an exclamation mark will
# both return lowercase version of the string and will 
# also change the content of the variable.

# example
# name = "Foo"
# puts name.downcase!
# puts name           

# swapcase
# Returns a copy of str with uppercase alphabetic characters converted to lowercase 
# and lowercase characters converted to uppercase.

 
greeting = "Hello"

# p  greeting.swapcase
# p greeting

p greeting.swapcase!
p greeting

 