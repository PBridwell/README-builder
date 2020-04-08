require('dotenv').config()
const axios = require('axios')

const api = {
  getUser(username) {
    console.log("api", username)
  
    return axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {"Authorization": "token " + process.env.API_TOKEN}
      })
      // .then(response => response.data)
        
      // .catch(error => console.log(error))
  }
};

// api.getUser("PBridwell")

module.exports = api;

