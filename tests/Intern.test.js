const Intern = require("../lib/Intern");

// Intern Object
test("Creates an intern object", () => {
  const intern = new Intern("Alex Barrett", 1, "abarrett@gmail.com", "NCSU");

  expect(intern.school).toEqual(expect.any(String));
});

// Get school from getSchool()
test("Gets employee github", () => {
  const intern = new Intern("Alex Barrett", 1, "abarrett@gmail.com", "NCSU");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

//Get role from getRole()
test("Gets intern role", () => {
  const intern = new Intern("Alex Barrett", 1, "abarrett@gmail.com", "NCSU");

  expect(intern.getRole()).toEqual("Intern");
});
