// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employeesArray = [];
  let addAnotherEmployee = true;

  while (addAnotherEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    // Convert salary to number and validate
    salary = isNaN(Number(salary)) ? 0 : Number(salary);

    // Create employee object
    const employee = {
      firstName: firstName || "N/A",
      lastName: lastName || "N/A",
      salary: salary,
    };

    // Add employee to array
    employeesArray.push(employee);

    // Prompt to add another
    addAnotherEmployee = confirm("Do you want to add another employee?");
  }

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(
    `The average employee salary among our ${employeesArray.length} employee(s) is: $${averageSalary.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    })}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);
  displayAverageSalary(employees);

  console.log('==============================');
  getRandomEmployee(employees);

  // Sort employees alphabetically by last name
  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
