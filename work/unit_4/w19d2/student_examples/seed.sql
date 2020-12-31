CREATE TABLE
  actors
  ( id serial, first_name varchar(20) NOT NULL, last_name varchar(20), height int, sings BOOLEAN, dances BOOLEAN DEFAULT false);

INSERT INTO actors (first_name, last_name, height, sings, dances) VALUES
('Melissa', 'Benoist', 173, true, false),
('Nicole', 'Maines', 170, true, true),
('Brandon', 'Routh', 189, false, false),
('Amy Louise', 'Pemberton', 160, null, null),
('Dominic', 'Purcell', null, null, null),
('Nick', 'Zano', 183, null, null),
('Maisie', 'Richardson-Sellers', null, null, null),
('Franz', 'Drameh', 180, null, null),
('Victor', 'Garbor', null, true, null),
('Tala', 'Ashe', 168, null, null),
('Arthur', 'Darvill', null, null, null),
('Jess', 'Macallan', 175, false, true),
('Matt', 'Ryan', 180, true, true),
('Adam', 'Tsekhman', null, null, null),
('Courtney', 'Ford', 165, null, null),
('Neil', 'McDonough', null, true, true),
('Ramona', 'Young', null, null, null),
('Melissa', 'McCarthy',157, true, true),
('Jenny', 'McCarthy',null, false, false);

SELECT * FROM actors;