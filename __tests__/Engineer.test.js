//requiring parent class Employee
const { Engineer } = require('../lib/Engineer');
//creating unit test for each property/method to make sure our methods pass jest test
test('Checking that the engineer is being passed a name', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.name).toBe('Esra Wameed');
})
test('Checking that the engineer is being passed a namnumerical value for Id', () => {
    const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
    expect(engineer.Id).toEqual(expect.any(Number));
})
test('Checking that the engineer is being passed an email address', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.email).toEqual(expect.any(String));
})
test('Checking that the engineer is being passed a github username', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.github).toEqual(expect.any(String));
})

test('Checking that getName() is getting engineer name', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.getName()).toBe(engineer.name);
})
test('Checking that getId() is getting engineer Id', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.getId()).toBe(engineer.Id);
})
test('Checking that getEmail() is getting engineer email', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.getEmail()).toBe(engineer.email);
})
test('Checking that getGithub() is getting engineer github username', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.getGithub()).toBe(engineer.github);
})
test('Checking that getRole() is getting engineer role', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');
  expect(engineer.getRole()).toBe('Engineer');
})