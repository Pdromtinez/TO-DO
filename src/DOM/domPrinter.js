import { GetTask } from "../events/loadTask.js"





//Implrimir Tareas
async function PrintTask (){
    let newTask = await GetTask()
    
    newTask.forEach((task) => {

    
    const ul = document.querySelector("ul")
    const li = document.createElement("li");
    const div = document.createElement("div")
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    p.textContent = task.Title;
    p2.textContent = task.Title;
    

    div.className = "View-Task__task-card"
    p.className = "View-Task__task-title"
    p2.className = "View-Task__task-desc"
    

    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(p2);
    
    });
}



//Esconder Y mostrar elementos
async function taskToggle (){
    const liContainer = document.querySelector(".View-Task__li-container");
    const errorImg = document.querySelector(".View-Task__last-tasks");
    const cardList = document.getElementById("Cards-list");
    const cardContent = cardList.innerHTML.trim()

    if ( cardContent !== ""){
        errorImg.style.display = "none"
        showForm.style.bottom = "-12"

    }else{
        liContainer.style.display = "none"
    }
}


//Botom para mostrar el formulario

const showForm = document.querySelector(".Task-form")
const btnAdd= document.querySelector(".View-Task__add-button")
const errorImg = document.querySelector(".View-Task__last-tasks");
const btnNew = document.getElementById("add-new")
const liContainer = document.querySelector(".View-Task__li-container");

btnNew.addEventListener("click", () => {
    showForm.classList.toggle("active");
    liContainer.style.display = "none"
})

btnAdd.addEventListener("click", () =>{
    showForm.classList.toggle("active");
    errorImg.style.display = "none"
})



//Mostrar Tareas si estan disponibles automaticamente
window.addEventListener("DOMContentLoaded", async () => {
    await PrintTask ();
    taskToggle ()
})