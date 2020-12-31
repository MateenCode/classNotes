# ['one', 'two', 'three'].each do |str, index|
#     puts "the value is #{index}"
# end

# times_two = [1,2,3].map do |num|
#     num * 2
# end

# p times_two

# def each(arr)
#     for elem in arr
#         yield(elem)
#     end
# end

# each 0...5 do |currentNum|
#     puts currentNum
# end



# log = Proc.new do |el|
#     puts el
# end

# log.call(15)


# foo = Proc.new do 
#     puts "hello world"
# end

# def bar(callback)
#     callback.call()
# end 

# bar(foo)

# p [1,2,3,4,5,6].select { |i| i > 3}
# p [1,2,3,4,5,6].grep (2..5)

# p ["squirtle", "mew", "woof"].sort_by { |word| word.length }
# p [2, 5, 1, 3].sort #returns [1, 2, 3, 5]


# p %w(mew pikachu).any? do |word| 
#     word.length <= 3 
# end

p %w(A String)