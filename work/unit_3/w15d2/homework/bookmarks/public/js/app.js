
//header component//
const Header = () => {
    return(
        <div className="header">
            <h1>Bookmarks</h1>
        </div>
        
    )
} 

//form component//
// const Form = () => {
//     return(
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="title"></label>
//                 <input type="text" value={props.title} id="title"  onChange={props.handleChange} placeHolder="website"/> 
//                 <label htmlFor="url"></label>
//                 <input type="text" value={props.url} id="url"  onChange={props.handleChange} placeHolder="http://"/> 
//                 <input type="submit"/>
//             </form>
//     )

// }
//list component//
// const List = (props) => {
//     return(
//         <tr>
            
//             <a href={props.url}><td>{props.bookmark.title} </td></a>
//             <td onClick={() =>props.handleDelete(props.bookmark._id,props.index)}> X </td>
//         </tr>
        
//     )
// }


class App extends React.Component {
    state = {
        title: '',
        url: '',
        bookmarkPages: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch('/bookmarks')
            .then(response => response.json())
            .then(data => this.setState({ bookmarkPages: data }))
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        fetch('/bookmarks', {
            body: JSON.stringify(
                {
                    title: this.state.title,
                    url: this.state.url
                }
                
                ),
            method: "POST" ,//I am making a POST request
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }                                        //tell our server about the content
        }).then(response => response.json())
        .then(newBookmark => {
            this.setState({
                bookmarkPages: [newBookmark, ...this.state.bookmarkPages],
                title: '',
                url: ''
            })
        })
    }

    handleDelete = (dataId, index) => {
        fetch(`/bookmarks/:${dataId}`, {
            method: "DELETE"
        }).then(() => {
            this.setState({
                bookmarkPages: [
                    ...this.state.bookmarkPages.slice(0,index),
                    ...this.state.bookmarkPages.slice(index + 1)

                ]
            })
        })
    }
    render() {
        return(
            <div>
                <div>
                    <h1><Header/></h1>
                </div>
                <button onClick={this.getData}>Get Bookmarks</button>
                <h3>Add a new bookmark</h3>
                <div>
                <form onSubmit={this.handleSubmit} className="form-3">
    <p className="clearfix">
        <label htmlFor="title">Website Name</label>
        <input type="text" value={this.state.title} id="title"  onChange={this.handleChange} placeholder="site name"/>
    </p>
    <p class="clearfix">
        <label htmlFor="url">URL</label>
        <input type="text" value={this.state.url} id="url"  onChange={this.handleChange} placeholder="https://"/> 
    </p>
    <p class="clearfix">
        <input type="submit" name="submit" value="Add Bookmark"/>
    </p>       
</form>
                
                {/* <form className="form-1" onSubmit={this.handleSubmit}> */}
                    {/* <p className="field"/>
                    <label htmlFor="title"></label>
                    <input type="text" value={this.state.title} id="title"  onChange={this.handleChange} placeHolder="website"/> 
                    <label htmlFor="url"></label>
                    <input type="text" value={this.state.url} id="url"  onChange={this.handleChange} placeHolder="http://"/> 
                    <input type="submit"/> */}
            {/* </form> */}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Tittle</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                    <tbody>
                {this.state.bookmarkPages.map((bookmark, index)=> {
                    console.log(bookmark)
                    return(
                        <tr>
                            <a href={bookmark.url}><td>{bookmark.title} </td></a>
                            <td onClick={() =>this.handleDelete(bookmark._id,index)}> X </td>
                        </tr>
                    )
                })}
                    </tbody>
                </table> 
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));