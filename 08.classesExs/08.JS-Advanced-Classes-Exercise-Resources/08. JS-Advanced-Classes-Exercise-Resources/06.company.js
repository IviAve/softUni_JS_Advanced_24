
class Company {
    constructor() {
        this.departments = {};
    }
 
    addEmployee(username, salary, position, department) {
        if (!username || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        }
 
        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            username: username,
            salary: Number(salary),
            position: position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        let bestDepartment = '';
        let maxAverageSalary = 0;

        for (const [department, employees] of Object.entries(this.departments)) {
            const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
            const averageSalary = totalSalary / employees.length;

            if (averageSalary > maxAverageSalary) {
                bestDepartment = department;
                maxAverageSalary = averageSalary;
            }
        }

        if (bestDepartment) {
            let result = `Best Department is: ${bestDepartment}\nAverage salary: ${maxAverageSalary.toFixed(2)}\n`;
            const sortedEmployees = this.departments[bestDepartment]
                .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            
            for (const employee of sortedEmployees) {
                result += `${employee.username} ${employee.salary} ${employee.position}\n`;
            }

            return result.trim();
        }
    }
}
let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


// Write a class Company, which following these requirements:
// The constructor takes no parameters:
//     You could initialize an object:
// •	departments - empty object
// addEmployee({name}, {salary}, {position}, {department})
// This function should add a new employee to the department with the given name.
// •	If one of the passed parameters is an empty string (""), undefined or null, 
// this function should throw an error with the following message: "Invalid input!"
// •	If salary is less than 0, this function should throw an error with the following message: "Invalid input!"
// •	If the new employee is hired successfully, you should add him into the departments 
// object with the current name of the department and return the following message: 
// `New employee is hired. Name: {name}. Position: {position}`
// bestDepartment()
// This function should return the department with the highest average salary rounded 
// to the second digit after the decimal point and its employees sorted by their 
// salary by descending order and by their name in ascending order as a second criterion:
// `Best Department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}
// …`
// Submission
// Submit only the Company class definition.
// Examples
// This is an example of how the code is intended to be used:
