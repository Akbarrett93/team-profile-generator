const Employee = require("../lib/Employee");

// Employee Object
test("Creates an employee object", () => {
  const employee = new Employee("Alex Barrett", 1, "abarrett@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//Get name from getName()
test("Gets employee name", () => {
  const employee = new Employee("Alex Barrett", 1, "abarrett@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

//Get id from getId()
test("Gets employee id", () => {
  const employee = new Employee("Alex Barrett", 1, "abarrett@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

//Get email from getEmail()
test("Gets employee email", () => {
  const employee = new Employee("Alex Barrett", 1, "abarrett@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

//Get role from getRole()
test("Gets employee role", () => {
  const employee = new Employee("Alex Barrett", 1, "abarrett@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
