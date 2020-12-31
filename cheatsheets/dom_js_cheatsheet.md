# JavaScript and the DOM

## Quick Reference

- [The standard, complete reference will always be MDN.][mdn-dm]
- [Some of the below is taken from Christian Heilmann's DOM cheatsheet.][ch-dom]

#### Document

- **`document.createElement("tagname")`**: creates a new element Node of
  the given tag name (eg, `"h1"`). You provide the name as a string.
  [See here for more.](#creating-elements)
- **`document.getElementById("id")`**: retrieves the element with the 
  given ID as an Node (DOM) object. Good for quickly finding specific 
  elements. [See here for more.](#basic-selectors)
- **`document.querySelectorAll("CSS selector")`**: retrieves all 
  elements that fulfill the given query selector as a 
  [`NodeList`][mdn-nl] (a list of DOM objects that
  [does not fully implement the Array API][nodelist]). Good for dynamic
  queries or getting multiple elements.
  [See here for more.](#query-selector-api)

#### Node (a JavaScript object representing a DOM element)

Called on the objects returned from the above, `document` methods…

- **`Node#appendChild(newNode)`**: adds `newNode` as a new (last) child
  node (element) of the given `Node` object.
  [See here for more.](#inserting-and-removing-elements-from-the-dom)
- **`Node#childNodes`**: a property holding all of the nodes
  (elements) it contains, or "child" nodes, of the given `Node` object.
  They are stored as a `NodeList`. [See here for more.](#domnode-tree-traversal)
- **`Node#parentNode`**: a property holding the node (element) that 
  contains, or is the parent of, the given `Node` object.
  [See here for more.](#domnode-tree-traversal)
- **`Node#<attribute>`**: properties that hold (or can set, using `=`) 
  any of the HTML attributes on the DOM element that the given Node 
  object represents. These include things like: `id`, `src`, 
  etc. There are other methods and ways of doing this, including
  `#className`, `#getAttribute()`, and `#setAttribute()`, but this is 
  the simplest format. 
  - [See here for more on attributes.](#getting-and-setting-attributes-except-classes)
  - [See here for more on classes.](#getting-and-setting-classes)
- **`Node#textContent`**: a property that can be used to interact with 
  the given Node object's text content.
  [See here for more.](#getting-and-setting-text-and-html-directly)

## Document-level API

#### The `document` Object

When we are accessing the DOM, we will do so by referencing
[the **`document`** object][mdn-dc].

```javascript
var doc = document;
```

This `document` object is a global variable, meaning it's accessible 
from any JavaScript code running on the web page. In general, when we 
write our own JavaScript code we very much want to stay away from 
declaring global variables, lest they interfere with `document` or 
other variables in the global scope. In general:

```javascript
// do this, declare a local variable
var myVar = 1;

// don't do this (forget the var), which declares a local variable
myVar = 1
```

#### Creating Elements

Using the `document` object, we can create HTML elements dynamically
as `Node` objects (see below).

- **`document.createElement(…)`** - spins up a brand spanking new HTML 
  element… *Out of thin air no less!*

```javascript
/*
   We can easily create new elements 
   "div" is the element type we want to create,
   and is the only argument we pass to the method.
*/ 
var newDiv = document.createElement("div");
```

- **`document.createDocumentFragment(…)`** - creates a node on the DOM
  tree (element) and some number of ancestor nodes (elements it
  contains).

> [Document fragments][mdn-df] are important if you want to insert a 
> bunch of HTML into the page at once. Since they exist in memory, and 
> are not part of the DOM tree (until they are appended), adding nodes 
> to them does not cause page reflow, which is a slow operation.

```javascript
var newDiv = document.createElement("div");
var docFragment = document.createDocumentFragment();

docFragment.appendChild(newDiv); // see inserting elements below…
```

#### Basic Selectors

**The selector API is the arm by which JavaScript can grab and work with 
elements in the DOM tree.** Remember, the DOM is a hierarchy of "nodes." 
This is a key point to keep in mind as we work with the different 
selectors.

Each of these selectors returns `Node` objects.

- **`document.getElementById(…)`** - get an element given it's ID.

```javascript
/* This would return the node for an HTML element looking like:
   <div id="aDiv" >Text in here</div> 
*/
var aDiv = document.getElementById("aDiv");
```

- **`document.getElementsByTagName(…)`** - get all elements by "tag 
  name."

```javascript
// Will return a `NodeList` of all the elements that are <div>
var divs = document.getElementsByTagName("div");

/* The [0] allows us to indicate at which index in the nodeList
   we would like to retrieve an element.
*/
var firstDiv = document.getElementsByTagName("div")[0];
```

- **`document.getElementsByClassName(…)`** - get all elements by `class` 
  name. This is a common and very popular selector. 

```javascript
/* Will return a `NodeList` of all the elements that have
   a class of blue like these <li> elements below: 
     <ul> 
        <li class="blue">Item 1</li>
        <li class="blue">Item 2</li>
     </ul>
*/
var blueClass = document.getElementsByClassName("blue");

/* We can also use an index to retrieve a specific
   element.
*/
var firstBlue = docuemnt.getElementsByClassName("blue")[0];
```

- **`document.getElementByName(…)`** - get an element given it's `name` 
  attribute.

```javascript
/* This would return the nodes for an HTML element looking like:
    <input type="radio" value="1" name="team"> 
    <input type="radio" value="2" name="team">
*/
var inputs = document.getElementsByName("team");
```

## "Query" Selector API

[Query selector methods][mdn-qs] allow us to grab elements from the DOM 
using CSS selectors. They can be called on the `document`, or on `Node` 
objects themselves.

> Remember that when document is used, it will try to match from the 
> entire page, if an element is used, only descendants of that element 
> will be matched.

- **`document.querySelector(…)`** & **`Node#querySelector(…)`**

These methods return a single `Node` object: the first element they find
that matches the given CSS query string.

```javascript
/* With no preceding punctuation, the string "body" is interpreted
   as the tag name <body>.
*/
var body = document.querySelector("body");

// Gets the first element with a class of "selected."
var blue = document.querySelector(".blue");

// Gets the element with the ID "container." 
var container = document.querySelector("#container"); 
    
/* Using query selector on a `Node` object searches only 
   children of that element.
*/
var childSubElement = container.querySelector("#sub-element");

// Gets the first image with class of "button." 
var img = document.body.querySelector("img.button"); 
```

- **`document.querySelectorAll(…)`** & - **`Node#querySelectorAll(…)`**

These methods take the exact same argument as above. However, they will 
return *all* matched elements, not just the first. They always return a 
`NodeList`. If no elements are matched, then an empty `NodeList` is 
returned. 

```javascript
// Grab all of the <div> elements:
var divs = document.querySelectorAll("div");

/* This would grab all of the <tr> (table row) 
   elements from the <table> with `id` "myTable."
*/
var trs = document.getElementById("myTable").querySelectorAll("tr");

// Now we can iterate over the table rows:
for (var i = 0, len = trs.length; i < len; i + +) { 
  // Change each elements className to "rd."
  trs[ i].className = "rd";
}
```

## Node-level API

Within the `document` is a data structure known as the DOM tree.
Everything on a website can be found somewhere in the DOM tree, as a
"node." The nodes we are interested in are called "elements:" nodes
that represent a tag, or element, in our HTML.

For our purposes, we will call the JavaScript representation of an
element a [`Node` object][mdn-no], and it's actual DOM presence (on the
web page) as an [`Element`][mdn-el]. In reality, it's *both*.

#### DOM/Node Tree "Traversal"

Traversal means selecting DOM elements based on their relationship
to others. In a tree, all elements are either ancestors, descendants,
or siblings of all other elements. Direct descendants are **children**,
and the direct ancestor is the **parent**. Two elements that share a 
common parent are **siblings**.

- **`Node#childNodes`** - a property that holds a `NodeList` for all the 
  children of an element.

```javascript
/* Will return all the elements enclosed within
   the <div>:
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div>
*/
var pTags = document.getElementById("aDiv").childNodes;

//we could grab just the first like this
var firstPTag = document.getElementById("aDiv").childNodes[0];
```

- **`Node#firstChild`** - a property that holds the first child element 
  of a parent element.

```javascript
/* Will return all the elements enclosed within
   the <div>:
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div>
*/ 

var firstChild = document.getElementById("aDiv").firstChild;
firstChild.textContent
//=> "Some text"
```

- **`Node#lastChild`** - a property that holds the last child element of
  a parent element

```javascript
/* Will return all the elements enclosed within
   the <div>:
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div>
*/

var lastP = document.getElementById("aDiv").lastChild; 
lastP.textContent
//=> "Some more text"
```

- **`Node#nextSibling`** - a property that holds the next "sibling"
  element in the DOM tree.

```javascript
/* Will return all the elements enclosed within
   the <div>:
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div>
*/

var secondP = document.getElementById("aDiv").childNodes[0].nextSibling;
secondP.textContent
//=> "Some more text"
```

- **`Node#previousSibling`** - a property that holds the previous 
  "sibling" element in the DOM tree.

```javascript
/* Will return all the elements enclosed within
   the <div>:
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div>
*/

var firstP = document.getElementById("aDiv").childNodes[1].previousSibling; 
firstP.textContent
//=> "Some text"

/* This will throw an error because the first node in a
   nodeList does not have a pointer to a previous node!
*/
document.getElementById("aDiv").childNodes[0].previousSibling; 
```

- **`Node#parentNode`** - a property that holds the parent of the 
  current element.

```javascript
/* <span id="top"> 
     <p id="text"></p> 
   </span>
*/

var parentNode = document.getElementById("text").parentNode;
parentNode.id
//=> "top"
```

#### Inserting and Removing Elements From the DOM

While you create new `Node` objects using the methods on `document` from
above, you need to then [insert the elements they represent][mdn-dt] in
to the DOM for them to be visible to the user.

- **`Node#appendChild(…)`** - inserts the node or document fragment it 
  is passed as the last child of the given `Node` object on the DOM.

```javascript
/* <div id="myDiv" class="blue" >
     <!-- The node will be inserted here. -->
   </div>
*/
var myDiv = document.getElementById("myDiv");

// Creates the new <div>, and adds some text to it:
var newDiv = document.createElement("div"); 
newDiv.textContent = "Hey there"; 

/* Insert the new <div> into the DOM by appending it to 
   the node we retrieved above.
*/ 
myDiv.appendChild(newDiv); 
```

- **`Node#insertBefore(…)`** - inserts the node it is passed as the
  previous sibling the of the given `Node` object on the DOM.
- **`Node#insertAfter(…)`** - inserts the node it is passed as the
  next sibling the of the given `Node` object on the DOM.

```javascript
/* <div>
     <!-- beforeDiv will be inserted here. -->
     <div id="myDiv" class="blue" ></div>
     <!-- afterDiv will be inserted here. -->
   </div>
*/

var myDiv = document.getElementById("myDiv");

// Create new divs, insert some text into it
var beforeDiv = document.createElement("div"),
    afterDiv  = document.createElement("div");

// Insert the new <div>s into the DOM. 
myDiv.insertBefore(beforeDiv);
myDiv.insertAfter(afterDiv);
```

- **`Node#remove()`** - removes the given node completely from the 
  DOM tree.

```javascript
/* The <div> myDiv will be removed.
   <div>
     <div id="myDiv" class="blue"></div>
   </div>
*/

document.getElementById("myDiv").remove();
```

- **`Node#removeChild(…)`** - given a `Node` object, this method removes
  the node that is passed to it from the DOM tree. The passed node must
  be its child.

```javascript
/* <body>
      <div id="aDiv"></div>
   </body>
*/

// We'll now remove the div above from body:
var body = document.getElementById("body");
var divToDestroy = docuement.getElementById("aDiv");

/* Remove the node. NOTE: the removed node is
   returned as a `Node` object even though it is
   removed from the DOM tree.
*/
var holdThatNode = body.removeChild(divToDestroy);
```

- **`Node#replaceChild(…)`** - given a `Node` object, this method
  removes the child node from the DOM tree (the second argument it is
  passed), and inserts a new one (the first argument).

```javascript
/* <body>
      <div id="oldDiv"></div>
   </body>
*/

var body = document.getElementById("body");
var newDiv = document.createElement("div").textContent = "I'm new!";

// We will insert the new node into body:
var returnedNode = someNode.replaceChild(newNode, body.firstChild);
```

#### Getting and Setting Attributes (Except Classes)

The big rule is this:

> `getAttribute` and `setAttribute` are not reliable. Instead, assign
> the property of the `Node` object directly: `obj.property = value`.
> However, some attributes are actually reserved words, so instead
> of `class` use `className` and instead of `for` use `HTMLfor`.
>
> — *[Christian Heilmann's DOM cheatsheet][ch-dom]*

- **`Node#getAttribute(…)`** - get an HTML attribute of a given element.

```javascript
/* <div id="myDiv"></div>
   <input name="score" value="1">
*/

// Grab the above <div>:
var aDiv = document.getElementById("myDiv");

// Get its attributes:
var aDivId = aDiv.getAttribute("id");

// or, preferrably…
var aDivId = aDiv.id;

// From the above <input>:
var input = document.getElementByName("score");

var inputName  = input.getAttribute("name"),
    inputValue = input.getAttribute("value");

// or, preferrably…
var inputName  = input.name,
    inputValue = input.value;
```

- **`Node#setAttribute(…)`** - set an HTML attribute of a given element.

```javascript
/* <div id="myDiv" class="blue" ></div>
   <input name="score" value="1">
*/

// Grab the above <div>:
var aDiv = document.getElementById("myDiv");

// Get its attributes:
aDiv.setAttribute("id", "newId");

// or, preferrably…
aDiv.id = "newId";

// From the above <input>:
var input = document.getElementByName("score");

input.setAttribute("name",  "newName");
input.setAttribute("value", "3");

// or, preferrably…
input.name  = "newName";
input.value = "3";
```

- **`Node#hasAttribute(…)`** - returns true or false, depending on
  whether or not the node's HTML element has the given attribute.

```javascript
/* We can test for the presence of any attribute. Eg: 
   <div id="myDiv"></div>
*/

// Set attributes for above <div>:
var aDiv = document.getElementById("myDiv");

if (aDiv.hasAttribute("id")) {
  // run some code…
}
```

#### Getting and Setting Classes

- **`Node#className`** - a property that holds the class attribute of
  the given `Node` object. It can be set as well as retrieved.

```javascript
// <div id="myElement" class="blue" ></div>

// Grab the above <div>:
var el = document.getElementById("myElement");

el.className
//=> "blue"

el.className = "red white blue"
```

- **`Node#classList`** - a property that holds a [special object][mdn-cl];
  it can easily add, remove and check for classes on a given element.

```javascript
// <div id="myElement" class="red white blue"></div>
var el = document.getElementById("myElement");

el.classList
//=> ["red", "white", "blue"]

// Remove the class name "red":
el.classList.remove("red");
el.classList
//=> ["red", "white"]

// Add it back!
el.classList.add("blue"); 

/* Toggle will add the specified class if not present
   and remove it if it is present. In this case, since 
   we added it above, it will be removed. 
*/ 
el.classList.toggle("blue"); 

// Check if "blue" is present:
if (el.classList.contains("blue") {
   // run some code…
}
```

#### Getting and Setting Text and HTML Directly

When we want to set the content of an element in our HTML, we have two
options: updating the text content and updating the HTML content.
Often these two are [mixed up][so-text] in casual use. The rule is this:
set text with [`Node#textContent`][mdn-tc]!

- **`Node#textContent`** - a property that can be used to interact with
  the given `Node` object's text content.

```javascript
// <p id="myElement" class="red white blue"></p>
var el = document.getElementById("myElement");

el.textContent
//=> ""

// Set the text.
el.textContent = "This is some text.";
```

- **`Node#innerHTML`** - a property that can be used to interact with
  the given `Node` object's HTML content.

```javascript
// <p id="myElement" class="red white blue"></p>
var el = document.getElementById("myElement");

// Set the text and other content, including HTML.
el.innerHTML = '<span>This is some text.</span><img src="http://some.url">';
```

##### *The End* :fireworks: :tada:

<!-- LINKS -->

[ch-dom]: https://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf

[mdn-dm]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
[mdn-qs]: https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
[mdn-dt]: https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree

[mdn-dc]: https://developer.mozilla.org/en-US/docs/Web/API/Document
[mdn-no]: https://developer.mozilla.org/en-US/docs/Web/API/Node
[mdn-el]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[mdn-nl]: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
[mdn-df]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

[mdn-cl]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
[mdn-tc]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

[so-text]:  http://stackoverflow.com/questions/24427621/innertext-vs-innerhtml-vs-label-vs-text-vs-textcontent-vs-outertext
[nodelist]: http://duruk.net/nodelists-and-arrays-in-javascript/
