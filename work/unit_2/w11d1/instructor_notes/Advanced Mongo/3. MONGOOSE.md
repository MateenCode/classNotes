# Mongo - Mongoose

## Lesson Objectives
1. Explain what an ODM is
1. Create a Schema for a collection
1. Create a model and save it
1. Find a specific model
1. Update a model already in the database
1. Remove a model already in the database
1. Combine Actions

## Explain what an ODM is

ODM stands for Object Document Model. It translates the "documents" being stored in Mongo into fancier JS objects that have more helpful methods and properties.

## Create a Schema for a collection

In mongo, you can put whatever you want into your collections.  This can be a little dangerous because you might make a mistake in your code.  To avoid having the wrong kind of data in your database, Mongoose allows us to create Schemas (or blueprints) for our objects, so that something funny doesn't find its way in.

First install the npm package

```
npm install mongoose --save
```

```javascript
const mongoose = require('mongoose'); //require mongoose package
const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

const articleSchema = new Schema({
	title:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
	author: { type: String, required: true },
	body:   String,
	comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
	publishDate: { type: Date, default: Date.now }, // can set defaults for properties
	hidden: Boolean,
	meta: { // can have properties that are objects
		votes: Number,
		favs:  Number
	}
});

//Creating an Article class -- will be stored in 'articles' collection.  Mongo does this for you automatically
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
```

Here are the most common types of properties you can have

1. String
1. Number
1. Date
1. Boolean
1. Mixed
1. ObjectId
1. Array

## Create a model and save it

Now that we have an Article class, we should import it in another file and use it to create a new Article in our DB.  Remember, all the Article class does is set up the blueprint that all article objects must follow.  It doesn't create anything in the DB.

```javascript
const mongoose = require('mongoose');
const db = mongoose.connection;
const Article = require('./article.js');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/example');

//if the connection fails
db.on('error', ()=>{
	console.log('error');
});

db.once('open', ()=>{
	//we're connected!
	//save article to the database
	Article.create({
		title: 'Awesome Title',
		author: 'Matt'
	}, (err, article)=>{
		if(err) { //if there's an error, log it
  			console.log(err);
		} else { //else log the created article
			console.log(article);
		}
		mongoose.connection.close();//close the connection so that the program will end
	});
});
```

## Find a specific model

The `Article` class itself has functions that you can call.  Note this is not a specific instance of an article, but rather the class.

Mongoose's find method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the data comes back.

```javascript
Article.find(
	{ author: 'Matt' },
	(err, articles)=>{
		console.log(articles); // an array of articles
	}
);
```

## Update a model already in the database

Mongoose's update method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the update is complete.

```javascript
Article.update(
	{ author: 'Matt' },
	{ $set : { author: 'Matthew' } },
	{ multi: true },
	(err, response)=>{
		console.log(response); //just tells you the action was successful
	}
);
```

## Remove a model already in the database

Mongoose's remove method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the remove is complete.

```javascript
Article.remove(
	{ author: 'Matt' },
	(err, response)=>{
		console.log(response); //just tells you the action was successful
	}
);
```

## Combine Actions

The following will not work as expected (create an article and then remove it):

```javascript
Article.create({
	title: 'Awesome Title',
	author: 'Matt'
}, (err, article)=>{
	if(err) { //if there's an error, log it
		console.log(err);
	} else { //else log the created article
		console.log(article);
	}
});
Article.remove(
	{ author: 'Matt' },
	(err, response)=>{
		console.log(response); //just tells you the action was successful
	}
);
```

Instead, you'll have to execute the second command in the callback of the first

```javascript
Article.create({
	title: 'Awesome Title',
	author: 'Matt'
}, (err, article)=>{
	if(err) { //if there's an error, log it
		console.log(err);
	} else { //else log the created article
		Article.remove(
			{ author: 'Matt' },
			(err, response)=>{
				console.log(response); //just tells you the action was successful
				mongoose.connection.close();//close the connection so that the program will end
			}
		);
	}
});
```
