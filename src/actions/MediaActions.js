const itemPath= "http://localhost:3000/items"

function uploadMedia(body){
    let config = {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                body
            })}
    fetch(itemPath,config).then(res=>res.json()).then(obj=>{debugger})
}