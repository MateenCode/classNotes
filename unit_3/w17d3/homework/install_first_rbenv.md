# Ruby - Environment



## &#x26A0; Uninstall rvm

If you have RVM already set up you will need to decide whether you want to continue using RVM or if you'd prefer to switch to rbenv. We won't be supporting RVM.

To check if you have RVM installed simply run the command `rvm`. If it is not intalled you'll see the message `command not found: rvm`

To uninstall follow these instructions: [uninstall rvm](https://richonrails.com/articles/uninstalling-rvm)

RVM and RBENV do NOT work well together, so having both installed will cause _weirdness_ .

## Homebrew

1. See if brew is already installed (type `brew` and hit enter to see if it is). You should get a message about example usage, etc.

1. If you haven't install Homebrew, do so by going to http://brew.sh/
	- copy and paste this into the terminal `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` and hit return


1. If brew is installed, run `brew upgrade` to upgrade to the latest version of homebrew
	* Might take a while, might upgrade stuff for postgres, node, heroku, etc.
1. Run `brew update` to update the list of installable programs by homebrew
	* Might say Already up-to-date

## Install rbenv

rbenv is a version manager for Ruby. We don't want to use our system Ruby because we can mess with it. Instead, let's get an up to date version of Ruby that is safe to mess with.

1. Check if rbenv already installed: `rbenv`
1. If already exists, upgrade with `brew upgrade rbenv ruby-build`

Otherwise

1. `$ brew install rbenv ruby-build`

## View Possible Ruby Versions
**See which versions of Ruby you can download**

1. `$ rbenv install --list`

There will be stuff like `rbx` and `jruby`, we are only interested in the ones that start with numbers.

## Install Latest Ruby
**Install the latest version of Ruby**

Get the version of Ruby before `-dev`

1. `$ rbenv install 2.5.3`

* There is no way within rbenv just to get the latest stable version
* You **must** install Ruby 2.2.2 or greater for Rails 5.
* Install might take a long time -- Terminal could just look like it's hanging

> ruby-build: use readline from homebrew
>
> Installed ruby-2.5.3 to /usr/local/var/rbenv/versions/2.5.3

## View Installed Versions of Ruby

1. Run `rbenv versions`

![](https://i.imgur.com/k4F34DP.png)

* system is your system Ruby
* asterisk is next to the version that you are using

## View Currently Running Version of Ruby

1. Run `rbenv version`

## Switch RBENV to a different Version of Ruby

1. `$ rbenv global 2.5.3`
	* Check with `rbenv versions`. Asterisk should be next to 2.5.3
1. `$ rbenv rehash` to tell computer we've switch versions of ruby
	* Confirm switch again with `rbenv versions` `* 2.5.3`


**CLOSE AND RESTART TERMINAL**

## Update Environment to use new Ruby

1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.5.3p111` or somesuch

IF NOT

1. `$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`
	* (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. `$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile`
	* (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.5.3p301` or somesuch

## Install a gem

Gems are like NPM packages for Ruby, but they're installed globally, as opposed to multiple times for each application that you build

1. List gems with `gem list`
1. Run `gem install pry` to install a gem called pry.  It's a ruby REPL command
1. Run `rbenv rehash` to tell computer we've installed a new gem
1. List gems with `gem list` look for `pry`
1. Rub `pry` to start pry command
1. Inside pry type `2 + 2`
1. If that works, type quit

Note: 
- If you are getting a permissions error you can aadd `sudo` in front of the command for now.
- Might need to update the gem manager with `gem update --system`


## Install Rails 5.2 beta

1. Run `gem install rails --pre` to install the rails commands
2. `rbenv rehash`
3. `rails -v`

Note: if Rails already installed, might need to run `bundle update rails`

## Test Rails
3. Run `rails new blog` to create a new app
4. `cd blog`
5. Run `rails s` to start the server
6. Go to `http://localhost:3000`

- Note: You may need to run `rails webpacker:install`
