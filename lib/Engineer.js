//In addition to Employee's properties and methods, Engineer will also have:
//github // GitHub username
//getGithub()
//getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(_name,_id, _email, _github ){
    // we have to call the parent constructor
    super(_name, _id, _email,);
    //custom behavior of Engineer
    this.github = _github;
    }

getGithub(){
    return _github;
}
getRole(){
    return "Engineer";
}

}