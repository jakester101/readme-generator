

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let readme = 
  
  `# ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license}.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please feel free to reach out to me on [GitHub](https://github.com/${data.github}) or via email at ${data.email}.`;
  return readme;}


module.exports = generateMarkdown;
