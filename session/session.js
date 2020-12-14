const session = require('express-session');
const express = require('express');
const app = express();
const sess = {
    secret: 'keyboard cat',
    cookie: {}
  }
  app.use(session(sess))
app.listen(5000,()=> {
    console.log('session on  port 5000 is listening ')
})