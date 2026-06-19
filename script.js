let main = document.querySelector("main")
let form = document.querySelector("form")
let taskDiv = document.querySelector(".tasks")
let theam = document.querySelector(".mode")
let child = document.querySelector(".box-child")
let result = document.querySelector(".result")

let togel = true

theam.addEventListener("click", function () {
    if (togel == true) {
        main.style.backgroundColor = "black"
        main.style.color = "white"
        togel = false
    } else {
        main.style.backgroundColor = "#F6F5FB"
        main.style.color = "black"
        togel = true
    }
})

let tasks = [];
let editIdx = null;

let ui = function () {
    taskDiv.innerHTML = ""
    tasks.forEach(function (elem, idx) {
        taskDiv.innerHTML += `<div class="task ${elem.completed ? 'completed' : ''}">
                <div class="manage">
                    <h1>${elem.taskName}</h1>
                    <p class="catagory" >${elem.catagory}</p>
                </div>
                <p>${elem.taskDetails}</p>
                <div class="btns">
                    <button onclick = "editTask(${idx})" class="edit">Edit</button>
                    <button onclick="completedTask(${idx})" class="complete" style="background-color: ${elem.completed ? 'royalblue' : ''}">Complete</button>
                    <button onclick="deleteTask(${idx})" class="delete">Delete</button>
                </div>
            </div>`
    })
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let taskName = event.target[0].value
    let taskDetails = event.target[1].value
    let catagory = event.target[2].value

    if (taskName.trim() === "" || taskDetails.trim() === "") {
        alert("Fill all the places");
        return;
    }

    let obj = {
        taskName,
        taskDetails,
        catagory,
        completed: false
    }

    if (editIdx !== null) {
        // ✅ update existing task
        tasks[editIdx].taskName = taskName
        tasks[editIdx].taskDetails = taskDetails
        tasks[editIdx].catagory = catagory
        editIdx = null   // reset after editing
    } else {
        // ✅ add new task
        tasks.push({ taskName, taskDetails, catagory, completed: false })
    }

    ui()
    form.reset()
})

function deleteTask(idx) {
    tasks.splice(idx, 1);
    ui()
}

function completedTask(idx) {
    tasks[idx].completed = true

    ui()
}

function editTask(idx) {
    form[0].value = tasks[idx].taskName      // fill task name
    form[1].value = tasks[idx].taskDetails   // fill task details
    form[2].value = tasks[idx].catagory
    editIdx = idx
}

child.addEventListener("click", function () {
    result.style.display = "flex"
})
