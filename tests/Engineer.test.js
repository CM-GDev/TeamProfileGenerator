//Jest Tests for Engineer Class
const Engineer = require('../lib/Engineer');
//Creating one test suite
describe("Engineer", ()=> {
    //Creating eight total tests
    describe("Initialization", () => {
        test("Should return an object containing 'name', 'id', 'email' and 'gitHub' properties when called with the 'new' keyword", ()=> {
            //Arrange and Act
            const obj = new Engineer();
            // Assert
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('gitHub' in obj).toEqual(true);
        });

        test("Should set 'name', 'id', 'email' and 'gitHub' when created", ()=> {
            //Arrange
            const name = 'Cristobal';
            const id = '01';
            const email = 'cristobal@gmail.com';
            const gitHub = 'My GitHub'
            //Act
            const obj = new Engineer(name, id, email, gitHub);
            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.gitHub).toEqual(gitHub);
        });

        test("Should default 'name', 'id', 'email' and 'gitHub' to 'undefined'", ()=> {
            //Arrange and Act
            const obj = new Engineer();
            //Assert
            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
            expect(obj.gitHub).toEqual(undefined);
        });
    });
    //Start of Engineer functions tests
    describe('getName', () =>{
        test("Should return 'name'", () => {
            //Arrange
            const name = 'Cristobal';
            const obj = new Engineer(name, '01', 'cristobal@gmail.com', 'My GitHub');
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
            const obj = new Engineer('Cristobal', id, 'cristobal@gmail.com','My GitHub');
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
            const obj = new Engineer('Cristobal', '01', email, 'My GitHub');
            //Act
            inputEmail = obj.getEmail();
            //Assert
            expect(email).toEqual(inputEmail);
        });
    });

    describe('getRole', () =>{
        test("Should return 'Engineer'", () => {
            //Arrange
            const obj = new Engineer('Cristobal', '01', 'cristobalmqz@gmail.com', 'My GitHub');
            //Act
            role = obj.getRole();
            //Assert
            expect('Engineer').toEqual(role);
        });
    });

    describe('getGithub', () =>{
        test("Should return 'My GitHub'", () => {
            //Arrange
            const obj = new Engineer('Cristobal', '01', 'cristobalmqz@gmail.com', 'My GitHub');
            //Act
            gitHub = obj.getGithub();
            //Assert
            expect('My GitHub').toEqual(gitHub);
        });
    });
})