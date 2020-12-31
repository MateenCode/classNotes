const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const path = require('path')

app.use(express.static('public'))

//app.use('/api', apiController)

app.get('*', (req,res) => {
	res.sendFile(path.join(`${__dirname}/public/index.html`))
})

app.listen(PORT, () => {
	console.log('listening on port', PORT)
})