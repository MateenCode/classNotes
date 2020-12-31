![ga](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/blob/master/ga_cog.png)

---
Title: Bootstrap - CSS Frameworks <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: Kristyn Bryan & Greg Dunn, WDI-Funke<br>
    Adapted by: Jerrica Bobadilla<br>
Competencies: CSS Frameworks, Bootstrap<br>
Prerequisites: CSS, HTML <br>

---

# Morning Exercise

## CSS Frameworks

A CSS framework can save you time when styling applications. A framework is really just a stylesheet that has been designed by someone else that you are implementing into your code.

To implement these styles, you simply add a class to the html element that you'd like to style and give it the class name stated in your framework's documentation.

In addition, you can make changes to the styles using your own stylesheet. Combine and conquer!

You can use Bootstrap to jazz up your projects, but we also want you to be familiar with it because, a lot of times when you jump into a company that has a pre-existing codebase, you will encounter the use of a CSS framework.


### The framework that we will be looking at today:

[Bootstrap](http://getbootstrap.com/)<br>
  _Probably the most popular framework out there right now. Originally created by some guys who were working at Twitter._

## Activity

We're going to style this page using Bootstrap:

![unstyled page](https://i.imgur.com/sdRQg2x.png)

To look something like this:

![styled page](https://i.imgur.com/9imBki4.png)

## Setup

1. Use the files inside the `bootstrap_example` folder to code along with this morning's exercise.

1. Open the folder in vscode and open `index.html` in your browser

## Let's Look at Bootstrap

Bootstrap's website catalogs everything that you can use to style your application. Note that their styles are responsive. 

To use Bootstrap, you can download a file and keep it in your application or use a link to their CDN.

Bootstrap is a very robust framework! It has pretty much everything that you need (plus more). After this lesson, take some time to explore the site to see more of the offerings. Consider using it in your homework or projects.

## Code along:

1. Go to [Bootstrap's framework page](http://getbootstrap.com/) to get their stylesheets.

>Direct link to documentation:
https://getbootstrap.com/docs/4.0/getting-started/download/

2. You could download the files (but let's not do that for this exercise):
![](https://i.imgur.com/Y2bjh8G.png)

3. Let's use the Bootstrap CDN link to get the style's to our page. Add the CDN link into your `index.html` file

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`

6. Refresh your browser and take a look at what happened after just initially linking Bootstrap.

7. We'll be using classes from the `Layout`, `Content`, and `Components` section. You can browse through these sections in the sidebar on Bootstrap's page to see some options for what we can do.

## Nav bar

>Direct link to documentation:
https://getbootstrap.com/docs/4.0/components/navs/

1. Add the `class="nav"` to the `ul` of your nav bar

2. We also have to specify which `li` elements are nav items by adding the class `nav-item` 

3. Further, we need to specify which `a` elements are nav links by adding the class `nav-link`

4. We can add additional styling to this. Let's add the class `nav-tabs` to our`ul` to adjust the formatting and turn our links into navigation tabs.

![nav](https://i.imgur.com/AXLSUlS.png)

## Adjust the image

>Direct link to documentation:
https://getbootstrap.com/docs/4.0/content/images/

1. If we wanted our image to be responsive, we could add the `class="img-fluid"`

2. If we always want it to stay centered, tack on `class="text-center"` onto the image's parent `div`

## Container

>Direct link to documentation:
https://getbootstrap.com/docs/4.0/layout/overview/

1. Let's start by wrapping our site content in a container: `class = "container"`. What does this do?

We can use .container for a responsive fixed width container.

![container](https://i.imgur.com/VQT8U0F.png)

If we want the container to span the entire width of the viewport, we can use `class="container-fluid"`

![container fluid](https://i.imgur.com/nbdIF1f.png)

## Bootstrap's grid
Let's use the built-in grid system that Bootstrap supplies.

>Direct link  to documentation: 
https://getbootstrap.com/docs/4.0/layout/grid/

1. On the three paragraphs below the Example header, let's put `class="row"` on a div that surrounds all three.

2. Let's give each of these paragraphs a `class="col-sm"`

![grid](https://i.imgur.com/DmpDs9U.png)

## Update a button

>Direct link  to documentation:
https://getbootstrap.com/docs/4.0/components/buttons/

Bootstrap has multiple button options:

  - The primary button style:
  `class="btn btn-primary"`

  ![primary button](https://i.imgur.com/5UYSelU.png)

  - Quickly style to denote an action (success, danger, warning, etc.)
    - `class="btn btn-success"`
    
      ![button success](https://i.imgur.com/hdZdrF0.png)
      
    - `class="btn btn-danger"`
    
       ![button danger](https://i.imgur.com/8tSt2l4.png)
       
  - Change the style to an outlined button instead of filled
    - `class="btn btn-outline-primary"`
    
        ![button outline](https://i.imgur.com/RikDvpo.png)

  - Or change the size of the button
      - `class="btn btn-primary btn-lg"`

      ![button large](https://i.imgur.com/UCkuKtI.png)

1. Choose one and add it in the `a` tag to turn the `Learn More` link to a button.

#### Style the table

>Direct link  to documentation:
https://getbootstrap.com/docs/4.0/content/tables/

1. Add Bootstrap's default table style: `class="table"`

![table](https://i.imgur.com/h8zEAQU.png)

2. Add the class `table-striped` to give our table zebra stripes

![striped table](https://i.imgur.com/DHPEEsi.png)

#### Sections that you want to showcase

>Direct link  to documentation:
https://getbootstrap.com/docs/4.0/components/jumbotron/

Bootstrap has something called `jumbotron` which has styling to showcase a section.

1. Let's add `class="jumbotron"` to the section marked as `callout` in our index.html.

![jumbotron](https://i.imgur.com/2bPaxXf.png)

NOTE: Bootstrap is fully responsive! Change the sizes of your screen to check it out.

# Other CSS frameworks:

[Skeleton](http://getskeleton.com/)<br>
  _Lightweight framework that has a nice, simple grid system._

[Materialize](http://materializecss.com/)<br>
_This framework is difficult to manipulate, but I like it for the parralax and the cards._

[Pure CSS](http://purecss.io/)<br>
_Similar to skeleton, this is a light framework with a grid system and responsive design._
