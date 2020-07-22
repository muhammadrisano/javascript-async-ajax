const callc = (num1, num2) => {
    return new Promise((resolve, reject)=>{
        if(typeof(num1) === 'number' && typeof(num2) === 'number'){
            const result = num1 + num2
            resolve(result)
        }else{
            reject(new Error('error.. type data bukan number'))
        }
    })
}
callc(23,45).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err.message)
})

