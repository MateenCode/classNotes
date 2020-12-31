const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const {products} = this.props;
        return (
            <Default>
                <div className="d-flex justify-content-around">

                
                {/* <h1>Products Index Page</h1> */}

                    {products.map((product, index) => {
                        console.log(product._id)
                        return(
                <div className="card mt-5 col-sm- " style={{width: '18rem'}}>
                    <a href={`/products/${product._id}`}><img className="card-img-top" src={`${product.img}`}/></a>
                    <div class="card-body">
                        <h5 className="card-title"> {product.name}</h5>
                        {/* <p className="card-text">{product.description}</p> */}
                    </div>
                </div>
                            
                        )
                    })}
                </div>
            </Default>
        )
    }
}

module.exports = Index;