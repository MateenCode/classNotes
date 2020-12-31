# CRUD App with Mongoose - Delete and Update

## Lesson Objectives

Add a Layout:

1. Create a Layout Folder
1. Make  AppLayout.jsx
1. Use The AppLayout.jsx on our pages

Deletion:

1. Create a Delete Button
1. Create a DELETE Route
1. Have the Delete Button send a DELETE request to the server
1. Make the DELETE Route Delete the Model from MongoDB

Edit/Update:

1. Create a link to the edit route
1. Create an edit route
1. Create an PUT route
1. Have the edit page send a PUT request
1. Make the PUT Route Update the Model in MongoDB
1. Make the PUT Route Redirect Back to the Index Page

## Add a Layout

Use the starter code in the student examples folder for today, or use your code from last class!

``` bash 
student_examples/fruits-jsx-mongoose
```

From your terminal 
``` bash 
cd views
```
Then
```bash
mkdir layout && touch layout/AppLayout.jsx
```
Then 
```bash
code layout/AppLayout.jsx
```

Open Up your AppLayout.jsx and type up the following code

```jsx
// This adds react to our file
const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <title>{this.props.title}</title>
        </head>
        <body>
        <h1>{this.props.title}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;

```
### Note: we will use this layout below in our Edit Page so just hold tight. Make sure you save this file.
### Common Errors : Are all elements closed, did you camelCase Charset, if you deviated from the design is what you added valid JSX.

## Create a Delete Button

In your Index.jsx file you will see the map function that we made previously we are going to sawp out that map method with our updated map method. The instructor will demonstrate.

```html
      {this.props.fruits.map((fruit,i) => {
                  return <li key={i}>
                      <a href={`/fruits/${fruit.id}`}>{fruit.name}</a>
                      is { fruit.readyToEat? <span>It is ready to eat</span>: <span> It is not ready to eat </span>}
                      {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                      <form>
                          <input type="submit" value="DELETE"/>
                      </form>
                  </li>
              })}
```

## Create a Delete Route : We will go into our server.js and create a delete route. Place this below your show route route that we made on saturday.

### For right now we are not really deleting anything we are just going to send the word `deleting` to the browser.

```javascript
app.delete('/fruits/:id', (req, res)=>{
    res.send('deleting...');
});
```

## Have the Delete Button send a DELETE request to the server

When we click "DELETE" on our index page (index.jsx), the form needs to make a DELETE request to our DELETE route.

The problem is that forms can't make DELETE requests.  Only POST and GET.  We can fake this, though.  First we need to install an npm package called `method-override`

```
npm i method-override
```

Now, in our server.js file, add:

```javascript
//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
```

Now we need to go back and set up our delete form to send a DELETE request to the appropriate route, so we will be returning to our views/Index.jsx file and changing the opening form tag.

```html
  <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
```

## Make the Delete Route Delete the Model from MongoDB

Also, have it redirect back to the fruits index page when deletion is complete. This must be done in our server.js file in the delete route that we created a few thumbs up ago.

```javascript
app.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits');//redirect back to fruits index
    });
});
```

## Create a link to an edit route

In your `Index.jsx` file:

```html
<a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
```

## Create an edit route/page

First the lets create an edit route in our server.js file do this below the delete route we created earlier:

```javascript
app.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		  'edit.jsx',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	);
    });
});
```

## Now the lets make the Jsx file by using the command line to touch a Edit.jsx file in our views folder, then opening it in VS Code:

```html
const React = require('react');
// As you can see we are using the app layout
const AppLayout = require('./layout/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complet we will do that below*/}
      <form>
          Name: <input type="text" name="name" defaultValue={this.props.fruit.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.fruit.color}/><br/>
          Is Ready To Eat:
              { this.props.fruit.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit;
```

## Create an PUT route

```javascript
app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    res.send(req.body);
});
```

## Have the edit page send a PUT request

In the `Edit.jsx` find the opening form tag and add the code below you should only have one opening form tag after you finish this.

```html
<form action={`/fruits/${this.props.fruit._id}?_method=PUT`} method="POST">
```

### Potential Bugs : Did you remove the other form tag if you copied and pasted? , did you miss adding method override?


## Make the PUT Route Update the Model in MongoDB (remember this is in your server.js) we are going to start by doing a res.send for instructional purposes

```javascript
app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.send(updatedModel);
    });
});
```
 ## You should see that when you update an element you are shown a JSON object in the browser that shows your object has changed

## Make the PUT Route Redirect Back to the Index Page so Now we will see it change on the index page.

```javascript
Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
    res.redirect('/fruits');
});
```

### Stretch Assignment 

Add the AppLayout to all of your pages

Remember your AppLayout must wrap everything in the Return block of your Render Function. Title is passed to AppLayout as a string. You shouldn't need to make any changes in your AppLayout.jsx file but you are free too.
