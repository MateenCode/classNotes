# Deploying a Node App to Heroku

*It might be helpful for one member to clone the organization's repo onto their computer to use only for heroku deployment. That way, if they decide to deploy their own version after the project is over, their personal copy (connected to their fork) is not connected to two heroku apps.*


### First things first Creating out MongoDB Atlas Cluster
## What is MongoDB Atlas?
- "MongoDB Atlas is the global cloud database service for modern applications. Deploy fully managed MongoDB across AWS, Google Cloud, and Azure with best-in-class automation and proven practices that guarantee availability, scalability, and compliance with the most demanding data security and privacy standards." We will use mongodb atlas to store out data for our backend. *instead of pointing our production app to our local instances of mongodb*

Check out there website [MongoDB Atlas](https://www.mongodb.com/cloud/atlas#:~:text=MongoDB%20Atlas%20is%20the%20global,data%20security%20and%20privacy%20standards)

- Lets click on get started free and create an account
![Atlas sign up](https://developer.mongodb.com/images/heroku/atlas-signup.png)

- After registering, Atlas will prompt you to create an organization and project where you can deploy your cluster. You can name your organization after your team name and your project can be named whateveer you like to call your back end db.

- Next we will create our first cluster. We should be on a page similar to this. We should see FREE at the bottom
![Cluser creation Screen](https://developer.mongodb.com/images/heroku/create-cluster.png)

- Atlas requires clients to authenticate as MongoDB database users to access clusters, so let's create one real quick for your cluster. Make sure to make the role Atlas Admin+
![Atlas add user](https://developer.mongodb.com/images/heroku/add-database-user.gif)

- As you can see in the gif above, creating a database user is straightforward. First navigate to the "Database Access" section (located under "Security" in the left-hand navigation bar). Click on "Create a new Database User. A prompt will appear where you can choose this user's authentication method and database user privileges.

- Next we grant authorized IP addresses access to your cluster. To quickly get up and running, set your cluster to allow access from anywhere:
![Cluster Ip Adress](https://developer.mongodb.com/images/heroku/allow-access-anywhere.gif)


## Congratulations! You've just successfully set up your Atlas cluster!

### Now... 

- check if we have heroku installed, you can do this by typing `heroku --version` if you do not have it installed you can install globally by running `npm install -g heroku`
- log into heroku by running `heroku login` this will prompt you to open a web browser and log into heroku
- lets cd into our backend forlder and install dotenv by running `npm install dotenv`. On our server.js lets att `require('dotenv').config()` right after we declare our mongoose variable.

- make sure your app has a root route that displays something (it can be a view or JSON - either will do)
- make sure your port and db are set properly:
	- `const PORT = process.env.PORT || 8080;` 
	- `const dbURI =  process.env.MONGODB_URI || `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}` *you may have called this variable `mongoUri` or something similar*
	- last lets pass this dbURI to our db.connect like so
	` db.mongoose.connect(dbURI, { ... `
	
	
- create a `Procfile` **THIS FILE MUST BE NAMED EXACTLY**
- add one line to your `Procfile`:
  - `web: node server.js` (replace server.js with your entry point, if it's different)

### Now... 

- add
- commit
- push to GitHub

### Create Your Heroku App

- `heroku create <app-name>` - if you don't enter an app name, heroku will assign you one
- `heroku git:remote -a YOURHEROKUAPPNAME` (replace YOURHEROKUAPPNAME with your heroku app name)
- `git push heroku master`

#### Set a MONGODB_URI config var
- `heroku config:set MONGODB_URI="mongodb+srv://yourUsername:yourPassword@yourClusterName.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority"` - this creates a production env variable `MONGODB_URI` for our production deploys to use

Some important things to note here:

 - This command is all one line
 - Since the format of our connection string contains special characters, it is necessary to wrap it within quotes
 
 You could also set this on the heroku dashboard by going to seting and clicking on the Hidden Config Vars button
 ~[Set DBURI on heroku](https://developer.mongodb.com/images/heroku/config-var-dashboard.png)
 
 - Lets push our changes to heroku by running `git push heroku master`
 - Finally lets check if our app is running by running `heroku ps:scale web=1`
 - Now lets try to hit out newly deployed app in postman. If we hit out base url my url is `https://auth-backend-heroku.herokuapp.com/` we should get back out welcome message
 

#### Other Commands You May Need

- `heroku logs`
- `heroku ps:scale web=1` - this is a one-time command to start up your app's dynos
- `heroku config:set NODE_ENV=production` - tells heroku that it's the production environment! may be redundant!
- set your API keys and other variables in the production environment - ex: `heroku config:set SOME_API_KEY=12345` (these variables should match the ones in your `.env` file, unless the API you're using gave you separate development keys and production keys)

### That's It!

Make sure you **DEPLOY EARLY & DEPLOY OFTEN!**
[Mongodb Atlas Reference](https://developer.mongodb.com/how-to/use-atlas-on-heroku)
