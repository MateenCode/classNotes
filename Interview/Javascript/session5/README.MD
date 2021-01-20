# ZeroCater Frontend Engineer Screener

Welcome to the ZeroCater frontend engineer screener :) You have been given an `index.html` file with a script link to an `app.js` file.

```
<!DOCTYPE html>
<html>
  <head>
    <title>ZeroCater Frontend Engineering Screener Test</title>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body></body>
</html>
```

The `app.js` file contains an array of asynchronous data services called `services`. These `services` are going to race to each retrieve a piece of an ancient phrase said to be of vast wisdom.

```
const returnValues = [
  "Hakuna",
  "Matata",
  "It means",
  "No worries",
  "For the rest of your days"
].sort(() => (Math.random() > 0.5 ? 1 : -1));
const createService = (retVal, index) => () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(`${index}. ${retVal}`);
      resolve(retVal);
    }, Math.random() * 10000)
  );
const services = returnValues.map(createService);
```

Your task is to create a program that:

- calls each service at initial load time, thereby starting the race
- renders a live updating "status" UI that indicates for each service which has resolved and which is still pending
- renders a live updating "results" UI that
  - indicates for each service
    - if it has resolved, what its value is
    - if it has not resolved, some indication that it is still pending
  - ranks the services in the order of their resolution

Services will log themselves to the console as they resolve. This may be helpful in ensuring that your program is working correctly. Use each service's index in the `services` array to indentify each.

```
services.forEach(service => {
  service();
});

// console
4. Matata                                     app.js:12
0. Hakuna                                     app.js:12
3. It means                                   app.js:12
1. For the rest of your days                  app.js:12
2. No worries                                 app.js:12
```

You may use any tools, resources, and technologies that you'd like. The target time for this task is two hours. We use a variety of frontend technologies at ZeroCater and are looking for your general knowledge of web UI programming. Simply fulfill the requirements -- you will not be faulted for a lack of flair and will be credited for simplicity. You may add any code you'd like, but do not alter any existing code. Do not insert code into the existing code either. Your submission must be a github repository containing all of your code and executable by opening the `index.html` file in any modern browser. Be prepared to explain your decisionmaking and accomodate adjustments to the requirements. If we like your submission then discussing it will be the next step. Good luck!
