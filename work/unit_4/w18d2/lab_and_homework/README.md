# Codebar

- Note all this code should be run in an ```app.py``` file.

## Part I: Members, Students and Instructors

You're starting your own web development school called Codebar! Everybody at Codebar -- whether they are attending workshops or teaching them -- is a `Member`.
* Each member has a `full_name`.
* Each member should be able to `introduce` themselves (e.g., "Hi, my name is Kevin!").

Each `Member` is also either a `Student` or an `Instructor`.
* Each student has a `reason` for attending Codebar (e.g., "I've always wanted to make websites!").
* Each instructor a `bio` (e.g., "I've been coding in Python for 5 years and want to share the love!").
* Each instructor also has a set of `skills` (e.g., `["Python", "Javascript", "C++"]`).
* An instructor can gain a new skill using `add_skill`.

## Part II: Workshops

Codebar also has Workshops. Each workshop has...
* A `date`.
* A `subject`.
* A group of instructors.
* A roster of students.

An `add_participant` method that accepts a member as an argument. If the Member is an Instructor, add them to the instructors list. If a Member is a Student, add them to the students list.

Create another method `print_details` that outputs the details of the workshop.

## Test Your Code

Make your code work for the following calls and print out the response you can see in the comments below...

```py
workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details
# =>
# Workshop - 12/03/2014 - Shutl
#
# Students
# 1. Jane Doe - I am trying to learn programming and need some help
# 2. Lena Smith - I am really excited about learning to program!
#
# Instructors
# 1. Vicky Ruby - HTML, JavaScript
#    I want to help people learn coding.
# 2. Nicole McMillan - Ruby
#    I have been programming for 5 years in Ruby and want to spread the love
#
```

## Bonus I

The `print_details` method currently does a number of different things, like printing out workshop details, the list of Students and the list of Coaches.

Create separate methods to print the workshop details (date and classroom), a method to print out the students and one to print out the coaches. Call these from `print_details` instead of having all the code there.


> Hint: look into defining private class methods.
