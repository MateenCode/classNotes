![ga](/ga_cog.png)

# Realty

---
Title: Realty <br>
Source: WDI-Skywalker (2015)<br>
Modified by: Karolin Rafalski, Thom Page <br>
Competencies: SQL queries, aggregation

---

## Learning Objectives

- Practice creating a database from the command line
- Practice seeding a database using SQL
- Practice using the Command Line API of postgresql
- Practice querying a database using SQL

## Activity

#### Step 1 - Create a new database
  - Create a new database called `realty_db`.

#### Step 2 - Create a Schema

  - Use the given schema file named `realty_schema.sql` and create tables in your realty database which should model `Apartments`, `Offices` and `Storefronts`. They should have the following properties:

    ##### An Apartment should have:
      - id - serial primary key
      - apartment_number - integer
      - bedrooms - integer
      - bathrooms - integer
      - address - varchar
      - tenant - varchar
      - occupied - boolean
      - sq_ft - integer
      - price - integer

    ##### An Office should have:
      - id - serial primary key
      - office_number - integer
      - floors - integer
      - sq_ft - integer
      - cubicles - integer
      - bathrooms - integer
      - address - varchar
      - company - varchar
      - occupied - boolean
      - price - integer

    ##### A Storefront should have:

      - address - varchar
      - occupied - boolean
      - price - integer
      - kitchen - boolean
      - sq_ft - integer
      - owner - varchar
      - outdoor_seating - boolean

  - Load the seed file into your database from the command line. Use the `psql` shell to inspect your schema.


#### Step 3 - Define a seed file and seed your database

 - In a SQL file named `realty_seed.sql`, write the proper INSERT commands that will add new entries into your apartment, office and storefront tables. You should create at least 3 entries for each table. Vary the attributes of each entry so no two are alike. From the command line, load this seed file into your database.


#### Step 4 - Queries

  - In the given `realty.sql` file, write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

      - The average square footage of all offices.
      - The total number of apartments.
      - The apartments where there is no tenant
      - The names of all of the companies
      - The number of cubicles and bathrooms in the 3rd office
      - The storefronts that have kitchens
      - The storefront with the highest square footage and outdoor seating
      - The office with the lowest number of cubicles
      - The office with the most cubicles and bathrooms
