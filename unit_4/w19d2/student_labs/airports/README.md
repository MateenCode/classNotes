![](/ga_cog.png)

---
Title: Airplanes & Airports <br>
Type: Lab <br>
Created By: Matt Huntington<br>
Modified By: Jerrica Bobadilla

---


## Setup

1. Create a new database called `flights`, connect to it, and run the following code (given to you in the `flights.sql` file):
	- Note: You can run this .sql file using `psql <db_name> -f <path_to_file>`

	```sql
	CREATE TABLE airlines (
		id int,
		name varchar(255) DEFAULT NULL,
		alias varchar(255) DEFAULT NULL,
		iata varchar(255) DEFAULT NULL,
		icao varchar(255) DEFAULT NULL,
		callsign varchar(255) DEFAULT NULL,
		country varchar(255) DEFAULT NULL,
		active varchar(255) DEFAULT NULL
	);

	CREATE TABLE airports (
		id int,
		name varchar(255) DEFAULT NULL,
		city varchar(255) DEFAULT NULL,
		country varchar(255) DEFAULT NULL,
		iata_faa varchar(255) DEFAULT NULL,
		icao varchar(255) DEFAULT NULL,
		latitude varchar(255) DEFAULT NULL,
		longitude varchar(255) DEFAULT NULL,
		altitude varchar(255) DEFAULT NULL,
		utc_offset varchar(255) DEFAULT NULL,
		dst varchar(255) DEFAULT NULL,
		tz varchar(255) DEFAULT NULL
	);

	CREATE TABLE routes (
		airline_code varchar(255) DEFAULT NULL,
		airline_id int DEFAULT NULL,
		origin_code varchar(255) DEFAULT NULL,
		origin_id int DEFAULT NULL,
		dest_code varchar(255) DEFAULT NULL,
		dest_id int DEFAULT NULL,
		codeshare varchar(255) DEFAULT NULL,
		stops int DEFAULT NULL,
		equipment varchar(255) DEFAULT NULL
	);
	```
1. In terminal, connect to your `flights` database
1. Once inside the psql database (you'll know you're in the right one if your terminal says `flights=#`), run the following lines individually

	```
	\copy routes FROM 'routes.csv' DELIMITER ',' CSV
	``` 
	- You should get back `COPY 67663` if you were successful
	
	```
	\copy airports FROM 'airports.csv' DELIMITER ',' CSV
	``` 
	- You should get back `COPY 8107` if you were successful
	
	```
	\copy airlines FROM 'airlines.csv' DELIMITER ',' CSV
	``` 
	- You should get back `COPY 6048` if you were successful


1. You should now have seeded three tables with flight data!

[What is the copy command?](https://www.postgresql.org/docs/9.2/sql-copy.html)

## Activity 

> Our **main goal is to find out how many flights go from NYC to Paris.**

### Hints

- The routes table has a column called `origin_id` and another called `dest_id`.  These map to the `id` column in the airport table. Think about how to treat the `id`s as foreign keys.  
- You're going to have to use the airports table twice in the same SQL statement.  In order to tell which airport is the `destination` and which is the `origin`, you're going to have to temporarily rename the airports table like so:

	```sql
		/* note that once you rename a table, you MUST refer to it by its new name */
		SELECT * FROM airports AS origin WHERE origin.city = 'New York';
		/* later on in the SQL statement, when dealing with the destination, you should do the same for airports AS destination */
	```
- Note that you'll only need to use the routes and airports tables  
- Think about using aggregation and inner joins

### Steps to think about

1. Find all airports that originate from New York
1. Find all destination airports in Paris 
1. Find out how many routes originate from New York
1. Find out how many routes have destinations in Paris 
1. Try to decide which statements are necessary and find how to combine them to find out how many routes originate from New York and land in Paris! 

## Stretch Goals

- Do this so that just the number appears as the result of only one SQL statement
- Which airlines travel from NYC to Paris?
- Find all the flights that leave NYC.  Give a list of how many go to each destination city.
