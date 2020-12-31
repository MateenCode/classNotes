**index.html**

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>React State Store</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script src="/data.js"></script>
    <script type="text/babel" src="app.js"></script>
  </head>
  <body>
    <div class="container">
      <!-- Let's load our App here -->
    </div>
  </body>
</html>

```

**data.js**
```js
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]

```
**app.js**
```js

class App extends React.Component {
   state = {
      products: products,
      name: '',
      price: 0,
      description: 'Describe this item',
      isHiring: true
    }
    
  handleChange = (event) =>{
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState({
      products: [ newItem, ...products],
      name: '',
      price: 0,
      description: 'Describe this item'
    })
  }
  toggleHiring = () =>{
    this.setState({isHiring: !this.state.isHiring})
    console.log(this.state.isHiring);
  }
  render () {
    console.log(this.state.isHiring);
    return (
      <div>
      <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
       {!this.state.isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
      <form onSubmit={this.handleSubmit}>
        <label for="name">Name</label>
        <input type="text" value={this.state.name} onChange={this.handleChange} id="name" />
        <br/>
        <label for="price">Price</label>
        <input type="number" value={this.state.price} onChange={this.handleChange} id="price"/>
        <br/>
        <label for="description">Description</label>
        <textarea value={this.state.description} onChange={this.handleChange} id="description"/>
        <input type="submit" />
      </form>
      <div>
        <h2>Preview our new item</h2>
        <h3>{this.state.name}</h3>
        <h4>{this.state.price}</h4>
        <h5>{this.state.description}</h5>
      </div>
        <ul>
        {this.state.products.map(product => {
          return (
            <li>{product.name }  {product.price}</li>)}
          )
        }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

```
