/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = "mongodb://localhost:27017/" + "vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// https://mongoosejs.com/docs/2.7.x/docs/query.html

// var vampire = {
//   name: 'Chocula',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal','marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2,
// }

// var fourVampires = [{
//   name: 'Count',
//   title: 'Mr',
//   hair_color: 'black',
//   eye_color: 'red',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['blood','guts'],
//   location: 'Alberta, Maine, US',
//   gender: 'm',
//   victims: 12,
// },

// {
//   name: 'Drac',
//   title: 'The',
//   hair_color: 'red',
//   eye_color: 'green',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['worms','guts'],
//   location: 'Maimi, Florida, US',
//   gender: 'm',
//   victims: 4,
// },

// {
//   name: 'Countess',
//   title: 'Ms',
//   hair_color: 'black',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['chocolate','gummies'],
//   location: 'New York, New York, US',
//   gender: 'f',
//   victims: 40,
// },

// {
//   name: 'Brooklyn',
//   title: 'Mrs',
//   hair_color: 'brown',
//   eye_color: 'blue',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['burgers','paint'],
//   location: 'Detroit, Michigan, US',
//   gender: 'f',
//   victims: 12,
// }]

// Vampire.create(vampire, (error, tweet) => {
//       if(error) {
//           console.log(error)
//       } else {
//           console.log(tweet);
//       }
//       db.close()
  
//   })

  // Vampire.insertMany(fourVampires,(err, vampires) => {
  //   if (err){ console.log(err)}
  //     console.log("added four new vamps", vampires)
  //     mongoose.connection.close();
  //   });

  // Vampire.find({gender:'f'}, (err, vampData)=>{
  //   console.log(vampData);
  //   db.close();
  //   })

    // Vampire.find({ victims: { $ne:210234 }}, (err, vampData)=>{
    //   console.log(vampData);
    //   db.close();
    // });

    Vampire.find({}, 'title body', (err, tweets)=>{
      console.log(tweets);
      db.close();
      })