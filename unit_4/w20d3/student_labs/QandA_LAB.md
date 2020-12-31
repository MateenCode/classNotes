![](https://i.imgur.com/mS4bLMs.png)
# Q+A LAB (30 mins)

#### READ BELOW: WHY RUN A SEPARATE FRONTEND SERVER?

You could just plop your static React stuff on Github Pages, and avoid using a second server altogether. Your React front end application could make cross-origin requests to your (hosted) API.

You could integrate your React stuff into the Rails server that serves the API.

Here are some reasons why you shouldn't do those things:


**Running a server**

* Nothing is hosted on the Internet without a server. It wouldn’t be ‘locatable’ as it were.

* GitHub pages, while it seems it is hosting static content, it is actually spinning up its own server to host your app, it’s not just sitting statically on the internet.

* Deploying to Heroku is 'leveling up' from deploying on Github pages: you're taking more responsiblity for your content.

* You can't deploy static content only to Heroku, you must deploy a server.

* A production-quality app does not host its front-end on something the likes of Github Pages. A production-quality app will have its own servers running.

So, assuming you agree that we want our front-end files on a server, why would we want to separate our app like this into two separate repos and servers, etc.?

**Having separate back-end and front-end servers**

- Developer sanity: Front end devs work in one environment, backend in the other, and the two environments never mix.

- Maintainability and single responsibility: see above

- Updating one or the other is more straightforward because of a separation of concerns

- You can build multiple front-end applications that work off a single back-end application—a web version, an android app, and an ios app—all maintained by separate teams but the backend is the same for each. In this case four clean code bases.

- Cost: it costs money to host websites, in the thousands of dollars range, for minimal social media-like apps, less code bases cost less money (use a single API).

#### In your own words, explain to the group why we would run two servers

<br>

#### READ 'UNDERSTANDING CORS': [Understanding CORS](https://www.codecademy.com/articles/what-is-cors)

#### THEN EXPLAIN OR DIAGRAM THE REQUEST-RESPONSE CYCLE OF THE `ACCESS-CONTROL-ALLOW-ORIGIN` HEADER

[More on CORS](https://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/)

<br>

#### ANSWER THIS QUESTION: Does our frontend server have any routes? Why or why not?

<br>

#### EXTRA READING:

The Options verb:

> The “Preflight” request is a new HTTP verb called OPTIONS.  In a browser implementing CORS, each cross-origin GET or POST request is preceded by an OPTIONS request that checks whether the GET or POST is OK.  If it is, the server must return some headers to allow the subsequent GET or POST.  This is actually a wonderful capability.  The server can allow or disallow remote access on a per-method basis, with access determined by HTTP referrer, IP or any other criterial.

> The OPTIONS request contains Access-Control headers that are part of the CORS specification.  The response must reply to these headers to allow the subsequent GET or POST to proceed.


#### EXTRA

* Scaffold a Rails API for **Cats**
* Make a frontend server that can query the index route

<br>
