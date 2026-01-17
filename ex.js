isHalwaThere = true;

function waitInQueue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('Buy 1/2 kg Halwa');
            }
            else{
                reject('Halwa Finish');
            }
        },1000)
    });
}

// function buyHalwa(){
//     waitInQueue().then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Go Home");
        
//     })
// }

async function buyHalwa(){
    try{
        let result = await waitInQueue();
        console.log(result);
    }
    catch(error){
        console.log('Halwa Over');
        
    }
    finally{
        console.log("GO Home");
        
    }
}

buyHalwa();