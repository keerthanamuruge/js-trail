load_api=async ()=>{
    document.querySelector("button").style.color = "blue"
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
    xhr.send()
    xhr.onload=()=>{
        var node = document.createElement("li")
        if (xhr.status == 200){
            node.appendChild(document.createTextNode(xhr.responseText))
            document.querySelector("ul").appendChild(node)
        }
        else {
            
            node.appendChild(document.createTextNode("error in request"))
            document.querySelector("ul").appendChild(node)
        }
        
    }
    fetch_api()
    asyn_func_api()
    axios_api_func()
}

fetch_api = ()=>{
   fetch("https://jsonplaceholder.typicode.com/albums")
   .then((response) => {
    console.log(response)
        return response.json()
    }
   )
   .then(res => {
    console.log(res)

    var node = document.createElement('li');
    node.appendChild(document.createTextNode(JSON.stringify(res)));
    
    document.querySelector('ul').appendChild(node);
   })
}

asyn_func_api = async()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let result = await res.json()
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(JSON.stringify(result)));
    
    document.querySelector('ul').appendChild(node);
}

axios_api_func = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => {
        var node = document.createElement('li');
    node.appendChild(document.createTextNode(JSON.stringify(res.data)));
    
    document.querySelector('ul').appendChild(node);
    })
}