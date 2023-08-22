
    async function GetTask() {
        const response = await fetch("http://localhost:3000/posts");
        const responsedata = await response.json();
        return (await responsedata);
    };

export { GetTask };
