import React, { Component } from "react";
import Notices from "./components/Notices";

class App extends Component {
  state = {
    notices: [],
    formInputs: {
      author: "",
      content: "",
      title: "",
    },
  };


  componentDidMount() {
    this.getNotices()
}

getNotices = () =>{
    fetch('http://localhost:3000/notices')
        .then(response => response.json())
        .then(json => this.setState({ notices: json}))
    .catch(error => console.error(error))
}

  handleChange = (event) => {
    const updateInput = Object.assign(this.state.formInputs, {
      [event.target.id]: event.target.value,
    });
    this.setState(updateInput);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/notices", {
      body: JSON.stringify(this.state.formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdNotice) => {
        return createdNotice.json();
      })

      .then((jsonedNotice) => {
        // reset the form
        // add notice to notices
        this.setState({
          formInputs: {
            author: "",
            content: "",
            title: "",
          },
          notices: [jsonedNotice, ...this.state.notices],
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <main>
            <Notices data={this.state.notices} />
          </main>
          <nav>
            <h4>Post a Notice </h4>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                value={this.state.formInputs.author}
                onChange={this.handleChange}
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={this.state.formInputs.title}
                onChange={this.handleChange}
              />
              <label htmlFor="content">Content</label>
              <input
                type="text"
                id="content"
                value={this.state.formInputs.content}
                onChange={this.handleChange}
              />
              <input type="submit" className="submit" />
            </form>
          </nav>
          <aside></aside>
        </div>
        <footer />
      </div>
    );
  }
}

export default App;
