'use strict';

const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 4000

console.log('Hello');
