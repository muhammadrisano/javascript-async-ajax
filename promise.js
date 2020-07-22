const promise = new Promise((resolve, reject)=>{
    let statusSuccess = false;
    setTimeout(()=>{
        if(statusSuccess){
            let result ="proses ini sukses"
            resolve(result)
        }else{
            reject(new Error('server error bro!!'))
        }
    },4000)
  
})

promise.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})