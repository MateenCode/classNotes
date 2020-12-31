![](/ga_cog.png)

# Project #1: The Game

## Attendance
We will not be having instruction on project days, but we do expect you to be in class to work on your project and most importantly get help from your instructional team.

We will **still have some instruction and other mandatory items** during project week, as follows:

  - **Tuesday & Wednesday**: You're required to show up in the class zoom room. Tuesday we will walk through deploying to GitHub pages correctly
  - **Thursday**: If you have outcomes, you're required to show up to Outcomes
  - **Saturday**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM EST

_Failure to make an attendance check will result in an unexcused absence for that day_.


## Project Details

### &#x1F534; Mandatory To Pass:
#### MVP - Minimum Viable Product

Your game must meet these requirements:

1. Built with HTML, CSS, JavaScript and jQuery (this game will be played using the DOM, not the console)<br>
2. Hosted on github pages<br>
3. Commits to github every day<br>
4. A `README.md` file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

#### Game must have:<br>

  1. **Must be a two player game** (either against the computer or against another player)<br>
        - Example: Blackjack: A player plays against the dealer. The dealer is the computer
        - Example: Connect Four: Two players pass the game between themselves to take turns<br>
        <br>
  2.  **A win state** - a way for the player to win the game<br>
      - High score can be considered a win state
      <br><br>
  3.  **A lose state** - a way for the player to lose the game<br>
      - Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
      - Example: Connect Four - the other player has won or there are no possible plays left<br><br>
   4.  **A way to keep playing if the game is not over**<br><br>
   5.  **Multiple rounds to play** - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost<br>
         - Example: Blackjack: a player takes turns playing a hand versus a computer - the player's hand can either win, lose or tie the dealer. If the player has enough money in their bankroll they can keep playing. A player must be able to win several rounds and increase their bankroll
         - Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible. A player gets four chips in a row (vertically or horizontally)- one person wins, one loses, there are no further plays in this case<br><br>

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

- A way to reset the board and play again
- CSS to give your game a personal and fun style
- Responsive mobile design
- Work with your instructor to determine additional stretch goals

## Make A New Repo

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

:heavy_exclamation_mark: **Do not** begin your project within the class repo. 

:heavy_exclamation_mark: **Do not** clone your project into the class repo. 

1. After your project has been approved, [make a new github repo for your project](https://help.github.com/articles/create-a-repo/). You will be deploying this project onto github pages, so you **must** name your repo `yourgithubusername.github.io` (for example, if my github username was octocat I would do: octocat.github.io)

![](https://i.imgur.com/bzBJdZ5.png)

From there, follow the instructions outlined by github themselves on [github.io](https://pages.github.com/)

Please note that you will be using this same repo for creating your portfolio later on. Thus for this project, we suggest that you create a folder within this repo that will contain all your code for your unit 1 game and name it appropriately (make it your game's name, for example `connect-four`, and _**not**_ something like `unit-one-project`). You can then view your game online by going to your github.io url with `/the-folder-name` tacked on at the end! 

<details><summary>Extra: want your own domain name?</summary>
  
You can also host your github pages with your own domain name. [Here is a walktrhough from namecheap, one web hosting service](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)
</details>


## Submission Guidelines
- Make sure to submit the final project url via this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform)

## Technical Demonstration

All projects will be presented to the class. This is a mandatory requirement.
 
You will have a maximum of 10 minutes to present your project following these guidelines:

1. **Introduce the Project:**

   ☐ Intro your game by paraphrasing the README.

2. **Demonstrate the Project:**

   ☐ Launch the game by clicking the link in the README.

   ☐ Play the game! If necessary, manipulate the values of variables in the console to ensure a quick win or loss.

3. **Show/discuss your code:**

   ☐ Briefly show the HTML & CSS.

   ☐ Show the JavaScript/jQuery and discuss your favorite function.

4. **Share the experience:**

   ☐ What was your biggest challenge?

   ☐ What are your key learnings/takeaways?

5. **Q & A + Feedback**

You will be sharing your game and your code.  Be prepared to answer questions from the instructors and other students.

**Be prepared to present!**

- Check that your Github Pages website is working the morning before presentations. 
- Have your code loaded on your desktop and your website loaded in your browser the morning of presentations
- Plan out the ten minutes of your presentatiion! Take this time to slowly walk through your code and practice explaining what you wrote. This will be practice for interviewing. Being able to articulate the code you wrote in a clear and concise manor is an invaluable skill to demonstrate your knowledge.


## Project Feedback + Evaluation

- Your instructors will be evaluating your project during your demonstration as well as reviewing the code in your repo. 
- Immediately after your presentation, your instructor may provide you with feedback that will benefit your project and perhaps the projects of other students as well.
- If there is a specific section of code that you would like an instructor to provide additional feedback, please ask!

## Meetings with instructors
_An instructor will contact you to setup a meeting time to approve your project._

**Satuday, March 28th (Today!) - Mandatory**<br>
You will meet with an instructor for 15 minutes to get your game idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

## How to Submit Your Project
Your project is due on Saturday, April 4th at 10:00 am EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform). Note that this will be the order you present your projects!

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA 

**TA Hours** 
1. Will remain the same!

## Suggested Ways to Get Started

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the game (what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

### Think about...

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

## Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** 
* **[jQuery Docs](http://api.jquery.com)** 
* **[GitHub Pages](https://pages.github.com)** 
* **[Trello](https://trello.com)** 

<hr>  

## Inspiration - Projects by Previous WDI Students

* [Egghunt](https://j-hha.github.io/egg_hunt/)
* [Blackjack](https://cardosi.github.io/)
* [Connect Four](http://katiezhou.github.io/connectfour.html)
* [Core Defense](https://dnialwill.github.io/project_1/)
* [Snake](https://awdriggs.github.io/snake/)
* [Pan Dulce Connect Four](https://edoorn.github.io/pandulce/)
* [Simon](http://alexandraalday.com/SimonUniverse/)
* [Savage Sailors](https://tg970.github.io/savage_sailors/)
* [Economics the Game](http://www.blakeharris.com/thegame/)
* [Ancient Wizards](https://benpeterswake.github.io/)
* [Trouble in Tribble Town](https://samwhindleton.github.io/trouble-in-tribble-town/)
* [Harvest Game](https://jedmed.github.io/Projects/Harvest_Game/)
* [Starfighter](https://1ntellijosh.github.io/StarFighter/starfighter.html)
