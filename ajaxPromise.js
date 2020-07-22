const getDataPost = (linkUrl, method) =>{
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest();
        const url = linkUrl
        ajax.open(method, url)
        ajax.send();
        ajax.onreadystatechange = function(){
            if(ajax.status === 200){
                const result = JSON.parse(ajax.responseText)
                resolve(result)
            }else{
                reject('erro broo..')
            }
            // callback(result)
        }
    })
}








getDataPost("https://jsonplaceholder.typicode.com/posts", "GET").then((res)=>{

}).catch((err)=>{
    
})