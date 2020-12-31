const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
            <head>
            <link rel="stylesheet" href="/style.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"></link>
            </head>
            <body>
            <div className="title">
                        <h1>Pokedex</h1>
                        <nav>
                            <a href="/pokemon">Home</a>
                            <a href="/pokemon/new">Add new Pokemon</a>
                        </nav>
                        {/* <a href="/pokemon/new">Add New Pokemon</a> */}
                    </div>
                
                {this.props.children}
            </body>
        </html>

        )
        
    }
}

module.exports = Default;