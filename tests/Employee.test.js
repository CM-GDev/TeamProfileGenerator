//Jest Tests for Employee Class
const Employee = require('../lib/Employee');
//Creating one test suite
describe("Employee", ()=> {
    //Creating seven total tests
    describe("Initialization", () => {
        test("Should return an object containing 'name', 'id' and 'email' properties when called with the 'new' keyword", ()=> {
            //Arrange and Act
            const obj = new Employee();
            // Assert
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });

        test("Should set 'name', 'id' and 'email' when created", ()=> {
            //Arrange
            const name = 'Cristobal';
            const id = '01';
            const email = 'cristobal@gmail.com';
            //Act
            const obj = new Employee(name, id, email);
            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });

        test("Should default 'name', 'id' and 'email' to 'undefined'", ()=> {
            //Arrange and Act
            const obj = new Employee();
            //Assert
            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
        });
    });
    //Start of Employee functions tests
    describe('getName', () =>{
        test("Should return 'name'", () => {
            //Arrange
            const name = 'Cristobal';
            const obj = new Employee(name, '01', 'cristobal@gmail.com');
            //Act
            inputName = obj.getName();
            //Assert
            expect(name).toEqual(inputName);
        });
    });

    describe('getID', () =>{
        test("Should return 'id'", () => {
            //Arrange
            const id = '01';
            const obj = new Employee('Cristobal', id, 'cristobal@gmail.com');
            //Act
            inputID = obj.getID();
            //Assert
            expect(id).toEqual(inputID);
        });
    });

    describe('getEmail', () =>{
        test("Should return 'email'", () => {
            //Arrange
            const email = 'cristobalmqz@gmail.com';
            const obj = new Employee('Cristobal', '01', email);
            //Act
            inputEmail = obj.getEmail();
            //Assert
            expect(email).toEqual(inputEmail);
        });
    });

    describe('getRole', () =>{
        test("Should return 'Employee'", () => {
            //Arrange
            const obj = new Employee('Cristobal', '01', 'cristobalmqz@gmail.com');
            //Act
            role = obj.getRole();
            //Assert
            expect('Employee').toEqual(role);
        });
    });
})