//This is class #1
// Eployee parent class
// The other three classes will extend Employee and they are called child classes
// parent class has three parameters, name, id, and email
class Employee {
    constructor(_name, _id, _email){
        this.name = _name;
        this.Id = _id;
        this.email = _email;
    }


//children will have access to the properties above, as well as the methods below
getName(){
    return this.name
}

getId(){
    return this.Id
}

getEmail(){
    return this.email
}

getRole(){
    return "Employee"
}
}

//exporting module

module.exports = Employee;
