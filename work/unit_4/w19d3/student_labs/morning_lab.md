![](https://i.imgur.com/mS4bLMs.png)
# MORNING LAB

## MORE MIGRATIONS

In `intro_app_api` (our **Todos** app):

If we want to alter our database tables, columns, datatypes, etc. We **do not change them manually** in the schema or in migrations that have already run.

To change any of these things you must run **another migration**.

* Commands that begin with `rails` are written in Terminal.

<br>

## 1. Adding Columns

**Goal:** Add a column called `description` to our Todo table.

`rails g migration AddDescriptionToTodos`

If you muck up the name of of the migration or something goes wrong, you can remove the migration with

`rails destroy migration <name_of_migration>`


In the migration file, we will use the `add_column` method. The method takes three arguments: the name of the table to alter, the name of the new column, and the datatype for that column:

```ruby
class AddDescriptionToTodos < ActiveRecord::Migration
  def change
    # Method    Table   Column       Datatype
    add_column :todos, :description, :string
  end
end
```

`rails db:migrate`

Check the **schema.rb** file to see that the "description" column was added.

_schema.rb_

![](https://i.imgur.com/Rb7XnUM.png)

Also, to see your changes, open up rails console `rails c`.

See the columns associated with your table / model with:

```
Model.column_names
```

In this case, `Todo.column_names`

&#x1F535; **Activity**

* Once the migration is complete, create a new Todo with `title`, `description`, and `completed` in rails console.

<br>

## 2. Changing columns

Again, if we want to change our schema, we must **run more migrations**. Let's change the name of our `description` column to `details`:

```
rails g migration ChangeDescriptionInTodosToDetails
```

In the migration file, we will use the `rename_column` method that takes three arguments: the name of table to alter, the name of the column to alter, and the new column name:

```ruby
def change
  rename_column :todos, :description, :details
end
```
Then:

```ruby
rails db:migrate
```

* **Check in schema.rb**

Also, open up **Rails console** and check your columns and your data:

```ruby
Todo.column_names
```

```ruby
Todo.all
```

<br>

## 3. Removing columns

```
rails g migration RemoveDetailsInTodos
```

In the migration file, we will use the `remove_column` method to remove the column. It takes three arguments: the name of the table to alter, the name of the column to delete, and the datatype of that column:

```ruby
def change
  remove_column :todos, :details, :string
end
```

Then:

```
rails db:migrate
```
* **Check in schema.rb**

The schema should be back to its original state with just `title` and `completed`.

You can also open up **Rails console** and check that the column was deleted (No Todo entries should have a `details` column any more).

<br>

## 4. Make a new Rails project

Call it `morning_lab_api`

Can you remember the steps involved? Look back over this markdown and make a new project.

The project is a throwaway, but it should have:

* A User model with name and password
* The model should be fully testable in Rails console

**Make any mistakes along the way with migrations?**
Undoing migrations:

```
rails db:rollback
```

Rolls back the last migration.

To go all the way back to the beginning, we can use

```
rails db:migrate VERSION=0
```

As you might guess, substituting any other number for 0 migrates to that version number, where the version numbers come from listing the migrations sequentially.

To re-do your migrations from the beginning, AND seed the database:

```
rails db:reset
```

To delete a migration:

```
rails destroy migration NameOfMigration
```

* It is advisable only to delete the final migration, and that that migration has not already been run. This is because successive migrations usually depend on one another.

Shorthand, `destroy` can be written as `d`:

```
rails d migration NameOfMigration
```
