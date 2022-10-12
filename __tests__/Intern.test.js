const { Intern } = require('../lib/Intern');

test('Checking that a new intern is being created', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');

    expect(intern.name).toBe("Esra Wameed");
    expect(intern.Id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('Checking that all the methods associated with Intern class function', () => {
    const intern = new Intern('Esra Wameed', 210, 'esra@yahoo.com', 'UofT');

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.Id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');
})