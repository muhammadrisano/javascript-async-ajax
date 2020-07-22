const print1 =()=>{
    console.log('print 1')
}
const print2 =()=>{
    setTimeout(()=>{
        console.log('print 2')
    }, 3000)
}
const print3 =()=>{
    console.log('print 3')
}

print1()
print2()
print3()