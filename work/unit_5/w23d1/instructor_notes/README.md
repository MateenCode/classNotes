## Setting up Contentful and Querying with Create React App

We will be using something called a "headless cms" to create the data of our application. 

There are many different headless cms options out there such as Prisma, Sanity and Contentful.

A headless cms is an agnostic way to set up your data. It allows us as developers to model out the data and it will provide an API endpoint for us to query the data on the front end.


### Set up Contentful
1. Sign up for `Contentful`. Follow the sign up directions.
1. Choose `explore content modeling`
1. Skip the intro
1. Delete the example project (we will start from scratch)
1. Add a space
1. Choose the free option and create an empty space

#### Model some content
- Lets add a content type for our navigation
- We are going to add just our site title name

#### Create Content
- We will now create a post for our navigation


### Set up our React Front End with Create React App
- Create a repo on your computer to host your repository. Do not put this in the class repo.

- Install the react-contentful npm package 
`npm install react-contentful`

- Lets Query for our header! We will need to configure our connection to Contentful.


## React Hooks

Today, we will be using React Hooks to build our application! The Hooks we will start with are `useEffect` and `useState`.


## Hooks Introduction

React is a very popular framework. It is relatively easy to learn, it has given
front end developers more fluid control, and it might even be a tad fun. It is
still evolving however so you should expect to hear about new additions to the
technology as it gets a larger user base and pain points are identified.

One of those common points of frustration is sharing behaviour and state logic
between components. There have been different solutions to this problem over
the years, [Higher Order Components](https://reactjs.org/docs/higher-order-components.html), [Mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html), [Render Props](https://reactjs.org/docs/render-props.html), but as of React 16.8
a new API has been added to help mitigate these problems. [React Hooks!](https://reactjs.org/docs/hooks-intro.html)

### Say Goodbye to Class Components

One of the biggest implications that Hooks will have on your application is
eliminating the need for class based components. React does not plan to remove
class components from the framework, but they are basically no longer needed if
you choose to embrace Hooks.

This is a good thing for React itself because lots of JavaScript developers
don't use classes as they are only a syntax on top of constructors and
prototypes. Now developers won't have to learn class syntax just to use React.
This also means we won't have to worry about binding `this` or using fat arrow
functions to avoid having to do it.

### How to Use Hooks

Before we convert the class components in this repo let's take a look at some
ways to use Hooks.

#### Demo: Hooking into State

The most common usage for Hooks is to be able to provide some state to a
function component. Here is how we normally create some initial state for a
class component.

```javascript
constructor (props) {
  super(props)

  this.state = {
    count: 0
  }
}
```

Let's see how we can achieve the same thing with Hooks. We won't be inside a
class anymore which will remove the need for `constructor`, `super`, and
referencing `this.`

```javascript
const [count, setCount] = useState(0)
```

Just like that we have provided an initial value of `0` for a variable called
`count`, and we also get a function called `setCount` that can update the
variable.

`useState` is a function we import from React that accepts a value to
set as the initial state, and it returns an array where the first element is
the initial value, and the second element is a function that can update that
value.

Creating the `count` and `setCount` variables grouped with square brackets
is essentially saying to take the array returned from `useState`, and the first
element should be the value of `count` while the second element will be the
value of `setCount.`

#### Demo: Updating State with Hooks

Okay great, we have a variable holding the initial value of the state, and a
function that can update it. How do we use it? Normally it would involve
calling `setState`, but now we have a function that will directly update only
the one state variable it is linked to. So if we wanted to use the `setCount` function
from the previous example to set the `count` to `1` we could do the following.

```javascript
setCount(1)
```

We pass in `1` to ensure the new value of `count` will be `1` during the next render.

*Note:* `setCount` and `count` were both created by the same invocation of
`useState` and therefore we don't need to tell `setCount` what it should be
updating.

##### Updating Based on Previous State

> If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. [React Docs](https://reactjs.org/docs/hooks-reference.html?origin_team=T0351JZQ0#functional-updates)

```javascript
setCount(prevCount => prevCount + 1)
```

We pass in a callback that accepts the `prevCount` variable and returns the `prevCount` with one added to it. This ensures the new value
will be one more than what `prevCount` was previously set to. We could pass in
any number to update the `count` but it makes sense to do it this way if we
want the value to increase by one.

###### setCount Callback Benefits

You may be asking, why don't we just call `setCount` and pass it the current value of `count`?

```jsx
setCount(count + 1)
```

The reason we have to pass a callback to access the previous state is because the value of `count`, can become stale. The `count` state can become stale because a call to `setCount` will not set the state immediately. `setCount` should be thought of as a request to set the `count` state for the next render.


Lets look at an example of how stale values can cause errors. Below we try to increase the count by 2 by calling setCount twice.


```jsx
// Increases the count by 1
setCount(count + 1)
// Does nothing, because count is `stale`
setCount(count + 1)
```

The previous code only increases the count by 1 because the same value
for `count` is used in both calls, since the count will not be updated until the next render.

To properly increase the count, we can use a callback to ensure `prevCount` is always the previous state.

```jsx
setCount(prevCount => prevCount + 1)
setCount(prevCount => prevCount + 1)
```



#### Hooking into Lifecycle Methods

Having a function component that can update its own state variable is a
welcome change for React developers. If that was all Hooks provided it would be
great, but you may be wondering about the typical Lifecycle methods that we can
access from class components. Methods such as `componentDidMount`,
`componentDidUpdate`, etc.

Hooks haven't forgotten about those either and have provided a single function
that we can use to tell React about other code that should be running during
those Lifecycle method calls. The function is called `useEffect`. Let's see an
example of doing it from a class component.

```javascript
componentDidMount () {
  axios(`${apiUrl}/books/${this.props.match.params.id}`)
    .then(res => this.setState({ book: res.data.book }))
    .catch(console.error)
}
```

Here we are letting React know that when the component has been rendered to the
DOM, it should trigger this HTTP request for getting whichever book we need to
see. Now we can see how to achieve this with `useEffect`.

```javascript
useEffect(() => {
  axios(`${apiUrl}/books/${props.match.params.id}`)
    .then(res => setBook(res.data.book))
    .catch(console.error)
}, [])
```

As you can see it's not drastically different, but let's address all the
changes.

First, we are actually invoking `useEffect` which is slightly
different than how we handled `componentDidMount`. We get access to `useEffect`
by importing it directly from React, and then we invoke it ourselves and pass
in a callback function.

The callback function triggers the axios HTTP request which is mostly the same
except we don't need to use `this` anymore since we are no longer in a class
component. We can simply access the `props` directly.

The callback for our `.then` has changed a bit too. Now we are using a
`setBook` function instead of `setState`. Since `setBook` is linked to a
specific state variable we can simply pass in the new value we got back from
the API.

The last change is a bit strange. After the callback function, we pass an
additional argument to `useEffect`, an empty array. Why would we need to pass
in an empty array? The answer is a little tricky.

Now that we are using one function to replace all the Lifecycle methods we
would normally use, it comes with a caveat. `useEffect` is invoked every time
the component renders, which means if you modify the component's state inside
of `useEffect` it will trigger a re-render, which will in turn invoke
`useEffect` again! Essentially an endless loop of calling itself.

Luckily `useEffect` accepts an array of dependencies as the second argument.
The array should contain any objects that you want `useEffect` to depend on. If
any of the objects in that array are changed, that is when it will invoke
`useEffect` again. If there is no array present, `useEffect` will call itself
forever. If the array is empty, `useEffect` will only be called after the first
render of the component. Just what we need in this case.

#### One Hook to Rule Them All

The last thing you might be wondering about is normally we would put different
logic into the different Lifecycle methods and now we only have one function
that will Hook into all of those.

What if we want different code to run at different times during the life of our
component? The answer is to invoke `useEffect` multiple times with a different
set of dependency objects in that second argument. You can invoke it as many
times as you need from within the component and it will know when it should be
running that version of `useEffect` based on the changes to those dependency
objects.



### Back to our App.

In our `App.js` file, lets make a connection to your Contentful backend and use hooks to grab out header data. 

We will be using our React Hooks for this. 

```js
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContentfulClient } from 'react-contentful';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_API_TOKEN,
  space: process.env.REACT_APP_SPACE_ID
});

function App() {
  const [data, setData] = useState({})

  const getContentfulData = async () => {
    let theData = await contentfulClient.getEntries();
    setData(theData);
  }

  useEffect(() => {
    getContentfulData()
  }, []);



  if (data.items) {
    return <div>... data to be returned</div>
  }

  return <div>loading</div>

}

export default App;
```

