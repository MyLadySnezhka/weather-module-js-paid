const weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

const pogodun = (city) => {
weather.find({search: city, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    //console.log(JSON.stringify(result, null, 2));
    //let cityw = JSON.stringify(result, null, 2);
    //let cityw = result.data;
    console.log('Температура:', result[0].current.temperature);
    //console.log(cityw);
  });
};

module.exports = pogodun;