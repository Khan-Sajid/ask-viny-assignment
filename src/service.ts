const url = 'https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71'

export async function submitForm(data: {email:string, username:string}){
    try {
        const response = await fetch(url, {
        method:'POST',
        body:JSON.stringify(data)
    }) 
    const responseJson = await response.json();
    return responseJson;
    } catch (error) {
        console.error(error)
    }
    
}