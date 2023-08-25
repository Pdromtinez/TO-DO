async function updateTask(id, updatedTask) {
    let response = await fetch(`http://localhost:2001/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    });
    const responseData = await response.json();
    console.log('Actualizado', responseData);
}

export { updateTask }