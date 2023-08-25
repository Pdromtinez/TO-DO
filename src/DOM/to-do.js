import { GetTask } from "../events/loadTask.js";

async function PrintTask (){
    let data = await GetTask()

    
    data.forEach(obj => {
        if (obj.color === 'blue') {

    const ul = document.querySelector("ul")
    const li = document.createElement("li");
    const div= document.createElement("div")
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const color = obj.color

    switch(color){

        case "blue": 
            div.style.backgroundColor =`#4b7de0de`;
            div.style.width = "35vh"
            div.style.marginLeft = "-10vh"
        break;}

        
    title.textContent = obj.Title;
    description.textContent = obj.Title;
    

    div.className = "View-Task__task-card"
    title.className = "View-Task__task-title"
    description.className = "View-Task__task-desc"
    li.className = "View-Task__task-li"
    div.id = obj.id
    li.id = `list:${obj.id}`


    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(title);
    div.appendChild(description); 
    
    return data;

}
})


}

window.addEventListener("DOMContentLoaded", PrintTask())