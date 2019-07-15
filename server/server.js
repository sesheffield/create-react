/* Load the HTTP library */
// interface to deal with http operations
var express = require('express');
var app = express();
var cors = require('cors');
var cookieParser = require('cookie-parser')

// var client_id = '355eb124f7c446f5b066cae3669f72e3'; // Your client id
// var client_secret = '82a67779d98d4cc1aee8e291526faeb0'; // Your secret
// var redirect_uri = 'http://localhost:8080/'; // Your redirect uri

// process.env.PORT gets the environment port the app is running on and somehow,
// if it’s not available, we default it to 3000.
app.set('port', process.env.PORT || 3000);

// enable cors
app.use(express.static('/src/index.html'))
   .use(cors())
   .use(cookieParser());

//Basic routes
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//Express error handling middleware
// .use means it is using middleware. This is using some http middleware
app.use((request,response)=>{
  response.type('text/plain');
  response.status(505);
  response.send('Error page');
});

app.listen(3000,()=>{
    console.log('Express app created at port 3000');
});