const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const {product} = this.props;
        const {qty} = product;
        const {name} = product;
        const {price} = product;
        // const qty = this.props.products.qty
        return (
            <Default>
                        <div className="container-xl">
                            <div class="d-flex flex-column mr-5 text center">
                                <img class="ml-5 mt-5 img-fluid img-thumbnail" src={`${product.img}`}/>
                            <h3 class="text-center">{name}</h3>
                            <h3 class="text-center">{`$ ${price}`}</h3>
                            <h3 class="text-center">{`${qty} in stock`}</h3>
                            </div>
                            <div className="d-flex flex-row justify-content-center">
                            <form action={`/products/${product._id}?_method=DELETE`} method="post">
                                <input  class="delete ml-5 btn btn-sm" type="submit" value="DELETE"/>
                            </form>
                                    {qty > 0 ? <form action={`/products/${product._id}/buy?_method=PUT`} method="post">
                                    <input className="btn btn-sm ml-2" type="submit" value="PURCHASE"/>
                                    </form> : null  }
                                    
                                    <a className="ml-2" href={`/products/${product._id}/edit`}>Edit</a>
                                    <a  className="ml-2" href="/products">Back Home</a><br/>
                                    
                                    </div>
                        </div>
            </Default>
        )
    }
}

module.exports = Show;