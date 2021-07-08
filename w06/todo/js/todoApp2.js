let toDo = [];
let activeWindow = "all"
showAllTasks();

function readJson() {
    if (localStorage.getItem("todo")){
        toDo = JSON.parse(localStorage.getItem("todo"));
    } else {
        toDo = [];
}
}

function writeJson(array) {
        localStorage.setItem("todo", JSON.stringify(toDo));
}


function showAllTasks() {
    readJson();
    
    let tasks= "";
    toDo.forEach((item, index) => {
        console.log(item.content);
        if (item.completed == true) {
            tasks += `<div id="taskContainer-${index}" class="task taskDone">`
            tasks += `
            <p class="taskText taskDone" id="${index}">${item.content.toString()}</p>
            `
        } else {
            tasks += `<div id="taskContainer-${index}" class="task taskToDo">`
            tasks += `
            <p class="taskText taskToDo" id="${index}">${item.content.toString()}</p>
            `
        }
        tasks += `
        <button class="completeTask btn btn-success" id="setComplete-${index}" onclick="markAsComplete(${index})">X</button>
        <button class="deleteTast btn btn-danger" id=deleteTask${index} onclick="deleteTask(${index})">Delete</button>
        </div>`
    });
    document.getElementById("toDoList").innerHTML = tasks;
    activeWindow = "all";
}


function showCompletedTasks() {
    let tasks= "";
    toDo.forEach((item, index) => {
        console.log(item.content);
        if (item.completed == true) {
            tasks += `<div id="taskContainer-${index}" class="task taskDone">`
            tasks += `
            <p class="taskText taskDone" id="${index}">${item.content.toString()}</p>
            `
            tasks += `
            <button class="completeTask btn btn-success" id="setComplete-${index}" onclick="markAsComplete(${index})">X</button>
            <button class="deleteTast btn btn-danger" id=deleteTask${index} onclick="deleteTask(${index})">Delete</button>
            </div>`
        }
        
    });
    document.getElementById("toDoList").innerHTML = tasks;
    activeWindow = "done";
}

function showUncompleteTasks() {
    // document.querySelectorAll(".taskToDo").style.display = "block";
    // document.querySelectorAll(".taskDone").style.display = "none";
    let tasks= "";
    toDo.forEach((item, index) => {
        console.log(item.content);
        if (item.completed == false) {
            tasks += `<div id="taskContainer-${index}" class="task taskToDo">`
            tasks += `
            <p class="taskText taskToDo" id="${index}">${item.content.toString()}</p>
            `
            tasks += `
            <button class="completeTask btn btn-success" id="setComplete-${index}" onclick="markAsComplete(${index})">X</button>
            <button class="deleteTast btn btn-danger" id=deleteTask${index} onclick="deleteTask(${index})">Delete</button>
            </div>`
        }
        
    });
    document.getElementById("toDoList").innerHTML = tasks;
    activeWindow = "toDo"
}

function createTask(content) {
    const task = {
        id: Date.now(),
        content: content,
        completed: false
    }
    return task;
}

function checkTaskStatus(){
    toDo.forEach((item, index) => {
        if (item.completed == true) {
            document.getElementById(`taskContainer-${index}`).classList.add("taskDone");
            document.getElementById(`taskContainer-${index}`).classList.remove("taskToDo");         
    }});
    writeJson();
    showAllTasks();
}

function markAsComplete(index) {
    toDo[index].completed = true;
    checkTaskStatus()
}

function deleteTask(index) {
    let toDo = JSON.parse(localStorage.getItem("todo"));
    toDo.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(toDo));
    showAllTasks();
}

function resetAllTasks() {
    if(window.confirm("Are you sure you want to delete all the tasks?")) {
        toDo = [];
        writeJson();
        showAllTasks();
    };
}


//ADDING NEW TASKS 
function addTask(event) {
    event.preventDefault();
    const task = createTask(form.newTask.value);
    toDo.push(task);
    writeJson();
    if (activeWindow == "toDo"){
        showUncompleteTasks();
    } else {
        showAllTasks();
    }
}

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);