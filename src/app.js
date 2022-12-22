const express = require('express');
const albumRouter = require('./routes/album');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);
app.use('/albums', albumRouter)

module.exports = app;