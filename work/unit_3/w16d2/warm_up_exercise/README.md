![](/ga_cog.png)

<hr>

Title: Project Management<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Original creator: Kristyn Bryan for WDIR-Panthalassa<br>
Adapted by: Cathleen Wright<br>
Competencies: Agile, Scrum, Trello<br>

<hr>

![thecustomer](https://i.imgur.com/hi5YlU7.png)

# Agile Development

Agile development uses four clear [delivery vehicles](https://www.atlassian.com/agile/delivery-vehicles) to bring structure to any agile project:

- epics
- user stories
- versions
- sprints

![delivery](https://i.imgur.com/tbUAaEk.png)

By working with these vehicles, software teams are able to organize their work such that they can respond to customer feedback and change from the original plan of the project without feeling like the walls have crumbled around them. The ability to change and adapt future plans based on current insights is a hallmark of agility.

<hr>

## :boom: Scrum

### History of Scrum

[Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) was first defined as "a flexible, holistic product development strategy where a development team works as a unit to reach a common goal" as opposed to a "traditional, sequential approach" in 1986 by Hirotaka Takeuchi and Ikujiro Nonaka in the New Product Development Game. Takeuchi and Nonaka later argued in The Knowledge Creating Company that it is a form of "organizational knowledge creation, especially good at bringing about innovation continuously, incrementally and spirally".

They called this the holistic or rugby approach, as the whole process is performed by one cross-functional team across multiple overlapping phases, where the team "tries to go the distance as a unit, passing the ball back and forth". (In rugby football, a scrum refers to a tight-packed formation of players with their heads down who attempt to gain possession of the ball.)

As developers, you will work with your team (developers, product managers, project managers, designers, etc.) to get a product out. With the Scrum method, everyone works on the same team and focuses on what needs to be done to reach the final goal.

### Daily Scrum

Each day during a sprint, the team holds a daily scrum (or stand-up) with specific guidelines:

All members of the development team come prepared. The daily scrum...

  ...starts precisely on time even if some development team members are missing<br>
  ...should happen at the same time and place every day<br>
  ...is limited (timeboxed) to fifteen minutes<br>

Anyone is welcome, though normally only scrum team roles contribute.

During the daily scrum, each team-member answers three questions:

:one: What did I do yesterday that helped the development team meet the sprint goal?<br>
:two: What will I do today to help the development team meet the sprint goal?<br>
:three: Do I see any impediment that prevents me or the development team from meeting the sprint goal?<br>

Any impediment (stumbling block, risk or issue) identified in the daily scrum should be captured by the scrum master and displayed on the team's scrum board, with an agreed person designated to working toward a resolution (outside of the daily scrum). No detailed discussions should happen during the daily scrum.

_Sound familiar?_

### Kanban
Another popular approach to development is [Kanban](https://www.atlassian.com/agile/kanban). Kanban and scrum share some of the same concepts but have very different approaches.  They should not be confused with one another.

![kanban v scrum](https://i.imgur.com/CI1UgLV.png)

The work of all Kanban teams revolves around a Kanban board, a tool used to visualize work and optimize the flow of the work among the team.  A basic kanban board has a three-step workflow: To Do, In Progress, and Done.  The Kanban methodology relies upon full transparency of work and real-time communication of capacity, therefore the kanban board should be seen as the single source of truth for the team's work.

![kanban board](https://i.imgur.com/4kfEDN2.png)

### The Different Types of Project Management

<details><summary>A comic from toggl</summary>

  ![project management comic](https://i.imgur.com/IMPvTZd.jpg)
</details>

## :boom: Tracking in Agile Development

There are few different tools that can be used to plan scrum development.  Real-world projects could have the following lists on their boards organized from left-to-right:

- Ice Box (aka Backlog)
- Current (aka Planned or To-Do or Ready)
- Sprint (aka In Progress)
- Done

### Jira & Trello

For building smaller applications when don't need all the fancy stuff that comes with [Jira](https://www.atlassian.com/software/jira), we recommend [Trello](https://trello.com/) to mimic the flow that most of you will be using during production!  Each column is referred to as a "list" and inside the list sit "cards". Each of these cards is meant to contain information to create one feature of your application.

- Each User Story will be a Trello Card
- Only one person may take ownership of a card
- Only one card should be claimed at a time.
- Depending how you decide to do this with your team, each card may also represent a branch in Github (this is how it works in Jira).

- The User Story cards can contain:
  - The details for the story in the description section
  - Use the Checklist to track tasks or steps necessary to complete the story.


![Jira Example](https://i.imgur.com/AZYkGcP.png)

![Trello Example](https://i.imgur.com/L6R0X82.png)

![in Progress](https://i.imgur.com/uVHY2Ml.png)

### Github Issues 

You can use the Github Issues! 

![what it looks like on Github](https://i.imgur.com/ZFtuGX5.png)

### Github & Zenhub

[Zenhub](https://www.zenhub.com/) is another Agile project management tool that you can use.

![zenhub](https://i.imgur.com/2LTpOKA.png)

<hr>

## :boom: User Stories

### What are they?
- Key component of the initial planning for an Agile project
- Defines small chunks of business value which can be implemented in a period of days to weeks
- Captures what a user does or needs
- Commonly formulated by questioning the customer/user
- Often initially written on 3x5 index cards
- _NOT_ a programming To-Do List

### Formatting Guidelines

- As a [role], I can [feature] so that [reason].

When writing user stories, using this pattern will help you focus on what should be happening with your application.  In some instances the suffix is redundant and can be be removed:

> As an administrator, I want to approve photos before they are posted so that I can make sure that they are appropriate.

> As an account owner, I can check my balance online.

> As a player, I want to be able to view a list of high scores for inspiration and to impress my friends if I make the list.

> As a user, I want to be able to collapse the details of a note so that I can more easily focus on the notes I'm interested in.

## :boom: Scrum Poker and Estimating Stories

![scrum poker](https://i.imgur.com/oeOQp8L.png)

Planning poker, also called Scrum Poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed.

### How to Play

Planning poker is based on a list of features to be delivered, several copies of a deck of cards and optionally, an egg timer that can be used to limit time spent in discussion of each item.

- The feature list, often a list of user stories, describes some software that needs to be developed.

- The cards in the deck have numbers on them. A typical deck has cards showing the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) including a zero: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.  Consider the number to represent the hours that it might take to complete the work.
- Count to three and then hold up your cards  (or use the calculator on your smartphone to display your number to show your number estimation).

By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.  Doing planning poker will help you figure out how long your overall plan will take, sets time aside to discuss any unforseen problems before coding begins, and also might help you figure out who to assign to which task.

<hr>

## :clock10: Activity

You're creating a dating app with a small group!  How do you get started?!

1. Decide with your partners whether to create Github Issues (with or without Zenhub) **OR** create a Trello account.  Everyone should have access to the planning board on their own machine (not just via screen share).  

    - **Github:** If you want to use Github issues, _one_ person should create a repo and add your partners as a Collaborators in the Settings with their GitHub @handle.  Everyone should have access to the repo in GitHub on their machine (not just via screen share).  _Make sure to use GitHub, not GitHub Enterprise!  You do not have to clone or fork this repo locally, and the owner can delete it after this morning exercise._

    - **Trello:** When making your Trello account, be sure to take note of your screenname OR update the screenname that they automatically assign to you to something that you will remember (and that is at least semi-professional).

2. Create the lists for "To-Do", "In Progress", "In Review", and "Done" (or the names that most make sense to you from the ones listed above).

3. Come up with at least four user stories for your dating app.  

4. Create cards that split up the user stories/work into pieces that can be individually tackled.  Think about what files each card might be dealing with.  Use checklists or add additional details to the cards with this information.  

5. Discuss which card that you'd like to take and work on for your project. Remember - only take **one card**! It's advisable to select cards that won't have you working inside the same file - this way you won't have merge conflicts. *Add yourself* to the card and move it over to the "In Progress" list.  

6. If you have extra time, give Scrum Poker a try with your cards!

## Planning Boards

- [Trello](https://trello.com/)
- [Notion](https://www.notion.so/)
- [Jira](https://www.atlassian.com/software/jira)
- [Mastering GitHub Issues](https://guides.github.com/features/issues/)
- [Zenhub](https://www.zenhub.com/)
- [Comparison of Scrum software](https://en.wikipedia.org/wiki/Comparison_of_Scrum_software)

## References
- [Epics, stories, versions, and sprints](https://www.atlassian.com/agile/delivery-vehicles)
- [History of Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development))
- [Origin of Daily Stand-Up](https://www.linkedin.com/pulse/20140926150354-136414-the-origin-of-the-daily-stand-up/)
- [Scrum Poker](https://en.wikipedia.org/wiki/Planning_poker)
- [Scrum Poker](https://www.mountaingoatsoftware.com/tools/planning-poker)
- Why is the Fibonacci sequence used in Scrum Poker? There are many [opinions on this](http://stackoverflow.com/questions/9362286/why-is-the-fibonacci-series-used-in-agile-planning-poker).
