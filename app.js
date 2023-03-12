const openSidebarButton = document.querySelector('.openbtn')
const sidebar = document.querySelector('.sidebar')

openSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
})

function closeNav() {
    document.querySelector(".sidebar").classList.remove('show')
}


let employeeList = []
let employeeTableContent


function newEmployee() {
    let name = document.getElementById('name').value
    let id = document.getElementById('id').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let birthday = document.getElementById('birthday').value
    let salary = document.getElementById('salary').value

    if (localStorage.getItem("employeeList") == null) {
        employeeList = []
    } else {
        employeeList = JSON.parse(localStorage.getItem("employeeList"))
    }

    employeeList.unshift({
        name: name,
        id: id,
        email: email,
        phone: phone,
        birthday: birthday,
        salary: salary
    })
    localStorage.setItem("employeeList", (JSON.stringify(employeeList)))

    showEmployeeData()

    document.getElementById('name').value = ''
    document.getElementById('id').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('birthday').value = ''
    document.getElementById('salary').value = ''
}



function showEmployeeData() {
    if (localStorage.getItem('employeeList') == null) {
        employeeList = []
    } else {
        employeeList = JSON.parse(localStorage.getItem('employeeList'))
    }

    employeeTableContent = ''

    employeeList.forEach((employeeList, index) => {
        employeeTableContent += `<tr>
            <td>${employeeList.name}</td>
            <td>${employeeList.id}</td>
            <td>${employeeList.email}</td>
            <td>${employeeList.phone}</td>
            <td>${employeeList.birthday}</td>
            <td>${employeeList.salary}</td>
            <td>
            <button onclick="deleteEmployee(${index})" class="delete-btn">Delete</button>
            <button onclick="editEmployee(${index})" class="edit-btn">Edit</button>
            </td>
        </tr>`

    })

    document.querySelector("#employee-table-body").innerHTML = employeeTableContent

}

function deleteEmployee(index) {
    employeeList = JSON.parse(localStorage.getItem('employeeList'))
    employeeList.splice(index, 1)
    localStorage.setItem('employeeList', JSON.stringify(employeeList))
    showEmployeeData()
}


function editEmployee(index) {
    document.getElementById('submit-button').style.display = "none"
    document.getElementById('update-btn').style.display = "block"

    employeeList = JSON.parse(localStorage.getItem('employeeList'))
    let employee = employeeList[index]

    document.getElementById('name').value = employee.name
    document.getElementById('id').value = employee.id
    document.getElementById('id').readOnly = true
    document.getElementById('email').value = employee.email
    document.getElementById('phone').value = employee.phone
    document.getElementById('birthday').value = employee.birthday
    document.getElementById('salary').value = employee.salary

    document.getElementById('update-btn').onclick = function (){
        employeeList[index].name = document.getElementById('name').value
        employeeList[index].id = document.getElementById('id').value
        employeeList[index].email = document.getElementById('email').value
        employeeList[index].phone = document.getElementById('phone').value
        employeeList[index].birthday = document.getElementById('birthday').value
        employeeList[index].salary = document.getElementById('salary').value

        localStorage.setItem('employeeList', JSON.stringify(employeeList))
        document.getElementById('id').readOnly = false
        showEmployeeData()

        document.getElementById('name').value = ''
        document.getElementById('id').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('birthday').value = ''
        document.getElementById('salary').value = ''
    }
    document.getElementById('submit-button').style.display = "block"
    document.getElementById('update-btn').style.display = "none"
}

let taskList = []
let task 
let tasksTableContent


function newTask() {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let asignee = document.getElementById('asignee-name').value
    let dueDate = document.getElementById('due-date').value
    let status = document.getElementById('status').value = "in progress"

    if (localStorage.getItem('taskList') == null){
        taskList = []
    } else {
        taskList = JSON.parse(localStorage.getItem('taskList'))
    }

    taskList.unshift({
        title: title,
        description: description,
        asignee: asignee,
        dueDate: dueDate,
        status: status
    })

    localStorage.setItem('taskList', JSON.stringify(taskList))

    showTaskList()

    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
    document.getElementById('asignee-name').value = ''
    document.getElementById('due-date').value = ''
    document.getElementById('status').value = 'In progress'
}


function showTaskList() {
    if (localStorage.getItem('taskList') == null){
        taskList = []
    } else {
        taskList = JSON.parse(localStorage.getItem('taskList'))
    }

    tasksTableContent = ''

    taskList.forEach((task, index) => {
        tasksTableContent += `<tr>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.asignee}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <button onclick="deleteTask(${index})" class="delete-btn">Delete</button>
            <button onclick="editTask(${index})" class="edit-btn">Edit</button>
            <button onclick="completeTask(${index})" class="status">Done</button>

        </tr>`
    })

    document.querySelector("#task-table-body").innerHTML = tasksTableContent
}

function deleteTask(index) {
    taskList = JSON.parse(localStorage.getItem('taskList'))
    taskList.splice(index, 1)
    localStorage.setItem('taskList', JSON.stringify(taskList))
    showTaskList()
}

function editTask(index) {
    document.getElementById('submit-button').style.display = "none"
    document.getElementById('update-btn').style.display = "block"

    taskList = JSON.parse(localStorage.getItem('taskList'))
    task = taskList[index]

    document.getElementById('title').value = task.title
    // document.getElementById('id').value = task.id
    // document.getElementById('id').readOnly = true
    document.getElementById('description').value = task.description
    document.getElementById('asignee-name').value = task.asignee
    document.getElementById('due-date').value = task.due-date
    document.getElementById('status').value = task.status

    document.getElementById('update-btn').onclick = function (){
        taskList[index].title = document.getElementById('title').value
        // taskList[index].id = document.getElementById('id').value
        taskList[index].description = document.getElementById('description').value
        taskList[index].asignee = document.getElementById('asignee-name').value
        taskList[index].dueDate = document.getElementById('due-date').value
        taskList[index].status = document.getElementById('status').value

        localStorage.setItem('taskList', JSON.stringify(taskList))
        showTaskList()

        document.getElementById('title').value = ''
        // document.getElementById('id').value = ''
        document.getElementById('description').value = ''
        document.getElementById('asignee-name').value = ''
        document.getElementById('due-date').value = ''
        document.getElementById('status').value = ''
    }
    document.getElementById('submit-button').style.display = "block"
    document.getElementById('update-btn').style.display = "none"
}


function completeTask(index){
        taskList[index].status = document.getElementById('status').value = 'Completed'
        localStorage.setItem('taskList', JSON.stringify(taskList))
        showTaskList()
        document.getElementById('status').value = ''
    }


if (window.location.pathname === '/employee-profile.html') {
    window.onload = showEmployeeData()
    document.getElementById('employee-form').addEventListener('submit', (event) => {
        event.preventDefault()
        newEmployee()
    })
} else if (window.location.pathname === '/tasks.html') {
    window.onload = showTaskList()
    document.getElementById('tasks-form').addEventListener('submit', (event) => {
        event.preventDefault()
        newTask()
    })
} else {

}

