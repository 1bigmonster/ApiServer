const http = require('http');
const express = require('express');

const activityRouter = require('./routes/activities');
const walletRouter = require('./routes/wallet');

//TODO npm redis or postgre sql
//TODO npm log4js
//TODO https
//TODO api authentication
//TODO throttle, rate of request.
//TODO ip white list
//TODO after user sign up, store the user information.

const app = express();
app.use(express.json());

app.use('/activities', activityRouter);
app.use('/wallet', walletRouter);

// app.use('/', function(req, res) {
//     res.send('todo api works');
// });
const server = http.createServer(app);
const port = 5000;
server.listen(port);
console.log('Server listening on port ' + port);