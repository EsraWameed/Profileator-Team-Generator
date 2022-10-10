//In addition to Employee's properties and methods, Manager will also have:
//officeNumber
//getRole() // Overridden to return 'Manager'

class Manager extends Employee{
    constructor(_name,_id,_email,_officeNumber){
        //we have to call the parent constructor "Employee"
        super(_name,_id,_email);
        //custom behavior of Manager
        this.officeNumber = _officeNumber;
    }
getOfficeNumber(){
    return _officeNumber;
}

getRole(){
    return "Manager"
}
}