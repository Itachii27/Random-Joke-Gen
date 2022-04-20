
import fetch from 'node-fetch'
let fetchJokes = () => {
    fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
    }).then(function(response) {
    /* convert Stringified JSON response to Javascript Object */
    return response.json();
  }).then(function(data) {
    return data;
  }).catch(function(error) {
    console.log(error);
  });
}


export { fetchJokes };