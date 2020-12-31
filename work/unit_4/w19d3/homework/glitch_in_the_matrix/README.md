![ga](../../../../ga_cog.png)

---

Title: Glitch in the Matrix <br>
Type: 4 hour<br>
Creator: Thom Page <br>
Topics: Rails Migrations and ActiveRecord

---

# GLITCH IN THE MATRIX

![](https://i.imgur.com/90wg6lD.png)

## Initialize a new Rails project

* In the `homework` folder for today

* Use `rails new` to make a new Rails project called `matrix_app_api`

* Do it now!

**&#x1F47E; Glitch?**

* You forgot to use the `--skip-git` flag? If you forgot that then it creates a git project in the `matrix_app_api` directory and then your commits won't work normally.

**Solution:** Change into the directory: `cd matrix_app_api` and remove the hidden git directory: `rm -rf .git`

**&#x1F47E; Glitch?**

* You forgot to use the `--api` flag? Can't really fix that.

**Solution:** Don't worry about it for now, just keep going!

**&#x1F47E; Glitch?**

* You forgot to make postgres the db with the `-d` flag? If you forget this, `sqlite` will be the default, and we don't want that. You could fix this by installing the `pg` gem and altering the `database.yml` file, but since you just made the app it would be easier to start over.

**Solution:** Do `rails new` again, and this time use postgresql.

<hr>

&#x1F534; **Commit your work**

<br>
The commit message should read: <br>
"Commit 1: Initialized Rails server".
<hr>
<br>

## Run the Rails server

We haven't done this yet, but in Terminal, run the Rails server with `rails s`. The output in Terminal should look like:

![](https://i.imgur.com/Fx3Yue5.png)

In your browser, go to `localhost:3000`

You should see an error page:

If you remembered to set up with the `--api` flag:

![](https://i.imgur.com/TLr8Llh.png)

If you forgot the `--api` flag:

![](https://i.imgur.com/x9ZTg7B.png)

**&#x1F47E; Glitch!**

* The database does not exist

**Solution:** Quit the server with `ctrl + c`. Make the database with `rails db:create`

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 2: Created the db".
<hr>
<br>

## Run migrations

Run your migrations with `rails db:migrate`.

**&#x1F47E; Glitch!**

* Nothing happens. That's because we did not first `generate` any migrations.

**Solution:** Generate migrations (instructions below)

<br>
<hr>

## Generate migrations

We are going to make a **table** for the database. The table will eventually hold information about characters from the Matrix movies.

Generate a migration to make the table:

```
rails g migration CreateCharacter
```

Even though Character is singular, go ahead and press enter to generate the migration.

**&#x1F47E; Glitch!**

* I realized that I don't want a table called `character`. I want a table called `characters`. It's proper to name the table with a plural of the resource.

**Solution:** Rails solved this for me.

The migration file should look like this:

![](https://i.imgur.com/3Gyh5RP.png)

You can see that it's going to name the table `characters` anyway! Thanks, Rails.

<hr>

&#x1F534; **Commit your work** 
<br>
The commit message should read: <br>
"Commit 3: Created table migration".
<hr>
<br>

## Give details to migration file

I want my Matrix characters to have a name, description, and image url. All three will be strings. I'm going to try this in the migration file:

![](https://i.imgur.com/OZg87Yo.png)

I'm going to ignore the fact that I spelled `description` wrong (`desciption`).


<br>
<hr>

## Run migrations

Run the migration to create the table:

```
rails db:migrate
```

![](https://i.imgur.com/PoN7zYk.png)

**&#x1F47E; Glitch!**

* When I check the `schema.rb` file, I am digusted to learn that I spelled `description` wrong.

![](https://i.imgur.com/O60cIMc.png)

**Solution:** Run another migration to change the column name (instructions below)

<br>
<hr>

## Make a corrective migration

I want to change the column in the schema called "desciption" to "description".

* Run a migration `rails g migration FixDescriptionColumnTypo`

The migration file should be an empty change method:

![](https://i.imgur.com/Fi0Oexz.png)

Good! No glitches, even though we called our migration `FixSomething` rather than `ChangeSomething`. It's all good, mates.

Add in `rename_column`:

```
def change
  rename_column :characters, :desciption, :description
end
```

![](https://i.imgur.com/Cr5Be3H.png)

Before you run the migration, answer these two questions:

Q: What is `rename_column` exactly?

A: It's a method invocation, like: `rename_column(characters, desciption, description)`

Q: What are the three arguments passed to the `rename_column` method?

A: table name, column to change, updated column name

**Run the migration**

<br>
<hr>

# Check migrations

* Check the `schema.rb` file.

* Check the db with `rails dbconsole`

* `SELECT * FROM characters;`

![](https://i.imgur.com/gswi0M7.png)

* `\q` to quit dbconsole.

**&#x1F47E; Glitch?**

* If the columns are not spelled correctly, run more migrations to fix the column names.


<hr>

&#x1F534; **Commit your work** 
<br>
The commit message should read: <br>
"Commit 4: Renamed the column".
<hr>
<br>

# Change table

**&#x1F47E; Glitch!**

I decided I want to name my entire table something other than `characters`. I want to called it `matrix_characters` because I might add in more movies to my app later, and want to be specific about which movie's characters I'm referencing.

**Solution:** Create another migration

```
rails g migration ChangeTableName
```

I can use a method called `rename_table` in the migration file:

```
class ChangeTableName < ActiveRecord::Migration[5.0]
  def change
    rename_table :characters, :matrix_characters
  end
end
```

![](https://i.imgur.com/viS2D1c.png)


**Run the migration**

* Check the `schema.rb`

<hr>

&#x1F534; **Commit your work**

<br>
The commit message should read: <br>
"Commit 5: Changed table name".
<hr>
<br>

# Um, I changed my mind

**&#x1F47E; Glitch!**

I don't want the table to be called `matrix_characters`. I just want it to be called `characters`. I don't want or need the last migration, so can I get rid of it?

**Solution:**

* Undo the last migration with `rails db:rollback`
* Check that the `schema.rb` has "characters" as the table name, not "matrix_characters".

**&#x1F47E; Glitch!**

* If I ever run migrations again, it will rename my table again, because that migration file is sitting there ready to go. Ugh! I need to get rid of it!

**Solution:**

Destroy the migration with `rails destroy migration <migration name>`

![](https://i.imgur.com/LHGGBN5.png)

![](https://i.imgur.com/qIEa6QH.png)

It should be gone. You can shorten the command to:

```
rails d migration ChangeTableName
```

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 6: Rolled back and destroyed migration".
<hr>
<br>

## Seed the database

Open the file `db/seeds.rb`

The pattern for making a single entry is:

```
Model.create({ column: data, column: data })
```

Note that the Model name is **capitalized** and **singular**.

We can create many of a given Model using an array of entries. Copy this data into your `seeds.rb` file, an array of Matrix characters for our Character model (our table is called 'characters', so our model should be called 'Character' .... right?:

```
Character.create([

	{ name: "Neo", description: false },
	{ name: "Trinity", description: false },
	{ name: "Morpheus", description: false },
	{ name: "Agent Smith", description: false },

])
```

![](https://i.imgur.com/2Ub3JU5.png)

To run the seed file:

```
rails db:seed
```

**&#x1F47E; Glitch! &#x1F47E; Glitch! &#x1F47E; Glitch! &#x1F47E; Glitch! &#x1F47E; Glitch!**

![](https://i.imgur.com/eEnKDGQ.png)

* We haven't defined what Character is, yet.

* **Solution:** Make a Character model to relate to our database (instructions below). Then, we can make ActiveRecord entries for the Character model.

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 7: Failed to seed database"
<hr>
<br>

# Make a model

To make a model, first we need a model file.

Make a file in `app/models` called `characters.rb`

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch!**

* Character is still not recognized

**Solution:**

* Make a Character class. In `characters.rb` write in:

```
class Character

end
```

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch!**

* Character is _still_ not recognized

**Solution:**

* Make the Character class inherit from ApplicationRecord (which, if you look in the `application_record.rb` file, you'll see that it inherits from `ActiveRecord`)

```
class Character < ApplicationRecord

end
```

![](https://i.imgur.com/5NjS00n.png)

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch!**

* Nope! Character is still an unrecognized constant.

**Solution:**

* Rename our model file. Rails favors **convention** over **configuration**. We have to stick to Rails' conventions or we'll be doomed. Rails wants the model files to be **singular** not plural.

* Rename `characters.rb` to `character.rb`

Can we seed our model yet? Run `rails db:seed`

**&#x1F47E; Glitch?**

* There should be no glitch! In fact, there should be nothing.

![](https://i.imgur.com/T8TucKh.png)

If you did get an error, keep trying to fix the glitch

<br>
<hr>

## Check seed data in db

Open `rails dbconsole`

```
SELECT * FROM characters;
```

Expected output:

![](https://i.imgur.com/UCPfefb.png)


If you have any glitches, fix them!

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 8: Successfully seeded database"
<hr>
<br>

## The seed data is all wrong

**&#x1F47E; Glitch!**

* I don't like the seed data. There is an 'f' in the description columns instead of a description, and no data in the img_url columns. _But_ if I run more seeds the old data will still be there. I kind of want to reset the whole db with new seed data.

**Solution:**

* This is kinda overkill, but you never know when you'll need to do this. Drop the databases, run all the migrations all over again and then re-seed the database from scratch. (Instructions below)

**Change your seed data to have a (very) brief description of each Matrix character**

**Don't worry about the img_url for now**

[Neo on Wikipedia](https://en.wikipedia.org/wiki/Neo_(The_Matrix))

[Morpheus on Wikipedia](https://en.wikipedia.org/wiki/Morpheus_(The_Matrix))

[Trinity on Wikipedia](https://en.wikipedia.org/wiki/Trinity_(The_Matrix))

[Agent Smith on Wikipedia](https://en.wikipedia.org/wiki/Agent_Smith)



* Then, run `rails db:reset`


Expected output:

![](https://i.imgur.com/zbavral.png)

**reset** has dropped the databases, re-run the migrations, and re-seeded the databases.

Check that the db has seeded correctly inside `rails dbconsole`

```
SELECT * FROM characters;
```

`\q` to quit

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 9: Reset database"
<hr>
<br>

## Active Record Queries

Open Rails console

`rails c`

Using Active Record queries, do the following:

* add an img url to each of the Matrix characters
* delete Agent Smith
* add a new character: The Oracle

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 10: Active Record queries"
<hr>
<br>

## Relations

* Make second model, `vehicles` that has a column for `name` and `style`
* Seed the vehicles with a style "Spaceship", name "Nebuchadnezzar"
* Change the `characters` table to have an integer field called `vehicle_id`
* In rails console, associate Morpheus and Trinity with the Nebuchadnezzar

<hr>

&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 11: Relations"
<hr>
<br>

## Submission Guidelines
&#10004; Submit your project via [this google form](https://docs.google.com/forms/u/2/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform)

<hr>

## Hungry For More?

* Read through the documentation on Migrations [Active Record Migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)

* Implement an Index route that displays the JSON of all [Matrix characters](https://en.wikipedia.org/wiki/The_Matrix)

* Implement a Show route that displays the JSON of a single [Matrix character](https://en.wikipedia.org/wiki/The_Matrix)

<hr>
