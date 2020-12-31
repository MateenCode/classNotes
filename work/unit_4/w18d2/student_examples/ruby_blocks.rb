
# for each methods
# ["two","three","four"].each do |str|
#     p "the vaule is #{str}"
# end

# times_two = [1,2,3].map do |num|
#     num * 2
# end

# p times_two

# def each (arr, &blk) #blk must always be the last parameter
#     for elm in arr
#         blk.call(elm)
#     end
# end

# each 0...5 do |currentNum|
#     p currentNum
# end

# sort cut to block code
# def each(arr)
# 	for elem in arr
# 		yield(elem) #use this instead of &blk.call
# 

# procs are just ways to save functions into variables for later use

# log = Proc.new do |el|
#     p el 
# end

# log.call(12)

# foo = Proc.new do
#     p "hello wold"
# end

# def bar(callback)
#     callback.call
# end
# bar(foo)

# p [1,2,3,4,5].select { |i| i > 3 }

#  ar =[1,2,3,4,5].select do |i|
#     i > 3 
#  end
#  puts ar

#  p [1,2,3,4,5].grep (2..5)

# Enumerable Sorting Methods

# p ["squrit", "mew", 'woof'].sort_by {|word| word.lenght}

# Sorting With Integers

# p [2, 5, 1, 3].sort

p %w(mew pika).any? { |word| word.length <= 3 }
