let userInput, newTask, taskManagerRunning, i, tasks, taskList, answer;
taskManagerRunning = true;
userInput = '';
tasks = [];

// Main Prompt used by user for task manager navigation
let getUserInput = function () {
    userInput = prompt(`Task Manager

What would you like to do?
"NEW" - Creates new task
"REMOVE" - Removes a specified task
"TASKS" - Displays all tasks
"CLOSE" - Close the Task Manager`).toLowerCase();
}

// Creates list of tasks that have been created by the user
let getTaskList = (tasks) => {
    taskList = ``;
    for (i = 0; i < tasks.length; i++) {
        taskList += `${i + 1}: ${tasks[i]}\n`
    }
    return taskList;
}
// Prompt user to add a new task
let newTaskPrompt = () => {
    answer = prompt(`Please enter a New Task:`);
    if (answer != '') {
        tasks.push(answer)
        userInput = true;
    }
}

// Alerts user of current tasks
let alertTasks = () => {
    alert(`Task Manager
Your current tasks are:

${getTaskList(tasks)}`);
}

// Function that prompts user to select an item to remove
let promptRemove = () => {
    // getTaskList();
    userInput = parseInt(prompt(`What task would you like to remove?
${getTaskList(tasks)}`));
    if (taskList[userInput] === undefined) {
        alert('Please enter a valid Task Number');
        userInput = parseInt(prompt(`What task would you like to remove?
${getTaskList(tasks)}`));
    }
}

let closeGame = () => {
    userInput = prompt(`Are you sure you want to close Task Manager?
Your current tasks will not be saved.
Yes or No`).toLowerCase();
}

while (taskManagerRunning) {
    getUserInput();

    if (userInput === 'new') {
        userInput = false;

        while (userInput === false) {
            newTaskPrompt();
        }

        alertTasks();
    } else if (userInput === 'remove' && taskList !== undefined) {
        // Setting userInput to false incase userInput has a value assigned to it before entering the "remove" section
        userInput = false;
        while (!userInput) {
            promptRemove();
        }
        tasks.splice(userInput - 1, 1);
        // Shows user updated list of tasks
        alertTasks();
    } else if (userInput === 'remove' && taskList === undefined) {
        alert('There are no tasks to remove.')
    } else if (userInput === 'tasks') {
        alertTasks();
    } else if (userInput === 'close') {
        closeGame();
        if (userInput === 'y' || userInput === 'yes') {
            alert('Thank you for using Task Manager!')
            taskManagerRunning = false;
        }
    }
}
