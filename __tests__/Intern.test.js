//requiring parent class Employee
const { Intern } = require('../lib/Intern');
//creating unit test for each property/method to make sure our methods pass jest test
test('Checking that new intern name is being created', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.name).toBe("Esra Wameed");
})
test('Checking that a new intern Id is being added', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.Id).toEqual(expect.any(Number));
})
test('Checking that a new intern email is being added', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.email).toEqual(expect.any(String));
})
test('Checking that a new intern is school being added', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.school).toEqual(expect.any(String));
})

test('Checking that the method getName() calls intern name', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.getName()).toBe(intern.name);
})
    test('Checking that the method getId() calls intern Id', () => {
        const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.getId()).toBe(intern.Id);
    })
    test('Checking that the method getEmail() calls intern email', () => {
        const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.getEmail()).toBe(intern.email);
    })
    test('Checking that the method getEchool() calls intern school name', () => {
        const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.getSchool()).toBe(intern.school);
    })

    test('Checking that the method getRole() calls intern role', () => {
        const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');
    expect(intern.getRole()).toBe('Intern');
})