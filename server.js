const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //makes data from the POST body readable
const receipts = require('./routes/api/receipts');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo DB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/receipts/', receipts);


const port = process.env.PORT || 5000 //process.env.PORT for deploying live to heroku (process.env is declared in server json - here nodemon.json) else just port 5000 for dev server
app.listen(port, () => console.log(`Server started on port ${port}`));