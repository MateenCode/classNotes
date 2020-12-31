// class Cart extends React.Component {
//     render() {
//         const {product} = this.props
//         return(
//         <li>{product.name} {product.price}</li>
//         )
//     }
// }

const Cart = (props) => {
    return <li>{props.product.name} {props.product.price}</li>
}