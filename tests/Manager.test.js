const Manager = require("../lib/Manager");

// Manager Object
test("Creates an Manager object", () => {
  const manager = new Manager("Alex Barrett", 1, "abarrett@gmail.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

//Get role from getRole()
test("Gets manager role", () => {
  const manager = new Manager("Alex Barrett", 1, "abarrett@gmail.com", 1);

  expect(manager.getRole()).toEqual("Manager");
});
