const manager = inputtedInfo => {
    return `
    <div id="${inputtedInfo.getRole()}-card" class="card">
      <div class="box name-role manager-name">
        <h2>${inputtedInfo.getName()}</h2>
        <h3>Role: ${inputtedInfo.getRole()}</h3>
      </div>
      <div class="box employee-info">
        <ul class="listTable">
          <li class="list">ID: ${inputtedInfo.getId()}</li>
          <li class="list">Email: <a href="mailto:${inputtedInfo.getEmail()}">${inputtedInfo.getEmail()}</a></li>
          <li class="list">Office Number: ${inputtedInfo.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `
  }
  // Engineer card template
  const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}-card" class="card">
      <div class="box name-role engineer-name">
        <h2>${engineerData.getName()}</h2>
        <h3>Role: ${engineerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="listTable">
          <li class="list">ID: ${engineerData.getId()}</li>
          <li class="list">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
          
          <li class="list">Github:
          <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
  `
  }
  // Intern card template
  const intern = internData => {
    return `
    <div id="${internData.getRole()}-card" class="card">
      <div class="box name-role intern-name">
        <h2>${internData.getName()}</h2>
        <h3>Role: ${internData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="listTable">
          <li class="list">ID: ${internData.getId()}</li>
          <li class="list">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
          <li class="list">School: ${internData.getSchool()}</li>
        </ul>
      </div>
    </div>
  `
  }
  // iterates through answers array, creates cards for each team member, then combines all cards together
  const theTeam = teamArray => {
    let employeeHtml = ''
  
    for ( i = 0; i < teamArray.length; i++ ) {
      if (teamArray[i].getRole() === "Manager"){
        employeeHtml = employeeHtml + manager(teamArray[i])
      }
      if (teamArray[i].getRole() === "Engineer"){
        employeeHtml = employeeHtml + engineer(teamArray[i])
      }
      if (teamArray[i].getRole() === "Intern"){
        employeeHtml = employeeHtml + intern(teamArray[i])
      }
    } return employeeHtml
  }
  // html page template
  const template = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profilator</title>
        <link rel="stylesheet" href="./style.css"><source src="../templatePage.js" type="page-template">
        </head>
      <body>
        <header class = "container">
            <h1> Team Members</h1>
        </header>
        <main class = "container">
        ${theTeam(data)}
        </main>
      </body>
    </html>
  `
  }
  
  module.exports = template;