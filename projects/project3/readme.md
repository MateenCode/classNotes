# ![][ga-logo] Project #3: Build a Full-stack App as a Team

### Overview

You’ve already worked in small groups to accomplish various labs and exercises, but this time **we’re going to challenge you to work on a whole project with a small team.**

Not only will you be asked to **exercise additional creativity** in designing your own project, your instructors will partner you with other classmates to architect, design, and collaboratively build an app together.

While your last project taught you how to get started with Ruby, SQL, & Ruby on Rails, this project you'll be building something exciting with **Node, Express, and Mongo.** More importantly, you're going to be working with **APIs**: an API you produce (on the server-side) and consume (via AJAX on the client-side), and maybe even an outside API that you consume!

**This is meant to push you both technically and collaboratively.** It’s a lot harder to work in a team than to work by yourself, but that's most likely what you’re going to find yourself doing in your first development job after WDI, and **it's important to learn how to work together.**

> Make it work, and make it *sweet*.
> 
> — *[Tim Gunn][tg], slightly drunk in the afternoon…*

---

### Technical Requirements

Your **team** must:

- **Present an idea** to the instructors with a **deck**, covering the period of [project inception][inception], that includes (**at least**):
  - the application name, slogan and elevator pitch,
  - your team members and their roles/goals,
  - the problem you are going to solve with your app,
  - the solution your app provides, and the 3 central values or benefits of it,
  - your product's MVP:
     - wireframes for the central interactions, and
     - an underlying data model,
     - a list of included technologies and third-party APIs consumed (if any)
         - this inlcudes the OAuth provider(s) your app will use for authentication
- **Document your app's RESTful API**.
- **Craft thoughtful user stories together**, as a team, and manage and distribute those user stories to team members based on skills and interests using **Trello**.
- **Manage team contributions and collaboration** using Git, GitHub and a standard team work-flow.
- **Present the app at the end of the sprint** as a team.
- **Perform a team-wide retro** and at least one **code-review** after the completion of the sprint.

Your app must:

- Use **MongoDB & Express** to CRUD your data.
- **Produce a RESTful API that exposes at least one model**.
- **Consume its own API using AJAX**.
- **Authenticate users using at least one OAuth provider**.
- **Restrict access to the Creation, Updating & Deletion of resource(s) using an authorization middleware function**.
- Be **deployed online** using **Heroku**.

You do not need to, but may:

- Make a single-page app (SPA); you can have multiple views and EJS as necessary, due to technical constraints.
- Use Web Sockets; while you must use AJAX to dynamically generate HTML from a JSON API, you may or may not add a Web Socket interface.
- Consume an external API.

---

### Necessary Deliverables

- A **[pitch deck][pitch-deck]**, delivered as a team to the
  instructors **this Friday**. Every team member must speak during the pitch. Make sure to practice so that everyone knows which slides they should present!
- A **working app, built by the whole team**, hosted somewhere on the Internet. When you're pairing, make sure to take turns "driving" so that every team member has commits from his/her username.
- A client application **that consumes your own API**, hosted somewhere on the Internet.
- A **link to your hosted, working app** in the URL section of your Github repo.
- A **team Git repository hosted on Github**, with frequent commits from *every* team member dating back to the *very beginning* of the project. Remember, don't start coding until after the pitch.
- **A `README.md` file** with:
    - Explanations of the **technologies** used (including outside APIs).
    - A couple of paragraphs about the **general approach you took**, including division of tasks.
    - **Installation instructions** for the app. Exactly what must someone do to run your app locally on their machine?
    - Link to your **Trello**.
    - Links to your **planning docs**, including data models, wireframes, and your presentation deck.
    - Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome.

---

### Suggested Ways to Get Started

1.  **Identify roles** on the team, which may be (but are not limited to):
    
    - **Scrum Master**: the leader of the Agile processes (stand-ups, retro) and manager of Trello.
    - **GitHub Manager**: the primary person for running Git and managing code share for the whole team. This person will also have to *merge* pull requests from all team members.
    - Presentation Manager: the primary speaker for the pitch deck, who runs and creates the presentation. Everyone should speak during the pitch, but it's okay if one person does the majority of the speaking.
    - **Documentation**: the person in charge of the README, etc.
    - **Designer**: the person in charge of style.
    - **Database manager**: this person will be in charge of creating and managing the models and datasets used in the process.

    You *don't have to fulfill any of these roles!* They are only there in case someone on the team *really* wants to "own" these things. None of those roles describes the entire workload of a team member. Just creating the readme.md is not a sufficient task for the project sprint.
2.  **Read the docs for whatever technologies / frameworks / npm module / APIs you use**.
3.  **Be consistent with your code style.** You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort. You should define a style guide as a team and it's important that you stick to it. (semi-colons or no semi-colons? comma separated variables or var every time? one routes file per resource or only one routes file for the app?)
4.  **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
5. **BRANCH! BRANCH! BRANCH!** IN WEEK 9, WE BRANCH!

---

### Potential Project Ideas

For this project, we want you to work with your team to build a creative product that you actually think someone will want to use. We won't have time to do tons of customer research, but take some time to brainstorm. If you're struggling for ideas, the ones below could help get you started.

##### Bucketli.st

Besides finishing WDI, you surely have one or two things you'd love to do with your life. Let's get 'em on paper! You could integrate with a third-party location-based API to allow users to search for a location or venue to add to their bucket list items.

##### Survey App

Imagine sending out a survey to everyone in the class – what should we eat for lunch today? Or 1-5, how well did you understand what we just learned? It would be even more awesome if it were realtime, so you could see answers pouring in as they're submitted.

##### Hello, Comments

Imagine the benefits of having an API where you could embed comments into any website you want. They could even update in realtime if you wanted, so that you'd never have to refresh the page. CMS providers across the world could quit writing code from scratch and just embed your widget instead.

---

### Project Feedback + Evaluation

This project will be evaluated based not only on the code quality and final product, but also on how you work together as a team. The most important part of this project is to practice working with other developers, like you will most likely do in a job (unless you freelance on your own).

It's better to have a very simple app and work together well, than to have a complex app and tons of drama and fighting.

---
<!-- LINKS -->

[ga-logo]:    https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png
[tg]:         http://25.media.tumblr.com/tumblr_m8vi5ze9sa1ql5yr7o1_400.gif
[pitch-deck]: https://pitchdeck.improvepresentation.com/what-is-a-pitch-deck
[inception]:  https://blog.pivotal.io/labs/labs/agile-inception_knowing-what-to-build-and-where-to-start
