# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Ruby - Classes Part1 


| Title | Type | Duration | Author | 
| -- | -- | -- | -- |
| Ruby classes - part1 | Lesson | 2:00 | Suresh Melvin Sigera |

## Objectives
- Work with Ruby classes
- Use getter and setter methods in Ruby
- Demonstrate how to implement OOP techniques such as inheritance and polymorphism
- Employ the SOLID design patterns to follow OOP best practices

## What is OOP?
One of the defining attributes of the Ruby programming language, in addition to readability, is how it implements object-oriented programming (OOP) techniques.
OOP facilitates writing code in a way that allows you to think about, and model, the concepts that you are working with in your program. 

## What is an object?
In object-oriented programming, the fundamental unit is the object. An object is an entity that serves as a container for data and also controls access to the data. Associated with an object is a set of attributes, which are essentially no more than variables belonging to the object. Also associated with an object is a set of functions that provide an interface to the functionality of the object, called methods.

## What is a class
Classes are the foundation of object-oriented programming (OOP). Since everything in Ruby is an object, even a basic Hello, World! example makes use of OOP.
In other words, classes are abstract templates for objects. You can also say that objects are instances of classes. 
Classes contain the template for a set of behaviors (such as methods) and data (such as variables).

<p align="center">
    <img src="classes1-img1.jpg" width="400">
    <br>
    <b>Class is a blue print</b>
</p>

Let's imagine that you're building a house. One of the first tasks you'd most likely do is build a blueprint for the house. This blueprint would contain attributes and features of the house, such as these:

- The dimensions for each room
- How the plumbing will flow
- Essentially, every attribute/feature of the house

Now let me ask a dumb question. Is the blueprint of the house the actual house? No, it simply lists out the attributes and design elements for how the home will be created.

## Instance
So after the blueprint is completed, the actual home can be built. Dare I say that the home can be instantiated?
<p align="center">
    <img src="classes1-img2.jpg" width="300">
    <br>
    <b>Instance of a class</b>
</p>

<p align="center">
    <img src="classes1-img3.jpg" width="300">
    <br>
    <b>Another instance of a class</b>
</p>

## Instance methods
Instance methods are methods that are available on a specific instance or object of a class. Instances have states that are held in instance variables. As you would expect, instance methods have access to these instance variables.

## Creating a class
Here is an example of how we can create a House class to do this:
```ruby
class House
  
end
```

## Creating methods
Here we've created the base template for a house by using the class keyword and have given it the name House. 
Based on what we've learned so far, we can tell right off the bat that we have a House class with the following methods: set_address, open_door, and close_door.
```ruby
class House
  def set_address
    p "setting address"
  end

  def open_doors
    p "open door"
  end

  def close_door
    p "close door"
  end
end
```

## Instantiation of an object
So after the blueprint is completed, the actual home can be built. Dare I say that the home can be instantiated?

```ruby
class House
  def set_address
    p "setting address"
  end

  def open_doors
    p "open door"
  end

  def close_door
    p "close door"
  end
end

my_house = House.new
your_house = House.new

my_house.open_doors
your_house.close_door
```
<p align="center">
    <img src="classes1-img4.png" width="700">
    <br>
    <b>Under the hood of our House class</b>
</p>

## Instance variables
As the name suggests, instance variables are available to a particular instance. There is a specific syntax to set instance variables, you need to use the @ sign to define a variable.
A local variable that is defined inside one method, for example, cannot be accessed by another method. In order to get around this limitation, we can use instance variables inside our Ruby classes.
<b>An instance variable is a variable that is accessible in any instance method in a particular instance of a class</b>.
```ruby
class House
  # instance variables; unique data for each object: casey and suresh
  @this_owner = ''
  @this_address = ''

  def set_address(address)
    @this_address = address
  end

  def set_owner(owner)
    @this_owner = owner
  end

  def get_owner
    @this_owner
  end

  def get_address
    @this_address
  end
end

casey_house = House.new
casey_house.set_address("111, New York, NY")

suresh_house = House.new
suresh_house.set_address("444, New York, NY")

p casey_house.get_address
p suresh_house.get_address
```

## Constructors
In most object-oriented languages, there is a method that’s automatically invoked when an object of that class is created. 
Other languages call such methods <b>constructors</b>, but Ruby also calls them initializers because they always have the name initialize. (In Java and C++, a constructor is a method with the same name as the class name.)
```ruby
class ClassName
  def initialize
    # do whatever
  end
end
```

This initialize method will automatically be invoked when an object of that class type is created using ClassName.new. Normally the initialize method is used to assign values to the class’ main attributes, in which case it’s written to accept arguments:

# Variable Scope in Ruby

## Local Variables
A local variable has a local scope or context. If defined within a method, for example, its scope is kept within that method. Local variable names must begin with either a lowercase letter or an underscore (_), and must not be prefixed with @, @@, or $ because they are reserved for other types of variables. Following are a few examples of local variables:

```ruby
x = 1.0    # x is a Float
y = "Yes"  # y is a String
_temp = 16 # _temp is a Integer
``` 

## Instance Variables
An instance variable belongs to a particular instance of a class, hence the name. It can only be accessed from outside that instance via an accessor (helper) method. Instance variables are always prefixed with a single at sign (@), as in @hello.

## Class Variables
A class variable is shared among all instances of a class. Only one copy of a class variable exists for a given class. It is prefixed by two at signs (@@), such as @@times. You have to initialize (declare a value for) a class variable before you use it.

## Global Variables
Global variables are globally available to a program, inside any structure. Their scope is the whole program. They are prefixed by a dollar sign ($), such as $amount.

## Constants
Constant names must begin with a capital letter (Suresh) and by convention frequently use all capitals (SURESH), making them easy to spot. Class names, for example, are constants. As their name suggests, constants are not expected to have their values changed after initial assignment. You can reassign a value to a constant, but Ruby will generate a warning if you do. Second, and more importantly, since constants refer to objects, the contents of the object to which the constant refers might change without Ruby generating a warning. Thus, Ruby constants are called mutable because although a constant is only expected to refer to a single object throughout the program, the value of that object may vary. Finally, constants must have a value assigned to them to exist.

## Parallel Variable Assignment
With parallel assignment, you can assign several values to several variables in a single expression, based on order. A list of variables, separated by commas, can be placed to the left of the equals sign, with the list of values to assign them on the right. Here are a few examples:

```ruby
name, grade, gpa = 'Suresh', 89, 3.6
a, b, c = "cash", 1.99, 100
```

## QA
<p>
<img src="https://media.giphy.com/media/Y0zKnKDozV6yXBqqUW/source.gif" width="480" height="480">
</p>
