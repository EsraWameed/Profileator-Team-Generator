const { Manager } = require('../lib/Manager');

test('Checks that a new manager name was created', () => {
    const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.name).toBe('Esra Wameed');
})
test('Checks that a new manager Id was created', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.Id).toEqual(expect.any(Number));
})

test('Checks that a new manager email was created', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.email).toEqual(expect.any(String));
})
test('Checks that a new manager office number was created', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('Checking that the method getName() calls manager name', () => {
    const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.getName()).toBe(manager.name);
})

test('Checking that the method getId() calls for the manager Id', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.getId()).toBe(manager.Id);
})

test('Checking that the method getEmail() calls manager email', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.getEmail()).toBe(manager.email);
})

test('Checking that the method getOfficeNumber() calls manager office number', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
})
test('Checking that the method getRole() calls manager Role in company', () => {
        const manager = new Manager('Esra Wameed', 16512, 'esra@yahoo.com', 1234567890);
    expect(manager.getRole()).toBe('Manager');
})