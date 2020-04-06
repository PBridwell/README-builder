require('dotenv').config()
const axios = require('axios')

const api = {
  getUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {"Authorization": "token 3b399af715e77ccc38a035e7c8c2f2f81f1d9058"}
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }
};

api.getUser("PBridwell")

module.exports = api;

