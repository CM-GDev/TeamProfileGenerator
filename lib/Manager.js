// Import parent class
const Employee = require('./Employee');

// Create manager class that extends the "employee" class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super(name, id, email);

    this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

// const golf = new Manager ('Cristobal', '001', 'athe@gmail.com', '01');
// console.log(golf.getRole())
// console.log(golf)