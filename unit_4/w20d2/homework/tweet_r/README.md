---

Title: Tweet_r
Type: Homework
Creator: Thom Page 
Topics: Rails 5 API, routes, cURL & Postman

---

# TWEET_R

Real Cool Twitter API in the Sky

![](https://i.imgur.com/VGAxKX1.png)

<br/>

## Walkthrough
We will be making a new Rails app from scratch. The app will have a single model called `Tweet`, with routes and controllers.

The app will have full CRUD functionality through either cURL or Postman.

Rails is a framework that favors **convention** over **configuration**, so it is important to name your folders, files, and classes with the correct combination of upper or lowercase letters, and name them according to whether they are meant to be plural or singular. These conventions are mentioned throughout this walkthrough.


## LET THERE BE LIGHT

In your homework directory for tonight:

* Make a new Rails app called `tweeter_app_api`. Remember the `--api` and `--skip-git` flags. Set `postgresql` as the database.

```bash
rails new tweeter_app_api --api -d postgresql --skip-git
```

* Change into your project directory:

```bash
cd tweeter_app_api
```

* Create your database in your project directory

```bash
rails db:create
```

<hr>

&#x1F534; **Commit your work** 

<br>
The commit message should read: <br>
"Commit 1: Set up Rails with postgres".
<hr>

<br>
## MIGRATIONS

##### Let's walk through how to set up your database. This involves:

```   
	1. Creating the database    
	2. Setting up a migration   
	3. Filling in a schema  
	4. Running the migration
```  

A migration is a proposed change to the database. You set up a migration, enter your changes, then run the migration to lock in the changes. Rails then keeps a record of all migrations so that you can see the full history changes to your database schema.

#### Make a new migration    
Let's set up a migration. In terminal, inside your project folder, type:

```
rails g migration CreateTweets
```  

The `g` is short for generate. `Create` is a Rails keyword helper for making migration files for your database. `Tweets` must be *plural* and have a *capital T*. There is no space between Create and Tweets. It's `CreateTweets`.

In your text editor project folder, look in the `db` folder. The migration command created another folder `migrate`, and you should see a migration file in there that looks like a bunch of numbers:

![](http://i.imgur.com/RarDqMv.png)

Click on the migration file, and you should see some code like this:

![](http://i.imgur.com/V41ANnV.png)


In here, you will add your model's columns and datatypes, as if making  a `schema`.

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 2: Generated first migration".
<hr>

<br><br>

#### Fill out the migration file

The migration file will contain the proposed changes to the database schema. Let's fill it out:

A tweet should have an **author**, a **title**, and **content**:

```ruby
class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
	    t.string   :title
	    t.text     :content
	    t.string   :author
    end
  end
end
```

![](http://i.imgur.com/Ou0ZkQD.png)

You can see that we are going to set the columns in our database to **title**, **content**, and **author**, and they will all take input of text/string type.


#### Run the migration

In terminal, in your project folder as usual,
enter

```bash
rails db:migrate
```

If all goes according to plan, if you're using Rails 5.x you should get something like this in your terminal:


```bash
== 20160719165917 CreateTweets: migrating =====================================
-- create_table(:tweets)
   -> 0.0317s
== 20160719165917 CreateTweets: migrated (0.0318s) ============================
```


What does the migration do? It adds the schema to our database, and also makes us a `schema.rb` file in the db folder. We never touch the schema.rb file.

**IMPORTANT: Once a migration has run, you never edit your migration or schema file. The migration files are there forever as records of all your migrations. To edit a migration, you make a new migration to act on the previous one. To alter your schema, you also make a new migration.**


- Test that your db has been schema-fied by going into the console and typing `rails dbconsole`. Perform a `SELECT * FROM tweets;` to test that your db has the correct columns, then quit the dbconsole with `\q`.

![](http://i.imgur.com/8LOEOym.png)


```
CONGRATULATIONS. You have successfully created and run a migration.
```

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 3: Successfully run the Tweets migration".
<hr>

<br><br>

## MODELS

1. **Create a model.** In the app/models folder (not in the concerns folder), create a file called `tweet.rb`. It has to be **singular lower case** or it will break.

2. Inside `tweet.rb` make a class called Tweet **singular, uppcase T** that inherits from ApplicationRecord.

```ruby
class Tweet < ApplicationRecord
end
```

That's it!

#### Seed the database

- Seed your database with data for your models: two Tweet entries. In the `db` folder there is a file called `seeds.rb` wherein you can make seeds like the following:

```ruby
Tweet.create({
  title: "Just found this",
  content: "the square of the hypotenuse is equal to the sum of the squares of the other two sides",
  author: "Pythagoras570"
})

Tweet.create({
  title: "I'm walkin' here",
  content: "Hey, I'm walkin' here!",
  author: "Nicky62"
})
```

![](http://i.imgur.com/2PKTRO1.png)

- If you are feeling saucy, you can try to install and use [Faker](https://github.com/stympy/faker) to generate a bunch of tweets (look over the notes from today).

- To import your seed into your database, run `rails db:seed` in terminal.

- Test your model by opening up Rails console. Rails console is where you can make Active Record queries. Open it with `rails console` or just `rails c`. Query all of your tweets with `Tweet.all`. Query the tweet with an id of 1 with `Tweet.find(1)`. Quit rails console with `exit`.


<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 4: Created model and seeded db".
<hr>

<br><br>

## ROUTES
1. In config/routes.rb add `resources :tweets`. This will automatically establish your RESTful routes for the tweets resource.

![](https://i.imgur.com/7fVDh8C.png)

Test your routes by typing `rails routes` in the console. You should get a table with all of your paths laid out for each route:

```
      Prefix Verb   URI Pattern               Controller#Action
     tweets GET    /tweets(.:format)          tweets#index
           POST   /tweets(.:format)          tweets#create
      tweet GET    /tweets/:id(.:format)      tweets#show
           PATCH  /tweets/:id(.:format)      tweets#update
           PUT    /tweets/:id(.:format)      tweets#update
           DELETE /tweets/:id(.:format)      tweets#destroy
```


## CONTROLLER
1. In your app/controllers folder, manually create a new file
called `tweets_controller.rb`. Don't put it into the concerns folder. **The word tweets must be lowercase and plural or the app will break.**

2. Inside `tweets_controller.rb` make a new class called `TweetsController` that inherits from `ApplicationController`. **The word Tweets here must be plural with an uppercase T, and Controller must have an uppercase C**

3. Add the methods that correspond to your restful routes you'll be using for now: `index` and `show`.

![](http://i.imgur.com/UvmitFh.png)


#### Test run
Now that we've set up a whole hunk-a stuff, let's now try running your app to see if it will break. Run the server with `rails s`. The `s` is short for server. It won't do anything yet, but you should get it to where it won't break. Check if you get the Rails splash page at `localhost:3000`

![](http://i.imgur.com/WzD0Xiv.png)

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 5: Added routes and controller".
<hr>

<br><br>

## Index

The index route in your controller is a GET route and wants to send information to the page for a user to see or for a frontend app to consume. For the index route, in your controller file:

```ruby
  def index
  end
```

What does the index route do?

`Tweet.all` queries your model for every tweet entry and sends back an array. We should send this out!

We should also send a status code of 200.

Render it as json with `render json:`

(Look back at today's lesson for a refresher on how to do that)

Send every Tweet to the endpoint!

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 6: All Tweets are visible at the index route".
<hr>

<br><br>

## Show

In your controller file, add in an Active Record query for a single Tweet:

```ruby
  def show
  end
```

What does a show route do? It will `.find()` a particular tweet according to the id stored in `params[:id]`

We should send the tweet as json with a status code.

Answer:

```ruby
  def show
    tweet = Tweet.find(params[:id])
    render(json: { tweet: tweet })
  end
```

Check `rails routes` to see the URI, and go to it in the browser.

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 7: Tweet show".
<hr>

<br>


## POST / CREATE DATA

So far we have made an `index` and a `show` page with which we can **read** data from the database.
Let's make it so we can **create** data too. For this, we will need a `create` route.

### private method

Remember: Your `create` route must use strong params, that is, your `:title`, `:content`, and `:author` params are 'guarded' within a private method.

Make your own private method below your routes. The method should allow information only for `:tweet`, and only the parameters relevant to tweets. Here is an example that you will have to modify:

```ruby
private

def item_params
  params.require(:item).permit(:name, :price)
end
```

### 'Create' method example:

Here is an example, not using tweets but using songs. As you go ahead and adjust this example, write down what each line is doing.

```ruby
  def create
    song = Song.new(song_params)

    if song.save
      render json: { song: song }
    else
      render(status: 422, json: { song: song, errors: song.errors })
    end
  end
```

* Use Postman or cURL to send data to your create route.

Remember, in Rails the data you want to send is formatted like this:

```ruby
Key: model[key]
=
Value: value
```

So for a tweet title it would look like:

```bash
tweet[title]="Crentist"
```

In a full cURL expression:

```bash
curl -X POST -d "tweet[title]=Crentist" -d "tweet[author]=Dwight" -d tweet[content]="My dentist's name is Crentist, maybe that's why he became a dentist" localhost:3000/songs
```

* In Postman:

![](https://i.imgur.com/zlpim0F.png)

* Ensure the `create` route sends data to the database.


<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 8: Can POST new Tweets".
<hr>

<br>

## UPDATE

```ruby
def update
end
```

What does the update route do?

First, it will `.find()` a Tweet according to the `params[:id]` and save that to a variable.

Then, it will `.update()` that variable with the allowed parameters from the previously made private method.

Then, it will render the json of that tweet along with a status code of 200.

* Test that it works with either cURL or Postman.

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 9: Tweets update".
<hr>

<br>
<hr>

## DELETE

```ruby
def destroy
end
```

What does the delete route do?

First, it will `.destroy()` a tweet according to the the id stored in `params[:id]`

Then, it will render a status code of 204.

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 10: Tweets delete".
<hr>

<br>

## MAKE A CONTROLLER WITHOUT DATA

- Make an extra endpoints for your Rails app. How would you make a `meta` endpoint?

- Add routing in your `routes.rb`, to tell Rails where to look when certain routes are hit:

```ruby
  get '/meta', to: 'meta#about'
```

- In this case, we're telling Rails to look in a controller called 'meta', and further to look at the action called `about`. Make a controller, call it `meta_controller` to handle these endpoints. **This controller requires no models, migrations, etc.** It's just a controller.

- The actions in the controller correspond to the endpoints themselves. `def about` was defined in `routes.rb` by you.

Render any old json you want!

Example:

```ruby
render json: { author: "President Kool-chair", last_updated: "10 Jan 2017" }
```


<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 11: Added an extra controller".
<hr>

<br>
<hr>

## HUNGRY FOR MORE?

### VALIDATIONS

Look into Rails [ActiveRecord validations](http://guides.rubyonrails.org/active_record_validations.html). There are many of them.

Add validations for
* presence
* uniqueness

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 12: Added validations".
<hr>

<br>
<hr>

### DEFAULT DATA

Want your columns to have data in them by default?

For that you'll have to run a migration.

```bash
rails g migration AddDefaultValueToColumn
```

Try the change_column_default method

```ruby
change_column_default :table, :column, 'default value'
```

Note: defaults will not be added to existing data entries. New ones will have to be added.

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 13: Added default data".
<hr>

<br>
<hr>

### Another Model

Add a second model for Replies. A Tweet has many replies, a reply belongs to a tweet. You may need do research how to do this (one-to-many relationship).

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 14: Added a second model".
<hr>

<br>
<hr>

### Show the Replies

Adjust the show page so that a Tweet *show* also displays the json of the Replies that belong to it. CLUE:

```ruby

render json: { tweet: Tweet.find(SOMENUMBER), replies: Tweet.find(SOMENUMBER).replies }

```

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 15: The show pages shows the tweets and their replies".
<hr>


## Submission Guidelines
&#10004; Submit your project via [this google form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform).


<hr>

## Hungry for Even More (Sass)?
- Head inside the [Brook Lyn](Brook_Lyn) folder that is inside this `homework` folder for a small mockup. You can use this as a chance to practice your Sass skills.
