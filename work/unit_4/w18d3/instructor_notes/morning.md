
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Ruby - Arrays Study 

| Title | Type | Duration | Author | 
| -- | -- | -- | -- |
| Arrays - Study | Lesson | 2:00 | Suresh Melvin Sigera |

## Objectives
By the end of this, developers should be able to:
- Create arrays and perform insert and delete operations
- Iterate through arrays by using Ruby array methods.
- Creating freezable arrays.

## What is an array
An array is a data structure that contains a list of values called elements. Arrays can be an ordered, integer-indexed collection of any object. Ruby arrays can have objects such as Integer, String, Symbol, Fixnum, and Hash, or even other arrays, as elements. In many languages, arrays are rigid in terms of their size. In Ruby, however, <b>an array increases its size as elements are added</b>.
Integer-indexed means that each element in the array is linked to an index. An array in Ruby is an ordered list of elements. Each element is a reference to some object, the way a Ruby variable is a reference to some object. 

Here is the code for creating an empty array:

```ruby
my_items = []
```

The output will appear as follows:

```ruby
2.6.5 :046 > my_items
 => [] 
```

## Creating an array with predefined elements
To create an array with predefined values, we need to include the values in the parentheses [], as shown in the following code snippet:

```ruby
my_items = [10,20,30,40,50,60,70,80,90]
2.6.5 :048 > my_items
 => [10,20,30,40,50,60,70,80,90] 
2.6.5 :049 > my_items.class
 => Array 
```
Unlike languages such as Java/C, an array in Ruby can contain more than one type of element, as depicted in the following code:
```ruby
my_items = [10,20,30,40,50,60,70,80,90, "Casey", 5.6, "Suresh", 5.6]
2.6.5 :079 > my_items[8].class
 => Integer 
2.6.5 :080 > my_items[9].class
 => String 
2.6.5 :081 > my_items[10].class
 => Float 
```

## Accessing array elements
Element reference and assignment are done using the instance methods [] and []=, respectively. Each can take an integer parameter, a pair of integers (start and length), or a range. A negative index counts backward from the end of the array, starting at -1.



## Iterating Through an array

- Iterating through an array can either be done with or without the index. The code for both scenarios is presented as follows:
  
```ruby
my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, "Casey", 5.6, "Suresh", 5.6]

my_list.each do |element|
  puts element
end
```

```ruby
my_list.each_with_index do |element, index|
  puts "#{element} => #{index}"
end
```

## Modifying arrays
Let's say you wanted to add or remove something from an array. There are a few methods that will help you perform these operations.
```ruby
a = [1, 2, 3, 4, 5, 6]
b = a[0] # 1
p b
c = a.at(0) # 1
p c
d = a[-2] # 5
p d
e = a.at(-2) # 5
p e
f = a[9] # nil
p f
g = a.at(9) # nil
p g
h = a[3, 3] # [4, 5, 6]
p h
i = a[2..4] # [3, 4, 5]
p i
j = a[2...4] # [3, 4]
p j
a[1] = 8 # [1, 8, 3, 4, 5, 6]
p a
a[1, 3] = [10, 20, 30] # [1, 10, 20, 30, 5, 6]
p a
a[0..3] = [2, 4, 6, 8] # [2, 4, 6, 8, 5, 6]
p a
```

## Negative indexing
You learned that if you want to access a certain element from a Ruby array you need to use indexing (or methods like first & last). But what about negative indexing? I'm talking about using something like -1 as your array index. What Ruby will do is start from the end of the array. So -1 will get you the last item, -2 will get you second to last, etc.


```ruby
welcome = "Hello World"
p welcome[-1]
p welcome[-2]
p welcome[-3]
```


## Operations on arrays
Arrays are the Swiss army knife of every programming language. They are usually used to store values or different types, to calculate intermediate or final results, and even to send data to other functions or classes. This section shows you how we can harness the power of arrays for this purpose.

### Merging two arrays
```ruby
my_array_first_half = [1,2,3]
my_array_second_half = [4, 5, 6]
new_array = my_array_first_half + my_array_second_half
```
### Removing similar elements from the array
```ruby
my_array_with_duplicates = [1, 1, 4, 5, 6]
my_array_to_be_removed = [1,2,3]
new_array = my_array_with_duplicates - my_array_to_be_removed
```
### Inserting elements into the array at the end
```ruby
my_array  = [1,2,3]
my_array.push(4)
```
- Another way to add elements to an array is by means of the << operator. There are operators in Ruby that are aliases to functions or methods, and they are used to achieve the same result, but with shortcuts:
```ruby
my_array  = [1,2,3]
my_array  << 4
```
### Finding the last element of the array
```ruby
my_array = [1,2,3]
my_array.last
```
### Removing the last element of the array
```ruby
my_array = [1,2,3]
my_array.pop
```
## Creating an array that cannot be modified
- This can come in handy when we want to limit the size of an array or prevent further modification. The freeze function can be used on objects other than arrays with the same result:
```ruby
my_array  = [1,2,3]
my_array.freeze
my_array << 4 # this will cause an error
```

