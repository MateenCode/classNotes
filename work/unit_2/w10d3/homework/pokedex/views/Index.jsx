const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const {title, pokemon} = this.props;
        return (
            <Default>
                <div class="parent">
                    {pokemon.map((pokemon, index)=> {
                        return (
                            <div>
                                <img class="card card-1" src={`${pokemon.img}`}/>
                                <div class="buttons">
                                    <a class="seeMore" href={`/pokemon/${index}`}>See More</a><br/>
                                    <a class="edit" href={`/pokemon/${index}/edit`}>Edit</a>
                                </div>
                                <form action={`/pokemon/${index}?_method=DELETE`} method="post">
                                    <input class="delete" type="submit" value="DELETE"/>
                                </form>
                            </div>
                        )
                    })}
                </div>
            </Default>
        )
    }
}

module.exports = Index;