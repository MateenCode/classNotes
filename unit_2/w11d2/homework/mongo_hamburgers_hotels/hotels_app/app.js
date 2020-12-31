// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
() => console.log('Mongo running at', mongoURI)
)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create( hotelSeed, ( err , data ) => {
//     if ( err ) console.log ( err.message )
// console.log( "added provided hotel data" )
// }
// );




const myFirstHotel = {
    name: 'The Plaza',
    location: 'Miami',
    rating: 4,
    vacancies: true,
    tags: ['luxury', 'clean'],
    rooms: [{
        "roomNumber": 222,
        "size": "King",
        "price": 500,
        "booked": false
    }]
}

////////////////////////C////////////////////////////////
// Hotel.create(myFirstHotel , (error, hotels) => {
//     if(error){ //if there is an error console log it
//       console.log(error);
//     } else { // else show us the created tweet
//       console.log(hotels);
//     }
//       // get control of terminal back
//       // else just use control c
//     db.close();
//   });

//   Hotel.count({} , (err , data)=> {
//     if ( err ) console.log( err.message );
//      console.log ( `There are ${data} hotels in this database` );
//  });

////////////////////////R////////////////////////////////

// let's find all our hotels and console.log them

//  Hotel.find((err, hotels)=>{
//     console.log(hotels);
//     db.close()
//     }) 

// find all the hotels but only return the hotel name and console.log them
// Hotel.find({}, "name", (err, hotels)=>{
//     console.log(hotels);
//     db.close();
//     })


// find just your hotel using a search parameter that would only match your hotel
// Hotel.find({name:'The Plaza'}, (err, hotels)=>{
//     console.log(hotels);
//     db.close();
//     })

// find all the hotels that have vacancies, also exclude ratings.
// Hotel.find({vacancies: true}, {rating: 0}, (err, hotels) => {
//     console.log(hotels);
//     db.close()
// })

////////////////////////D////////////////////////////////

// turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database//
///////////////////////////////////////////////////////////////

// Hotel.findOneAndRemove({name:'Hotelicopter'}, (err, hotel)=>{
//     err ? console.log(err) : console.log('This is the deleted hotel:', hotel);
//     db.close()
//     })

// Hotel.findOneAndRemove({name:'Hilbert\'s Hotel'}, (err, hotel)=>{
//     err ? console.log(err) : console.log('This is the deleted hotel:', hotel);
//     db.close()
//     })

// Hotel.findOneAndRemove({name:'Overlook Hotel'}, (err, hotel)=>{
//     err ? console.log(err) : console.log('This is the deleted hotel:', hotel);
//     db.close()
//     })

////////////////////////U////////////////////////////////
// let query = {name: 'The Great Northern'}
// let update = {rating: 5}
// let options = {new: true}

// Hotel.findOneAndUpdate(query, update, options,(err, hotel)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log('This is the updated hotel', hotel);
//     }
//     db.close()
//     })


// Hotel.findOneAndUpdate({name: 'Motel Bambi'}, {vacancies: false}, {new: true},(err, hotel)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log('This is the updated hotel', hotel);
//     }
//     db.close()
//     })

    Hotel.findOneAndUpdate({location: 'White Bay, Oregon'}, {rating: 2}, {new: true},(err, hotel)=>{
        if (err){
          console.log(err);
        } else {
          console.log('This is the updated hotel', hotel);
        }
        db.close()
        })


// Vampire.insertMany(seedData,(err, vampires) => {
//     if (err){ console.log(err)}
//       console.log("added provided vampire data", vampires)
//       mongoose.connection.close();
//     });