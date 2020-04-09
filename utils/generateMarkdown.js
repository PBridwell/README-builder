function generateMarkdown(data, response) {
  console.log(data, response);
  return `
  # ${data.title}

  ![Badge](https://img.shields.io/static/v1?label=GitHub_User&message=PBridwell&color=<COLOR>?style=plastic)

  ## Description

  ${data.description}
  
  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Technologies](#Built-with)
  - [License](#License)
  - [Questions](#Questions)


  ### Installation
    The Application should be installed by running the following commands:
  
   ${data.install}
  
  ## Usage 
  
  ## Tests
  ${data.tests}
  ## Built With
  ${data.technologies}
  ## License

  ${data.license}
  
  ## Questions
  * **${data.name}** - *Lead Developer* 
  If you have any questions about the application, feel free to contact me.
  - [${response.email}](Email)
  <img src="${response.avatar_url}" alt="Smiley face" height="35" width="35">

`;
}

module.exports = generateMarkdown;


