const Engineer = require("../lib/Engineer");

// Engineer Object
test("Creates an engineer object", () => {
  const engineer = new Engineer(
    "Alex Barrett",
    1,
    "abarrett@gmail.com",
    "akbarrett93"
  );

  expect(engineer.gitHub).toEqual(expect.any(String));
});

// Get github from getGithub()
test("Gets employee github", () => {
  const engineer = new Engineer(
    "Alex Barrett",
    1,
    "abarrett@gmail.com",
    "akbarrett93"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.gitHub.toString())
  );
});

//Get role from getRole()
test("Gets engineer role", () => {
  const engineer = new Engineer(
    "Alex Barrett",
    1,
    "abarrett@gmail.com",
    "akbarrett93"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
