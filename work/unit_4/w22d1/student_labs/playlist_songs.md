
---
Title: Playlist and song - many to many through<br>
Type: Lab <br>
Creator: Thom Page <br>

<hr>


# :notes: :musical_note: :notes: :musical_note: :notes: :musical_note:

# Many-to-many Lab


### Playlist and Song - Many to Many Through

In `student_labs`

`rails new playlists_songs_app_api --api -d postgresql --skip-git`

`rails db:create`

**Scaffold** two models, Playlist and Song. Playlists have a title. Songs have a title.

**Scaffold** a join model called Roster

Note: the type `references` is just Rails shorthand for `whatever_id` (foreign key) with some added extra like validation and indexing and will add some boilerplate code for you in the model.

```
rails g scaffold roster playlist:references song:references plays:integer
```


### Add Active Record relationships

* Playlists will have many rosters, and will have many songs through rosters
* Song will have many rosters, and will have many playlists through rosters

Look back at the notes!


### Rails console

`rails c`

* Create two Playlists in rails console. You do not need to associate any songs yet.

* Create two Songs in rails console. You do not need to associate playlists yet.

* Create a Roster where song 1 is on playlist 1 and has been played 5 times.

* Create a Roster where song 1 is also on playlist 2 and has been played 1 time.

* Create a Roster where song 2 is on playlist 2 and has 100 plays.

* Create a Roster where song 2 is put on playlist 1 and has 20 plays.

* Check out your data in the browser.

* Make it so that your Playlists json will show the associated Songs

* Make it so your Songs json will show the associated Playlists


<br>

### Playlist and Song - Front End
- Make a react app and query the data to display on the front end!

