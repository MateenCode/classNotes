# Git Prompt Cheatsheet

<br>

## Identifying when you are inside a repo

##### This is **NOT** a `git` repo

<img src="assets/git-prompt/git-prompt-01.png" width="600">

##### This **IS** a `git` repo!

<img src="assets/git-prompt/git-prompt-02.png" width="600">

> **It says `on <branch>`, which is `master` by default!**
> 
> You can also tell by typing `ls -la`/`ll`, and check if there is a
> `.git` folder. <br> However, this only works *in the base of the repo*!

<br>

## Information about your repo

##### The name of your current branch...

<img src="assets/git-prompt/git-prompt-03.png" width="600">

> ... is `master`, in this example. It is `master` by default.<br>
> It could be something different, like `alternate_working`:

<img src="assets/git-prompt/git-prompt-04.png" width="600">

##### The state of the files...

<img src="assets/git-prompt/git-prompt-05.png" width="600">

> Between the brackets `[]` there are a few different symbols that express <br>
> the state of the repo. It's a quick way to keep track of what you'd see <br>
> when using `git status`.

<br>

## Tracking the state of the repo: `[+!?$]`

#### `[?]`: There is a new (untracked) file that has been *created*

<img src="assets/git-prompt/git-prompt-06.png" width="600">

> You can see exactly how the **`[?]`** appears, here:

<img src="assets/git-prompt/git-prompt-07.png" width="600">

---

#### `[!]`: There is a tracked file that has been *changed*

<img src="assets/git-prompt/git-prompt-08.png" width="600">

> You can see exactly how the **`[!]`** appears, here:

<img src="assets/git-prompt/git-prompt-09.png" width="600">

---

#### `[+]`: There are changes that are *staged* (or "added")

<img src="assets/git-prompt/git-prompt-10.png" width="600">

> You can see exactly how the **`[+]`** appears, here:

<img src="assets/git-prompt/git-prompt-11.png" width="600">

---

#### `[$]`: There is something in your [stash][git-stash]!

<img src="assets/git-prompt/git-prompt-12.png" width="600">

> You can see exactly how the **`[$]`** appears, here:

<img src="assets/git-prompt/git-prompt-13.png" width="600">

[git-stash]: https://git-scm.com/book/en/v1/Git-Tools-Stashing


