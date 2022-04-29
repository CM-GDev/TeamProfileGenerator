//Jest Tests for Manager Class
const Manager = require('../lib/Manager');
//Creating one test suite
describe("Manager", ()=> {
    //Creating seven total tests
    describe("Initialization", () => {
        test("Should return an object containing 'name', 'id', 'email' and 'officeNumber' properties when called with the 'new' keyword", ()=> {
            //Arrange and Act
            const obj = new Manager();
            // Assert
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('officeNumber' in obj).toEqual(true);
        });

        test("Should set 'name', 'id', 'email' and 'officeNumber' when created", ()=> {
            //Arrange
            const name = 'Cristobal';
            const id = '01';
            const email = 'cristobal@gmail.com';
            const officeNumber = '25'
            //Act
            const obj = new Manager(name, id, email, officeNumber);
            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        });

        test("Should default 'name', 'id', 'email' and 'officeNumber' to 'undefined'", ()=> {
            //Arrange and Act
            const obj = new Manager();
            //Assert
            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
            expect(obj.officeNumber).toEqual(undefined);
        });
    });
    //Start of Manager functions tests
    describe('getName', () =>{
        test("Should return 'name'", () => {
            //Arrange
            const name = 'Cristobal';
            const obj = new Manager(name, '01', 'cristobal@gmail.com', '25');
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
            const obj = new Manager('Cristobal', id, 'cristobal@gmail.com', '25');
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
            const obj = new Manager('Cristobal', '01', email, '25');
            //Act
            inputEmail = obj.getEmail();
            //Assert
            expect(email).toEqual(inputEmail);
        });
    });

    describe('getRole', () =>{
        test("Should return 'Manager'", () => {
            //Arrange
            const obj = new Manager('Cristobal', '01', 'cristobalmqz@gmail.com', '25');
            //Act
            role = obj.getRole();
            //Assert
            expect('Manager').toEqual(role);
        });
    });
})