class ProductList extends React.Component {
    state = {
        inShoppingCart: false
    }

    toggleShoppingCart = () => {
        this.setState({
            inShoppingCart: !this.state.inShoppingCart
        })
    }

    render() {
        const {product} = this.props 
        return(
            <li onClick={() => this.props.handleCartAdd(product)}>
            {product.name} {product.price} 
            {this.state.inShoppingCart ? <button>"Already in cart"</button> : <button>"add to cart"</button>}
        </li>
        )
    }
}