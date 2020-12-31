//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/products.js')
const methodOverride = require('method-override');

// Middleware///

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

//mongoose connection//
mongoose.connect('mongodb://localhost:27017/mongostore', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
})

//index route
app.get('/products', (req, res)=> {
    Product.find({}, (err, allProduct)=> {
        res.render('Index', {products: allProduct})
    })
})

//new route
app.get('/products/new', (req,res) => {
    res.render('New')
})


//create route
app.post('/products/', (req, res) => {
    Product.create(req.body, (err, product)=> {
        //once created - respond to client
        res.redirect('/products')
    })
})

// seed data
// app.get('/seed', async (req, res) => {
//     const newProducts =
//     [
//     {
//         name: 'Men\'s Gucci Boutique print oversize T-shirt',
//         description: 'A combination of historical elements that speak to Gucci\'s heritage, like the Horsebit and the Web, the Boutique print has an intrinsic vintage feel. Introduced in the Spring Summer 2020 collection, the motif is presented on an oversize T-shirt, crafted from black cotton jersey.',
//         img: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1580236204/548334_XJCKY_1082_001_100_0000_Light-Mens-Gucci-Boutique-print-oversize-T-shirt.jpg',
//         price: 490,
//         qty: 0
//     }, {
//         name: 'Web striped oversize polo',
//         description: 'An archival Gucci code that is reinterpreted in new ways each season, the classic Web translates into the green and red striped pattern defining this white polo shirt. Designed with an oversize fit and crafted from cotton jersey for a vintage sportswear feel, the silhouette features the Gucci jacquard label, a recurring element of the latest collections.',
//         img: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1580234408/623242_XJCGQ_9060_001_100_0000_Light-Web-striped-oversize-polo.jpg',
//         price: 950,
//         qty: 2
//     }, {
//         name: 'Disney x Gucci oversize T-shirt',
//         description: 'The playful image of Mickey Mouse is displayed over the Gucci vintage logo and defines this white soft cotton T-shirt. In celebration of the Lunar New Year, Disney’s legendary character appears throughout Gucci’s ready-to-wear and accessories for the Cruise 2020 collection, displayed as colorful prints, embroidered patches or jacquard motifs.',
//         img: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1578424503/565806_XJB66_9756_001_100_0000_Light-Disney-x-Gucci-oversize-T-shirt.jpg',
//         price: 650,
//         qty: 5
//     }
//     ]

// try {
//     const seedItems = await Product.create(newProducts)
//     res.send(seedItems)
// } catch (err) {
//     res.send(err.message)
//     }
// })
// });

// show///

app.get('/products/:id', (req, res) => {
    // Find the specific document
    Product.findById(req.params.id, (err, foundProduct) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            product: foundProduct
        });
    });
});
//edit route////
app.get('/products/:id/edit', function(req, res){
    Product.findById(req.params.id, (err, foundProduct) => {
        // render the Show route and pass it the foundFruit
        res.render('Edit', {
            product: foundProduct
        });
    });
});

// /delete route 
app.delete('/products/:id', (req, res) => {
	Product.findByIdAndRemove(req.params.id, (err, data)=> {
        res.redirect('/products');
    }) //remove the item from the array
  //redirect back to index route
});

app.put('/products/:id/buy', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, {$inc: {qty: - 1}}, (err, updatedQty) => {
        res.redirect('/products');
    })
});

//put route
app.put('/products/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/products');
    })
});



// 	res.render(
// 		'Edit', //render views/edit.ejs
// 		{ //pass in an object that contains
// 			product: product[req.params.id], //the pokemon object
// 			index: req.params.id //... and its index in the array
// 		}
// 	);
// });





// listen
app.listen(3000, ()=>{
    console.log('listening');
});