//In addition to Employee's properties and methods, Engineer will also have:
//github // GitHub username
//getGithub()
//getRole() // Overridden to return 'Engineer'
//requiring Employee
const Employee = require("./Employee"); 
//creating engineer prompts
const promptEngineer =[
    {
        type:"input",
        name: "_name",
        message: "What is the Engineer's name?"
    },
    {
        type:"input",
        name: "_id",
        message: "What is the Engineer's Id?"
    },
    {
        type:"input",
        name: "_email",
        message: "What is the Engineer's email?"
    },
    {
        type:"input",
        name: "_github",
        message: "What is the Engineer's github username?"
    },
]
class Engineer extends Employee {
    constructor(_name,_id, _email, _github ){
    // we have to call the parent constructor
    super(_name, _id, _email);
    //custom behavior of Engineer
    this.github = _github;
    }

getGithub(){
    return this.github;
}
getRole(){
    return "Engineer";
}

}

//exporting the module with the Engineer's prompts
module.exports = {Engineer, promptEngineer};
