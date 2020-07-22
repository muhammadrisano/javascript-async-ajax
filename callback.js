
const print = (data) =>{
    console.log(data + ' apa kabar !!')
}

const getData =(username)=>{
    setTimeout(()=>{
        let name = 'helo '+username;
        print(name)
    },3000)
}

getData('muhammad risano', print)