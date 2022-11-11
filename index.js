const mongoose = require("mongoose");
const express = require('express')
const app = express()
const LogDB = require('./web/other/LogDB');
const UserDB = require('./web/other/UserDB.js');
const bodyparser = require("body-parser")
const ejs = require('ejs')

const fs = require("fs");
const { Console } = require("console");



process.on('unhandledRejection', (reason, p) => {
  console.log(reason, p)
});
process.on("uncaughtException", (err, origin) => {
  console.log(err, origin)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err, origin)

});

mongoose 
.connect("mongodb+srv://mg:mani2244@cluster0.ldetkfl.mongodb.net/BangBros", {
       useNewUrlParser: true,
       useUnifiedTopology: true,
})   
.then(() => console.log("Connected To Database"))
.catch(err => console.log("Kose Nanat Khoamneyi"));

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', function routeHandler(req, res) {

  res.sendFile(__dirname + "/web/Html/login.html")

});

app.get('/Css/login.css', function routeHandler(req, res) {

  res.sendFile(__dirname + "/web/Css/login.css");
});
app.get('/Css/style.css', function routeHandler(req, res) {

  res.sendFile(__dirname + "/web/Css/style.css");
});
app.get('/Css/Main-Image.jpeg', function routeHandler(req, res) {

  res.sendFile(__dirname + "/web/Css/Main-Image.jpeg");
});

app.post('/', async(req, res) => {

    LogDB.find({}, function(err, user) {
      if(req.body.Pass == "BS")
      {
        res.render('index', {
        userslist: user,
      })
    }
    else
    {
      res.send("نتوانستیم شمارا شناسایی کنیم")
    }
  })

})


var server_port = process.env.YOUR_PORT || process.env.PORT || 8585;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, function() {
  console.log('Listening on port %d', server_port);
});