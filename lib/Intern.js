//In addition to Employee's properties and methods, Intern will also have:
//school
//getSchool()
//getRole() // Overridden to return 'Intern'

class Intern extends Employee{
    constructor(_name,_id, _email, _school){
        //we have to call the parent constructor
        super(_name,_id,_email);
        //custom behavior of intern
        this.school = _school;
    }

    getSchool(){
        return _school;
    }

    getRole(){
        return "Intern";
    }
}