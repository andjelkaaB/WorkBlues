class Employee {
    constructor(fullName, email, phoneNumber, dateOfBirth, monthlySalary) {
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.monthlySalary = monthlySalary
    }
}

const allEmployees = []
const form = document.querySelector("#employee-form")
let employeeContainer = document.querySelector('.employee-container')
let employeeProfile
let empoloyee1 = new Employee("Andjelka Bulatovic", "andjelkaa@gmail.com", "+3815646546","28.1.1999", "1000")
allEmployees.push(empoloyee1)


const employeeList = JSON.parse(localStorage.getItem("employees"))


function addEmployee(fullName, email, phoneNumber, dateOfBirth, monthlySalary) {
    const newEmployee = new Employee(fullName, email, phoneNumber, dateOfBirth, monthlySalary)

    allEmployees.push(newEmployee)

    // employeeList = JSON.parse(localStorage.getItem("employees"))
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    let fullName = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let phoneNumber = document.querySelector('#phone-number').value
    let dateOfBirth = document.querySelector('#birth-date').value
    let monthlySalary = document.querySelector('#salary').value

    addEmployee(fullName, email, phoneNumber, dateOfBirth, monthlySalary)

    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#phone-number').value = ''
    document.querySelector('#birth-date').value = ''
    document.querySelector('#salary').value = ''


    const allEmployeesJSON = localStorage.setItem('employees', (JSON.stringify(allEmployees)))
    

    displayEmployees()
    }
)

function displayEmployees() {

    employeeList.forEach((employee, index) => {
        employeeProfile = document.createElement('div')
        employeeProfile.classList.add('employee')

        employeeProfile.innerHTML = `
        <div>
            <span class='label'>Full name:</span> ${employee.fullName}
        </div>
        <div>
            <span class='label'>E-mail:</span> ${employee.email}
        </div>
        <div>
            <span class='label'>Phone number:</span> ${employee.phoneNumber}
        </div>
        <div>
            <span class='label'>Date of birth:</span> ${employee.dateOfBirth}
        </div>
        <div>
            <span class='label'>Monthly salary:</span> ${employee.monthlySalary}$
        </div>
        `

        employeeContainer.appendChild(employeeProfile)

        addDeleteButton(employeeProfile, index)
    })

}
displayEmployees()

function addDeleteButton(employeeProfile, index){
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-employee-button')
    deleteButton.textContent = 'Delete'
    employeeProfile.appendChild(deleteButton)

    deleteButton.addEventListener("click", () => {
        employeeList.splice(index, 1)

        localStorage.setItem('employees', JSON.stringify(employeeList))

        employeeProfile.remove()
    })
}

const openSidebarButton = document.querySelector('.openbtn')
const sidebar = document.querySelector('.sidebar')

openSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
    console.log(openSidebarButton)
})

function closeNav() {
    document.querySelector(".sidebar").classList.remove('show')
}

function openForm() {
    document.querySelector("#overlay").style.display = "block"
    document.querySelector("#overlay").style.height = "100%"
}

function closeForm() {
    document.querySelector("#overlay").style.height = "0%";
}

// create a form to edit current employee data

//proceed to tasks

//maybe integrate a seacrh task function to see whos working on it as addition