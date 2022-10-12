const Employee = require('../lib/Employee');

test('Checks that a new employee name is being created', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.name).toBe('Esra Wameed');
})
test('Checks that a new employee id that is a numerical is created', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.Id).toEqual(expect.any(Number));
})
test('Checks that an email address is created for new employee', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks that the method getName() calls employee name', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.getName()).toBe(employee.name);
})
test('Checks that method getId() gets employee Id', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.getId()).toBe(employee.Id);
})
test('Checks that method getEmail() gets employee email', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.getEmail()).toBe(employee.email);
})
test('Checks that method getRole() gets employee role as employee', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');
    expect(employee.getRole()).toBe('Employee');
})