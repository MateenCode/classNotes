[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Dougie the Donut & Pizza Rat: The Sequel

![pizza rat rolling dougie the donut](https://imgur.com/3vFgM5x.png)

After their fight last time, Dougie the Donut and Pizza Rat have since become best buds taking New York City by storm. Now instead of causing trouble against each other, they've taken it upon themselves to cause trouble around the city! The catch is, they don't want to get caught by the police (in other words, they want to eat their cake and have it, too) so they've put their brains together to come up with a helpful app idea that will allow them to see what kind of trouble they can cause without getting thrown in jail. Let's help them build it!

#### Learning Objectives

- Making AJAX calls to an external API
- Rendering the returned data using jQuery

#### Prerequisites

- AJAX
- JavaScript
- jQuery
- HTML DOM

---

## Getting Started

1. In today's `student_labs`, create a directory named `complaints_app`
1. Inside that directory, create `app.js`, `index.html`, and `styles.css` files
1. Link them up, as well as the jQuery CDN library, and make sure all things are connected correctly!

## The App

Overall, what Dougie and Pizza Rat want for this app is for it to search through the [311 call data](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9) provided by the [NYC Open Data API](http://opendata.cityofnewyork.us/), and display all the complaints made to the NYPD, filtered by borough. They also want to see how the police responded to the complaint, since that's what they'll use to determine whether or not they can cause the same trouble without consequences!

## The Data

For this particular API, NYC Open Data, the data sent after making an AJAX call is formatted as JSON.

#### What is JSON?

JSON stands for JavaScript Object Notation, which simply just means the data is formatted like the JavaScript objects you've learned about! So, for example, one dataset from the API looks like:

<details><summary>Example JSON Data</summary>
  <strong>When collapsed</strong>
  <img src="https://i.imgur.com/9Xa3jAv.png">
  <strong>When opened to see all the key-value pairs</strong>
  <img src="https://i.imgur.com/wksEBdq.png">
</details>
<br>

Whew, that's a lot of data! For the purposes of our app (more specifics below), however, only some of the key-value pairs are of use to us. Particularly...
  * `borough`
  * `descriptor` (which says what kind of complaint was made)
  * `agency: "NYPD"` (because we only want complaints that were handled by the police department)
  * `resolution_description` (which says how the police handled the complaint)

#### Working with the API

While making basic AJAX calls to an API will generally follow the same format, an important thing to note about API's are that they're all different. Just because one API allows you to filter and customize the format of the returned data one way, doesn't mean another API will work the exact same. Don't fret, though! Any good API worth using will come with its own set of documentation that will aid you on how you can use it. So now's a good time as ever to get used to reading documentation.

For this lab in particular, here are some important pages you may need to look through to do this lab:
  * [The 311 Service Requests API Documentation](https://dev.socrata.com/foundry/data.cityofnewyork.us/fhrw-4uyv)
      * This page in particular shows an example AJAX call using jQuery, however you'll notice instead of a `.then` promise, it uses `.done` -- convert it so that it uses the AJAX call format you learned in class today
  * [The 311 Service Requests Data Info Page](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9)
  * [Info on how to filter the API Data Being Returned](https://dev.socrata.com/docs/filtering.html)
  * [Info on how you can Customize the API Queries More Precisely](https://dev.socrata.com/docs/queries/)

Now that you're armed with an API and it's documentation, as well as a general idea of what the app should do -- let's finally get onto the specifics of the app!  

## Minimum Viable Product (MVP)

#### Below is a more detailed list of what functionalities Dougie and Pizza Rat want for their app.

1. Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
1. Users should also be able to see an input box where they can put in a number of how many complaints they want to see
1. When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
   * If the user doesn't input any number, make the default be 10
   * Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
1. When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
1. When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
   * Make sure it _only_ toggles the response for that one complaint, not the entire list!

#### Example of a working app

![](https://imgur.com/ssFKX3J.gif)

---

## Hungry for More?

1. Make it so the complaints are listed in alphabetical order
1. You'll notice the complaint descriptors fall under umbrella categories (e.g. "No Access", "Banging/Pounding", "Loud Music/Party", etc. etc.)
    * Display somewhere on the page all the categories and how many times they show up for the current list of complaints
    * e.g. "No Access was complained about 4 times", "Banging/Pounding was complained about 10 times", "Loud Music/Party was complained about 20 times"

## Super Hungry for More?

1. The data provides latitude and longitude coordinates for where the complaints took place. Consider looking into  geolocation and google maps so that you can display a map with a pin showing exactly where the complaint was made

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
