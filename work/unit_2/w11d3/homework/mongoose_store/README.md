![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Mongoose Store

Make a product inventory manager with full CRUD using Mongoose.

#### Learning Objectives

- Full CRUD app in Express with Mongoose

#### Prerequisites

- JavaScript 
- JSX / Node 
- Mongo / Mongoose 

---

## Expected Functionality (MVP)

### Index Page 

1. Your app should have an index page where
	- all the products are displayed
	- the images link to the product's show page
	- and there should be a link to add a new product.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/CRJd6Hg.png">
</details>

### Show Page 

1. Your show page should display a product with
	- a link back to the products
	- a link to edit the product (goes to the edit page)
	- a delete button that deletes
	- and the number of items remaining in stock.
	
2. There should be a BUY button. The BUY button will reduce the number of items in stock by 1 each time it's pressed.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/sp9DGtd.png">
</details>

3. If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in jsx).

4. On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.

5. The BUY button should also **not** be rendered if the quantity of the item is zero.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/5FZKyly.png">
</details>

### Edit & New Page

1. These views should render forms and submit to the appropriate routes.

### Redirects 

1. The create route should redirect to the index

1. The delete route should redirect to the index

1. The update route will redirect back to the product's show page.

1. For the Hungry for more? the BUY button will go to a route that redirects back to the product's show page

---

## Getting Started

1. Inside the `mongoose_store` folder, set up Express with MVC architecture with the appropriate folders for models, views, and controllers.

1. You will need the seven RESTful routes. You can begin with your data-layer and test that everything works with cURL or Postman. Don't worry about what the BUY button does or where it goes just yet. Just set up your regular RESTful stuff.

1. You will need to make a Mongoose Schema in a products.js file for your products. The schema should have:

	```js
	  name: String,
	  description: String,
	  img: String,
	  price: Number,
	  qty: Number
	```
1. Set up validations for the price and qty (can't be less than zero) and make the name a required field.

1. Create a model and export it.

1. Make sure you connect to your Mongo server in `server.js`

1. Make sure your controller can access your model:

	`const Product = require('./models/products');`

1. _NOTE:_ For testing purposes, especially for having quick access to those wacky Mongo ids, maybe think about having a route /json that res.sends an index of all the data in json format so that you can copy/paste ids into your url bar or cURL or what-have-you.

## The Buy Button 

After you have your full CRUD app working, it's time to break/extend RESTful conventions according to your own lights. The app needs a buy button. It's up to you to make your own routes to facilitate it.

As mentioned in the expected functionality, if a product is in stock (the qty is above 0), the show page should have a BUY button. If the product is out of stock, it should not have this button.

When the BUY button is pressed, it will make a request to update the qty of the product (decrease it by 1).

**Things to think about:**

- What route should the BUY request go to? Maybe it could go to its own route.
- Since it updates the product, should it go to a PUT route?
- Do you need to send any data through to the route? You will need the id, but that is likely all you'll need.
- Can you edit the qty value just in the route? product.qty -= 1?
- Will you have to product.save() if you do this?

## Seed Data 

You can use these seeds to get some starting data if you so choose.

_HANDY HINT:_ Make a route in your products controller /seed/newproducts (you can do that by pasting the code below into your controller), and to seed your database, just visit the route once in your browser.

```js
app.get('/seed', async (req, res) => {
  const newProducts =
    [
      {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 5,
        qty: 99
      }, {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 25,
        qty: 0
      }, {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1
      }
    ]

  try {
    const seedItems = await Product.create(newProducts)
    res.send(seedItems)
  } catch (err) {
    res.send(err.message)
  }
})
```

## Commits 

The order in which you tackle this homework is up to you, but keep in mind that because this is a two-night homework, you haven't learned everything yet! Start with what you know and whenever you get to any of the following milestones, commit your work! 

<details><summary><strong>Milestones to Commit</strong></summary>

<hr>

**Index - Commit your work** <br>
The commit message should read: <br>
"Index working"
<hr>

<hr>

**Show - Commit your work** <br>
The commit message should read: <br>
"Show working"
<hr>

<hr>

**Create route - Commit your work** <br>
The commit message should read: <br>
"Create working"

<hr>

<hr>

**Update - Commit your work** <br>
The commit message should read: <br>
"Update working".
<hr>

<hr>

**Delete - Commit your work** <br>
The commit message should read: <br>
"Delete Working".
<hr>

<hr>


<hr>

**Buy - Commit your work** <br>
The commit message should read: <br>
"Buy Button Working"
<hr>

<hr>

**CSS - Commit your work** <br>
The commit message should read: <br>
"App has style"
<hr>

</details>

## Style Inspiration 

See some previous student's examples for some inspiration for your store. Great homework can make great portfolio pieces too!

<details><summary><strong>Example 1</strong></summary>
<img src="https://user-images.githubusercontent.com/17508245/28861521-1d513946-7716-11e7-8bed-fe1194f73a2d.png">
</details>

<details><summary><strong>Example 2</strong></summary>
<img src="https://user-images.githubusercontent.com/29133264/28857343-c3c537e6-76fd-11e7-8104-5ea76de35113.png">
</details>

## Hungry for More? 

### 2nd Model 

1. Make another model, this time for a User. The User will have:
	```js
	username: String,
	shopping_cart: Array
	```
1. On the product show page, when a user presses BUY, the product will be added to the User's shopping cart.

1. View the shopping cart on the User's show page. (The User will need only a show page and none of the other routes).

---

## Deliverables

A store app that meets all the expected functionality outlined at the beginning of this markdown. 

## Technical Requirements

1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

This assignment spans over two class days.

You will be required to submit this particular assignment just once before class next Tuesday (May 5th). We suggest that you try not to save it all for next Tuesday night and at least try to do the following:

**On the first night this homework is assigned (saturday), you should work on having:**
- The app setup, the database connected, the index and show page and new/create page done

**On the second night this homework is assigned (wednesday), you should continue working on it so that the app:**
- Will have delete, update, buy button and some css added.


Submit the Github link to your homework folder for this week using this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform)


---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
