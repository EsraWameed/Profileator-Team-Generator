const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');

    expect(employee.name).toBe('Esra Wameed');
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Esra Wameed', 17623, 'esra@yahoo.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.Id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})