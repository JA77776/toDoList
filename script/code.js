document.addEventListener('DOMContentLoaded', function () {
    let todoContainer = document.getElementById('todo-container');
    let clearAllBtn = document.getElementById('clear-all-btn');

    // Function to create a new task
    function createTask(taskText) {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let label = document.createElement('label');
        label.tContent = taskText;

       
    }

    // the function for the click event on the clear button
    function clearAllTasks() {
        task.innerHTML = ''; // this is for the clear all 
    }

    // click 

    document.addEventListener('click', function (event) {
        if (event === 'click') {
            const taskInput = prompt('Enter a new task:');
            if (taskInput) {
                createTask(taskInput);
            }
        }
    });
    clearAllBtn.addEventListener('click', clearAllTasks);
});