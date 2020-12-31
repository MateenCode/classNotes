![](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/blob/master/ga_cog.png)

---
Title: Beauty and the Burger<br>
Type: Homework<br>
Duration: 2 + hours (2+ hours for Boutique Travel Travel Boutique) <br>
Creator: Karolin Rafalski <br>

---


# Beauty and the Burger

You want to help your friend create an app for their burger shop, where customers can order their burgers online either have them picked up or delivered. Your friend is a culinary visionary and envisions that burgers can be made with any meat (beef, chicken, turkey, ostrich, tofu, emu, buffalo, elk, etc...), cheese is optional (only 1 slice of American cheese allowed) and the burger can have any number of toppings ( ketchup, mustard, guacamole, Worstershire sauce, french fries, hot fudge, mayonnaise, pickled beets, mango, sriracha, onions, ramen, pickles, capers, relish, fried banana and with peanut butter, olives, tabasco, kimchi, maple syrup, mushrooms, fried green tomatoes, etc.).

The orders should have a

- meat selection
- whether or not there will be cheese
- a list of toppings


## Resources

> [Mongo Documentation](https://docs.mongodb.com/manual/)

> [Mongo Cheatsheet](../Mongo_Cheatsheet.md)

## Activity

### How to submit this part of the homework:

Write/copy-paste your mongo shell commands into the given `answer.js` file

example:

```
// find all the burgers that are not beef
db.burger.find({meat:{$ne:'beef'}})
```

### Get Started

- start `mongo` server
  - in terminal type `mongod`
  - **Note** - to stop : `control c`

- start a  `mongo shell`
  - when mongo is running, open a new tab in terminal and type
  - `mongo`
  - your prompt should now be a `>`
  - **Note** - to stop : type `exit`


- `show dbs` to show your databases

- `db` show which database is in use (default is usually `test`)

- `use burgers` to switch to a database named burgers, if there is no database `burgers` it will create and switch into it
  - expected output
  ```
  switched to db burgers
  ```

- `db.createCollection('burger')` to create a burger collection
  - Expected output:
  ```
  {
    "ok": 1
  }
  ```

- `show collections` - to show collections
  - Expected output
  ```
  burgers → 0.000MB / 0.004MB
  ```

- Let's make a burger document together
 
 ```
 db.burger.insert(
   {
     meat: 'beef',
     cheese: false,
     toppings: ['ketchup' ,'onions' ,'pickles']
   }
   )
 ```
 
 - Expected output:
 
 ```
  WriteResult({
  "nInserted": 1
})
```

- Let's query for all the burgers, since we just made one burger, it should just show one burger
- `db.burger.find()`
- Expected output:
```
{
  "_id": ObjectId("5a18c6e82737dc8b317a46dc"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
Fetched 1 record(s) in 2ms
```

- let's make one more burger exactly like the one we just made (copy paste again)

<hr>

##### Follow the rest of the prompts in `answers.js`

<hr>

##### Continue to the hotels part of tonight's homework!

<hr>
