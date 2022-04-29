//Jest Tests for Intern Class
const Intern = require('../lib/Intern');
//Creating one test suite
describe("Intern", ()=> {
    //Creating eight total tests
    describe("Initialization", () => {
        test("Should return an object containing 'name', 'id', 'email' and 'school' properties when called with the 'new' keyword", ()=> {
            //Arrange and Act
            const obj = new Intern();
            // Assert
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('school' in obj).toEqual(true);
        });

        test("Should set 'name', 'id', 'email' and 'school' when created", ()=> {
            //Arrange
            const name = 'Cristobal';
            const id = '01';
            const email = 'cristobal@gmail.com';
            const school = 'UW Code Camp'
            //Act
            const obj = new Intern(name, id, email, school);
            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });

        test("Should default 'name', 'id', 'email' and 'school' to 'undefined'", ()=> {
            //Arrange and Act
            const obj = new Intern();
            //Assert
            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
            expect(obj.school).toEqual(undefined);
        });
    });
    //Start of Intern functions tests
    describe('getName', () =>{
        test("Should return 'name'", () => {
            //Arrange
            const name = 'Cristobal';
            const obj = new Intern(name, '01', 'cristobal@gmail.com', 'UW Code Camp');
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
            const obj = new Intern('Cristobal', id, 'cristobal@gmail.com','UW Code Camp');
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
            const obj = new Intern('Cristobal', '01', email, 'UW Code Camp');
            //Act
            inputEmail = obj.getEmail();
            //Assert
            expect(email).toEqual(inputEmail);
        });
    });

    describe('getRole', () =>{
        test("Should return 'Intern'", () => {
            //Arrange
            const obj = new Intern('Cristobal', '01', 'cristobalmqz@gmail.com', 'UW Code Camp');
            //Act
            role = obj.getRole();
            //Assert
            expect('Intern').toEqual(role);
        });
    });

    describe('getSchool', () =>{
        test("Should return 'UW Code Camp'", () => {
            //Arrange
            const obj = new Intern('Cristobal', '01', 'cristobalmqz@gmail.com', 'UW Code Camp');
            //Act
            school = obj.getSchool();
            //Assert
            expect('UW Code Camp').toEqual(school);
        });
    });
})