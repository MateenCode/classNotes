########## Hello World#############
# Print "Hello World" to the console

# p "hello world"

# Interpolate the adjective variable into the Hello World string using #{}

# adjective = "Big Bad"
# p "#{hello} #{adjective}"

=begin
Save "Hello World" to a variable. 
Without changing the letters in your code 
manually, permanently change "Hello World" 
to uppercased letters.
=end

# hello =  "hello world".upcase

########## Nums Array and Enumerables #############
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# Use .uniq to print the array with all duplicate entries removed

# p nums.uniq 

=begin 
Next, use .push and .pop , 
.shift .unshift and .length 
on the array as you would with 
javaScript (if you need to add a number, add 5
=end

# p nums.push(7,7,7)
# p nums.pop(2)
# p nums.shift(4)
# p nums.unshift(5)
# p nums.length

# Use .include? to check if the array contains the number 8

# p nums.include?(8)

# Use .find_all to find all the numbers greater than 10

# p nums.find_all {|i| i > 10}

# use .all? to check if all the numbers are greater than 0?

# p nums.all? {|i| i > 0}

# use any? to check if there are any numbers that are divisible by 8

# p nums.any? {|i| i % 8}

# use .count to let you know how many numbers are greater than 4

# p nums.count { |i| i > 4}

# use .each_with_index to print each item times its index

# hash = Hash.new
# nums.each_with_index {|item,index| 
# hash[item] = index}
# p hash

# .find the number that is divisible by 7 and 5 and is greater than 0

# p nums.find {|i| i % 7 === 0 and i % 5 === 0 and i > 0}

# .find_index of the number that is divisible by 5 and 7 and is greater than 0

# p nums.find_index {|i| i % 7 === 0 and i % 5 === 0 and i > 0}

# return the .first 3 numbers

# p nums.first(3)

# return the .last 5 numbers

# p nums.last(5)

# .group_by the modulo of 3 ( % 3 )

# p nums.group_by {|i| i % 3 }

# use minmax to return the smallest and largest number

# p nums.minmax

# use .reject to return all the numbers that are NOT divisible by 3

# p nums.reject {|i| i % 3 == 0}

# use .select to return all the numbers divisible by 5

# p nums.select {|i| i % 5 === 0}

########## Color Array #############

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# Print out a random color.

# p colors.sample

# Print out the colors array in reverse order.

# p colors.reverse

# Print out all of the colors in the array with all capital letters.
# p colors.map(&:capitalize).join(" ").split(" ")

########## Methods #############

# def find_area height , width
#     height = 20
#     width = 30
#     area = height * width
#     puts "area of rectangle is #{area}"   
# end
# find_area(20, 30)

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
 
#  p nums.map {|num| num * 5}

# def multiply_each_by_five arr
#      p arr.map {|num| num * 5}
# end
# multiply_each_by_five nums


########## Methods with hash #############

# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

def print_price elem
    p  elem[:price]
end
# elem =>  {
        # console.log(elem.price)
# }
print_price table

########## Solving Problems with Ruby #############

# If we list all the natural numbers 
# below 10 that are multiples of 3 or 5, 
# we get 3, 5, 6 and 9. 
# The sum of these multiples is 23.

#  count = 0
 
#  (1...1000).each do |n|
    
#     if n % 3 == 0 && n % 5 == 0
#         count += n
#     elsif n % 5 == 0
#         count += n
#         elsif n % 3 == 0
#             count += n
#         end
#     end

# p count

########## Primes #############

# def check_prime num
#     n = 2
#     while n < num
#         return false if num % n == 0
#         n += 1
#     end
#     true
# end
# # p check_prime(6)

# def get_primes num
#     prime_arr =[]
#    n = 2
#    while n < num
#     if check_prime? (n)
#         prime_arr.push(n)
#     end
#     n += 1
# end
#   prime_arr

# end
# p check_prime(100)








