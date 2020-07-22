const getUsername = (data)=>{
    return new Promise((resolve, reject)=>{
        if(data.length > 4){
            const result = 'hello... '+ data
            resolve(result)
        }else{
            const error = "username kurang dari 4 broo!!"
            reject(error)
        }
    })
}

getUsername('risa').then((res)=>{
    console.log(re)
}).catch((err)=>{
    console.log(err)
})

// petambahan

