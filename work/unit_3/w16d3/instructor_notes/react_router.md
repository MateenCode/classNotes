# React: Authentication with JWTs

## Learning Objectives
- Use React Router's BrowserRouter, HashRouter, Link, Route, Link and NavLink components to add navigation to a React application


## What is React Router?
Up to this point, our React applications have been limited in size, allowing us to use basic control flow in our components' render methods to determine what gets rendered to our users. However, as our React applications grow in size and scope, we need an easier and more robust way of rendering different components. Additionally, we will want the ability to set information in the url parameters to make it easier for users to identify where they are in the application.

React Router, while not the only, is the most commonly-used routing library for React. It is relatively straightforward to configure and integrates with the component architecture nicely (itself being nothing but a collection of components). Once configured, it essentially serves as the root component in a React application and renders other application components within itself depending on the path in the url.

Right now, our React applications have only been showing one screen. The application that we just generated has only one component and we cannot navigate around to multiple pages.

In multi-page applications, a user will click a links in the navigation or elsewhere to open up a new file and render this new file in the browser.  In that way, the user will be able to navigate to all of the various pages of a website.

With Single Page Applications we need to use a tool called Routing to match the routes in our application’s URL’s different React components!

## What is Routing

Routing is the process of selecting a path for traffic in your application. Routing is the tool that enables you to navigate to different pages without reloading the entire application

In order to create Routes in react, we will need a separate component that loads all of our Routes into the dom and matches them to the appropriate components. 

Instead of immediately attaching our Component APP to the DOM on render, we want to see what URL the user has landed on and serve of the correct component. 

Due to this we now need a Router.js Component, to hold all of our routes. This will be the first component we add to render into our HTML. 

Our folder structer might look like

- Root
    - Router.js
    - Components
        - App.js

Let’s look at what our Router component might look like! 


```js
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class AppRouter extends Component {
  return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <Route path="/" exact component={App} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    );
}

```


__Let's breakdown the code above__

1. We need to import the `BrowserRouter`, `Route` and `Link` components from the `react-router-dom`  library 
2. `BrowserRouter` needs to surround all of the routes of our application. It will handle mounting and unmounting the correct components at the correct URL’s
3. `Route` allows us to add a specific route to our applications. It has two required properties path should be equal to the url
component should be the component that you want to appear when you match the path in the browser
4. `exact` is an optional parameter that tells the browser to match this path exactly
5. `Link` is used to create the links in your application. It will be used in place of anchor tags. Instead of adding an `href` attribute we add a `to` attribute which will be equal to the path we are linking to.


## ToDos App with A Homepage
Right now our Todo's application that we have been working on has no homepage. Let's create one so that we have a navigation in our application with a link to the Index (homepage) and To Do List!

- Open `todos_router_starter` from your student examples folder
- Open `index.html` and add the React Router DOM CDN and the Boostrap CDN (for style!)
- We will also be adding a new JS file for our Router - lets link that now in our `index.html` file below our `app.js` link and then create `Router.s`

```js

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
/* .... */
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.1.2/react-router-dom.js" integrity="sha256-yw9KNHjNtzdhGiw5Bz1JBzK5Sjf2W/S0tDluJs2NSts=" crossorigin="anonymous"></script>

/* link router.js */
<script type="text/babel" src="./js/Router.js"></script>

```

- `touch public/js/Router.js`
- Open `Router.js` in VS Code


In order to refactor our application to allow for a Router, we need to make it so that the first component that loads onto the page is the Router component. 

The Router component will handle incoming requests and it will mount the different components necessary for each view. In our case, Router will be mounting the App Component. 

Lets build out the Router.

1. First we need to import all of the required tools (HashRouter, NavLink, Rout)

```js

const { HashRouter, NavLink, Route } = ReactRouterDOM;
/** the above code is called destructuring it is the same as
 * const HashRouter = ReactRouterDom.HashRouter;
 * const NavLink = ReactRouteDom.NavLink;
 * const Router = ReactRouterDom.Route;
 * */

```

2. Now we will declare our Component. Lets call it `ToDoRouter`. We will now render this component into the DOM instead of our `App.js` Component. 

```js
class TodoRouter extends React.Component {
	state = {};
	render() {
		return (
            <div>
                Hello Router!
            </div>
		);
	}
}

ReactDOM.render(<TodoRouter />, document.querySelector('.container'));

```

3. Now remove this line from `App.js`

```js
ReactDOM.render(<App />, document.querySelector('.container'));

```

4. In order for our Router to work, we need to surround all Navigational Links and Routes in a `HashRouter`. Replace the above `div` with `HashRouter`

```js
class TodoRouter extends React.Component {
	state = {};
	render() {
		return (
			<HashRouter>
				Hello Router!
			</HashRouter>
		);
	}
}

ReactDOM.render(<TodoRouter />, document.querySelector('.container'));

```

5. Now we add in our Routes.

The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when its path matches the current URL.

We primarily use two parameters for this component

- path - which allows us to specify the url that should be matched in the browser. 
- component - allows us to add the component which should be mounted when the url matches the path

Lets add a `Route` for our `App` component.

```js
class TodoRouter extends React.Component {
	state = {};
	render() {
		return (
			<HashRouter>
					Hello Router!
				<Route path="/list" component={App} />
			</HashRouter>
		);
	}
}

ReactDOM.render(<TodoRouter />, document.querySelector('.container'));

```

Nice! But wait... How can we give the user a tool to actually go to that requested page?

6. Finally, we need to add a `nav` to our router so the user can navigate around our webpage. React Router Dom requires us to replace our ordinary anchor tags with special tags that allow us to properly link to the correct route:

- `NavLink` - A special link tag used for navigational elements which will highlight the navigational element with an active class when the user is on the current page.
- `Link` - Used for ordinary page links!

For both of these tags, instead of using an `href` attribute we use a `to` attribute. Let's give it a try!

```js

const { HashRouter, NavLink, Route } = ReactRouterDOM;

class TodoRouter extends React.Component {
	state = {};
	render() {
		return (
			<HashRouter>
				Hello Router!
				<nav className="navbar-light bg-light row">
					<NavLink to="/" className="nav-item m-2">
						Home
					</NavLink>
					<NavLink to="/list" className="nav-item m-2">
						My To Do List
					</NavLink>
				</nav>
				<Route path="/list" component={App} />
			</HashRouter>
		);
	}
}

ReactDOM.render(<TodoRouter />, document.querySelector('.container'));

```

7. For fun - replace the text "Hello Router!" with

```js

<h2 className="text-center m-3">My To Do List</h2>

```

## Awesome! You now know how to Route between pages in React!

### Hungry For more | Rendering Dynamic Routes

<details><summary>View Rendering Dyanmic Routes</summary>
We were able to get our basic routing structure down! Go us! Now we want to make dynamic routes. What are dynamic routes?

Think about a blog. With a blog a user should be able to create a blog post and the blog post will be able to be accessed from a unique URL. In our application, we need to mirror this concept by allowing dynamic routes to be created.

Can you think of how we might do this?

If you said `.map()` then you are correct! Let’s take for instance the mock data below:

```js

let mockBlog = [
    {
        title: 'First Blog Post',
        description: 'My first blog post!'
    },
    {
        title: 'Second Blog Post',
        description: 'My Second blog post!'
    },
    {
        title: 'Third Blog Post',
        description: 'My Third blog post!'
    }
];

```

If we wanted to turn this data into routes and dynamically display each blog posts data, we could map over the array and render Routes!

Then we could pass each newly rendered component a prop with the content for the blog post! We will need to create a new component for the blog posts. We could title it `BlogPost`.

Finally, we would have to use map again to create the navigational links!


```js
{this.state.data.map((post,index) => {
    return <Route path={`/${post.title}`} render={() => <BlogPost content={post} />} />
})}
```


</details>