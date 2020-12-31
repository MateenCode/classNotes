# Databases - Mongo

## Lesson Objectives
1. Describe what Mongo is
1. Get Mongo running
1. Diagram the structure of Mongo
1. List your sub databases
1. Choose a sub database as a target for your actions
1. Create a collection
1. Insert a document into a collection
1. Find a set of documents in a collection
1. Remove a set of documents from a collection
1. Update a set of documents in a collection
1. Drop a Collection or an entire sub database

## Describe what Mongo is

MongoDB is a database that holds javascript objects.  The database itself is just an application that runs quietly in the background and waits for connections (just like a web server).  You can connect to it in the same way that you would connect to a website, but instead of viewing a page, you can save, retrieve, update, and delete javascript objects to/from/in the database.

## Get Mongo running

1. You may need to install it using [Homebrew](https://brew.sh/)
	- Mac OS X: `brew install mongodb`
1. In terminal type `mongod`
	- you will probably get an error saying "Data directory /data/db not found., terminating"
	- if so:
		1. `sudo mkdir /data`
		1. `sudo mkdir /data/db`
		1. `sudo chmod -R 777 /data`
	- `mongod`
	- should see: "waiting for connections on port 27017"
1. Open another terminal and type `mongo`

To quit `mongo`, type `quit()`.  To quit `mongod` hit `control+c`

If at some point you get an error with `mongod`:

1. `ps -A | grep mongod`
1. find the line that just mentions mongod, but not grep
1. take note of the number on the left
1. type `kill 1774` or whatever that number is.  Try `mongod` again.
1. If that doesn't work, go to /data/db and `rm mongod.lock`.  Try `mongod` again.

## Diagram the structure of Mongo

The Mongo database application itself contains several imaginary "sub-databases" (not sure if that's an industry term or not).  Each sub-database can be assigned to a specific application.  Imagine you're Google, and you have lots of different applications.  You don't want the data for your mail application data mixed in with your maps application data.  These sub-databases allow you to keep information structured in a way that is logical.

## List your sub databases

To list the sub-databases in your Mongo application, use the following command:

```
show dbs
```

## Choose a sub database as a target for your actions

In general, you won't be switching back and forth between different sub-databases, since, presumably, you'll just be working on one application at a time.  Because of this, we "select" a sub-database.  Once selected, all the actions we call will affect that sub database until we "select" another.

To choose (or create and choose) a sub-database, use the following command:

```
use learn
```

If we later want to remind ourselves what sub database we're using, use the following command:

```
db
```


## Create a collection

Inside our each sub-database, we can have various collections.  Each collection is a set of related JavaScript objects.  Imagine we're creating a mail application.  We could have a collection of users and a different collection for messages.  The purpose of the collection is similar to sub databases, in that it's purely for organizational purposes.

The syntax for creating a collection is:

```
db.createCollection('employees')
```

To show a collection, use:

```
show collections
```

## Insert a document into a collection

Now we're ready to start inserting JS objects into our collection.

```
db.employees.insert({
	name:'matt',
	gender:'m'
})
```

We can also insert an array of objects

```
db.employees.insert(
	[
		{
			name:'bob',
			gender:'m'		
		},
		{
			name:'jenny',
			gender:'f'		
		}
	]
)
```

If things get tough to read, we can break our command out onto multiple lines

## Find a set of documents in a collection

You'll notice that inserting doesn't show what's in the collection.  This is because it's writing to the database.  You can either read from or write to the database, but not both at the same time.

To examine what's in our collection, we run:

```
db.employees.find()
```

If you don't like how this is formatted, add `.pretty()` to the end

```
db.employees.find().pretty()
```

To find all the documents in our collection that have a gender property set to 'm', we run:

```
db.employees.find({gender:'m'}).pretty()
```

## Remove a set of documents from a collection

Remove a document, just like you would find it

```
db.employees.remove({gender:'m'})
```

## Update a set of documents in a collection

Update is similar to insert, find, and remove, but it takes two parameters.  The first is a search criteria, like before, and the second is how to change the selected records.

```
db.employees.update(
	{name:'jenny'},
	{
		$set: {
			gender:'jennifer',
			age: 25
		}
	}
)
```

`$set` is **critical**.  If you forget it, you will destroy your objects.

Update will update only one document by default.  To update many, pass in a third `{ multi:true }` param

```
db.employees.update(
	{name:'jenny'},
	{
		$set: {
			gender:'jennifer',
			age: 25
		}
	},
	{
		multi: true
	}
)
```

## Drop a Collection or an entire sub database

If you really screw up, you can drop a collection:

```
db.employees.drop()
```

If you really REALLY screw up, you can drop an entire sub database:

```
db.dropDatabase()
```
