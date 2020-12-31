class ProductList extends React.Component {

    state = {
        inShoppingCart: false
    }

    toggleCart = () => {
        this.setState({
            inShoppingCart: !this.state.inShoppingCart
        })
    }

    render() {
        const { product } = this.props;
        return (
            <li onClick={() => this.props.handleAdd(product)}>
                {product.name} {product.price}
                {this.state.inShoppingCart ? <span> Added to cart!</span> : <span> Add to cart!</span>}
            </li>
        )
    }
}
