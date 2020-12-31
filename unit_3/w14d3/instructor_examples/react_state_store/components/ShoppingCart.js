// class ShoppingCart extends React.Component {
//     render() {
//         const { product } = this.props;
//         return (
//             <li>{product.name} {product.price}</li>
//         )
//     }
// }

const ShoppingCart = (props) => <li>{props.product.name} {props.product.price}</li>;
