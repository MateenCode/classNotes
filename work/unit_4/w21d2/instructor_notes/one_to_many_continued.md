
---

Title: Science App Continued<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Adapted for React: Karolin Rafalski
Topics: Rails 5 API, One-to-many relationships, CORS, fetch, Chart.js<br>

---

# &#x1F52D; &#x1F4D0; SCIENCE APP CONTINUED &#x1F914; &#x1F4A1; &#x1F4A1; &#x1F4A1;

Let's make the front-end for our Temperatures app.

### OUR GOAL IS TO:

* Interact with our Rails API

* Display all of a single location's **average high temperatures** on a chart.

### Lesson objectives

At the end of this lesson, students will be able to:

* Use **fetch** for AJAX requests
* Configure CORS
* Make a line graph with Chart.js

**Temperatures for Location 1**
![](https://i.imgur.com/OC4GolP.png)
---

# SETUP

Make our Frontend server.

In the top-level `temperatures_app`
- `npx create-react-app temperatures-client`
- install chart.js
- ` cd temperatures-client && npm install chart.js`
-  ` mkdir src/components`
- `touch src/components/BarChart.js`

**Double check you are running your rails api!**

## Lets make our react app run on a different port then our server

- go to `package.josn` in your `temperatures-client` folder
- update `"start": "react-scripts start"` to ` "start": "PORT=3006 react-scripts start"`

**BarChart.js**

```js
import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component {
  render () {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id="temperatures" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart
```

**App.js**

```js
import React, { Component } from 'react';
import BarChart from './components/BarChart.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart />
      </div>
    );
  }
}

export default App;
```

# FETCH

Using Chrome's **fetch** command we can make AJAX requests with 'vanilla' javaScript instead of importing some framework or library to do so.

If you want to install `axios` and use `axios` in place of `fetch` go right ahead!

[Great article on using Fetch](https://css-tricks.com/using-fetch/)

Let's get all of our locations from our Rails API.

app.js - make an AJAX request to get locations

```javascript
fetch('http://localhost:3000/locations')                                        
  .then(response => response.json())                                            
  .then(json => console.log(json))                                              
  .catch(err => console.log(err));  
```

![](https://i.imgur.com/azGbynf.png)

As expected, we get our single-origin policy obstruction.

![](https://i.imgur.com/GzmHqb3.png)

# CORS

Uncomment rack-cors

`Gemfile`

![](https://i.imgur.com/mzc0HBi.png)

`bundle`

`config/initializers/cors.rb`

Allow all origins `*`

![](https://i.imgur.com/aXEXx9E.png)

**restart Rails server**

<br>

# CONFIGURE FETCH

Let's change our `fetch` to get a **single location** and also to console.log it. We want a single location so that we can display a chart of climate data just for that location.

* Change the URL to get `locations/1`:

In the developer console:

![](https://i.imgur.com/N9oPpus.png)

Cool man cool. **fetch** worked. We received location 1 with along that location's temperatures.

<br>

# CHART.JS

We want to display a chart that graphs all the average high temperatures for a given location.

Chart.js is a library that renders charts using HTML5's [Canvas](http://www.w3schools.com/html/html5_canvas.asp) capability. [Here's a Canvas tutorial for another day](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

Chart.js can do all the heavy lifting with Canvas. All we have to do is plug in some data.

[Chart.js documentation](http://www.chartjs.org/docs/#getting-started)



* We already put a `canvas` element in our BarChart component:

`<canvas id="temperatures" width="300" height="100"></canvas>`

* Let's bring in our data in to the `BarChart.js` component.

```js

componentDidMount () {
	this.getData()
}
getData = () => {
	fetch('http://localhost:3000/locations/1')
		.then(data => data.json())
		.then(jData => console.log(jData))
}
```

* We'll want to prepare our data. Currently our data isn't arranged to go into our bar chart. We could always look up how to make the correctly shaped object in the `chart.js` docs, but for now let's trust that this will do the trick

Our data object at minimum should have two arrays:

* labels - for the x axis
* datasets - for the y axis

```js
getData = () =>{
	fetch('http://localhost:3000/locations/1')
		.then(data => data.json())
		.then(jData => this.prepareData(jData))
		.then(data => console.log(data))
}
prepareData = (data) => {
	const chartData = {
		labels: [],
		datasets: [
			{
				label: 'Avg high temps',
				data: []
			}
		]
	}

	data.temperatures.forEach(temperature => {
		chartData.labels.push(temperature.id)
		chartData.datasets[0].data.push(temperature.average_high_f)
  })
  
  console.log(chartData)


	return chartData
}
```

* Try logging the chartData variable to see what we did!

* Instantiate a new Chart object. The Chart constructor takes the canvas context and an options object as arguments.


```js
getData () {
	fetch('http://localhost:3000/locations/1')
		.then(data => data.json())
		.then(jData => this.prepareData(jData))
		.then(data => this.createChart(data))
}
// ...further down ...
createChart (data) {
	const ctx = document.querySelector('#temperatures')
	const tempsChart = new Chart(ctx, {
		type: 'line',
		data: data
	})
}
```

All the code:

```js
import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component {

  componentDidMount () {
    this.getData()
  }
  getData = () => {
    fetch('http://localhost:3000/locations/1')
      .then(data => data.json())
      .then(jData => this.prepareData(jData))
      .then(data => this.createChart(data))
  }
  prepareData = (data) => {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'Avg high temps',
          data: []
        }
      ]
    }

    data.temperatures.forEach(temperature => {
      chartData.labels.push(temperature.id)
      chartData.datasets[0].data.push(temperature.average_high_f)
    })
    return chartData
  }

  createChart = (data) => {
    const ctx = document.querySelector('#temperatures')
    const tempsChart = new Chart(ctx, {
      type: 'line',
      data: data
        })
  }

  render () {
    return (
      <>
        <h1>New component</h1>
        <canvas id="temperatures" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart

```


If it looks like it's working, then that's exciting.

![](https://i.imgur.com/ndle1zg.png)


## Second dataset

Add in a second dataset for `Avg low temps`.
We'll push in the `average_low_f` data.

```javascript
  const chartData = {
  	labels: [],
  	datasets: [
  		{
  			label: 'Avg high temps',
  			data: []
  		},
  		{
  			label: 'Avg low temps',
  			data: []
  		}
  	]
  };
```

Push in the low temps:

```javascript
  data.temperatures.forEach((temperature) => {
    chartData.labels.push(temperature.id);
    chartData.datasets[0].data.push(temperature.average_high_f);
    chartData.datasets[1].data.push(temperature.average_low_f);
  });
```

Result:

![](https://i.imgur.com/OC4GolP.png)


<br>
<hr>




## Datasets options

Each 'datasets' object can have more options than just `label` and `data`. You can choose how to display each dataset. And as you might have guessed, you can have more than one dataset on a chart.

Try hardcoding each one of these into your chartData options separately and seeing the results

Example:

![](https://i.imgur.com/sD21kGI.png)

Result:

![](https://i.imgur.com/C71r4FA.png)


## Change the chart type

Bar chart

![](https://i.imgur.com/xD2IKNJ.png)

Result:

![](https://i.imgur.com/FSnnmBW.png)



## Chart options

```
  {
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      spanGaps: false,
  }
```


<br>
<hr>

## Bonus
 - Create a form that let's us POST new data to locations/1
 - Have the chart update after the POST request


## Other things our app could do:
* show all of a location's data on a single chart
* have separate charts for each dataset
* display the location in Maps using lat and lng
* have an index of selectable locations
* use React router to tab between charts
* use React router to tab between locations

<br>
<hr>

License

<hr>
