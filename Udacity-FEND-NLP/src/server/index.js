const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')

const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");
const bodyParser = require('body-parser')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('dist'))
// console.log(__dirname)

const appData = []

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))

})
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.post('/article', getArticle)
function getArticle(req,res) {
  textapi.sentiment({
    url: req.body.url
    }, 
    function(error, response) {
      appData.push(response)
      // console.log(appData)
      res.send(appData);
    }
  );
  
}

  app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
  })
