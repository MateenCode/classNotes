![ga](/ga_cog.png)

# NFL

---
Title: NFL <br>
Type: Homework<br>
Modified by: Karolin Rafalski, Thom Page <br>
Competencies: Basic SQL<br>

---

### Schema and seed

You are provided with a schema file [schema.sql](nfl_seed_data/schema.sql) and two seed files
`players.sql`, `teams.sql` that are also in the `nfl_seed_data` folder. Create a new database called `nfl` and use the schema and seed file to populate your database.

<hr>
&#x1F534;  "Commit: NFL db seeded"
<hr>


Record your answers to Step 3 in a file called [nfl.sql](nfl.sql).

_Challenge_: Complete each part with a single SQL expression. That is
possible, but for some queries, it will involve learning how to use compound SQL
expressions.


### Queries

Some queries may require more than one command (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct.

1.  List the names of all NFL teams
2.  List the stadium name and head coach of all NFC teams
3.  List the head coaches of the AFC South
4.  The total number of players in the NFL

<hr>
&#x1F534;  "Commit: NFL queries 1"
<hr>

5.  The team names and head coaches of the NFC North and AFC East
6.  The 50 players with the highest salaries
7.  The average salary of all NFL players
8.  The names and positions of players with a salary above 10_000_000

<hr>
&#x1F534; "Commit: NFL queries 2"
<hr>

9.  The player with the highest salary in the NFL
10. The name and position of the first 100 players with the lowest salaries
11. The average salary for a DE in the nfl

<hr>
&#x1F534;  "Commit: NFL queries 3"
<hr>

## Hungry For More

For these you will need to query two tables at the same time. In order to do some parts you will need to research commands using dot notation that we did not cover in class.

EXAMPLE

> The names of all the players on the Buffalo Bills

```sql
SELECT players.name, teams.name
FROM players, teams
WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';
```

13. The total salary of all players on the New York Giants
14. The player with the lowest salary on the Green Bay Packers

<hr>
&#x1F534; "Commit: NFL - HFM"
<hr>

## Submission Guidelines
- Please submit a `.sql` file
- :heavy_check_mark: Submit your project via [this google form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform).

