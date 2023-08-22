const form = document.getElementById("form")
const taskName = document.getElementById("taskName")
const taskDesc = document.getElementById("taskDesc")
const Submit = document.getElementById("btn-submit")
const colors = document.querySelectorAll("#opcion")




async function formInfo( )
{

    const Title = taskName.value
    const Description = taskDesc.value
  
    

    class Task {
        constructor(Title,Description){
            this.Title = Title;
            this.Description = Description;
            
    }}
    

    const taskInfo = new Task( Title,Description,);

    await SubmitTask(taskInfo);

    if (taskName !== "" && taskDesc !== ""){

        taskName.value = "";
        taskDesc.value = "";
        
        }else{
            alert('Please enter a value')
        }

};

async function SubmitTask(taskInfo){
    
    const response = await fetch("http://localhost:3000/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskInfo)
        });
        const responsedata = await response.json()
        console.log("repuesta del servidor", responsedata)
    };



    
Submit.addEventListener("click", async (e) =>{
    e.preventDefault();
    await formInfo();
    
})


