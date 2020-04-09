require('dotenv').config()
const axios = require('axios')

const api = {
  getUser(username) {
    console.log("api", username)
  
    return axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {"Authorization": "token " + process.env.API_TOKEN}
      })
     
  }
};

// api.getUser("PBridwell")

module.exports = api;

