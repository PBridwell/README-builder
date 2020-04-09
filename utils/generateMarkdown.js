function generateMarkdown(data, response) {
  console.log(data, response);
  return `
  # ${data.title}

  ## Badge

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
    The Application should be installed by running the following commands
  
   ${data.install}
  
  ## Usage 
  
  ## Tests
  ${data.tests}
  ## Built With
  {Technologies checklist}
  ## License
  
  ## Questions
  * **Name from github response** - *Lead Developer* 
  If you have any questions about the application, feel free to contact me.
  {bio image}
  - [Email from github response](Email)

`;
}

module.exports = generateMarkdown;


