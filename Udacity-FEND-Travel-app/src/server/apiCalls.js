const fetch = require("node-fetch");

async function getCoordinates(req,res) {
    // fetch data from Geonames API
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${req.body.destination}&maxRows=1&username=amd1`)
  
    try {
      const data = await response.json();
    newentry =  {
       lat:data.geonames[0].lat,
      lng:data.geonames[0].lng,
      country:data.geonames[0].countryName
    }
    // console.log(data)
    res.send(newentry)
    } 
  
    catch(error) {
      console.log({"error": error});
    }
  };
  
  async function getWeather(req, res) {
    // Fetch data from the Weatherbits API
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${process.env.WEATHERBIT_kEY}`)
   
  
    try {
      const data = await response.json();
      // console.log(data)
      res.send(data);
    } catch(error) {
      console.log(error);
    }
  }

  async function getImage(req, res) {
    const country = req.body
  // console.log(country.country)
    // fetch data from the Pixabay API passing in the destination city
    let response = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${country.country}&image_type=photo`);
    try {
      let data = await response.json();
      if (data.totalHits > 1) 
      // console.log(data)
        res.send(data);
    } catch(error) {
      console.log(error);
    }
  }
  
  async function getCountryDetail(req, res) {
    let country = req.body.countryCode
    console.log(country)
    if(country === 'United States'){
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${country+' of America'}?fullText=true`);
      try {
        const data = await response.json();
         console.log(data)
        res.send(data);
      } catch(error) {
        console.log(error);
      }
    }else{
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
  
    try {
      const data = await response.json();
       console.log(data)
      res.send(data);
    } catch(error) {
      console.log(error);
    }
  }
}
  
exports.getCoordinates = getCoordinates;
exports.getWeather = getWeather;
exports.getImage = getImage;
exports.getCountryDetail = getCountryDetail;