// Manager card
const generateManager = (manager) => {
  return `
    <div class="container col-2" id="card">
        <div class="border">
            <div class="card-body text-center">
                <h4><b>${manager.name}</b></h4>
                <h4><b>Manager <img src="https://i.ibb.co/Yhx7S33/manager.png" alt="managerIcon" style="width:50px; height:50px;"></b></h4>
                <div class="border">
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    </div>
    `;
};

// Engineer card
const generateEngineer = (engineer) => {
  return `
    <div class="container col-2" id="card">
        <div class="border">
            <div class="card-body">
                <h4><b>${engineer.name}</b></h4>
                <h4><b>Engineer <img src="https://i.ibb.co/cQr7Sp6/engineer.png" alt="engineerIcon" style="width:50px; height:50px;"></b></h4>
                <p>ID: ${engineer.id}</p>
                <p>Email: ${engineer.email}</p>
                <p>GitHub Username: ${engineer.gitHub}</p>
            </div>
        </div>
    </div>
    `;
};

// Intern card
const generateIntern = (intern) => {
  return `
    <div class="container col-2" id="card">
        <div class="border">
            <div class="card-body">
                <h4><b>${intern.name}</b></h4>
                <h4><b>Intern <img src="https://i.ibb.co/4S3D6qG/intern.png" alt="internIcon" style="width:50px; height:50px;"></b></h4>
                <p>ID: ${intern.id}</p>
                <p>Email: ${intern.email}</p>
                <p>School Name: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

// Page creation function
const generatePage = (empCards) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Team Profile Page</title>
    </head>
    <body>
        <header>
            <nav class="navbar justify-content-center">
                <span class="mb-0 h1">Team Profile Page</span>
            </nav>
        </header>
        <br />
        <br />
        <container>
            <div class="row justify-content-center" id="cards">
                <!-- Team Cards -->
                ${empCards}
            </div>
        </container>
    </body>
    </html>
    `;
};

// Function to export data to page creation function
pageCode = (data) => {
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const emp = data[i];
    const role = emp.getRole();

    if (role === "Manager") {
      const mCard = generateManager(emp);

      cardArray.push(mCard);
    }

    if (role === "Engineer") {
      const eCard = generateEngineer(emp);

      cardArray.push(eCard);
    }

    if (role === "Intern") {
      const iCard = generateIntern(emp);

      cardArray.push(iCard);
    }
  }

  const empCards = cardArray.join(" ");

  const teamPage = generatePage(empCards);
  return teamPage;
};

module.exports = pageCode;
