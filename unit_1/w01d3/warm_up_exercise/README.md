
Title: Shortcuts & Setting You Up for Success <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Kristyn Bryan<br>
Adapted by: Cathleen Wright, Karolin Rafalski<br>
Competencies: Spectacle, Atom shortcuts, Command Line & Keyboard shortcuts <br>
Prerequisites: None<br>

<hr>

## Learning Objectives
- Help us help you!
- The importance of starting good habits today
- Screen Real Estate and Window Management with Spectacle
- Mac Shortcuts
- Terminal Shortcuts
- VSCode Settings and Shortcuts
- Typing
- Misc.

## A Quick Note
We try to keep all of our notes updated with all the links working and images showing up, but sometimes things get moved around (especially when we just checked them a couple days ago!). If any links or images are broken, please let us know and we'll update them!

## Introduction

As a burgeoning web developer, you have a lot to learn. One really critical thing to focus on is starting good habits today. If you teach yourself the best ways to do things now, you won't have to go back and correct yourself later.  You'll also learn to code faster and have a better workflow, where you won't lose minutes switching between applications and windows. Utilizing keyboard shortcuts will also help you type faster and let you focus on the task at hand.

A lot of these steps will feel awkward at first, but the more you use them, the sooner they'll become second nature.  Part of succeeding is just taking a deep breath and taking a moment to practice the better way, then it'll get easier and easier.

There are hundreds, if not thousands, of little things you can do to make you a more effective coder. Here we're going to focus on a small group of things that will have the biggest impact for being ready for this course.

:closed_lock_with_key: We will be downloading applications to your computer.  You will need the password for your Mac in order to proceed.

<hr>

## Part 1 - Spectacle
- Spectacle helps you to move and resize your screens with the a few clicks on your keypad. You no longer have to waste time using your mouse to rearrange the size of the screen.
- Not only will this help to save you time, but it will help to add to the illusion that you are a bada$$ h4ck3r.

### :computer: Click on this link https://www.spectacleapp.com/ and download and install Spectacle.

Once it's installed, you should have little glasses ![spectacle](https://i.imgur.com/qyNXQn0.png) at the top, right of your screen.

### Allow Spectacle
- Spectacle needs to change your computer's privacy settings to allow this application.  To do this, in your Spotlight (open with `cmd` + `space`), type **Security & Privacy** or open **Security & Privacy** from the **System Preferences** icon in the dock.  Once open, you should see this:

![security](https://i.imgur.com/Dx1IrT4.png)

- Click on the lock in the bottom left.  You will be prompted to enter your computer password:

![lock](https://i.imgur.com/KfqESFZ.png)

- Click on Spectacle to give it permission:

![permission](https://i.imgur.com/atTt1fx.png)

- Click on the lock again to save the changes:

![save changes](https://i.imgur.com/BI6LBjA.png)

### Update Spectacle Preferences

- Now, click on the glasses at the top of your screen and select `Preferences`.

![preferences](https://i.imgur.com/uMswWwW.png)

- Enable Spectacle to load at login, or you will need to start the program every time you restart.

![Spectacle Login](https://i.imgur.com/HrU8pNq.png)

- You can update any of your spectacle preferences.  `x` on a banner and then click to 'record' your _three_ keystrokes.  
- You will likely use full screen, right half, left half and bottom half the most frequently.  

![Spectacle Shortcuts](https://i.imgur.com/9CXJWSm.png)

#### :hourglass: Activity (3 minutes)

- Update some of your Spectacle preferences.

#### :hourglass: Activity (3 minutes)
- Try to organize your windows using Spectacle (and then adjusting as needed).

<hr>

## Part 2 - Mac Keyboard Shortcuts

### Shortcuts for any occasion!

- Here are the shortcuts that you will use most often:

| Shortcut | Description |
|:--------------:|:---:|
|Command-A| Select **All** Items |
|Command-C| **Copy** the selected item to the Clipboard. This also works for files in Finder|
|Command-S| **Save** file |
|Command-V| **Paste** the contents of the Clipboard into the current document or app. This also works for files in Finder |
|Command-X| **Cut** (remove) the selected item and copy it to the Clipboard|
|Command-Y | **Redo** - something you undid (when you've used Command-Z)|
|Command-Z| **Undo** the previous command/typing|
|Command-Shift-4| Take a screenshot |
|Command-Spacebar| Open Spotlight |

#### :hourglass: Activity (5 minutes)
- Open your Desktop or Documents in vscode
- Go to student examples
- Make a file
- Copy ALL (command A)the text from this file (you can copy from the browser)
- Paste (command V) the text into your new file
- Save (command S) - there is a blue dot on the top tab of your file that should disappear once your file has successfully saved
- Undo (command Z)  - your text should go away
- Redo (command Y) - your text should come back
- Cut (Command X) - the title of your copy of this document
- Paste (Command V) - to the bottom of your copy the document
- Save (Command S) - one final time
- take a screenshot of something

:computer:  [Additional Mac Keyboard Shortcuts](https://support.apple.com/en-us/HT201236)

#### :hourglass: Activity (2 minutes)


<hr>


## Part 3 - Command Line in Terminal

- You will find yourself having to re-run applications when testing your app or you will find yourself needing to retype certain lines over and over again. Be lazy! It will give you more energy for the important stuff.

#### Command Line Shortcuts

##### The two most handy ones for you right now are the up arrow and tab:

If you would learn any two - learn these!

:arrow_up: Are you running the same command over and over again? Use the **up arrow** to show your previous commands. Hit **enter** to run them.

:star: Use **tab** to autocomplete a file or folder name by beginning to type it out.  If it's not autocompleting, you may be in the wrong directory!

| Shortcut | Description |
|:---:|:----:|
|Control-A| Go to the start of the prompt |
|Control-E| Go to the end of the prompt |
|Control-U| Clear the current line |
|Control-C| Stop the running process (works for many, but not all) |
|Command-K| Clear the window |



:computer: Additional Command Line Shortcuts for Terminal can be found on our [class wiki](../../../../../wiki/Terminal-Cheatsheet).

#### :hourglass: Activity (5 minutes)
- Open your terminal and let's try out a few terminal shortcut commands while completing the steps below.  
- You can open terminal via the dock, or by using Spotlight Search (`cmd` + `space`) and typing `terminal`.  

1. Create a folder on your desktop called `deleteme`.
    - `cd Desktop` **Tab it** only type `cd De` and then press tab
    - :eyes: `Desktop` is spelled by your computer with a capital `D`!  Case sensitive matters when searching for a directory or file!
    - `mkdir deleteme`
2. Inside `deleteme`, create a file `test.html`.  
    - `cd deleteme` **Tab it** only type `cd de` and then press tab
    - `touch testing.html`
    - You can name your file whatever you want, but it must end with `.html`!
    - press the up arrow `touch test.html` should reappear
    - `control-u` clear the line of text
    - `control k` clear the window
    - `ls` - make sure you're still in the right place


<hr>


## Part 4 - Vscode Shortcuts
# Awesome VS Code Shortcuts

|Keyboard Symbols| Name|
|:--------------:|:---:|
| ⌘ | command |
| ⌃ | control |
| ⌥ | option/alt |
| ⇧ | shift   |

[Overview of the VS Code Interface](https://code.visualstudio.com/docs/getstarted/userinterface)

### PDF summary of all keyboard shortcuts

[For MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
* Note: all the shortcuts shown below are for macOS.

[For Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

#### To edit the default shortcuts
- Pull down menu: `Code` -> `Preferences` -> `Keyboard Shortcuts`

### Launching from the command line
- You can run VS Code from the terminal by typing `code` after adding it to your PATH. 
- To add `code` to the PATH, open the Command Palette (⇧⌘P) and type `shell command` to find the Shell Command: `Install 'code' command in PATH` command.

![screenshot](https://i.imgur.com/R2sD7oX.png)

- Restart the terminal for the new `$PATH` value to take effect. You'll be able to type `code .` in any folder to start editing files in that folder or `code filename.txt` to open that file in VS Code.

### Save Your File
- `⌘S`

### Undo/Redo Typing
- `⌘Z` - undo typing
- `⇧⌘Z` - redo typing

### Increase/Decrease Font Size
- `⌘+` - increase
- `⌘-` - decrease

### Wrap text in Single Quotes, Double Quotes or Backticks
- highlight the text you want to wrap in quotes
- press `'` or `"` 
- Note: you can use the same process to wrap text in parenthesis, curly braces, and square brackets!

### Insert HTML boilerplate
- start with a file that has an `.html` extension
 - type `! + tab`

### Find a Word in a File
- `⌘F`
- Close by pressing `esc`

### Find a Word in a Project
- `⌘⇧F`
- Close by pressing `esc`

### [Side by side editing](https://code.visualstudio.com/docs/getstarted/userinterface#_side-by-side-editing)
- You can open as many editors as you like side by side vertically and horizontally. If you already have one editor open, there are multiple ways of opening another editor to the side of the existing one:

- `⌘\` to split the active editor into two.
- Click the Split Editor button in the upper right of an editor. (it looks like a square split into two)
- Drag and drop a file to any side of the editor region.


### Toggle Comments Multiple Lines at a Time
- Highlight the code block you want to comment out, then `⌘/`
- Press  `⌘/` again to uncomment the code.
- Note: as long as you have saved your file with the proper extension: `.html`, `.css`, `.js` (etc.) the correct comment characters will be used for that language

![screenshot](https://i.imgur.com/goRFJ8a.png)

![screenshot](https://i.imgur.com/fNkHO26.png)


### Indent a Block of Code
- highlight the block of code you want
- `⌘]` - Move code to the right (alternative `tab`)
- `⌘[` - Move code to the left (alternative `⇧tab`)

![screenshot](https://i.imgur.com/FxG23x4.png)

![screenshot](https://i.imgur.com/GsebGUj.png)


### Move a block of Code
- `⌥ Up` (Up - up arrow)
- `⌥ Down` (Down - down arrow )

![screenshot](https://i.imgur.com/CWviaE1.png)

![screenshot](https://i.imgur.com/YlGhEqm.png)

- Note: some indentation may be lost in some cases

### Replace Across Multiple lines
- Highlight text to be replaced
- `⌘D` - to highlight next instance (as many as you'd like )
- `⇧⌘L` - to highlight all instances
- <details><summary>Screenshot Highlight One Instance of Text </summary>

![screenshot](https://i.imgur.com/rzbqt3V.png)</details>
- <details><summary>Screenshot Highlight Subsequent Text `⌘D` </summary>

![screenshot](https://i.imgur.com/ckn1phO.png)</details>
- <details><summary>Start Typing (See multiple blinking cursors) </summary>

![screenshot](https://i.imgur.com/ERQ7p7n.png)</details>
-  <details><summary>Click outside of selected area</summary>

![screenshot](https://i.imgur.com/NeKG7jI.png)</details>


## Extensions
[Open in Browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)

<hr>

## Typing
- Coding JavaScript often means reaching for keys that you're not used to. Take 2-5 minutes every day to practice
- Try typing.io that specifically lets you practice typing code
- You can also google `learn to type free` - to find the right typing practice for you, even going back and practicing touch typing regular characters can help you speed up


## Misc
- We covered a lot of different short cuts and tools today. Come back to this markdown as a reference and look up the things we did and keep practicing
- This course is intense, but it should never get in the way of self-care, make sure you are eating well, getting out of the house, stretching, sleeping enough, and finding ways to unwind that isn't in front of a screen
- There is an expression: "If you don't have time to do it right the first time, when will you have time to do it right a second time?" So take those extra moments to do it right - your future self will thank you

## Additional Resources

- [f.lux](https://justgetflux.com/)<br>
- [VScode Extensions](https://code.visualstudio.com/docs/editor/extension-gallery)<br>
