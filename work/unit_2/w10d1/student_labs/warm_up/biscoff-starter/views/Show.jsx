const React = require('react');

class Show extends React.Component {
    render(){ 
        const baked = this.props.bakedGoods//render is a method built in react component
        return (
            <div> 
                <h1>Show Page</h1>
                <a href="/bakedgoods">Return Back To Goods</a>
                <h1> The {baked.name} cost {baked.price} dollars</h1>
                <img src={`${baked.image}`}/>
                
            </div>
        );
    }
}


module.exports = Show;