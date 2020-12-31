## Rails

In this lesson we will be looking ahead to understand what Ruby will be able to provide for our development stack. We will introduce a number of new topics to gain a simple understanding of their syntax and usages. As we move further into Unit 4, we will tackle the finer details of the syntax for these tools.

## Learning Objects
- Understand what Rails can do from a high level overview
- Learn about Ruby Gems
- Learn about and Install Postgresql 


Ruby's packages (gems) are installed once on the computer, instead of per project like Node.  Install the gem for rails:

```
sudo gem install rails
```

`rails` is command-line program like, `mkdir`, `cd`, and `ls`, etc.

Use `rails` to generate a new rails project:

```
rails new blog
```

Enter user pwd if it prompts you.

To test that the project is set up correctly:

```
cd blog
rails s
```

Go to http://localhost:3000/

To see the power of rails:

```
^c
rails generate scaffold Post name:string title:string content:text
rails db:migrate
rails s
```

Go to http://localhost:3000/posts

## Postgres

Postgres is a relational database (the opposite of MongoDB). PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. [Learn More Here](https://www.postgresql.org/about/)

We will be diving into SQL next week and will discover what a Relational Database really means. For now, let's see postgres in action.

Let's install it:

```
brew update
brew install postgresql
postgres -D /usr/local/var/postgres
```

- Note: If you are getting a version error try running: 
    - `brew postgresql-upgrade-database`

<details><summary>If you get this error:</summary>

```js
2019-12-29 12:54:00.694 PST [72542] FATAL:  lock file "postmaster.pid" already exists
2019-12-29 12:54:00.694 PST [72542] HINT:  Is another postmaster (PID 72519) running in data directory "/usr/local/var/postgres"?
```

Postmaster is the main PostgreSQL process. You're trying to start PostgreSQL that's already running (and you're saying yourself you can connect to it). Just skip that step of your process.

<details>

Open a new terminal tab:

```
psql -l
```

## Rails with Postgres

```
cd ../
rails new blog2 -d postgresql
```

This will error, so:

```
sudo gem install pg
```

if that doesn't work:

```
sudo env ARCHFLAGS="-arch x86_64" gem install pg
```

or install [postgress.app](https://postgresapp.com/) and

```
gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config
```

and possibly

```
gem install pg -- --with-pg-include='/Applications/Postgres.app/Contents/Versions/latest/include/'
```

finally:

```
rails new blog2 -d postgresql
cd blog2
rails webpacker:install
rails s
```

check: http://localhost:3000.  You should get an error! We have not yet created a database. Run the commands below to create our database.

```
^c
rails db:create
```

check: http://localhost:3000

```
rails generate scaffold Post name:string title:string content:text
rails db:migrate
rails s
```

go to http://localhost:3000/posts and create some posts

In `psql` tab

```
psql -l
```

You should see `blog_development` and `blog_test` databases available

```
psql blog2_development
SELECT * FROM posts;
```
