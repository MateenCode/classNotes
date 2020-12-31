
---

Title: Science App - one to many <br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Rails 5 API, One-to-many relationships<br>

---

# &#x1F52D; &#x1F4D0; ONE TO MANY - Science App &#x1F914; &#x1F4A1; &#x1F4A1; &#x1F4A1;

Lets build a relationship between models.

We are going to make an app to visualize data for **temperatures** that _belong to_ **locations**.

Each **location** will _have many_ **temperatures**

---
### Lesson objectives:

* scaffold two independent models
* set up a one-to-many relationship between the models
* use nested routes 
* design the api endpoints

---

# SETUP

Create the top-level directory that will house both our rails api and the frontend.

![](https://i.imgur.com/4UaEhHG.png)

The app will have a **one-to-many** relationship between Locations and Temperatures. For each location we can log changes in the climate.

Create the Rails API:

```bash
$ rails new temperatures_app_api --api -d postgresql --skip-git
```

`cd temperatures_app_api` into the Rails directory and create the database


```bash
$ rails db:create
```

<br>
<hr>
11:10

<hr>

# Generate App

Scaffold **Locations** with `lat` and `lng` as decimals, and also a `name` column.

```bash
$ rails g scaffold location lat:decimal lng:decimal name
```

Scaffold **Temperatures** with `average_high_f`
and `average_low_f` as integers

```bash
$ rails g scaffold temperature average_high_f:integer average_low_f:integer
```

This has added boilerplate files and code to

* `db/migrate`
* `app/models`
* `config/routes.rb`
* `app/controllers`


Check that the **migration files** are correct.

![](https://i.imgur.com/2byNjnP.png)

![](https://i.imgur.com/V5Br2JY.png)

We have two fully-formed but independent resources: Locations and Temperatures. What we need to do next is **relate** them together.
<br>
<hr>

11:18

# Add foreign key

**One-to-many relationship**

Let's generate a migration to add the foreign key for our **one-to-many** relationship.

If **Locations** have many **Temperatures**, and

A **Temperature** belongs to a **Location** ...

> Question: Which model should have the foreign key?

> Answer: The foreign key always goes in the many. In this case there will be many temperatures. Each temperature will reference its single location via its foreign key.

**Locations table:**
![](https://i.imgur.com/iPDwBBA.png)

**Temperatures table:**
![](https://i.imgur.com/ZHZGdbq.png)

![](https://i.imgur.com/q3KqO1D.png)

Inside the migration we want to **add a column** for the foreign key:

![](https://i.imgur.com/7vMizUm.png)

We have three migrations pending, let's run them and generate our schema:

![](https://i.imgur.com/Dobz8xA.png)

schema.rb

![](https://i.imgur.com/dpVEaCI.png)

<br>
<hr>
11:20

# ActiveRecord Relations

models/location.rb

![](https://i.imgur.com/7DkIqsS.png)

models/temperature.rb

![](https://i.imgur.com/uEvVl9y.png)

Note Rails's plural / singular conventions.

<br>
<hr>

11:21

# Seed data

seeds.rb

```
Location.create([
  { lat: 40.7128, lng: 74.0059, name: 'New York City' },
  { lat: 78.2232, lng: 15.6267, name: 'LongYearByen' }
])

Temperature.create([
  { average_high_f: 39, average_low_f: 26, location_id: 1 },
  { average_high_f: 50, average_low_f: 40, location_id: 1 },
  { average_high_f: 80, average_low_f: 35, location_id: 1 },
  { average_high_f: 60, average_low_f: 44, location_id: 1 },
  { average_high_f: 71, average_low_f: 55, location_id: 1 },
  { average_high_f: 90, average_low_f: 55, location_id: 1 },
  { average_high_f: 30, average_low_f: 55, location_id: 1 },
  { average_high_f: 1, average_low_f: -20, location_id: 2 }
])
```

```bash
$ rails db:seed
```

<br>
<hr>

11:22

# Rails console

`rails console`

Active Record: see all temperatures belonging to a location

![](https://i.imgur.com/pPMz4CB.png)

Active Record: see a temperature's associated location

![](https://i.imgur.com/JpRLxlC.png)


<br>
<hr>

11:23

# &#x21A9; &#x1F690; &#x1F69B; ROUTES &#x1F6E3; &#x1F500; &#x21AA;

## Design considerations

What do you want your API to do?

**Locations**

* I don't want anyone to be able to add or edit locations on my API.

* I do want there to be a list of locations (index), and information for each location (show).

Therefore the only routes I need are **index** and **show** for Locations. In Express, this is easy, I just write them in and nothing more. In Rails, there is a procedure.

`config/routes.rb`

#### Limit location routes _only_ to index and show

![](https://i.imgur.com/9S1AqeH.png)

**Temperatures**

* I would like my API to send an index of temperature records associated with a location.

* I would like my user to add temperature data to the API for a given location.

All I need are **index** and **create** for Temperatures.

11:25



#### Limit temperature routes _only_ to index and create

![](https://i.imgur.com/2IKEv6T.png)

![](https://i.imgur.com/nkt52i8.png)

![](https://i.imgur.com/Y6rtmGY.png)

<br>
<hr>

11:27

# CONTROLLER ACTIONS

## Locations controller

We want only an **index** and a **show** for Locations. Let's remove everything else except the boilerplate `set_location` method, and edit the `before_action` call just to have `[:show]`

![](https://i.imgur.com/zhBsWwz.png)

**Run the server with `rails s` and check out the index and show routes in the browser**

## Locations with related temperatures

### Locations show

Currently, our locations routes deliver data for locations, but there is no temperature data included.

Why not have our Locations show route also deliver the Temperatures for that location? It would be convenient for a front-end developer to query:

```
locations/1
```

And receive json for the location that includes the temperatures for that location. We can choose what that data will look like, and we have some options.

![](https://i.imgur.com/TeyA6hx.png)

The frontend developer would get locations with `result.data.locations`, and temperatures with `result.data.temperatures`:

![](https://i.imgur.com/PfH0mbt.png)

**OR**

Wouldn't it be better if our JSON looked like this instead:

![](https://i.imgur.com/Vb5Xs6E.png)

The frontend developer would get locations with `result.data.locations` and climates with `result.data.locations.temperatures`.

We can format our data this way with the `.to_json` method that takes a hash as an argument that we can use to include the temperatures.

```ruby
render json: @location.to_json(include: :temperatures)
```

![](https://i.imgur.com/A5d3Bf4.png)

<br>

### Locations index

We can do the same for our Locations index if we want:

![](https://i.imgur.com/Jw4nmKk.png)

We get an array of locations, each with related temperatures data.

<br>
<hr>

## Temperatures controller

We have an **index** and a **create** in our routes. Let's remove everything else. Remove the `before_action` call and the `set_temperature` method too since we won't be needing them.

![](https://i.imgur.com/JVoAF85.png)

12:00

### Temperatures create

# BRAIN BUSTER

When we create a Temperature, 

* do we want a Temperature to exist without belonging to a Location?

* At which point do we associate a Temperature with a Location?

* Where would the Location even come from?

# FIRST PART OF THE ANSWER

We want the location to come in from a param. The user will decide which location when they make the request to the server.

A hypothetical request from the client-side would look like:

```javascript
$http({
	method: 'POST',
	url: '/locations/1/temperatures',
	data: this.formdata
})
```

The user wants a temperature added for location `1`.

In express this location id would come in as `req.params.id`.

How do we get it in rails? There is no params in rails routes for our temperatures#create action.

# SECOND PART OF THE ANSWER

### Nested routes

We will want to **nest** our create action inside the `locations` routes.

```ruby
Rails.application.routes.draw do
  resources :temperatures, only: [:index]
  resources :locations, only: [:index, :show] do
    resources :temperatures, only: [:create]
  end
end
```

When we `rails routes`, we will get this:

```bash
               Prefix Verb URI Pattern                                    Controller#Action
         temperatures GET  /temperatures(.:format)                        temperatures#index
location_temperatures POST /locations/:location_id/temperatures(.:format) temperatures#create
            locations GET  /locations(.:format)                           locations#index
             location GET  /locations/:id(.:format)                       locations#show
```

Our create action URI has changed to reflect that we are creating a Temperature only in relation to a Location. The param we received is **location_id**

We will want to add the incoming `location_id` to our new temperature record:

```ruby
@temperature.location_id = params[:location_id]
```

Remove `location: @temperature`, it's a pain that will try to force a redirect and will give us errors in Postman if it stays.

![](https://i.imgur.com/KYTWXYR.png)


![](https://i.imgur.com/0LhS7m4.png)

 * Here we create a new Temperature using `temperature_params`
 * on the new temperature, set the id column to the location_id from the url
 * If save is successful, send a 201
 * If unsuccessful send a 422

<br>

## TEST CREATE ROUTE WITH POSTMAN

![](https://i.imgur.com/AFrC64b.png)

 Add a new temperature record for location 2.

 `POST http://localhost:3000/locations/2/temperatures`

 Succesful Postman request:

 ![](https://i.imgur.com/h1j6Rlg.png)
 
 Note that the temperature was saved with a `location_id` as intended.

**Location 2 in the browser has the new temperature:**

![](https://i.imgur.com/HNtmSWz.png)

**Temperatures index in the browser has the new temperature:**

![](https://i.imgur.com/qt0d7p0.png)

### under the hood: params hash again

![](https://i.imgur.com/sKDIr4N.png)

This is like the `request object` in Express.

Our `req.body` is within `temperature`, and our `req.params` is within `location_id`. That's just the way Rails formats it. Body and params go into the **params** hash.

<br>
<hr>
License
<hr>
