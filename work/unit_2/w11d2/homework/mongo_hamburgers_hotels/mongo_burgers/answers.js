// create 5 burgers (at least 3 should be beef)
db.burger.insert(
    [
    {
      meat: 'beef',
      cheese: true,
      toppings: ['ketchup' ,'tomatoes' ,'pickles']
    },
    {
        meat: 'beef',
        cheese: true,
        toppings: ['mustard' ,'tomatoes' ,'pickles', 'ketchup'] 
    },
    {
        meat: 'veggie',
        cheese: false,
        toppings: ['mustard' ,'tomatoes' ,'pickles', 'ketchup'] 
    },
    {
        meat: 'veggie',
        cheese: false,
        toppings: ['mustard' ,'lettuce' , 'ketchup'] 
    },
        {meat: 'beef',
        cheese: false,
        toppings: ['mustard','ketchup'] 
    }, 
  ]  
)



// find all the burgers
db.burger.find()

// show just the meat of each burger
db.burger.find({},{meat: 1})


// show just the toppings of each burger
db.burger.find({},{toppings: 1}, {_id: 0})


// show everything but the cheese
db.burger.find({},{cheese: 0}, {_id: 0})


// find all the burgers with beef
db.burger.find({meat: 'beef'})


// find all the burgers that are not beef
db.burger.find({meat:{$ne:'beef'}})



// find the first burger with cheese
db.burger.findOne({cheese: true})



// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate({},{$set: {cheese: 'double cheese'}}, {multi: true})
// find the burger you updated to have double cheese
db.burger.find({cheese: 'double cheese'})


// find and update all the beef burgers to be 'veggie'
db.burger.update({},{$set: {meat: 'veggie'}}, {multi: true})


// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.remove(
    {
      meat: 'veggie'
    },
    { justOne: true}
  )


// drop the collection
//Expected Output
//true
db.burger.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'
db.burger.update({},{$set: {cheese: 'pumpkinspice'}}, {multi: true})


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
