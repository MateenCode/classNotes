console.log(receipt1);

class App extends React.Component {
  state = {
    receipts: [receipt1, receipt2, receipt3],
  };
  render() {
    return (
      <div>
        <h1>test 1</h1>

        <Receipt />
      </div>
    );
  }
}

class Receipt extends React.Component {
  state = {
    receipts: [receipt1, receipt2, receipt3],
};
    render() {
    return (
        <div>
            <h1>Test</h1>
            {this.state.receipts.map((receipt) => {
            return <h1>{receipt.person}</h1>;
            })}
        </div>
    );
    }
}

ReactDOM.render(<App />, document.querySelector("main"));
