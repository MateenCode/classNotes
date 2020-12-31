const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"/>
                    <title>Fruits App</title>
                </head>
                <body>
                    <nav>
                        <a href="/fruits">Home</a>
                        <a href="/fruits/new">Create</a>
                    </nav>
                    {this.props.children}
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;