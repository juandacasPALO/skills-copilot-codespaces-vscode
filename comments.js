// Create web server
const express = require('express');
const app = express();

// Use the body-parser middleware to parse the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import the comments data
const comments = require('./data/comments');

// Import the posts data
const posts = require('./data/posts');