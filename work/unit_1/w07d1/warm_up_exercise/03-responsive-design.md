<img src="https://i.imgur.com/RZwMZi2.png">

# Responsive Web Design

---
## Learning Objectives

| Students Will Be Able To: |
| --- |
| Describe what Responsive Design is |
| Explain the benefits of Mobile First design |
| Use CSS Media Queries to alter page layout and styling |

## Roadmap

1. Intro to Responsive Web Design
2. Examples of Responsive Design
3. Mobile First Design Philosophy
4. First Step to Enabling a Better Experience on Mobile
5. Using Media Queries to Apply Different CSS Rules to a Page
6. Essential Questions
7. Practice

## Intro to Responsive Web Design

### Background

Not that long ago, building a successful online presence meant just ensuring that your website worked correctly in all the major desktop browsers. 

Fast forward to today and desktop browsing is rapidly being replaced by surfing on mobile devices.

Approximately 80% percent of Americans now own a smartphone and well over 50% of web pages are served to smartphones **globally**!

Web sites and applications designed just for desktop displays don't cut it anymore!

### Enter - Responsive Web Design

**Responsive Web Design**, not surprisingly, is designing a web page to respond to the size of the device's screen being used to view it.

Specifically, the most important criteria to respond to is the **width** of the device's screen.

Lastly, what specifically **responds**? Primarily, the overall layout of the page, but you can pretty much change anything on the page you want.  For example, I'm sure you've seen the menu links in a navigation bar disappear and be replaced with a "hamburger" icon before.  Take a look at the image at the top of this lesson too - notice how the number of columns changes?

Okay, now that you know what Responsive Design is, let's look at some real-world examples out there.


## Examples of Responsive Design

One great example of a responsive site is one you've become very familiar with: [GitHub](https://github.com/).

For another great example is [Smashing Magazine](https://www.smashingmagazine.com/), which is a fantastic site dedicated to web design:

<img src="https://i.imgur.com/KozEWGq.png">

## Mobile First Design Philosophy

There are two approaches that can be followed:

1. Write the starting CSS for a large, desktop screen, then apply "new" CSS (using media queries) as the screen width decreases, or
2. Write the starting CSS for a mobile screen, then apply additional CSS as the width increases.

The experts tell us that it's better, to use a **mobile first** approach for the following reasons:

- Translating the design from mobile to desktop is easier than vice-versa, thus it should require less time to build the site.
- Mobile first encourages you to think about what content is the most important - and prioritize them.
- It's easier to detect performance related issues, such as the slow loading of large image files, on mobile devices and it's better to deal with performance issues early on.
- A design based on a small screen width, although not ideal, is usable on larger devices, however the reverse is often not the case.

## First Step to Enabling a Better Experience on Mobile

For those of use that remember using smartphones when they first came out to browse the web, we often saw screens with tiny, unreadable content like this:

<img src="https://i.imgur.com/BXhiZRF.jpg">

Unlike on desktop browsers that render pixel-by-pixel, mobile browsers actually render to a virtual **viewport**. This virtual viewport concept is what enables pinching to zoom in and out.

By default, mobile browsers scale down the content to fit it in the browser window, resulting in tiny text that's hard to read.

#### `<meta name="viewport" ...>` to the Rescue

The viewport `<meta name="viewport" ...>` enables us to inform the browser not to scale the page as seen above and instead, display the content based upon the physical number of pixels available - just like desktop browsers do.

This viewport `meta` tag is so important, that VS Code has been adding it automatically in the HTML boilerplate.

The following should look familiar...

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

With that `meta` tag in the document's `head` element, the above page will now render as:

<img src="https://i.imgur.com/hdSBUzg.jpg">

Much better!  Be sure to always have `<meta name="viewport" ...>` in every web app you write!

## Setup

Use the starter code in `responsive_design`


## Using Media Queries to Apply Different CSS Rules to a Page

#### What's a Media Query?

A [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) provides a way to conditionally add CSS rules.

A media query contains its own section of CSS that is used to modify the "base" CSS when certain "media" conditions exist.

The media query can be composed of any number of _media feature expressions_ and an optional _media type_, such as `print`, `screen`, or `all`.

#### Our First Media Query

Since we're interested in conditionally adding CSS as the screen increases in width, our first media query might look like this:

```css
/* 768px is a common "breakpoint" width for tablets */
@media only screen and (min-width: 768px) {
   aside {
      width: 30%;
      height: 100%;
    }
}
```

We want out site to look like this:

<img src="https://i.imgur.com/rRkedBV.png" width="200px" height="auto">


Note that we only add CSS declarations for the properties we want to change - there's no reason to repeat any of the CSS above the media query.

Resize the window and check it out!

There's a link in the references section you can use to start to learn more about media queries.

## 💪 Practice Exercise (10 min)

Adding another media query for another breakpoint at `(min-width: 1024px)`, a common breakpoint width for desktop displays.

We want out site to look like this:

<img src="https://i.imgur.com/uVSRQis.png" width="300px">


Next up is a lab that will give you some practice working with **Media Queries**.


## References

[MDN - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
