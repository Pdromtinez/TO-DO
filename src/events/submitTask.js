
async function SubmitTask(taskInfo){
    
    const response = await fetch("http://localhost:2001/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskInfo)
        });
        const responsedata = await response.json()
        console.log("repuesta del servidor", responsedata)
    };



    export { SubmitTask };



