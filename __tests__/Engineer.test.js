const { Engineer } = require('../lib/Engineer');

test('Checking that another child class "Engineer is being created', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');

  expect(engineer.name).toBe('Esra Wameed');
  expect(engineer.Id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
})

test('Checking that all the methods in the class are functioning', () => {
  const engineer = new Engineer('Esra Wameed', 1234, 'esra@yahoo.com', 'EsraWameed');

  expect(engineer.getName()).toBe(engineer.name);
  expect(engineer.getId()).toBe(engineer.Id);
  expect(engineer.getEmail()).toBe(engineer.email);
  expect(engineer.getGithub()).toBe(engineer.github);
  expect(engineer.getRole()).toBe('Engineer');
})