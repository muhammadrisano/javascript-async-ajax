const getDataPost = (linkUrl, method, callback) =>{
    const ajax = new XMLHttpRequest();
    const url = linkUrl
    ajax.open(method, url)
    ajax.send();
    ajax.onreadystatechange = function(){
        if(ajax.status === 200){
            const result = JSON.parse(ajax.responseText)
        }else{
            // reject
        }
        // callback(result)
    }
}

const funCallback = (data) =>{
    const result =data;
    result.map((item)=>{
        console.log(item.title)
    })
}

getDataPost("https://jsonplaceholder.typicode.com/posts", "GET", funCallback)
// getDataPost(url, method, callback)


// 