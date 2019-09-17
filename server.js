 if (process.env.NODE_ENV !== 'production') {
     require('dotenv').config()

 }

const express = require('express');
const app = express()
const expressLayouts = require('express-ejs-layouts')
//importing the index router
const indexRouter = require('./routes/index')
//sets the view engine to ejs
app.set('view engine', 'ejs')
//setting up the views in  views folder
app.set('views', __dirname + '/views')
//setting up the layout page for the application using expressLayouts
app.set('layout', 'layouts/layout')
//using expressLayouts
app.use(expressLayouts)
//setting up the public folder
app.use(express.static('public'))

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.error('Connected to Mongoose'))
//use the index route
app.use('/', indexRouter)




//server initialization on port 3000
app.listen(process.env.PORT || 3000)