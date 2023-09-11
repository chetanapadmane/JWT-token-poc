const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/node_auth', {}).then(() => {
    console.log('connected to DB');
});

const routes = require('./routes/routes');
const app = express();

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))
app.use(express.json());

app.use('/api', routes);

app.listen(8080);