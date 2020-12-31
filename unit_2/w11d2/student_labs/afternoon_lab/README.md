
Title: Mongoose Vampires<br>
Type: Lab<br>
Duration: 1 + hours <br>
Creator: WDI-Meeseeks <br>
Adapted by: Kristyn Bryan, Karolin Rafalski<br>


---
# Mongoose Vampires

For this lab, you will be using some of the mongoose commands that you learned today and you will be **reading the documents** to find **new** queries to complete the following activities. Researching queries and implementing them is a big part of this lab!

![mongoose](https://s-media-cache-ak0.pinimg.com/564x/ee/b7/a9/eeb7a99383582d53e65ffcc0e4a225bd.jpg)

# Resources
Utilize the following resources to research the commands you will need:
- Your notes from today
- Mongoose Documentation
- Google to find Stack Overflow articles and more

# Setup
1. Start your mongo server with `mongod` in terminal if your operating system does not start it automatically (catalina+)
1. navigate to this directory in terminal and `npm i` to install `mongoose`
1. open the project in vscode, you'll be working with some starter code in the `models` folder and the `app.js` file


# The Exercise

## Building a Schema

Lets design a schema using mongoose and then use it to create some documents and eventually query for those documents.


Our vampire collection will look something like this:

``` javascript
var vampire = {
  name: 'Chocula',
  title: 'Count'
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal','marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2,
}
```

1. Build a vampire **schema** and **model** that matches the object above inside the `models/vampires.js` file

1. Go to the Mongoose documentation to learn more about validations and defaults: http://mongoosejs.com/docs/api.html

1. The **name field is required**, so make sure that the schema accommodates for that.

1. Also, **no vampire will have less than 0 victims**, so add that into the schema as a validation.

1. Lastly, set the **default value of the hair color to blonde**.



## Inserting Seed Data Using Mongoose

Insert into the database using **create** method:

### Add the vampire data that we gave you

1. We have required `seed_vampires.js` for you in the  `app.js` file. This is an array of Vampires for you to insert into your database.

1. Write this command and run it **ONCE** in `app.js` - once you are done, comment it out or else every time you run it it will make duplicates of your data.

```javascript
Vampire.insertMany(seedData,(err, vampires) => {
  if (err){ console.log(err)}
    console.log("added provided vampire data", vampires)
    mongoose.connection.close();
  });
```
1. remember run  your file with `node app.js`

### Add some new vampire data

1. Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.


## Querying
### Select by comparison

Write a different query for each of the following:

1. Find all the vampires that that are females
2. have greater than 500 victims
3. have fewer than or equal to 150 victims
4. have a victim count is not equal to 210234
5. have greater than 150 AND fewer than 500 victims


### Select by exists or does not exist
Select all the vampires that:

1. have a key of 'title'
2. do not have a key of 'victims'
3. have a title AND no victims
4. have victims AND the victims they have are greater than 1000


### Select with OR
Select all the vampires that:

1. are from New York, New York, US or New Orleans, Louisiana, US
2. love brooding or being tragic
3. have more than 1000 victims or love marshmallows
4. have red hair or green eyes


### Select objects that match one of several values
Select all the vampires that:

1. love either frilly shirtsleeves or frilly collars
2. love brooding
3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *


### Negative Selection
Select all vampires that:

1. love ribbons but do not have brown eyes
2. are not from Rome
3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
5. have not killed more than 200 people


## Replace

1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'


## Update

1. Update 'Guy Man' to have a gender of 'f'
2. Update 'Eve' to have a gender of 'm'
3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
5. Rename 'Eve's' name field to 'moniker'
6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".



## Remove

1. Remove a single document wherein the hair_color is 'brown'
2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
<hr>


## Hungry for more

1. Check out Mongoose's Query Builder!

```js
Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec(callback);
```

1. Write what that does in English: `Find a person whose occupation is ...`

2. Make an index route that will res.send the json of all the data in our database.

3. If number 1 was easy, try to connect your database to your application and show a proper index page that displays your vampire data. If this is also easy, create a show page as well where you are showing individual vampire data.

4. Have extra time? Try out a few more problems on [CodeWars](https://www.codewars.com/)
