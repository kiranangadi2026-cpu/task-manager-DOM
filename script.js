let completed = document.querySelector(".completed")
let priority = document.querySelector(".priority")
let taskName = document.querySelector(".task1")
let taskDetails = document.querySelector(".details")
let submit = document.querySelector(".create")
let form = document.querySelector("form")
let mode = document.querySelector(".mode")
let leftBox = document.querySelector(".left-box")
let rightBox = document.querySelector(".right-box")
let nav = document.querySelector("nav")

let task = document.querySelector(".task")

let bg = true

mode.addEventListener("click", function () {

    if (bg == true) {
        mode.textContent = "L"
        let main = document.querySelector("main")
        nav.classList.add("light-dark-1")
        nav.classList.remove("repeat")
        main.style.color = "white"
        main.classList.add("dark")
        leftBox.classList.add("light-dark-1")
        rightBox.classList.add("light-dark-1")
        leftBox.classList.remove("repeat")
        rightBox.classList.add("repeat")
        // task.classList.add("light-dark-2")
        // rightBox.classList.remove("light-dark-2")

        main.classList.remove("light")
        bg = false
    } else if (bg == false) {
        mode.textContent = "D"
        let main = document.querySelector("main")
        main.style.color = "black"
        nav.classList.add("repeat")
        nav.classList.remove("light-dark-1")
        leftBox.classList.add("repeat")
        rightBox.classList.add("repeat")
        leftBox.classList.remove("light-dark-1")
        rightBox.classList.remove("light-dark-1")
        main.classList.add("light")
        main.classList.remove("dark")
        bg = true
    }
})



let taskDiv = document.querySelector(".tasks")

let tasksCard = [];

let ui = function () {

    taskDiv.innerHTML = ""

    tasksCard.forEach(function (elem, index) {
        taskDiv.innerHTML += `<div class="task">
                        <h2>${elem.name}</h2>
                      
                            <p>${elem.details}</p>
                            <p class="pri">${elem.priorityN}</p>
                        
                        <div class="pen">Pending</div>
                        <div class="btn">
                            <button onclick = "editTask('${elem.name}')" class="edit">Edit</button>
                            <button onclick = "completeTask('${index}')" class="completed">Completed</button>
                            <button onclick = "deleteTask('${index}')" class="delete">Delete</button>
                        </div>
                    </div>`
        console.log(index);

    })


}

form.addEventListener("submit", function (event) {

    // taskDiv.innerHTML = ""

    event.preventDefault();
    let name = event.target[0].value
    let details = event.target[1].value
    let priorityN = priority.value


    if (name.trim() === "" || details.trim() === "") {
        alert("Fill all the forms")
        return;
    }

    let obj = {
        name,
        details,
        priorityN
    }


    tasksCard.push(obj)
    ui()
    form.reset()
})
ui()

function editTask(name) {
    let taskE = tasksCard.find((elem) => elem.name === name)
    form[0].value = taskE.name,
        form[1].value = taskE.details
}


function deleteTask(index) {
    tasksCard.splice(index, 1);
    ui()
}
function completeTask(index) {
    let allTasks = document.querySelectorAll(".task")  // ✅ get all task cards
    let targetTask = allTasks[index]
    let pendingDiv = targetTask.querySelector(".pen")  // ✅ find .pen inside that specific task
    pendingDiv.textContent = "Completed"
    pendingDiv.style.backgroundColor = "yellow"
} 