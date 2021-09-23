const fetchBreed = require('./breedFetcher');
let name = process.argv[2];

fetchBreed(name, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});