console.log(groceries);

const GroceryList = (props) => {
 
    return (
      <div>
      
      {props.show ? <div>
                <div className="box" >
                <article class="media">
                  <div class="media-left">
                      <figure className="image is-128x128">
                        <img   src={`${props.img}`}/>
                      </figure>
                  </div>

                  <div class="media-content">

                    <div class="content">
                        <p>
                        <small>Qty: {props.quantity}</small>
                        <br/>
                        <small>{props.unit}'s</small> of <small>{props.brand}</small> <strong>{props.item} </strong>  
                        <br/>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                        {/* <button type="submit" id={index} onClick={this.toggleGroceries}>Buy</button> */}
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                          <a class="level-item" aria-label="reply">
                          <span class="icon is-small">
                          <i class="fas fa-reply" aria-hidden="true"></i>
                          </span>
                          </a>
                          <a class="level-item" aria-label="retweet">
                          <span class="icon is-small">
                          <i class="fas fa-retweet" aria-hidden="true"></i>
                          </span>
                          </a>
                          <a class="level-item" aria-label="like">
                          <span class="icon is-small">
                          <i class="fas fa-heart" aria-hidden="true"></i>
                          </span>
                          </a>
                      </div>
                    </nav>
                  </div>
                </article>   
                </div>
            </div>: ""}
      </div>
    )
}

class App extends React.Component {
state = {
    groceries: groceries,
    img: "",
    item: "",
    brand: "",
    units: "",
    quantity: 0,
    isPurchased: false,
    show: false
};
handleInput = (event) => {
    // console.log(event.target.value)
    this.setState({ [event.target.id]: event.target.value });
};

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
    img: this.state.item,
    item: this.state.item,
    brand: this.state.brand,
    units: this.state.units,
    quantity: this.state.quantity,
    isPurchased: this.state.isPurchased,
    };

    this.setState({
    groceries: [newItem, ...this.state.groceries],
    img: "",
    item: "",
    brand: "",
    units: "",
    quantity: 0,
    isPurchased: false,
    });
};
toggleGroceries = () => {
  this.setState({
      show:! this.state.show
  })
};
    
    // console.log(this.state.isPurchased);

render() {
    return (
    <div className="container is-fluid">
        <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title">GoGo Grocery</h1>
            <h2 class="subtitle">Keep your pantry stocked</h2>
            </div>
        </div>
        </section>

        
        {/* <div id="myDiv">
                <label className="switch" htmlFor="switch"> 
                <input type="checkbox" onClick={this.togglePurchased} />
                <span className="slider"></span>
                </label>
                </div> */}
                <form onSubmit={this.handleSubmit}>
        <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label" htmlFor="item">
            Item
            </label>
        </div>
        <div class="field-body">
            <div class="field">
            <p class="control is-expanded has-icons-left">
                <input
                className="input is-primary is-rounded"
                type="text"
                value={this.state.item}
                onChange={this.handleInput}
                id="item"
                placeholder="item name"
                />
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </p>
            </div>
            <div class="field-label is-normal">
            <label class="label" htmlFor="brand">
            Brand
            </label>
        </div>
            <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
                <input
                className="input is-primary is-rounded"
                type="text"
                value={this.state.brand}
                onChange={this.handleInput}
                id="brand"
                placeholder="item brand"
                />
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </p>
            </div>
        </div>
        </div>

        <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label" htmlFor="units">
            Units
            </label>
        </div>
        <div class="field-body">
            <div class="field">
            <p class="control is-expanded has-icons-left">
                <input
                className="input is-primary is-rounded"
                type="text"
                value={this.state.units}
                onChange={this.handleInput}
                id="units"
                placeholder="12 pk, 1lb, etc"
                />
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </p>
            </div>
            <div class="field-label is-normal">
            <label class="label" htmlFor="quantity">
            Quantity
            </label>
        </div>
            <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
                <input
                className="input is-primary is-rounded"
                type="number"
                value={this.state.quantity}
                onChange={this.handleInput}
                id="quantity"
                />
                <span class="icon is-small is-left">
                </span>
                <span class="icon is-small is-right">
                </span>
            </p>
            </div>
        </div>
        </div>

        <div class="field is-horizontal">
        <div class="field-label">
            <label class="label" htmlFor="isPurchased">Is Purchased?</label>
        </div>
        <div class="field-body">
            <div class="field is-narrow">
            <div class="control">
                <label class="radio">
                <input type="radio" name="isPurchased" />
                Yes
                </label>
                <label class="radio">
                <input
                    type="radio"
                    name="isPurchased"
                    value={this.state.isPurchased}
                    onChange={this.handleInput}
                    id="isPurchased"
                />
                No
                </label>
            </div>
            </div>
        </div>
        </div>



        <div class="field is-grouped is-grouped-right">
<p class="control">
<input className="button is-primary" type="submit"/>
</p>
</div>
</form>
      <div>
      <button type="submit"  onClick={this.toggleGroceries}>Show Grocery List</button>
        {this.state.groceries.map((grocery, index) => {
         
          
            return (
              <div>
            <GroceryList 
            show ={this.state.show} 
            item={grocery.item} 
            brand={grocery.brand} 
            unit={grocery.units} 
            quantity={grocery.quantity}
            img={grocery.img} />
         
            </div>
            ) } 
            
            )}
        </div>
        <footer class="footer">
            <div class="content has-text-centered">
            <p>
            <strong>Design</strong> by <a href="https://jgthms.com">Khoury "yoda"</a>.
            </p>
            </div>
        </footer>
    </div>

    );
}
}

ReactDOM.render(<App />, document.querySelector("main"));


//cant get my shopping cart to work properly///
