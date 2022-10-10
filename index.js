//requiring packages/ class modules and prompt arrays
const writeFile = require("./src/writeFile");
const inquirer = require("inquirer");
const template = require("pageTemplate");
const {Manager, promptManager} = require("./lib/Manager");
const {Engineer, prompEngineer} = require("./lib/Engineer");
const {Intern, promptIntern} = require("./lib/Intern");
//an array to store team members generated
const teamMembers=[];
// function to initiate/run the application
//asks the manager questions and runs teamPrompts function allowing them to select employee type they'd like to add
const runApp=() =>{
    inquirer.prompt(promptManager)
    .then((responses)=>{
        responses = new Manager(
            responses.name,
            responses.id,
            responses.email,
            responses.officeNumber
        )
            teamMembers.push(responses);
            return teamPrompts();
    })
}

const engineerPrompting = () => {
    inquirer.prompt(promptEngineer)
    .then(( responses ) => {
        responses = new Engineer(responses.name, responses.id, responses.email, responses.github)
        teamMembers.push(responses);
        return teamPrompts();
    })
}

const internPrompting = () => {
    inquirer.prompt(promptItern)
    .then(( responses ) => {
        responses = new Intern(responses.name, responses.id, responses.email, responses.school)
        teamMembers.push(responses);
        return teamPrompts();
    })
}



//depending on which team position is selected, customized prompts are displayed
const teamPrompts=()=>{
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'positionTitle',
                message: "Wich team position would you like to add?",
                choices: [
                    {name: 'Engineer', value: "anEngineer"},
                    {name: 'Intern', value: "anIntern"},
                    {name: 'DONE', value: "done"} 
                        ] 
            }
        ]
    ).then(response =>{
        if(response.positionTitle ==="anEngineer"){
            engineerPrompting();
        };

        if (response.positionTitle === "anIntern"){
            internPrompting();
        };
        
        if (response.positionTitle === "done"){
            writeFile(template(teamMembers));
        }
    })
}

runApp();