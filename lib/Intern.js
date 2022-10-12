//In addition to Employee's properties and methods, Intern will also have:
//school
//getSchool()
//getRole() // Overridden to return 'Intern'
//rquiring Employee parent class
const Employee = require("./Employee");
//creating an array of prompts to ask about the Intern
const promptIntern=[
    {
        type: 'input',
        name: '_name',
        message: "What is the name of the intern?"
    },
    {
        type: 'input',
        name: '_id',
        message: "What is the id of the intern?"
    },
    {
        type: 'input',
        name: '_email',
        message: "What is the  email of the intern?"
    },
    {
        type: 'input',
        name: '_school',
        message: "What is the school the intern attends?"
    }
]
class Intern extends Employee{
    constructor(_name,_id, _email, _school){
        //we have to call the parent constructor
        super(_name,_id,_email);
        //custom behavior of intern
        this.school = _school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}
//exporting Intern class module alongside the prompts
module.exports = { Intern, promptIntern};