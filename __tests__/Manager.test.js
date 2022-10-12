const { Manager } = require('../lib/Manager');

test('Checks that a new manager was created', () => {
    const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);

    expect(manager.name).toBe('Esra Wameed');
    expect(manager.Id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('Checking that all the methods in the class Manager are functioning', () => {
    const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.Id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe('Manager');
})