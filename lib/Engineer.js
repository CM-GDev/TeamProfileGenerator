// Import parent class
const Employee = require('./Employee');

// Create engineer class that extends the "employee" class
class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email);

    this.github = github;
    }

    getGithub(){
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;