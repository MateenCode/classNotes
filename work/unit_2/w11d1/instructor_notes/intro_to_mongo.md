# Mongo Database

## Lesson Objectives
1. Describe what is a Database
1. Describe what is Mongo
1. Understand the difference between a Mongo database, sub-database, collection, and document
1. Get Mongo running
1. List sub-databases
1. choose a sub-database
1. create a collection
1. insert a document
1. insert multiple documents
1. query the collection
1. remove a set of documents
1. update a set of documents
1. drop a Collection or sub-database

# What is a Database

A database is an organized collection of data, stored and accessed electronically.

For our CRUD apps so far we've been hard coding some data. We've been able to make temporary changes, but as soon as we shut down our servers, those changes are gone.

We need a way to make our data persist.

We'll do that by storing/accessing our data from a database.

There are many databases. A common type is a SQL(Structured Query Language) database which stores data in tables and rows, much like an excel spreadsheet/google sheet.

Another type of database is a NoSQL(Not Only SQL) database, which follows a different structure. In our case, we'll be using MongoDB which will store our data in objects (just as we've been seeing with our mock databases)

## What is Mongo

MongoDB is a database that holds JavaScript Objects. The database itself is an application that runs quietly on a computer and waits for connections that make requests and then sends responses (much like a web server).

Mongo is designed to be a database that is flexible and easily scalable.


[Our Cheatsheet](../../../../../wiki/Mongo-Cheatsheet)

## Mongo Sub-Databases

You can have multiple smaller databases stored and available in Mongo.

Imagine a company like Google, they would have multiple databases: one for mail, one for maps, one for drive documents...

For us, we'll have multiple sub-databases, typically one for each lesson, homework and project.

Here is a way you _COULD_ split up sub-databases for an app

![sub database example](https://i.imgur.com/rHgjaUM.png)

# Mongo Collections and Documents

MongoDB is considered a NoSQL (not only SQL, non SQL or non relational), rather than storing things in tables with rows and columns, NoSQL databases use other means. In the case of MongoDB, data is stored in JavaScript objects.

A collection is a set of documents. Documents are a set of data records. This is very abstract. Let's use a simplified real world example of an address book.

Here is one document:

```js
 firstName: "Jennifer",
 lastName: "Juniper",
 address: "Upon the Hill",
 state: "California",
 telephone: "867-5309",
 birthday: "June 8, 1968",
 email: "jenny.juniper@juno.net"

```

A collection, would be many documents: In our case, many contacts.

Remember: having a collection of documents sounds quite reasonable. But having a document of collections is ... kind of odd.

If you're coming from a background where you are used to thinking of data in terms of columns and rows, reading the following could be helpful in transitioning into this new way of modeling data:

[Thinking in Documents Part 1](https://www.mongodb.com/blog/post/thinking-documents-part-1?jmp=docs&_ga=2.202168721.1294830246.1530196908-30583944.1529350623)

[Thinging in Documents Part 2](https://www.mongodb.com/blog/post/thinking-documents-part-2)

## Install Mongo

We already installed Mongo, if you need to reinstall, [follow the directions here](../../../unit_1/w08d3/instructor_notes/INSTALL_MONGO.md)

## Get Mongo Running

Let's use three terminal tabs. One to keep bash open and available, open a new one to start `mongod` and one more to run the mongo shell.

In terminal, type `mongod`

A bunch of text should come up, but in version 3.6.3, the final line says

![last line of successful mongod](https://i.imgur.com/F8hXqwB.png)

<details><summary>Server is Running All the stuff</summary>

![mongod running successfully](https://i.imgur.com/auSdPvf.png)
</details>


## Connect to Mongo

There are a few ways to connect to Mongo. In this course, there will be two main ways:

- Through terminal in a shell
- Through node using an npm module called `mongoose`

## Connect via Mongo Shell

Open a second terminal tab (do not shut `mongod` tab down), (shortcut key: `command t`)

type `mongo`

A bunch of text should come up, but in version 3.6.3, the final line should have changed from a bash prompt `$` to a `>`

![Mongo Shell Ready to type](https://i.imgur.com/8ZFoWx2.png)

<details><summary>Mongo Shell is Running All the stuff</summary>

![mongo running successfully](https://i.imgur.com/SyN6fWN.png)
</details>

## Connect/Create to a Sub-Database

Let's keep working on our Mongo Shell.

Let's see what sub-databases we have available to us:

`show dbs`


<details><summary>Sample Appearances of Sub Databases</summary>

![Sample Appearances of Sub Databases](https://i.imgur.com/PUIdcLm.png)
</details>

We want to create and use a sub-database called `learn`. With Mongo, if it doesn't exist, Mongo will create it.

Therefore if we type

`use learn`

It will create a sub-database called `learn` and connect to it

<details><summary>Created and Connected to Learn sub-databases</summary>

![create and connect to learn](https://i.imgur.com/ZQ1bck6.png)
</details>


It is likely that our configuration let's us see the db name at our prompt, but in case it doesn't or we want a reminder we can type

```
db
```

To see the database we are currently connected to.


## Create a Collection

For today, we'll only be working with one collection, but most apps will have numerous collections.

Let's think about an online store. You might split up the collections like so:
```
- users
    - username
    - password
    - address
    - creditCardInfo
    - phoneNumber

- products
    - productName
    - catalogNum
    - imageLink
    - price
    - inStock
```

This helps us organize our data.

Let's go back to our address book example and create a collection of contacts.

```js
db.createCollection('contacts')
```
We should get an ok message, if we've done it correctly.


<details><summary>Created a new collection successfully</summary>

![collection create](https://i.imgur.com/vSsT8oO.png)
</details>

We can see what collections we  have by typing

```js
show collections
```

## Create, Read, Update and Delete Documents
We've been creating, reading, updating and deleting our 'data' in our Express apps. Now let's learn how to do it using Mongo.

Remember: users are not going to open a Mongo shell and type everything we're going to type. We'll eventually be building apps to interact with our database.



### Insert a document into a Collection (Create)

We'll use the `insert()` method.
We have to tell mongo where to insert it. We'll do that by chaining it to `db.contacts`
It takes two arguments.
The first is always an object of our data.
The second is optional and can let us choose some specific options.

Insert into contacts:
```js
db.contacts.insert()
```

Pass in an object as the first argument
```js
db.contacts.insert({})
```
Add some key value pairs, for Jennifer. We're going to split it up across multiple lines to make it easier to type and see

```js
db.contacts.insert({
  name: 'Jennifer',
  phone: 8675309,
  state: 'California'
})
```

We can also type our code in vscode and when we know it's right, copy and paste it over into our Mongo shell. Go with whatever is easier.

<details><summary>Successful insert</summary>

![Successful insert](https://i.imgur.com/YP59kUi.png)
</details>


Let's go ahead and copy paste this into our Mongo shell to populate our collection with more documents

```js
db.contacts.insert(
  [
    {
      name: 'Jennifer',
      phone: 8675309,
      state: 'California'
    },
    {
      name: 'Claire',
      phone: 6060842,
    },
    {
      name: 'Morris',
      phone: 7779311,
      state: 'Minnesota'
    },
    {
      firstName: 'Alicia',
      lastName: 'Keys',
      phone: 4894608,
      state: 'New York'
    },
    {
      name: 'Etta',
      phone: '842-3089',
      state: 'California'
    },
  ]
)
```

<details><summary>Successful insert many</summary>

![Successful insert many](https://i.imgur.com/KkviPPh.png)
</details>

We may notice that our data wasn't consistent.

- Jennifer has a duplicate record
- Claire, doesn't have a state
- Alicia's key's are different for her name than others, she also has an extra field for her last name, compared to others.
- Etta's phone number is a string with a hyphen instead of a number

Mongo is designed to be this flexible. Later, we'll learn how to validate our data with an npm package called `mongoose`.

### Query Documents from a Collection(READ)

We'll use the `.find()` method.

We'll do some simple queries. If we provide no argument, it will find all the documents.

Let's try it

```js
db.contacts.find()
```

We may find that to not be as human-readable as we'd like, we can chain another function on it

```js
db.contacts.find().pretty()
```

<details><summary>Successful find all</summary>

![Find All](https://i.imgur.com/RSRhxbi.png)
</details>

Many times, we don't want to find all of the records in our collection.

We might want to just find the names of the people who live in California.

We can give our `.find()` method some arguments. The first argument will be a `filter` and the second argument will be a `projection` the project will be the key, it can have a value of 0 (do not show this field) or 1 (do show this field).

When we skip the second argument, we see the whole document:

```js
db.contacts.find(
  { state:'California' }
 ).pretty()
```

Let's look for the names of people who are in the state of California, and let's not show the `_id` field. We'll add a second argument.


```js
db.contacts.find(
  { state:'California' },
  { name: 1, _id: 0 }
 ).pretty()
```



### Remove Documents from a Collection(DELETE)

Let's remove that duplicate record. We'll use a method called `.remove()`, it takes two arguments, the first is a query (what document are we looking for? - Jennifer's), the second one gives us options

```js
db.contacts.remove(
  {
    name: 'Jennifer'
  }
)
```

<details><summary>Ooops two records removed</summary>

![removed two records, oops](https://i.imgur.com/5z4bLmg.png)
</details>


Let's put Jennifer back again twice:

```js
db.contacts.insert({
  name: 'Jennifer',
  phone: 8675309,
  state: 'California'
})
db.contacts.insert({
  name: 'Jennifer',
  phone: 8675309,
  state: 'California'
})
```

We should see we did it successfully with the message that we get.

But we can also run a query:

```js
db.contacts.find({name:'Jennifer'}).pretty()
```


And Let's try to remove again. This time we're going to pass a second argument that will be an object that has the key values of `justOne: true`

```js
db.contacts.remove(
  {
    name: 'Jennifer'
  },
  { justOne: true}
)
```

We should have a success message that reads like the following:

```
Removed 1 record(s) in 2ms
WriteResult({
  "nRemoved": 1
})
```

Let's use our `UP arrow` to scroll back to our .find() for Jennifer and check that we now have just one record.

```js
db.contacts.find({name:'Jennifer'}).pretty()
```
### Update a document  (Update)

Like `.remove()`, update takes a query for what to update. But it is also REQUIRED to use an **[update operator](https://docs.mongodb.com/manual/reference/operator/update/)** as part of the second argument in order to prevent destroying our object.

Let's update Jennifer's record to have the name Jenny instead

```js
db.contacts.update(
  {name: 'Jennifer'},
  {name: 'Jenny'}
)
```
Success looks like this:
```js
Updated 1 existing record(s) in 35ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
- we have number matched (nMatched) equal to 1
- we have number upserted (nUpserted) equal to 0 (upsert means if it doesn't exist, create it, we did not create anything this time)
- we have number modified (nModified) equal to 1, which means we modified 1 records.

Let's push the up arrow and run our last command again:
```js
db.contacts.update( { name: 'Jennifer'}, { name: 'Jenny'} )
```

This time we get:
```js
WriteResult({
  "nMatched": 0,
  "nUpserted": 0,
  "nModified": 0
})
```
We have no matches, no upserts and nothing modified. This is what we expect, since we changed this record the first time we ran it.

Let's find Jenny

```js
db.contacts.find({name:'Jenny'})
```

We lost the rest of Jenny's record!

![Jenny's Destroyed record](https://i.imgur.com/7lM5jyB.png)

This is because we didn't use an update operator. In order to keep our data intact with an update we must use an update operator.

Let's remove and reinsert Jenny's record and try again


```js
db.contacts.remove(
  {
    name: 'Jenny'
  }
)
```

```js
db.contacts.insert({
  name: 'Jennifer',
  phone: 8675309,
  state: 'California'
})
```

Let's use the `$set` update operator this time

```js
db.contacts.update(
  {name: 'Jennifer'},
  {
    $set: {name: 'Jenny'}
  }
)
```

Since our data set is very small, let's just look at all of our records

```js
db.contacts.find().pretty()
```

We can add a field. Claire has no state, let's give her a state

```js
db.contacts.update(
  {  name: 'Claire' },
  {
    $set: {state: 'California'}
  }
)
```

We can push the up arrow to rerun
```js
db.contacts.find().pretty()
```

And we should see that Claire now has a state, so we don't have to query for the field that we want to change, we can query for any match.

Because of this, our objects can be ever changing. The way we can reliably be sure we are always getting the right document, is to use the unique id number attributed to each document on creation. Typing these long ids are tough for a code along, but when we start making our express CRUD apps, we'll definitely be using the id numbers a lot.

By default, update will only update one record

```js
db.contacts.update(
  {},
  {$set: {bestFriend: true}}
)
```

Press the up arrow to run

```js
db.contacts.find().pretty()
```
As we can see, just one record was updated. Let's try to update all of our records, by adding a third argument to our `.update()` method

```js
db.contacts.update(
  {},
  { $set: {bff: true}},
  { multi: true}
)
```
Press the up arrow to run

```js
db.contacts.find().pretty()
```
### Search for Multiple Values
We can query for multiple values. In our contacts, let's query for people who live in California and are named Etta

```js
db.contacts.find(
  {
    name: 'Etta',
    state: 'California'
  }
)
```

### Search by Quantitative Data

We can search for equal to, not equal to, greater than, less than or equal to, included in an array etc.

[query operators](https://docs.mongodb.com/manual/reference/operator/query/)

Let's just try one together. Let's query for the people who are NOT in California

```js
db.contacts.find(
    {
      state: {$ne : 'California'}
    }
)
```
### Drop a collection


If you need to remove an entire collection
```
db.contacts.drop()
```

If you need to drop an entire sub-database, while you are connected to the database you want to drop:

```
db.dropDatabase()
```


### Remember to quit out of Mongo and Mongo Shell when you are done.

To quit out of the Mongo shell type `exit`

To quit out of Mongo, press `control c`

### Bonus Configuration

Update your mongo shell to always show pretty

Anywhere in bash
```bash
echo DBQuery.prototype._prettyShell = true >> ~/.mongorc.js
```

Turn it off
```bash
echo DBQuery.prototype._prettyShell = false >> ~/.mongorc.js
```

Don't turn it off and on this way repeatedly. Take the time to google and find out more about the config file and how to update it and change your configs.
