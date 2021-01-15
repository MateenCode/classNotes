# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Flask API

#### Objectives

1.  Create a React app that fetches all the dogs from our flask API.
2.  Set up our environment variable for our development requests to our FLASK API
3.  Set up semantic-ui

#### Setup 

1.  `npx create-react-app flask-react-dog-app`
2.  inside of the `react-dog-app` touch a `.env` file

- In create-react-app we can use environment files to specify variables we want to use in production vs development.  
- Inside of `.env` lets create our variable

```
REACT_APP_FLASK_API_URL=http://localhost:8000
```

- Your variable has to start with `REACT_APP` to work, it is what create-react-app is looking for.

- To use the variable in any of our files the syntax would be `process.env.REACT_APP_FLASK_API_URL` which would yield `http://localhost:8000`, which is the address of the request's we will make to our flask app that should be running in our other terminal.

**To install semantic-ui-react**

[Semantic UI React](https://react.semantic-ui.com/) allows us to use [Semantic UI](https://semantic-ui.com/) - a development framework that helps create beautiful, responsive layouts using human-friendly HTML.


```bash
npm install semantic-ui-css semantic-ui-react
```

Inside of `index.js` above, your `index.css`, `import 'semantic-ui-css/semantic.min.css'`



#### Set up our architecture

- Let's set up our DogContainer which will contain all the state for our dog resource that we will be interacting with in our flask app.  

- We'll also install `axios` to make the API calls to our Flask backend.


```bash
npm install axios
touch src/DogContainer.js
```

- Inside DogContainer lets set up our component

```js
import React, { Component } from 'react';
import axios from 'axios';

class DogContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      dogs: []
    }
  }
  componentDidMount(){
    this.getDogs();
  }
  getDogs = async () => {
    try {
      const parsedDogs = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/dogs/'
      );
      console.log(parsedDogs.data.data);
      await this.setState({
        dogs: parsedDogs.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  render(){
    return (
      "I'm the dogContainer"
      )
  }
}

export default DogContainer
```

-  okay so here we are setting up our `getDogs` method that we can call in `componentDidMount` so our data will be fetched as soon as the app is mounted to the dom.  When we set up our app with our fetch calls it is a good idea to check the response from the server before we write any more code, to make sure we don't get an error!

- *GOTCHA* - When requesting to a flask app we need to add the trailing `/` otherwise flask's routing system will interpret that and redirect the request to a route with a trailing `/` which will cause a `404` error for us.  

- We also need to import the DogContainer component in `App.js`. Refactor it like so:

```js
import './App.css';
import DogContainer from './DogContainer';

function App() {
  return (
    <div className="App">
      <DogContainer />
    </div>
  );
}

export default App;
```

#### Set up the dog list


```
touch src/DogList.js
```

- We will now set up a presentational component to render out the dogs we have saved in the state of our DogContainer that handles the logic for our dog resource.  

- The Presentational/functional component `src/DogList.js`

```js
import React from 'react';
import { Card, Button} from 'semantic-ui-react';

function DogList(props){

  const dogs = props.dogs.map((dog) => {
    return (
        <Card key={dog.id}>
          <Card.Content>
            <Card.Header>{dog.name}</Card.Header>
            <Card.Description>{dog.breed}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>DeleteDog</Button>
            <Button>Edit Dog</Button>
          </Card.Content>
        </Card>
        )
  })

  return (
      <Card.Group>
        { dogs }
      </Card.Group>
    )
}

export default DogList
```

- As you see we are just taking in our props which happens to be our list of dogs that we fetched from our flask app, and we are just rendering them out as a list!
-  Now to test it we just have import our functional component into the container and pass in the props
-  We are also just importing the *Card* Componet from semantic ui to get some nice default styling, check out the docs [here](https://react.semantic-ui.com/views/card/)

- `src/DogContainer.js`

```js
import React, { Component } from 'react';
import axios from 'axios';
import DogList from './DogList';

/// further down


render(){
    return (
      <DogList dogs={this.state.dogs} />
      )
  }

```

- Notice we are naming the prop `dogs` which is what we access in the `DogList` component using `props.dogs` 

<br>

![](https://i.imgur.com/IdCBPF5.png)

