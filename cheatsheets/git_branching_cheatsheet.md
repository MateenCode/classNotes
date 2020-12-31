# Git Branching

It's never too early to practice branching!

### The Basic Steps

Your project will begin with one branch, master. After your initial commit, it is a good idea to work on branches only from the point on.

**You should always add and commit before switching branches (even if you're going to delete the changes you made) or else your changes will follow you! 👻**

Here's the basic workflow:

1. Create a new branch  
`git checkout -b <new_branch_name>`  
ex: `git checkout -b styling`

2. Make changes to your code
3. Add and commit as needed
4. When you are ready to merge your code into the master branch  
`git checkout master`  
`git merge <other_branch_name>`  
ex: `git merge styling`

5. Delete the branch that has been merged in if you no longer need it  
`git branch -d <branch_name>`  
ex: `git branch -d styling`

6. At any time, you can see all of your branches using `git branch`
