![ga](../../../ga_cog.png)

<hr>
Title: Rails Lab - products and reviews<br>
Type: Lab<br>
Creator: Thom Page<br>
Topics: More migrations and Active Record with Relational data<br>
<hr>

# Rails Lab in groups

## Discuss

Answer these questions to the satisfaction of everyone in the group:

* Rails favors **convention** over **configuration**, what do you think this means?

* The way we have learned migrations, there is an intermediate step between generating a migration and running that migration. What is it and why does that step exist?

* What does running a migration do?

* What is ActiveRecord exactly?

<br>
<hr>

## Build together

You'll have plenty opportunity to do Rails stuff on your own. For now, build something together. Each person should have completed the step before the group moves on to the next step.

Answer any questions amongst yourselves along the way, before moving on to the next step.


### 1. Initialize new project

In `student_labs` make a project called `afternoon_lab_app_api`. Remember `rails new`, the `--api` flag, and the `-d postgresql` flag.


### 2. Create the postgres database

`rails db:create`


### 3. Generate a migration to create a table for `products`

Do not fill in the migration file yet.

### 4. Generate a migration to create a table for `reviews`

Do not fill in the migration file yet.

> Eventually, products and reviews will have one-to-many relationship. A product will have many reviews. A review will belong a product.

### 5. Fill in the migration file for `products`

A product should have a title and a price. Research how to use a number as a datatype.

Do not run the migration yet.

### 6. Fill in the migration file for `reviews`

A review should have a rating (number) and content (string)

Do not run the migration yet.


### 7. Migrate both migration files

`rails db:migrate` will migrate all migration files that have not yet been migrated. Both the products and reviews tables should be created when you run the migration.

Check in the `schema.rb`.


### 8. Make a model for Product and a model for Review

`product.rb` and `review.rb`

The models are Classes that inherit from ApplicationRecord

Don't add in relations just yet


### 9. Test your models in Rails Console

`rails c`

Perform ActiveRecord queries on Product and Review to make sure they are working. `Product.count` (zero)


### 10. Add a foreign key to reviews

Generate a migration that will add a column to the review schema.

Fill in the migration file: the column should be called `product_id` and will be a number (an integer).

Run the migration.


### 11. Add relationships to the models

Change `product.rb` to reflect that a Product has many reviews.

Change `review.rb` to reflect that a Review belongs to a product.


### 12. Seed some data

In `seed.rb`, create two Products. Do not run the seed yet.

In `seed.rb` create three Reviews. Associate two reviews with a product, and the remaining review with the other product.

Associate them using the expected ids of the seeded products.

Seed the products and reviews. `rails db:seed`

### 13. Test the seed in rails console

`rails c`

Run the queries to see if all the data is there, that the products have their related reviews, and the reviews have their related product.
