//In addition to Employee's properties and methods, Manager will also have:
//officeNumber
//getRole() // Overridden to return 'Manager'
//requiring parent class
const Employee = require("./Employee");
//creating an array of prompts to collect data
const promptManager = [

    {
        type: 'input',
        name: '_name',
        message: "What is the name of the manager?"
    },
    {
        type: 'input',
        name: '_id',
        message: "What is the id of the manager"
    },
    {
        type: 'input',
        name: '_email',
        message: "What is the email of the manager?"
    },
    {
        type: 'input',
        name: '_officeNumber',
        message: "What is the office number of the manager?"
    }

]
class Manager extends Employee{
    constructor(_name,_id,_email,_officeNumber){
        //we have to call the parent constructor "Employee"
        super(_name,_id,_email);
        //custom behavior of Manager
        this.officeNumber = _officeNumber;
    }
getOfficeNumber(){
    return this.officeNumber;
}

getRole(){
    return "Manager"
}
}
//exporting class module
module.exports = { Manager, promptManager};