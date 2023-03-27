const generateManager = (manager) => {
  return `
    <div class="container col-2" id="card">
        <div class="border">
            <div class="card-body">
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

generatePage = () => {};

module.exports = generatePage;
