# Mongo Lab
Title: Intergalactic Bounty Hunter Database - Mongo Lab<br>
Type:Lab<br>
Duration: 1 + hours <br>
Creator: Karolin Rafalski <br>


## Intergalactic Bounty Hunter Database

You've been going to meetup events and networking. You've been telling everyone you're so excited to get a dev job that you'll take _any job_.

You run into a shadowy stranger, who asks you three times 'Really? Any job?' and you continue to agree enthusiastically. Things go dark, and you wake up in a strange place.

The shadowy stranger greets you and says 'Welcome to your new job! You are now our dev who will be building an intergalactic bounty hunter database for us!'

You look around, notice some high end coffee and tea machines, an air hockey table, nap rooms and floor to ceiling windows with a view of outer space. The shadowy stranger takes you to your desk which has a fancy sit-to stand adjustable hight desk with a swing bar, two big monitors, and Herman Miller chair. You say to yourself 'Not bad! Not bad at all!'

## Set up

Start `Mongo`, by typing `mongod`, if you don't already have it running.

Open a new tab and start a Mongo shell if you don't have it running by typing `mongo`

connect to a new sub-database by typing
```
use hunters
```
If this database does not exist, it will be created

Let's create a collection for all the beings that have bounties.

```js
db.createCollection('bounties')
```

We should get an `ok` message.

## Create/Insert

Let's add our first bounty

```js

db.bounties.insert(
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  }
  )
```

You should get an ok message that looks similar to this:

![Insert ok](https://i.imgur.com/KdFh4Ss.png)

Using the above template, make another bounty

Now insert a few more bounties

```js

db.bounties.insert([
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  },
  {
    name: 'Rocket',
    wantedFor : 'Stealing Batteries',
    client : 'Ayesha High Priestess of the Sovereign',
    reward : 1000000000,
    ship: 'The Milano',
    hunters :['Nebula', 'Ravagers'],
    captured: false
  },
  {
    name: 'Sara Lance',
    wantedFor : 'Screwing up the timeline, causing anachronisms',
    client : 'Time Bureau',
    reward : 50000,
    ship: 'Waverider',
    hunters :['Chronos'],
    captured: false
  },
  {
    name: 'Malcolm Reynolds',
    wantedFor : 'Aiming to misbehave',
    client : 'The Alliance',
    reward : 40000,
    ship: 'Serenity',
    hunters :['Jubal Early'],
    captured: false
  },
  {
    name: 'Starbuck',
    wantedFor : "Disobeying Captain's orders",
    client : 'Captain Adama',
    ship: 'Demetrius',
    reward : 1000,
    hunters :['Apollo'],
    captured: true
  }
])
```

## Read/Query

- Do a query to see all the bounties
- Do a query to find the bounty whose client is `Time Bureau`
- Do a query to find the bounties who have been `captured`
- Do a query specific to the bounty you inserted
- Do a query to just return the names of all the bounties

## Remove

- Starbuck and the Captain have come to an understanding. Remove her record
- find and remove the duplicate record - be sure to JUST remove the one copy

## Update
Update `Sara Lance`'s name to be her superhero alias 'White Canary'

Update Rocket's ship to be `The Milano 2`

### Intermediate Mongo
Find the INTERMEDIATE_MONGO.md lecture notes in the instructor notes directory. Follow through each of the explanations. Follow the commands and perform appropriate finds after each update call to see the results

- Find the bounties that are greater than `100000`
- Find the bounties that are less than `1000`
- Find the bounties that are less than or equal to `1000`


- Find the bounty with the hunter `Nebula`
- Find the bounty with the ship `Waverider` OR `Serenity`
- Find the bounty who is not captured AND has whose client is `Ayesha High Priestess of the Sovereign`
- Increase all the bounties by 333333
- Multiply all the bounties by 2
- Add `Bobba Fett` as a hunter for `Malcolm Reynolds`
- Add `Bobba Fett` as a hunter for the one that has the ship `Waverider`
- Find and remove `Dengar` the bounty hunter
- Upserts will insert a value if it doesn't exist, if it does it will update it
- Try giving a new field of `lastSeen` to Han Solo, with the property `yesterday` set upsert to true
- Try giving all bounties a new field of `lastSeen` - with a value of `last week` and set upsert to `false`


### HUNGRY FOR MORE?

- Work through the [morning_bonus.md](morning_bonus.md) File!
