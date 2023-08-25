import { SubmitTask } from "../events/submitTask.js"
import { idArray, titleValue, descriptionValue } from "./domPrinter.js"
import { updateTask } from "../events/editTasks.js"

const form = document.getElementById("form")
const taskName = document.getElementById("taskName")
const taskDesc = document.getElementById("taskDesc")
const Submit = document.getElementById("btn-submit")
const btnDate = document.getElementById("date")
//boton



    const btnBlue = document.getElementById("opcion-blue")
    const btnYellow = document.getElementById("opcion-yellow")
    const btnGreen = document.getElementById("opcion-green")
    let selectedColor = []; // Inicialmente, no se ha seleccionado ningún color
    
    

    async function getId(){
        let id = idArray[0]
        return id
    }

    function chooseColorBlue( ) {
            const color =  btnBlue.getAttribute('data-respuesta')
            selectedColor.push(color)
            console.log(idArray[0])
    };

    function chooseColorYellow( ) {
        const color =  btnYellow.getAttribute('data-respuesta')
        selectedColor.push(color)
        
    };

    function chooseColorGreen( ) {
        const color =  btnGreen.getAttribute('data-respuesta')
        selectedColor.push(color)
        
        
};

        btnBlue.addEventListener("click", () =>{chooseColorBlue( )})
        
        btnYellow.addEventListener("click", () =>{chooseColorYellow()})
        
         btnGreen.addEventListener("click", () =>{chooseColorGreen()})





console.log(idArray[0])

async function formInfo(e)
    {
        if(titleValue === undefined){
        const Title = taskName.value
        const Description = taskDesc.value
        const colorN = selectedColor[selectedColor.length - 1]
        const date = btnDate.value
        
        
        class Task {
        constructor(Title,Description, colorN,date){
            this.Title = Title;
            this.Description = Description;
            this.color = colorN
            this.date = date
        }}
    

        const taskInfo = new Task( Title,Description, colorN, date );


        if (taskName.value === "" && taskDesc.value === ""){
        alert('Please enter a value')
        }else{
            await SubmitTask(taskInfo)
        }
    }else if ( titleValue !== undefined && descriptionValue !== undefined){

        let changedTitle = titleValue
        let changedDescription = descriptionValue
        const Title = taskName.value
        const Description = taskDesc.value
        const colorN = selectedColor[selectedColor.length - 1]
        const date = btnDate.value

            const updatedTask = {
                Title: Title,
                Description: Description,
                color: colorN,
                date : date
            };
            
            const id = await getId()
                

            await updateTask( id , updatedTask)
        }
            
            
    };

Submit.addEventListener("click", async(e)=>{
    e.preventDefault();
    await formInfo();
})



export {formInfo}