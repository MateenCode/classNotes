# Combining datatypes

## Methods

Given the following object, call the jump method

```javascript
const person = {
    jump: () => {
        console.log('fly!');
    }
};
```

Call the drive method

```javascript
const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}
```

Log the message attribute

```javascript
const account = {
    tweet: () => {
        return {
            message: "fun"
        }
    }
}
```

Log the second element in the array

```javascript
const me = {
    foo: () =>{
        return {
            array: [2.5, 7, true]
        }
    }
}
```

Create a data structure such that the following code logs "boat":

```javascript
console.log(baz.foo().matt.travel);
```

Create a data structure such that the following code executes without error:

```javascript
factory.createCar().startEngine();
```

Run the inner function:

```javascript
const matt = {
    blink: () =>{
        return ()=>{
            console.log('hi')
        }
    }
}
```


Call the funStuff() method:

```javascript
const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff: ()=>{
                console.log('yaaassss');
            }
        }
    }
];
```

Call the most inner function:

```javascript
const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];
```

# Hungry For More
## Callbacks and methods

Call the `someMethod` function, passing in `myFunc`.  It should log `About to invoke the callback` and then `I have been called!`

```javascript

const foo = {
    someMethod: (callback)=>{
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}
```

Alter the following code so that `myFunc` properly logs the `height` property of `foo`

```javascript
const foo = {
    height:5,
    someMethod: (callback)=>{
        callback();
    }
}

const myFunc = (param)=>{
    console.log(param);
}
```

Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string

```
const shirtColor = {
  color: ['red', 'blue', 'green', 'white', 'pink'],
}
```
Expected Output:  ```"red, green, white, pink"```


# More

1. Create an object that has a property that is a function (method).  Call that method.

1. Create a function that returns an object that has a method.  Call that inner function (method).

1. Create an object that has a method that returns an object.  Log a property of the inner object.
1. Create an object that has a method that returns an object that has an array.  Log an element of that array.
1. Create an object that has a method that returns an object that has an object.  Log a property of the inner object.
1. Create an object that has a method that returns an object that has another method.  Call the inner method.
1. Create an object that has a method that returns a function.  Call that function.

1. Create an array that has a function that returns an object that has a method.  Call that method.



Fix the last line of this snippet so it logs `this method was called`:

```javascript
const bar = {
    someMethod: (param)=> {
        param();
    }
}

const foo = {
    someMethod(){
        console.log('this method was called');
    }
}

bar.someMethod; //fix this line
```
