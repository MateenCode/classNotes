# &#x26F4; DEPLOY YOUR RAILS API &#x1F6F0; &#x1F4E1;

## Set a Root

Do this in your Rails api project directory (This example is from a "Noticeboard" API).

Make a controller with a method that you can use as the root of your project:

```bash
rails generate controller welcome
```

This will make `app/controllers/welcome_controller.rb`

![](https://i.imgur.com/obbUkh8.png)

If you don't set a root, Heroku will get confused. Let's make it so our app will root to the index method of the welcome controller:

In `config/routes.rb`

```
    root 'welcome#index'
```

![](https://i.imgur.com/bg7F7rz.png)

In the welcome controller file, let's just send some stuff from the index method:

```
  def index
    render json: { status: 200, message: "Noticeboard API" }
  end
```

![](https://i.imgur.com/14nBStv.png)


**Open your Rails API in the browser to check that the root works**

* Init, Add, commit and push your welcome and root stuff to Github in preparation for pushing to Heroku

* run `heroku buildpacks:set heroku/ruby`

<br>

## Set up Heroku and Push

In the directory of your own desktop copy of the Rails noticeboard api, create and deploy a heroku app with the following commands:

* `heroku create <name_of_app>`

Example from a books app:

![](https://i.imgur.com/hf6oZlz.png)

* `git push heroku master`

If it works, you should be able to open your live API with

* `heroku open`

![](https://i.imgur.com/h83oezN.png)

## Production database

Set up your database:

* `heroku run rails db:migrate`

![](https://i.imgur.com/oxx83gd.png)

If you have seed data:

* `heroku run rails db:seed`

You can run rails on heroku commands with `heroku run <rails command>`

* `heroku run rails c`

![](https://i.imgur.com/0Coz9K6.png)

Note that this is your **production database**, you should not run any commands to drop or reset. `heroku run rails db:reset` will raise an error.





