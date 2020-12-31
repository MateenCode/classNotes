![](/ga_cog.png)

---
Title: Collaboration with GitHub <br>
Type: Warm Up Exercise<br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Competencies: GitHub, Git, git branching, GitHub pull request, git push <br>
Prerequisites: Basic Git, HTML, CSS, JS<br>

---
## Collaborating with GitHub
## Intro
GitHub allows for amazing collaboration to happen! For this lab, you will be asked to complete the task in your unit 3 project groups. For this exercise, we will work together to get you setup to help collaboration this evening go smoothly.

## Deliverables
### Coder's Choice 
Using collaboration via GitHub, each group will create a new repo **outside the class repo** and collaborate to create the lab. Each person must make significant contributions to the functionality of the lab.
## Warm Up Exercise Tasks:
- set up the repo
- all members add something to the README.md
- make your functioning server.js file
  - don't forget your npm modules etc...
- make sure everyone has a very basic server running via one member writing the `server.js` and sharing the file via GitHub/git work flow
- You will have two branches to work with for the warm up exercise. The `master` branch is 'production quality' code it should be bug and error free - only push functioning code here. You will also have a dev branch - members should be merging their code together on the `dev` branch - then checking that their code works together. If it does, push it to `master` if it doesn't work, fix the code and try again.
## Setup
#### Make a plan/assign tasks
- [How to tell if you're working in groups](../homework/project_3/)
- To be sure everyone is getting practice pulling and pushing be sure to keep communication open on who is working on what task
- _Note:_ It is fine for the group to screenshare and work on one file simultaneously - feel free to create a way of working together that will help you get the deliverable complete
- _Note:_ Two people working on the same file at the same time is the most likely way to get a merge conflict! Communicate well to avoid this sort of time-suck!
### Make One New GitHub Repo
- Choose _one member_ to make a new GitHub repo **OUTSIDE** the class repository - this person will be 'the owner' - other members will be known as 'collaborators'
- The other member(s)/collaborator(s) will clone this repo
- _Note:_ This is a simplified workflow that is appropriate for a lab/group unit project for SEIR. In a job environment, you'll likely see much more complex workflows. That's ok! Choose the right tools for the job, don't over engineer for the task at hand and don't be like Kath and Dave from Portlandia:  [Get the Gear](https://www.youtube.com/watch?v=R3SFqV0hMyo)
#### The Owner's tasks
- go to own GitHub profile page and choose `create new`
- name the repo (GitHub offers randomized names if naming stuff is challenging for you and your group! hooray!)
- select `Initialize this repository with a README`
- create your new repo
- go to settings (upper right next to wiki/below `star` button)
- choose `collaborators` on left menu
- enter GitHub password
- ask your partner(s) for their GitHub handle
- add them and wait
- GitHub will send them an email and they must respond in order to gain access to the repo
- make sure your collaborator(s) have accepted your invite and let them clone the repo
- don't forget to `git clone` to get your own local version
#### The Collaborator's tasks (if there is more than one collaborator - _have one person do these steps at a time and then move on to the next collaborator_)
- Go to a location in your terminal that is OUTSIDE of the class repo in preparation for cloning the owner's repo
    note: you do not need to make a subfolder. Cloning will make your repo folder at the level where you're at
- Go to the owner's repo (link provided via email)
- choose the green `clone or download` button
- copy the link to the clipboard (double check that it is SSH if you are using SSH (this is how we set the class up - this should be the default. However, if you set it up with HTTPS - please choose that to prevent errors).
- in terminal in the correct location on your computer type `git clone ⌘ V` to clone the repo
- `cd` into the newly created directory
- `code .`
- add your name to the README.md - save it
- `git status` - you should see your modified README.md ready for `git add` and `git commit`
- go ahead and `git add` and `git commit`
- Note this is the ONLY time you should do this `git push origin master` (afterwards you should only push to your feature branches or the `dev` branch. But we just want to be sure you have the ability to push/pull right now)
- Go to GitHub and see your changes to the readme
#### All Member's Tasks Part 1
- in terminal, inside your new repo directory
   - `git checkout -b dev`  - you should get a message confirming you are now `on branch dev`
   - `git pull origin master` - you should pull the changes from the master branch, even though you are now on the dev branch to update your code to the working functional code
   - check via vscode that you all have the updated `README.md`
- Agree on who will write the `server.js` file
#### `Server.js` tasks (Choose one member to do this)
- `touch server.js`
- `npm init` - be sure to finish the prompts before going to the next step
- `touch .gitignore`
- In vscode, within `.gitignore`
    - `node_modules`
    - _it is critical to do this BEFORE adding/creating node modules vial `npm install`_
- `npm install express`
- `git status`
    - you should see all your files (`server.js`, `package.json`, `package-lock.json`) available for `git add` and `git commit`.  You SHOULD NOT see `node_modules` being added!  If they are, double check your `.gitignore` file.

- Write a very basic `server.js`
  - Your server should be able to `res.send('Hello World')` to a `/` route at `localhost:3000`
    - *DO NOT* try to add more modules, create more routes etc. in an effort to 'get ahead' on the hw right now - Warm Up Exercise is for helping make sure everyone can collaborate on git/github - new group work always starts a little slow. Be patient and make sure you get things right and squash the little bugs before they become big headaches!
  - `git add`
  - `git commit`
  - `git push origin dev` - this will send your changes to the dev branch
  - make a pull request via GitHub to merge these changes into the master branch
  - choose another teammate to check your work and if it all looks good (no merge conflicts, expected files uploaded)
  - teammate merges (via GitHub)

#### All Member's Tasks Part 2
 - everyone should be on the `dev` branch (`git branch` to confirm)
 - `git pull origin master`
 - everyone should have the `server.js` file, `.gitignore`, and the `package.json` and `package.lock` files
 - only the person who created the server and had it running should have `node_modules`
 - other collaborators should `npm install` and THEN should get the `node_modules` that way
 - everyone should now be able to run `nodemon` and have their `localhost:3000` display `Hello World`

### Workflow
- Try to abide by the below workflow. You will make mistakes that's ok - figure out how to move forward rather than to start over or do really hard to understand git commands we haven't covered. Keep practicing to get the work flow right!
![git/GitHub workflow](https://i.imgur.com/aAmxC0G.png)
### Commit Messages
- Making informative commit messages can be challenging especially when you are tired/stressed/pressed for time.  While you may remember what the message `asdfjkl;` meant and what you were working on - your collaborators won't.
### Next Steps
- Agree on what your app will be about
- Plan how you will tackle this project together

### Resources
- [Class Wiki](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-MAE/wiki)
- [Happy Fun Ball](../warm_up_exercise/Branching_Merging.md)
- [GitHub Guides](https://guides.GitHub.com/introduction/flow/?utm_source=onboarding-series&utm_medium=email&utm_content=read-the-guide-cta&utm_campaign=learn-GitHub-flow-email)
- [Another GitHub cheatsheet](https://education.GitHub.com/git-cheat-sheet-education.pdf)
