

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <SideBar />
                <Analytics />
                <Website />
            </div>
        )
    }
}

class SideBar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <ul className="list">
                    <li>Dashboard</li>
                    <li>Widget</li>
                    <li>Review</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}

class Analytics extends React.Component {
    render() {
        return (
            <div className="numbers">
                <div className="review">
                    <h3>Review</h3>
                    <span>1,281</span>
                </div>
                <div className="review">
                    <h3>Average Rating</h3>
                    <span>4.6</span>
                </div>
                <div className="review">
                <h3>Sentiment Analysis</h3>
                    <li>960</li>
                    <li>122</li>
                    <li>321</li>
                </div>
                
            </div>
        )
    }
}

class Website extends React.Component {
    render() {
        return(
            <div className="column">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
            <Container />  
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
);