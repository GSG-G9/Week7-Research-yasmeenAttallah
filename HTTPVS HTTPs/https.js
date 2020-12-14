const express = require ('express');
const  fs  = require('fs');
const https = require('https');
const app = express();
app.use('/',(req,res,next) => {
    res.send('Hello from SSL server :)')
})
const sslServer = https.createServer({key :fs.readFileSync('key.pem')},app);
    sslServer.listen(5000,()=> {
        console.log('secure server on port 5000 is listening ')
    })
