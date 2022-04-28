// Import parent class
const Employee = require('./Employee');

// Create intern class that extends the "employee" class
class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email);

    this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;