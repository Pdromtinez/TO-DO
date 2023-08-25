

async function deleteTask (id) {
    const response = await fetch(`http://localhost:2001/posts/${id}`, {
        method:"DELETE",

        headers : {
            'Content-Type': 'application/json',
        }
})
    const data = await response.text();
    console.log(`se elimino `, data)
}

export {deleteTask};