require('dotenv').config()
const axios = require('axios')

const api = {
  getUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {"Authorization": "token 8554896a03baad4493f786697c175633c08cd803"}
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }
};

api.getUser("PBridwell")

module.exports = api;

