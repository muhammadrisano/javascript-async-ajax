const promise = ()=>{
    return new Promise((resolve, reject)=>{
        let statusSuccess = true;
        setTimeout(()=>{
            if(statusSuccess){
                let result ="proses ini sukses"
                resolve(result)
            }else{
                reject(new Error('server error bro!!'))
            }
        },4000)
    })
}

const getData = async() =>{
    
    console.log('ini jaalan ke 1')
    let result = null
    try {
        result =  await promise()
        // console.log(result)
      
    } catch (error) {
        console.log(error.message)
    }
    console.log(result)
    console.log('ini jalan ke 2')
}
getData()


