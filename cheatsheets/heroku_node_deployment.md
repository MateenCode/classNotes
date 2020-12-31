# Deploying a Node App to Heroku

*It might be helpful for one member to clone the organization's repo onto their computer to use only for heroku deployment. That way, if they decide to deploy their own version after the project is over, their personal copy (connected to their fork) is not connected to two heroku apps.*

The steps of deploying a Node app to heroku are a little bit different than deploying a Rails app to heroku, but there are also many similarities.

### First things first

- make sure your app has a root route that displays something (it can be a view or JSON - either will do)
- make sure your port and db are set properly:
	- `var port = process.env.PORT || 3000;` 
	- `var db = process.env.MONGODB_URI || 'mongodb://localhost/<app-name>';` *you may have called this variable `mongoUri` or something similar*
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
- `heroku addons:create mongolab` - this creates a production database for your app on mLab (unlike PostgreSQL, heroku does not host MongoDB, so you have to use mLab)
  - you can read about mLab with: `heroku addons:docs mongolab`
  - check it out with: `heroku addons:open mongolab`
  - see your `MONGODB_URI` with: `heroku config | grep MONGODB_URI` (some documentation says `MONGOLAB_URI` because mLab used to be MongoLab - it is no longer)
- `heroku open`

#### Other Commands You May Need

- `heroku logs`
- `heroku ps:scale web=1` - this is a one-time command to start up your app's dynos
- `heroku config:set NODE_ENV=production` - tells heroku that it's the production environment! may be redundant!
- set your API keys and other variables in the production environment - ex: `heroku config:set SOME_API_KEY=12345` (these variables should match the ones in your `.env` file, unless the API you're using gave you separate development keys and production keys)

### That's It!

Make sure you **DEPLOY EARLY & DEPLOY OFTEN!**
