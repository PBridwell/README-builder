require('dotenv').config()
const questions = require('../index.js')
const axios = require('axios')
console.log(questions)
const api = {
  getUser(username) {
    axios
      .get(`https://api.github.com/users/${questions.answers.user}`, {
        headers: {"Authorization": "token " + process.env.API_TOKEN}
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }
};

// api.getUser("PBridwell")

module.exports = api;

