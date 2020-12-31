class App extends React.Component {
    state = {
        products: products,
        name: '',
        price: 0,
        description: "Describe this item",
        isHiring: false,
        cart: []
    }

    handleChange = (event) => {
        console.log(event.target.value);
        // this.state.value = event.target.value;
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // create a product object to hold values in form
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        // add it to our state!
        this.setState({
            products: [newItem, ...this.state.products],
            name: '',
            price: 0,
            description: "Describe this item"
        })
    }

    addToCart = (item) => {
        this.setState({
            cart: [item, ...this.state.cart]
        })
    }

    render() {
        return (
            <div>
                <h1>Big Time Shopping</h1>
                {this.state.isHiring ? "We are hiring" : "We are not hiring"}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} id="name" />
                    <br />
                    <label htmlFor="price">price</label>
                    <input type="text" value={this.state.price} onChange={this.handleChange} id="price" />
                    <br />
                    <label htmlFor="description">description</label>
                    <input type="text" value={this.state.description} onChange={this.handleChange} id="description" />
                    <input type="submit" />
                </form>
                <div className="preview">
                    <div>{this.state.name}</div>
                    <div>{this.state.price}</div>
                    <div>{this.state.description}</div>
                </div>
                <div className="products">
                    <h3>OUr Products</h3>
                    <ul>
                        {this.state.products.map(product => {
                            return (
                                <ProductList product={product} handleAdd={this.addToCart} />
                            )
                        })}
                    </ul>
                </div>
                <div className="cart">
                    <h3>Shopping Cart</h3>
                    {this.state.cart.map(product => {
                        return (
                            <ShoppingCart product={product} />
                        )
                    })}
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));