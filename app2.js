const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherapi.com/v1/current.json?key=ab677e734cd443d2a52121725240805&q=London&aqi=yes'

// // "request" contains 2 things, property and function sections
// request({ url: url, json: true}, (error, response) => {

//     if(error) {
//         console.log('Unable to connect to weather services!')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     } else{
//         console.log('It is currently ' + response.body.current.temp_c + ' degrees out. ')
//         console.log('It feels like ' + response.body.current.feelslike_c)
//     }

//     // console.log(response)

//    //// const data = JSON.parse(response.body)
//    //// console.log(data)

//     // console.log(data.current)
    
//     // console.log(response.body.current)

//     // console.log(response.body.current.condition.text)
   
//     // console.log(error)
// })


// geocode('India', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

const address = process.argv[2];

if(!address){
    console.log("Please provide an address");
} else{
    geocode(address, (error, data) => {
        console.log('Error', error);
        console.log('Data', data);
    })
}

