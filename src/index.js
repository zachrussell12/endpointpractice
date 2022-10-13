const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    routes: skillsRoutes,
} = require('./skills/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/skills', skillsRoutes);


module.exports = app;