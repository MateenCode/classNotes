# React Static Components

## About this Build

You are half way through the program! You've been showing off your portfolio and projects to your friends, family and classmates and they all say "It's fine. I like it!" But you want more insight.

So you decide to look into some analytical tools...but wow! They are expensive! You decide to make your own.

You visualize a dashboard with compontents for reviews, average rating, sentiment analysis and website visitors

![Dashboard Wireframe](https://i.imgur.com/5mCo2tV.png)

Try to recreate this wireframe with React. Be sure to create a few components (e.g. app, sidebar, reviews, average rating, sentiment analysis, website visitors).


## Get Started

### Set up
- `mkdir dashboard`
- `cd dashboard `
- `touch app.js index.html`
- `code .`

**index.html**
- add html boilerplate
- add script tags
- add a `main` tag inside the `body`

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
<script type="text/babel" src="app.js"></script>
```

**app.js**

- render and `h1` tag using react to test it:

```jsx
ReactDOM.render(
  <h1>Commence Dashboard Creation!</h1>,
  document.querySelector('main')
);
```

#### Run a simple server:
- If you have python 2.x
  - `python -m SimpleHTTPServer`

- If you have python 3.x
  - `python -m http.server [<portNo>]`
    ex:`python -m http.server 8080`

- If you want to use npm
    - Install, if you haven't already, with `npm install -g http-server` (might need to run `sudo npm install -g http-server`)
    - run `http-server -o`

#### Important Note
- To see updates you must refresh your browser, all three of the servers above do cache things, so you may have to do a hard refresh (hold shift key when doing a refresh) to see your changes. Remember `command shift r` as the hot keys



### Dark Theme!

Keep going! Add more details, add some css

![Cool Looking Dashboard](https://i.imgur.com/3kPnrAq.png)

Dashboard example found here: https://medium.muz.li/30-handpicked-excellent-dashboards-347e2407a057
