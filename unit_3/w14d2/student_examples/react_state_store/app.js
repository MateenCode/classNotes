console.log(products);

class App extends React.Component {
    /*  State is a special keyword in react*/ 
    state = {
        products:products, //set a key on our state 
        name: "" ,
        price: 0,
        description: "Describe this item",
        isHiring: false
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //create a product object to hold values in form
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        //add it to our state
        // console.log(newItem);
        this.setState({
            products: [newItem, ...this.state.products],
            name: '',
            price: 0,
            description: "Describe this item"
        })
    }

    render() {
        return(
            <div>
                <h1>Big Time Shopping</h1>
                {this.state.isHiring ? "We are hiring": "We are not hiring"}
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="name"></label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} id="name"/>
                    <br />
                    <label htmlFor="price"></label>
                    <input type="text" value={this.state.price} onChange={this.handleChange} id="price"/>
                    <br />
                    <label htmlFor="description"></label>
                    <input type="text" value={this.state.description} onChange={this.handleChange} id="description"/>
                    <input type="submit"/>
                </form>
                    <div>
                        <h2>Preview our new item</h2>
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.price}</h3>
                        <h3>{this.state.description}</h3>
                    </div>
                <ul>
                    {this.state.products.map(product=> {
                        return(
                        <li>{product.name} {product.price}</li>
                        )
                    })}
                
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));