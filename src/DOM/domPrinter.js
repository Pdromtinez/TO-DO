import { deleteTask } from "../events/deleteTask.js"
import { GetTask } from "../events/loadTask.js"
export {titleValue, descriptionValue,idArray};


const idArray = []


//Imprimir Tareas
async function PrintTask (){
    let newTask = await GetTask()

    
    newTask.map((task) => {

    
    const ul = document.querySelector("ul")
    const li = document.createElement("li");
    const div= document.createElement("div")
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const color = task.color

    

    switch(color){

        case "blue": 
            div.style.backgroundColor =`#4b7de0de`;
        break;
        case "yellow":
            div.style.backgroundColor =`#c0b33aec`;
        break;
        case "green":
            div.style.backgroundColor =`#28ad14b4`;
        break;
        default :
        div.style.backgroundColor =`rgba(255, 0, 0, 0.733)`;
        break;
    }

    title.textContent = task.Title;
    description.textContent = task.Title;
    

    div.className = "View-Task__task-card"
    title.className = "View-Task__task-title"
    description.className = "View-Task__task-desc"
    li.className = "View-Task__task-li"
    div.id = task.id
    li.id = `list:${task.id}`


    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(title);
    div.appendChild(description); 
    
    return newTask;
})

const elements = document.querySelectorAll(".View-Task__task-card");


const eventListener = async (e) => {
    
    const id = e.target.closest(".View-Task__task-card").id
    
    if(idArray.length === 0 ){
        idArray.push(id) 
        console.log(idArray[0])
    
    }else if (idArray[idArray.length - 1] !== id){
        idArray.shift();
        idArray.push(id) 
        console.log(idArray[0])
    }
    
    

};

elements.forEach((element) => {
element.addEventListener("click", () => {
    taskManager()
});}
)

elements.forEach((element) => {
    element.addEventListener("click",
        eventListener
);})



}




function taskManager() {
  const lists = document.querySelectorAll(".View-Task__task-li");

  lists.forEach((list) => {
    list.addEventListener("click", (event) => {
      const Manager = list.querySelector(".View-Task__Manager");

      if (!Manager) {
        // Si no hay un Manager, crearlo
        const Manager = document.createElement("div");
        Manager.classList = "View-Task__Manager";

        //Crear contenerdor de botones
        const containerBtn = document.createElement("div");
        containerBtn.classList = "View-Task__manager_btn";

        //Crear boton edit
        const btnEdit = document.createElement("button");
        btnEdit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
        btnEdit.classList = "edit"
        btnEdit.addEventListener("click", () => {
            handleEditClick(event), editToogle(event)})
        


        //Crear boton delete
        const bntErase = document.createElement("button");
        bntErase.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
        bntErase.addEventListener("click", () => {
            deleteFunction(event)})
        

        list.appendChild(Manager);
        Manager.appendChild(containerBtn);
        containerBtn.appendChild(bntErase);
        containerBtn.appendChild(btnEdit);
        
        
      } else {
        // Si ya hay un Manager, eliminarlo
        Manager.remove();
      }
    });
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
        showForm.style.bottom = "-100%"

    }else{
        liContainer.style.display = "none"
    }
}




//Boton para eliminar 

function deleteFunction(e) {
    const id = idArray[0]
    const ul = document.querySelector("ul")

    const item = e.target.parentElement;
    console.log(item)
    ul.removeChild(item);
    deleteTask(id)
}

//funcion paea el baton de editar editar

let titleValue;
let descriptionValue; 



async function handleEditClick(e){
    const showForm = document.querySelector(".Task-form")
    const btnEdit= e.target.closest(".View-Task__task-card");
    const titleElement = btnEdit.querySelector(".View-Task__task-title")
    const descriptionElement = btnEdit.querySelector(".View-Task__task-desc")
    
    console.log(btnEdit)
    console.log(titleElement.textContent)
    console.log(descriptionElement.textContent)

    titleValue = titleElement.textContent
    descriptionValue = descriptionElement.textContent
    
    
    showForm.classList.toggle(".active");
    
}







//Botom para mostrar el formulario

const showForm = document.querySelector(".Task-form")
const btnAdd= document.querySelector(".View-Task__add-button")
const errorImg = document.querySelector(".View-Task__last-tasks");
const btnNew = document.getElementById("add-new")
const edit = document.querySelector(".edit")
const liContainer = document.querySelector(".View-Task__li-container");

function editToogle(e){
    showForm.classList.toggle('active')
    liContainer.style.display = "none"
    
    const cardId = e.target.closest(".View-Task__task-li").id;
    const listID = document.getElementById(cardId);
    
    
    
};

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
    taskToggle ();
    
})

