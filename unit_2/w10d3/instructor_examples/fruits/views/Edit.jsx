const React = require('react');

class Edit extends React.Component{
   render(){
       // const fruit = this.props.fruit
       const { fruit, index } = this.props // creates a variable named "fruit" equal to 
       // what we passed to this.props.fruit in our server.js file in the Edit 
       // Route
       return (
           <>
           <div>
               <h1>{fruit.name} Edit page</h1>
               <form action={`/fruits/${index}?_method=PUT`}method="post">
                   Name: <input type="text" name="name" value={fruit.name}></input><br/>
                   Color: <input type="text" name="color" value={fruit.color}></input><br/>
                   Is Ready To Eat: <input type="checkbox" name="readyToEat" checked={fruit.readyToEat? 'checked': ''}/><br/>
                   <input type="submit" name="" value="Submit Changes"></input>
               </form>
           </div>
           <script src="/js/app.js"></script>
           </>
       )
   } 
}

module.exports = Edit;