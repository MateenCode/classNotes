# Two Model CRUD App - No relationship - Second Model

## Lesson Objectives

1. Create Articles Index
1. Create Articles New Page
1. Set up Article Model
1. Create Articles Post Route
1. Show Articles on Index Page
1. Create Articles Show Page
1. Create Articles Delete Route
1. Create Articles Edit Page
1. Create Articles Put Route

## Create Articles Index

1. `mkdir views/articles`
1. `touch views/articles/index.ejs`

views/articles.ejs:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Articles</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/articles/new">Create a new Article</a>
					</li>
				</ul>
			</nav>
		</header>
	</body>
</html>
```

1. `mkdir controllers`
1. `touch controllers/articles.js`

controllers/articles.js:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('articles/index.ejs');
});

module.exports = router;
```

Use the controller in server.js:

```javascript
const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);
```

## Create Articles New Page

`touch views/articles/new.ejs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Create an Article</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/articles">Articles Index</a>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<form action="/articles" method="post">
				<input type="text" name="title" /><br/>
				<textarea name="body"></textarea><br/>
				<input type="submit" value="Publish Article"/>
			</form>
		</main>
	</body>
</html>

```

create route in `controllers/articles.js`

```javascript
router.get('/new', (req, res)=>{
	res.render('articles/new.ejs');
});
```

## Set up Article Model

1. `touch models/articles.js`

```javascript
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	title:String,
	body:String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
```

## Create Articles Create Route

controllers/articles.js

```javascript
const Article = require('../models/articles.js');
//...
//...farther down the page
router.post('/', (req, res)=>{
	Article.create(req.body, (err, createdArticle)=>{
		res.redirect('/articles');
	});
});
```

## Show Articles on Index Page

controllers/articles.js:

```javascript
router.get('/', (req, res)=>{
	Article.find({}, (err, foundArticles)=>{
		res.render('articles/index.ejs', {
			articles: foundArticles
		});
	})
});
```

views/articles/index.ejs:

```html
<main>
	<h2>List of Articles</h2>
	<ul>
		<% for(let i = 0; i < articles.length; i++){ %>
			<li>
				<a href="/articles/<%=articles[i]._id%>"><%=articles[i].title%></a>
			</li>
		<% } %>
	</ul>
</main>
```

## Create Articles Show Page

`touch views/articles/show.ejs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1><%=article.title%></h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/articles">Articles Index</a>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<section>
				<%=article.body%>
			</section>
		</main>
	</body>
</html>
```

towards the bottom controllers/articles.js:

```javascript
//avoid this handling /new by placing it towards the bottom of the file
router.get('/:id', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		res.render('articles/show.ejs', {
			article: foundArticle
		});
	});
});
```

## Create Articles Delete Route

controllers/articles.js:

```javascript
router.delete('/:id', (req, res)=>{
	Article.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/articles');
	});
});
```

views/articles/show.ejs

```html
<section>
    <form action="/articles/<%=article._id%>?_method=DELETE" method="post">
        <input type="submit" value="Delete Article"/>
    </form>
</section>
```

## Create Articles Edit Page

Create a link on views/articles/show.ejs:

```html
<section>
    <a href="/articles/<%=article._id%>/edit">Edit</a>
</section>
```

controllers/articles.js

```javascript
router.get('/:id/edit', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		res.render('articles/edit.ejs', {
			article: foundArticle
		});
	});
});
```

`touch views/articles/edit.ejs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Edit <%=article.title%>'s Info</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/articles">Articles Index</a>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<h2>Article Attributes:</h2>
			<form action="/articles/<%=article._id%>?_method=PUT" method="post">
				<input type="text" name="title" value="<%=article.title%>"/><br/>
				<textarea name="body"><%=article.body%></textarea><br/>
				<input type="submit" value="Update Article"/>
			</form>
		</main>
	</body>
</html>
```

## Create Articles Put Route

controllers/articles.js:

```javascript
router.put('/:id', (req, res)=>{
	Article.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/articles');
	});
});
```
