// Import parent class
const Employee = require('./Employee');

// Create engineer class that extends the "employee" class
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
    super(name, id, email);

    this.gitHub = gitHub;
    }

    getGithub(){
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;