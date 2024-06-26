class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        } else {
            this.tasks.push({ description, cost, priority });
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description) {
        const taskIndex = this.tasks.findIndex(task => task.description === description);
        if (taskIndex === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        } else {
            const [task] = this.tasks.splice(taskIndex, 1);
            this.completedTasks.push(task);
            return `The task '${description}' has been successfully completed.`;
        }
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }
        
        const priorityTasksCount = this.tasks.filter(task => task.priority >= minimalPriority).length;
        
        if (priorityTasksCount > 0) {
            return `You have ${priorityTasksCount} tasks to prioritize.`;
        } else {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        }

        let summary = `Budget left $${this.budget}.\n`;
        summary += `You have completed ${this.completedTasks.length} tasks.\n`;
        summary += "Pending tasks in the renovation plan:\n";

        if (this.tasks.length > 0) {
            summary += this.tasks.map(task => 
                `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`
            ).join("\n");
        } else {
            summary += "No pending tasks.";
        }

        return summary;
    }
}





// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.addTask("New Roof", 5000, 1)); 


// Output 1
// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// Not enough budget to add 'New Roof' task.


// Input 2
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.markTaskAsCompleted("Change doors")); 


// Output 2
// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// The task 'Paint walls' has been successfully completed.
// Error: Task 'Change doors' not found in the renovation plan.


// Input 3
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.getPriorityTasksCount(1)); 


// Output 3
// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// The task 'Paint walls' has been successfully completed. 
// You have 1 tasks to prioritize.


// Input 4
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());


// Output 4
// The task 'Paint walls' has been successfully added to the renovation plan. 
// The task 'Install new windows' has been successfully added to the renovation plan. 
// The task 'Paint walls' has been successfully completed.
// Budget left $3500.
// You have completed 1 tasks.
// Pending tasks in the renovation plan:
// Install new windows - Cost: 5000, Priority: 1
