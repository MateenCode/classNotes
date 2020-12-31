const React = require('react');

class Index extends React.Component {
    render() {
        console.log(this.props);
        const {title, bakedGoods} = this.props
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    {this.props.bakedGoods.map((bG, index) => (
                        <>
                        <a href={`/bakedgoods/${index}`}>{bG.name}</a>
                        <p>{bG.price}</p>
                        </>
                    ) )}
                </div>
            )  
        }
    }
        

module.exports = Index;