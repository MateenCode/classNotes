# CODE ORGANIZATION TIPS

## Folder structure

Put different types of files into their own folders.

* `.js` files go in a `js` folder
* `.css` files go in a `css` folder
* images go in an `images` folder
* `index.html` never goes into a folder: it must remain top-level so that when you host your app, the hosting service knows where to look to load the page.

![](https://i.imgur.com/bIJAU5W.png)

By putting different types of files into their respective folders, they are organized into their own cubby holes. If you add more `.js` files, or many images, for example, you easily will know where to find them without tripping over other files.

Remember to specify the correct **path** when linking your files:

![](https://i.imgur.com/bchaQmp.png)

The paths include the folder name in which the files are located.

## OOP Code Organization

In a large project, your code can start sprawling all over the place. You can easily lose track of where important code is located. This is especially true when dealing with a lot of distributed event handlers and methods that update the DOM.

Keep the same types of processes in their respective sections. You can do this by separating your application code into top-level objects.

Example:

* **event handlers** can go in an **EventHandlers** object.
* **user interface** methods that update the DOM can go in a **UI** object.
* **application logic** can go in an **App** object.

These are just examples -- you can organize however you see fit and in a way that makes sense for your app.

### Event Handlers

You could put all of your event handlers into an object:

```javascript
const EventHandlers = {
	onClickDoSomething: () => {},
	onClickDoThis: () => {}
}
```

You could look in your EventHandlers object and pick the right one for the right listener:

```JavaScript
$('button').on('click', EventHandlers.onClickDoThis)
```

### User Interface

You could put functions that update the DOM into an object:

```javascript
const UI = {
	addTextToDiv: () => {},
	changeImgSize: () => {}
}
```

### Application Logic

You can put your application logic -- data, processes, operations that do not affect the DOM, into an object:

```javascript
const App = {
	gameOver: false,
	generateRandomNumber: () => {},
	shuffleArray: () => {}
}
```

**Depending on your app**, there are many possibilties for how you can change this organization to suit your needs:

* You could put your app logic into multiple objects.
* You could combine event handlers and DOM updates into one object if you don't think they need to be separated.

```javascript
const Display = {
	onClickAddParagraph: () => {
		$('body').append('<p>hi</p>');
	}
}
```

### Event Listeners

Put your initial **event listeners** into the `window onload`, and have them trigger the respective **event handlers** which are located inside an object:

```javascript
$( () => {
  $('.element').on('click', EventHandlers.onClickDoSomething);
}); // end window onload
```


### Decoupling

If your `app.js` is getting too large to read, you can separate your js functionality into multiple files. The key thing to remember is to load the scripts in the correct order. Which js processes depend on which? Your `app.js` is included **after** your jQuery script. The same principle applies to multiple JavaScript files that you make.

From the previous example:

* A file containing the **App** object should be loaded first.
* A file contain the **UI** object should be loaded second.
* A file containing the **EventHandlers** object should be loaded third.

It wouldn't matter where the event listeners are loaded, because they are in a **window onload** closure which will always be loaded only when the DOM is rendered. But it would make sense to load them last since, when tracing the flow of information, the listeners depend on everything else.

Don't **decouple** your files unless you think it truly benefits your code organization.

### Comment your code!

![comment your code](https://i.imgur.com/mEldaOo.png)

Create headers to section off your code, including a brief summary of what the section does.

```javascript
//=====================
// startGame()
// Runs upon click of 'Start Game' button.  
// Creates the board and begins the timer for ...
//=====================

const startGame = () => {
...
}
```

Comment out console logs that you used in testing that may be necessary to revisit again with further development.  Make console logs informative as to why it's appearing!

```javascript
const evaluateWinner = () => {
  // console.log("evaluateWinner function has been called.");
  ...
}
```

## Github

### GitHub is YOUR GitHub

This is Cathleen's commit history on GitHub:

![cathleen github 1](https://i.imgur.com/gvHIqTp.png)<br>
![cathleen github 2](https://i.imgur.com/sInSFQq.png)

This commit history belongs to "James":

![james github](https://i.imgur.com/7dFyVPU.png)

This commit history belongs to "Andrew":

![andrew github](https://i.imgur.com/P2XOJPU.png)

As these scenarios can be created for various reasons (using someone elses' computer for example), there is no one fix.  However, think about what a future employer will see.  If this applies to your GitHub, research and find a solution.  Your work should be attributed to _you_.  


### git commit -m "asdf"

Commit messages are not a burden - they are integral part of any software project, let it be a single-developer writing a tool, or a big team of people collaborating on a project.  When you leave a project to rest for a few weeks or months, commits you’ve done with proper messaging and tagging become extremely important. Not only it is easier to see what has been done, but each commit has a small story behind those changes.

### Commit early, commit often.  

Every time you have a piece of working code, commit!  When something goes wrong, you'll have working code to revert back to.  Or you can hit `cmd Z` over and over and hope for the best.  

### Uninformative messages are those that do not convey any information when you read them.

For example:

- `add cli new`
- `fixes`
- `fix code review comments`
- `no message`
- `description`
- `wip`
- `hackz`

Stay concise and to the point.  A long commit message is usually a bad sign for too much stuff done in a single commit. A good commit message is usually one or two sentences.

### Leave insights, skip profanity

Feel free to swear in the traffic jam, but keep your code clean. You never know who will encounter it (including future prospective employers).  

[Commit Logs From Last Night](http://www.commitlogsfromlastnight.com/)

### Don't forget the README!

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [A curated list of awesome READMEs](https://github.com/matiassingers/awesome-readme)
- [A template to make good README (view the code 'raw')](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## Resources

[Perl Best Practices - Standards and Styles for Developing Maintainable Code](http://shop.oreilly.com/product/9780596001735.do)
