// import express (after npm install express)
const express = require('express');
const path = require('path');

// create new express app and save it as "app"
const app = express();


// server configuration	
const PORT = 8080;

//serving static pages from public folder
app.use('/images', express.static(__dirname + '/Images'));

//app.use(express.static('public'));



app.use(express.static(path.join(__dirname, 'public')))


// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});



// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});