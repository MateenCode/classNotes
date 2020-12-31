const React = require('react')
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const {product} = this.props;
        const {qty,name,price,description,img} = product;
        // const {name} = product;
        // const {price} = product;
        // const {description} = product;
        // const {img} = product;
        return (
            <Default>
             <div className="container">
            <div className='form-group d-flex flex-column mr-5 text center'>
            
            <div className="row">
             <div className="col-8">
                <img class="ml-0 img-fluid img-thumbnail mt-5" src={`${product.img}`}/>
             </div>
             <div className="col-4 mt-5">
             <form action={`/products/${product._id}?_method=PUT`} method="POST">
                Name: <input className="form-control" type="text" name="name" value={name} /><br/>
                Description: <textarea className='form-control' type="textarea" name="description" rows="3" value={description}></textarea><br/>
                Img: <input type="text" name="img" value={img}/><br/>
                Price:<input type="number" name="price" value={price}/><br/>
                Qty: <input type="number" name="qty" value={qty}/><br/>
                <input class="btn" type="submit" name="" value="Create Product"/>
            </form>
             </div>
            </div>
            </div>
            </div>
            </Default>
        );
    }
}

module.exports = Edit;