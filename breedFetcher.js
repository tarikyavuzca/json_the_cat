const request = require('request');
// https://api.thecatapi.com/v1/images/search?=


const fetchBreed = (breed, func) => {

  let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  request(url + breed, (err, response, body) => {
    if (err) {
      func(err, null);
      return;
    }

    let data = JSON.parse(body);
    if (!data.length) {
      func('Cat breed not found :(', null);
      return;
    }
    
    func(null, data[0].description.trim());
    
  });
};

module.exports = fetchBreed ;