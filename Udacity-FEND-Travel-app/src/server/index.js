const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')

const bodyParser = require('body-parser')
const apiCalls = require('./apiCalls');


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



app.post('/getCoordinates', apiCalls.getCoordinates)



app.post('/getWeather', apiCalls.getWeather)



app.post('/getImage', apiCalls.getImage)


app.post('/getCountryDetail', apiCalls.getCountryDetail)




  app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
  })

  