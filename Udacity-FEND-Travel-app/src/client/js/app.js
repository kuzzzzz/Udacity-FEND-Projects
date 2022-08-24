
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    getApiData(formText)
      .then(function(data) {
        // getApiData(formText)
        getApiData3(data.country)
        getApiData4(data.country)

        console.log(data)
        document.getElementById('text').innerHTML = 'Name:' + data.country
        getApiData2(data)
    //  getAnimal()

          })
    
}


 const getApiData = async function(newTrip) {

      let coordinateResponse = await fetch("http://localhost:8081/getCoordinates", {
        method: 'POST', 
        credentials: 'same-origin', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({destination: newTrip})
      })
      try {
        let data = await coordinateResponse.json();
        
   
        console.log(data)
        return data;
      } catch(error) {
        console.log(error);
      
       } 
      }
       
      const getApiData2 = async function(data) {

       let weatherResponse = await fetch("http://localhost:8081/getWeather", {
        method: 'POST', 
        credentials: 'same-origin', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'longitude': data.lng,
          'latitude': data.lat
        })
      })
      try {
        let data = await weatherResponse.json();
        document.getElementById('desc').innerHTML = data.data[0].weather.description
        document.getElementById('image3').setAttribute('src',`https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`) 
        document.getElementById('desc1').innerHTML = "Temp:" + data.data[0].temp + "°C"
        document.getElementById('desc2').innerHTML = "TimeZone: " + data.data[0].timezone
        document.getElementById('desc3').innerHTML = "Time of Forcast:" + data.data[0].ob_time

      // console.log(data)
      } catch(error) {
        console.log(error);
      }
      }

      const getApiData3 = async function(data) {
      let imageResponse = await fetch("http://localhost:8081/getImage", {
        method: 'POST', 
        credentials: 'same-origin', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'country': data
        })
      })
      try {
        let data = await imageResponse.json();
        document.getElementById('image').setAttribute('src',`${data.hits[0].largeImageURL}`) 

          // console.log(data)
      } catch(error) {
        console.log(error);
      }
    }


    const getApiData4 = async function(data) {
    let detailResponse = await fetch("http://localhost:8081/getCountryDetail", {
      method: 'POST', 
      credentials: 'same-origin', 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        'countryCode': data
      })
    })
    try {
      let data = await detailResponse.json();
      document.getElementById('image1').setAttribute('src',`${data[0].flag}`) 
      document.getElementById('text1').innerHTML =  'Capital:' + data[0].capital
      document.getElementById('text2').innerHTML =  'Population:' + data[0].population
      document.getElementById('text3').innerHTML =  `Currencies: "${data[0].currencies[0].symbol}"  "${data[0].currencies[0].name}"`

        console.log(data)
    } catch(error) {
      console.log(error);
    }
  }
// Update the results on the UI


export { handleSubmit, getApiData }

