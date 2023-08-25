
    async function GetTask() {
        const response = await fetch("http://localhost:2001/posts");
        const responsedata = await response.json();
        return (await responsedata);
    };

export { GetTask };
