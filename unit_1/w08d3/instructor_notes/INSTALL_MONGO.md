# Install Mongo

---

Created: Matt Huntington <br>
Updated: Thom Page <br>

---

## Install with Homebrew

### [Homebrew: The missing package manager for macOS](https://brew.sh/)

* Check if homebrew is installed: `brew`

	* If not, install [Homebrew](https://brew.sh/) by following the instructions below in your terminal, or on the homebrew web page:
		```
		  brew tap mongodb/brew
          brew install mongodb-community
          brew services start mongodb-community@4.2
	    ````
	* If brew is already installed `brew upgrade`.

* **Install Mongodb on Mac OS X:** `brew install mongodb-community`

## Set data location

In terminal type `mongod` to run the mongo server.

You will probably get an error saying
> "Data directory `/data/db` not found., terminating"
	- if so, you will need to make the directories in your **root** directory as follows (do these commands anywhere):

* Create data directories (at the root level)
	* `sudo mkdir /data`
	* `sudo mkdir /data/db`

* Next, set root permissions
	* `sudo chmod -R 777 /data`

Run the mongo server again: `mongod`.

Should see: "waiting for connections on port 27017"

## Open and close mongo

* Open another terminal tab `cmd + T` and type `mongo`

* To quit `mongo`, type `exit` or `quit()`.  

* To quit `mongod` hit `control+c`

Finished!


## Errors

If at some point you get an error with `mongod`:

1. `ps -A | grep mongod`
1. find the line that just mentions `mongod`, but not `grep`
1. take note of the number on the left
1. type `kill 1774` or whatever that number is.  Try `mongod` again.
1. If that doesn't work, go to `/data/db` and `rm mongod.lock`.  Try `mongod` again.

## Down the Rabbit Hole: Hungry for More

[Understanding Permissions](https://www.elated.com/articles/understanding-permissions/)
