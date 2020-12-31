![](/ga_cog.png)

---
Title: Ruby Exercises Multi-Tiered Difficulties<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Collaborators: David Fisher, WDI-Boston (Spiral) <br>
Competencies: Ruby Basics, Arrays, Loops, Breaking down a problem into smaller steps<br>
Prerequisites: Ruby Fundamentals<br>

---

# Ruby Exercises

# Choose Your Comfort Level
---
## Level 1 ( Comfort With Ruby: 1/5 )

### Hello Hello Hello
Write the functionality to print 'hello' x number of times, where x is an integer passed into the function

```ruby
def hello number
end
```

#### Personal Greeting
Write the functionality to print 'Why hello there `name`, how are you today?' Where `name` is a variable that is passed in to the method

```ruby
def personal_greeting name
end
```


---
## Level 2 ( Comfort with Ruby 2/5 - 3/5 )

### Vowel Checker
Write the functionality that returns true if the word has a vowel and false if it does not

```ruby
def has_vowel? word
end
```

### Roll Call
Take an array of student names and print 'Welcome, `student`' where student is the student name from the array (list)

```ruby
students = %w[Mike Carol Alice Greg Marcia Peter Jan Bobby Cindy]
def roll_call students
end
```

### Hash Roll Call

Take the above array and take each person and give them their own hash with a `first_name` and `last_name`


- Put each hash in an array


- Take your new array of hashes and call on each student with their first and last names

```ruby
def hash_roll_call students
end
```

Typing all those hashes was probably annoying...

##### Make a class student that takes two arguments, first name and a last name and sets those variables
- Make a 'global' array `classy_students` that is empty
- once you make a new student with `Student.new()`, push that student into the array `classy_students`
-  Add 5 students

```ruby
classy_students = []

class Student
end
```

### Classy Roll Call
Take an array of student names and print 'Welcome, `student`' where student is the student name from the array (list)

```ruby
def class_roll_call students
end
```

### Triangle of Hash
Write a loop that console logs a **right isoscelese triangle** made of '#' that has the height and length of the argument.
>Ex: argument is 7

```ruby
# #
# ##
# ###
# ####
# #####
# ######
# #######
```

### Upside Down Triangle of Hash

Write a loop that console logs an **upside down right isosceles triangle** made of '#' that has the height and length of the argument.

>Ex: argument is 6
```ruby
# ######
# #####
# ####
# ###
# ##
# #
```


---
## Level 3 ( Comfort with Ruby 3/5 - 5/5 )

### Loop the Loop

**Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array**

Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.
```
var arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

greatestSum(arr); //180
```

---
## Hungry for More?

### Loop the Loop continued

Test your loop the loop function on this data set and let me know if it was a row, column or diagonal that had the greatest sum!

```
var bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];
```

### Still Hungry?

Create a function that takes one argument, an integer, that makes a 2D array of random integers between 0  and 1000 where the length of the rows and columns is determined by the argument.

Add a 30% chance that the integer will become negative.

### Still Even Hungrier?
Sign up for [codewars](codewars.com) and choose a code challenge (in Ruby) or three and solve them. Found a fun one? Share it in slack!
