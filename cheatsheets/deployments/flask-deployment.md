# flask-deployment

**PLEASE MAKE SURE YOUR APP WORKS LOCALLY** 

0. Maybe you want to make a branch to save all your local configuration, git checkout -b local-setup, because I'm not showing you how to configure it to work locally and on heroku at the same time, you can figure that out on your own, there is an idea further down that will allow you to figure out if you are on heroku or not.  


1. Make sure you are in your environment and on the master branch
2. `pip freeze > requirements.txt`
3. `pip install -r requirements.txt` to make sure everything is installed
4.  add a Procfile `touch Procfile` , this is a file of instructions for heroku on how to run the app
5.  `pip install gunicorn` - [gunicorn](https://gunicorn.org/) is our webserver
6.  `pip freeze > requirements.txt`
7.  add `web: gunicorn app:app` to your Procfile to tell heroku how to run the app

*"web is used by Heroku to start a web server for the application. The app:app specifies the module and application name. In our application we have the app module and our flask application is also called app. If your’s are different you can change them."

8. Deploy - `heroku create kbucket-api-heroku`
9.  In `models.py`, we are going to use the [playhouse](http://docs.peewee-orm.com/en/latest/peewee/playhouse.html) extension to connect to postgres on heroku.  

```python
import os

from playhouse.db_url import connect

DATABASE = connect(os.environ.get('DATABASE_URL'))
````

-  python`os.environ.get('DATABASE_URL')` is like `process.env.DATABASE_URL` in node, the DATABASE_URL will be defined when ywe add the postgres provision on heroku 

10.  Set an environment variable on heroku to let us know we are in the heroku environment in our code `heroku config:set ON_HEROKU=1` , note you can do the same if you go to heroku and go to the `Config Vars` and just add it you will see `ON_HEROKU` there now with a value of `1` which is basically just a True of False for us.  

11. now lets update our code in app.py 
11a.  Update your cors with your react app address if need be `CORS(dogs_api, origins=["http://localhost:3000", "http://reactaddress.com"], supports_credentials=True)`

11b.  add this code at the bottom of your file (`app.py`) above the `if __name__ == '__main__`

```python
import os
## import os at the top of your file 

if 'ON_HEROKU' in os.environ:
    print('hitting ')
    models.initialize()
```

*This is checking to see if we are in the `Heroku` environment, if we are, build our tables. Note you can use this variable anywhere to check if you are on Heroku, you can figure out how to adapt your code to work locally and on heroku.*  

12. Go to heroku and go to your app, and the to the RESOURCES tab and in add-ons add Heroku Postgres
13.  You're done.
14.  From command line 
15.  `git add .`
16.  `git commit -m "prepared for heroku"
17.  `git push heroku master`
18.  `heroku open`
19. `heroku logs` to see errors 


