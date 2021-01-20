# Python Arrays and For Loops
Here's some pre-written JavaScript functions. Your job is to practice Python
by converting these functions from JavaScript to Python.

Each of the Python files has the function definitions that you're expected
to write. All of the functions have the Python keyword `pass` inside the
functions. `pass` simple means "do nothing" and allows methods to maintain
proper indentation.

You should delete `pass` when you write the function and replace it with your
own code.

# Running Solutions
Run the original JavaScript files with `node`, and run your Python solutions
with `python3` both in your terminal. Look at the output and make sure they
print out the same things:

```
node fileName.js
python3 file_name.py
```

Scroll down to the end of this readme to see an advanced bash trick you
can use to run all .js programs and .py programs in your current directory.

# Common Errors
You may run into some errors along the way. If you find an error try to google
for a solution. There should be some good Stack Overflow results for the things
  we're trying to do.

Here are several commong errors I expect you to run into:

## IndexError: list index out of range
This means you accessed an array at an index beyond the number of things it has.

```python
a = [1,2,3]
print(a[99])
```

## TypeError: unsupported operand type(s) for +: 'int' and 'str'
Python won't automatically concatenate numbers and strings. You'll have to
pass a number through the `str()` function to manually convert it to a string
and get concatenation to work.

```python
"my favorite number is " + 1
```

```python
"my favorite number is " + str(1)
```

Or, use f-strings!

```
f"my favorite number is {1}"
```

## SyntaxError: invalid syntax `def a()`
Remember to append a colon at the end of a line when you define a function:

```pyhton
def print_hello()
  print("hello!")
```

```pyhton
def print_hello():
  print("hello!")
```

## IndentationError: expected an indented block / unexpected indent
Python is very, very particular about indendation. It literally uses indentation
to detect where functions begin and end. If you don't maintain perfect indentation
your code will not run.

You have some freedom. You can use tabs, two-spaces, or four-spaces or whatever
you like for your indentation. Python only requires that you be consistent.

### Bad
```pyhton
def print_hello():
print("hello!")
```

```pyhton
def print_hello()
  print("hello!")
    print("hello!")
```

### Good
```pyhton
def print_hello():
  print("hello!")
  print("hello!")
```

# Bash Magic
Your terminal uses a shell called bash. Bash is a scripting langauge that
has it's own way to write for loops, create variables, run if statements
and create variables. In your career as a programmer you'll naturally
pick up more and more bash, just like you're already familiar with
common commands like `ls`, `cd`, and `mkdir`.

You can copy and paste these pieces of code and run them in your terminal.
The commands list all the files that have a `.js` or `py` extension and
run them with either `node` or `python3`. Running these for loops is a good
way to quickly check how your Python output compares to your JavaScript
output when you're all done.

```bash
for JS in `ls *.js`
do
node $JS
done
```

```bash
for PY in `ls *.py`
do
python3 $PY
done
```

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

