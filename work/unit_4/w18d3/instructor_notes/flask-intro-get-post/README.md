## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) 

<h1>Intro to Flask</h1>

## Learning Objectives:
*After this lesson, you will be able to:*

- Set up a basic Flask app
- Set up a model
- Set up get & Post route


---

## Discussion: Commonalities


What do you think these websites have in common?

- [Pinterest](http://www.pinterest.com)
- [Instagram](http://www.instagram.com)
- [LinkedIn](http://linkedin.com/)

They're each:

- High on user interactivity.
- Handling a large server load.

What else?

## They All Use **Flask**

![](https://qph.fs.quoracdn.net/main-qimg-cd83cf9ee7ad51b8af4d0c4d5220f534.webp)

Some quick notes about Flask:

- It's a Python micro web framework.
- It can create and write the entire back-end in Python!
- It can do small tasks (e.g., create a microblog or stand up a simple API).
- It can do complex tasks (e.g., Pinterest's API or create a Twitter clone).


<aside class="notes">

#### Setup virtualenv

Let's also build a virtual environment. Virtual environments allow us to have multiple versions of Python on the same system so we can have different versions of both Python and the packages we are using on our computers.

- inside flask-intro-dog-app folder

```bash
virtualenv .env -p python3
source .env/bin/activate
```

#### Dependencies

```bash
pip3 install flask-bcrypt peewee flask psycopg2 flask_login flask_cors
pip3 freeze > requirements.txt
```

We'll run the Flask app like any other app.

- We need to install Flask!
 Let's also install some dependencies and save them. Flask doesn't utilize a `package.json`. Instead, we just use a text file that lists all of our dependencies. Pip freeze saves the dependencies in our `virtualenv` to that file. 
 
 
 If you are downloading and running a Python project, you can usually install its dependencies with `pip3 install -r requirements.txt`.


### Setup basic server 

```python
from flask import Flask

DEBUG = True
PORT = 8000

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

# The default URL ends in / ("my-website.com/").
@app.route('/')
def index():
    return 'hi'

# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
```

Run the app like normal:

`python app.py`

Go to:

`http://localhost:8000/`

You made a web app!


Let's change the string:

```python
def index():
  # The "return" determines what's displayed.
  return 'Hello, World!'
```


It's just Python — we can write any code.

- But `return` essentially just takes strings.

```python
def index():
  my_list = ["Hey", "check", "this", "out"]
  return my_list[0] # Works!
```

Conversely:

```python
def index():
  my_list = ["Hey", "check", "this", "out"]
  return my_list # WON'T WORK
```

### Json

```python
from flask import Flask, render_template, jsonify

@app.route('/json')
def dog():
    return jsonify(name="Frankie", age=8)
```


### variables

```python
@app.route('/sayhi/<username>') # When someone goes here...
def hello(username): # Do this.
    return "Hello {}".format(username)
```

### Setting up a Model

##### Peewee the ORM

[Peewee](https://github.com/coleifer/peewee) - *Peewee is a simple and small ORM. It has few (but expressive) concepts, making it easy to learn and intuitive to use.* from the docs

This is the ORM (Object-relational mapping) we will use to hook up to our sql databases and communicate with them. 


```python
# import * means import everything from peewee

from peewee import *

import datetime

DATABASE = PostgresqlDatabase('dogs_app', host='localhost', port=5432)

class Dog(Model):
    name = CharField()
    owner = CharField()
    bread = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE

def Initialize():
    DATABASE.connect()
    DATABASE.create_tables([Dog], safe=True)
    print("TABLES Create")
    DATABASE.close()

```

- We are using *sqlite* as our database here, this is really great for development purposes to get up and running real quick, later on we will connect to our production database postgres.

- *class Meta* - When Python creates a class object, special construction instructions can be provided. This is done through the Meta class. Since the database isn't part of the class itself, this class constructor information is provided through the special Meta class.

- The initialize method will set up our datatables, while we open and close the connection to the database 

- Now lets go to our app


```python
from flask import Flask, g

import models

DEBUG = True
PORT = 8000

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response


# The default URL ends in / ("my-website.com/").
@app.route('/')
def index():
    return 'hi'

# Run the app when the program starts!
if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
```

- the `g` stands for global and we are setting up a global access to our database throughout the app. 

- when developing a web application, it’s common to open a connection when a request starts, and close it when the response is returned. You should always manage your connections explicitly. For instance, if you are using a connection pool, connections will only be recycled correctly if you call connect() and close().

We will tell flask that during the request/response cycle we need to create a connection to the database. Flask provides some useful decorators to make this easy

```python
# Connects db connect
@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()
    
# Closes db connect
@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db = models.DATABASE
    g.db.close()
    return response
 ```
 
 ##### Time to test it
 
- start the app - `python app.py`
 
- *What should you see?*

- in the console you should see `TABLES Created`

- this is coming from the initialize method which is in your models folder that you are invoking when you start the app

- *the method definition*
```python
def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Dog], safe=True)
    print("TABLES Created")
    DATABASE.close()

```

- *invoking the method*

```python
if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
```



### Setting up our controller aka A Resource

In Flask instead of controllers we will use resources!

*Whats a resource?* - The main building block provided by Flask-RESTful are resources, which gives us access our HTTP methods just by defining methods on your resource. A basic crud source looks like above.  

*BluePrints* - The basic concept of blueprints is that they record operations to execute when registered on an application. Flask associates view functions with blueprints when dispatching requests and generating URLs from one endpoint to another.

### resources 

```bash
mkdir resources
touch resources/__init__.py
touch resources/dogs.py
```

- `__init__.py`- Files named __init__.py are used to mark directories on disk as Python package directories. You can check out the docs [here](https://docs.python.org/3/reference/import.html#regular-packages) if you would like read more about this

- Inside dogs.py

```python
import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict


# first argument is blueprints name
# second argument is it's import_name
# The third argument is the url_prefix so we don't have
# to prefix all our apis with /api/v1
dogs = Blueprint('dogs', 'dog')


```

- *Whats a resource?* - The main building block provided by Flask-RESTful are resources, which gives us access our HTTP methods just by defining methods on your resource. A basic crud source looks like above.  

- *jsonify* - turning our python dictionaries into json.  

- *request* - The date from the clients request is sent to the global [request object](https://www.tutorialspoint.com/flask/flask_request_object.htm), we can use this object to get json or access form data.

-  *BluePrints* - The basic concept of blueprints is that they record operations to execute when registered on an application. Flask associates view functions with blueprints when dispatching requests and generating URLs from one endpoint to another.

- `dogs = Blueprint('dogs', 'user')` says treat this as a blueprint in the application (module) that we can attach to our flask app the will define a set of view functions.  


- In `app.py`

```python
from flask import Flask, g
from flask_cors import CORS

from resources.dogs import dogs # adding this line

DEBUG = True
PORT = 8000

app = Flask(__name__)

@app.before_request
def before_request():
    """Connect to the database before each request"""
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request"""
    g.db.close()
    return response


CORS(dogs, origins=['http://localhost:3000'], supports_credentials=True) # adding this line


app.register_blueprint(dogs, url_prefix='/api/v1/dogs') # adding this line

```

- `app.register_blueprint(api, url_prefix='/api/v1/dogs')` - sets up the directions for handling the routes for the api


- `CORS(dogs, origins=['http://localhost:3000'], supports_credentials=True, url_prefix='/api/v1/dogs')` - This line sets up our [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), which will allow us to allow an app that hosted on a different origin to communicate with each other. (For example, www.jim.com can talk to www.reuben.com/api/v1/dogs, and of course when I say talk, I mean send HTTP requests)

- ` supports_credentials=True` - when we set this value to true, we will allow cookies to be sent to the server, for example we can send a session cookie to our server.  

- `url_prefix='/api/v1/dogs'` - this is similiar to `app.use('/photos', photoController)` in express, here we are setting up the prefix for every route in in our `dogs` resource, typically for api's you will prefix your resource with a version number (`v1`), because there will most likely be new versions of you api, It's good practice to do this!

### Let's set up the GET and POST route


##### Get (index route)

```python
@dog.route('/', methods=["GET"])
def get_all_dogs():
    ## find the dogs and change each one to a dictionary into a new array
    try:
        dogs = [model_to_dict(dog) for dog in models.Dog.select()]
        print(dogs)
        return jsonify(data=dogs, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})
```


- Here we are defining out route, as a "GET" route

- We are using *peewee's* `.select()` method to find all the dogs, on our Dog Model.  

- `model_to_dict(dog)` - is a function that will change our Model object (dog) to a Dictionary class, - We have to do this because we cannot `jsonify` something from a "Model" class, so in order to respond to the client we must change our datatype from a Model Class to a Dictionary Class instance.  


##### Post Route (create) 

```python
@dog.route('/', methods=["POST"])
def create_dogs():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    print(type(payload), 'payload')
    dog = models.Dog.create(**payload)
    ## see the object
    print(dog.__dict__)
    ## Look at all the methods
    print(dir(dog))
    # Change the model to a dict
    print(model_to_dict(dog), 'model to dict')
    dog_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})
```

- Here we are using *peewee's* create method on our model object to create an entry into our database.

- `payload = request.get_json()` - in this line we are using the global `request` object we just talked about in the above, to "get_json" from the request, so that is the object that we will send over from the client!

-  What doess `**payload` mean?

- It's what is called a spread operator, basically what that means is we can take the properties of an object and "spread them out into the method call. So for example, if we sent over an object like this. 

```js
{
	"name": "Hailey",
	"owner": "Jim",
	"breed": "newfie"
}
```

- we can spread the objects properties out like this in our method,


```python
 dog = models.Dog.create(name=payload['owner'], owner=payload["owner"], breed=payload["breed"])
```


#### Lets test the routes

![postman](https://imgur.com/iQANiZG) (click the link to see the image)

- Make sure you pay attention to all the things in the image

1.  You must select json/application json and raw, in the body of your post request. 
2.  You must have a trailing `/` in the route because of the flasks routing system, without it will try to redirect you to a "GET" route, which you don't want.  



