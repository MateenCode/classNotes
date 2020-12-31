/**Now that the library has been installed (downloaded), we can use it in our code, by 
 * using the require() function */

const express = require('express');

/**creat an instance of express */
const app = express();
/**Get request */
app.get('/', (request, response) => {
    console.log('got a request')
    response.send('Hello World!');

});

app.get('/somedata', (request, response) => {
    response.send('here is your info')

})


app.listen(3000, ()=> {
    console.log('listening to port 3000')
});
/**3000 is the port */