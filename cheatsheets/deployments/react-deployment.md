# react-deployment

#### Set up environment variables for local vs production



> These environment variables will be defined for you on process.env. For example, having an environment variable named REACT_APP_NOT_SECRET_CODE will be exposed in your JS as process.env.REACT_APP_NOT_SECRET_CODE.
> > per react docs 

<br>

1.  create a file called `.env.development` (on same level as `package.json`)

- inside 
```javascript
REACT_APP_BACKEND_URL=your localhost for the backed no quotes, so like the line below
REACT_APP_BACKEND_URL=http://localhost:8000
```
2.  create a file called `.env.production` (on same level as `package.json`)

- inside 
```javascript
REACT_APP_BACKEND_URL=your production url  for the backed no quotes, so like the line below
REACT_APP_BACKEND_URL=stormy-weather4538.herokua.app.com
```

#### Update your routes

###### Example

```js
handleRegister = async (data) => {
    try {

      const registerCall = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }

      })

      const response = await registerCall.json()
      console.log(response, 'from the flask server on localhost:8000')

    } catch(err){
      console.log(err)
    }
  }


````


##### Use the buildpack for Heroku

```bash
heroku create $APP_NAME --buildpack mars/create-react-app
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```

- `$APP_NAME` is your app name, (So whatever you are calling your project, `Tacotitans`)



#### You're Done

- Now your app works in production and locally. Notice your environement variable is name the same this in each of the files you created, but yet they point to two different places!
