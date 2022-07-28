let weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'Odessa, UA', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    //console.log(JSON.stringify(result, null, 2));
    let cityw = JSON.stringify(result, null, 2);
    //let cityw = result.data;
    //console.log(cityw.current.temperature);
    console.log(cityw);
  });