# Terminal Navigation

## Lesson Objectives

_After this lesson, students will be able to:_

1. Run some code

## Run some code

We are going to:

* make a file
* open it in our text editor
* write some code
* run the code in Terminal

### Code Along (5 min)

#### Create Files/Directories

* In Terminal, navigate to Desktop.
* Make a directory `seir-flex-mae`
* `cd` to `seir-flex-mae` and make a directory `w1d1_student_examples`
* Go inside the directory
* Make a file `first_code.js`

#### Write/Run Code

* Check version of Node `node -v`. You should have a version greater than 8.
* Let's send a message to the console. It is somewhat of a tradition to write a 'Hello World' message as the first thing you do in programming.

```
console.log('Hello World!');
```

Run the code in Terminal

> `node filename.js`
> => Hello World!

**Congrats!** You've written your first "Hello World" of seir-flex!

We can send whatever we want to the console.

`console.log('The rain in Spain falls mainly on the plain');`

## More Terminal Keyboard shortcuts

In the long term, reduce your reliance on the mouse.
More Bash keyboard shortcuts:

`⌘ K` Clear the Terminal window

`option arrow` Move cursor by word

`Ctrl A` Go to beginning of line

`Ctrl E` Go to end of line

`Ctrl K` Kill line to end

`Ctrl U` Kill line to beginning

`Ctrl Y` Paste whatever was killed using Ctrl+K or Ctrl+U

`cd -` toggle previous directory

There are also video tutorials [here](https://www.youtube.com/playlist?list=PLdnONIhPScSToZztXRHyKZTQEsE30luMx)
