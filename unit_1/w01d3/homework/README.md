[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Fake Resume & Github Practice

#### Learning Objectives

- HTML/CSS
- Getting comfortable with GitHub

#### Prerequisites

- HTML/CSS
- JavaScript
- Github

---

## Git & Github - Getting Started

![](https://s-media-cache-ak0.pinimg.com/originals/2d/8e/e8/2d8ee815146390d567706f2c7b5c2916.gif)

1. Create a file called `answers.md` inside of the homework folder for tonight.
1. Write your and answer the questions below in your `answers.md` file.
1. Commit your work at each point when directed (remember to `git add .` and then `git commit -m "your commit message here"`).

## Git & Github - Questions

Refer back to the notes from today and/or use the internet and google-fu to find the answers to the questions below:

**Answer the following questions**

1. What command do you use to setup a git repository inside of your folder?
1. What command do you use to ask git to start tracking a file?
1. What command do you use to get updates from the class repository?
1. What command do you use to push your work to your homework repository?

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"The 1st set of GIT homework answers are complete"

## HTML & CSS Videos

You should have covered all of this information during Fundamentals, but if you feel like you need a refresher on some of the basics of HTML and CSS, you can watch the following videos! If you don't need a refresher, feel free to skip this section.

1. [HTML Intro (tags, content, attributes, semantic HTML)](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
1. [HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
1. [CSS Intro (including css files in HTML, elements)](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
1. [CSS Basics (colors, background, font properties)](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

## Fake Resume Page

![](https://imgur.com/gpMfn6n.png)

Grumpy cat is looking for a new job! Using what you know about HTML and CSS, help him by creating a resume website for him. (Note: You don't need to know 'real information' about Grumpy Cat -- just make things up!)

This is what he wants you to include and do for his resume:

- have an `index.html` file
- have an `main.css` file that is linked to the `index.html` file
- have HTML `boilerplate` code for `index.html`
  - _HINT:_ in your `index.html` file type `!` and press tab. A few basic HTML tags should populate your file, including `head` and `body`
- Include:
  - at least one header
  - navigation (these can be dummy links that don't go anywhere yet)
  - at least one list
  - change the font color in at least one place
  - change the background in at least one place
  - change the font in at least one place

## Fake Resume Page - Getting Started

1. Inside your `homework` folder for today, create a new folder called `resume_page`.
1. Change directories to `resume_page`.
1. From inside this file, create two files: `index.html` and `style.css`.
1. Using VSCode, open your files and add the HTML boilerplate code.
1. Create a heading level-one tag with the name: Grumpy Cat.
1. Open the `index.html` in your browser to confirm that everything is set up properly.
Reminder: To open your file with your browser, from the command line, type `open index.html`

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"resume index.html file is setup"

## Fake Resume Page - Adding Content

1. Insert a professional image of Grumpy Cat ('img' tag), it should be placed right after your 'h1' tags
1. Insert an unordered list of his past three work positions ('ul' tag)
1. Create links for LinkedIn and Facebook/Twitter pages ('a' tag). You can set this to a dummy link
1. Use level-three heading tags to create headings before the work positions and before the links

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"added initial content for resume site"

## Fake Resume Page - Adding Style

Add some style to your site and feel free to style it however you want! Here are some ideas:

1. Center your "h1" tag
1. Change the font of your "h1" tag
1. Change the color of the font of your "h3" tag
1. Add some space on the body of your application to make your site look more appealing.

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"added styling for resume site"

## Fake Resume Page - Adding Navigation

1. Create a nav bar with the links to LinkedIn, Twitter (whichever links you had created earlier); Remove the links section that you had created earlier in the homework
1. In the nav bar, also create a link to the 'index.html' page (maybe give it a name of `Home Page` in the bar), and a link to a file called "projects.html" (maybe call this `Projects` in the bar)
1. Create another html file in this folder called 'projects.html'
1. Copy the contents of the nav bar and information from the 'head' tag of your `index.html` file and paste it into your `projects.html` file<
1. Inside `projects.html`, create a level-two heading and add the text `Projects`
1. Check to make sure that your links work! When you click on "Projects" in your nav bar, does it open the `projects.html` document?
1. In `projects.html`, add three projects that Grumpy Cat has worked on. To do this simply, you can use an ordered list. If you're up for a little more of a challenge, create three columns: each column should contain the title and a description of their three most recent, successful projects

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"added project.html page and content - finished resume"

## Loops - Getting Started

![](https://cdn-images-1.medium.com/max/1600/1*bdUvVjXJk2SWuKck8XR1lQ.jpeg)

Now, let's get in a little bit of JavaScript practice.  Specifically, more loops!

1. In tonight's main `homework` folder (not inside `resume_page`!), create a `loops.js` file and complete the following section in that file.

## Loops - More Reps!

Pick **five** to tackle.

1. Create a loop that logs the numbers from 0-99 (ascending)
1. Create a loop that logs the numbers from 99-0 (descending)
1. Create a loop that logs the **EVEN** numbers from 0-98 (ascending)
1. Create a loop that logs the **EVEN** numbers from 98-0 (descending)
1. Create a loop that logs the **ODD** numbers from 0-99 (ascending)
1. Create a loop that logs the **ODD** numbers from 99-0 (descending)
1. Create a loop that logs the numbers from 49-72 (ascending)
1. Create a loop that logs the numbers from 81-26 (descending)
1. Create a loop that logs the numbers from 3-90 **that are multiples of 3** (ascending)

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"finished loop practice"

## Hungry for More?

### Git
- Check out this [tutorial](http://gitreal.codeschool.com/?utm_source=github&utm_medium=codeschool_option&utm_campaign=trygit) that includes videos about using git and some challenges for you to tackle.

### More for grump cat's site:
1. Insert a video of grumpy cat's work or his favorite YouTube video ('iframe' tag)
1. Add a level-three heading above his video with a title for the section
1. Insert a table with his contact info (`table` tag)
1. Add a level-three heading above his contact info with a title for the section

1. Give the image a 1px black border<br>
1. Give the body of the page a thicker border than the picture but only on the top and bottom of the page
1. Using HTML, insert a short blurb or biography with "p" tags
1. Using HTML, insert a short description above your "p" tag; use an "h3" tag
1. Make his name uppercase <strong>using CSS</strong>

1. Insert another image of grumpy cat, or an image of one of his projects, but make it round
1. Insert a button on both pages that links to opening an email to his email address
1. Style the navigation bar

### Loops
- Go back and finish all the loop problems!

---

## Deliverables

Inside of tonight's `homework` folder:

1. An `answers.md` file
1. A `loops.js` file
1. A `resume_page` folder with files: `index.html`, `projects.html`, and `style.css`

## Submission Guidelines
* Using that week's homework folder on your forked version of the class Github Repo, push your changes to your repository from your terminal by changing into your repository from your terminal and running the following commands:
* `git add .`
* `git commit -m "current week homework”`
* `git push`
* Fill out this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfUPnan89JtgRPEbK7GK2yXfUG18y5zzq3szuiXsQ6Md_Julw/viewform) with your github link for that specific homework. It will be the same Google Form for each homework.

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
