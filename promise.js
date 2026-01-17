// const promise = new Promise((resolve, reject) =>{
//     const sum = 2+1;
//     if (sum == 2){
//         resolve("Success");
//     }else {
//         reject('Error');
//     }
// });

// promise.then((msg)=>{console.log(msg);
// })
// .catch((error)=>{
//     console.error(error);
    
// });

// setTimeout(()=>{
//     console.log("Normal : 1");

//     setTimeout(()=>{
//         console.log("Normal : 2");

//         setTimeout(()=>{
//             console.log("Normal : 3");
            
//         },250);
        
//     },250);
    
// },250);

// function setTimeoutPromise(duration){
//     return new Promise((resolve, reject) =>{
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromise(250).then(()=>{
//     console.log("Normal SetTime : 1");   
//     setTimeoutPromise(250).then(()=>{
//     console.log("Normal SetTime : 2"); 
//     setTimeoutPromise(250).then(()=>{
//     console.log("Normal SetTime : 3");   
// })  
// })
// })

// setTimeoutPromise(250)
// .then(()=>{
//     console.log("Cool Promise : 1");
//     return setTimeoutPromise(250);
    
// })

// .then(()=>{
//     console.log("Cool Promise : 2");
//     return setTimeoutPromise(250);
// })

// .then(()=>{
//     console.log("Cool Promise : 3");
    
// })
// const button = document.querySelector("button");

// function addEventPromise(element, method){
//     return new Promise((resolve, reject)=>{
//         element.addEventListener(method, resolve);
//     })
// }
// addEventPromise(button, "click").then((e)=>{
//     console.log("clicked");
//     console.log(e);
    
    
// })

// console.log(Promise.resolve("Good"));
// Promise.all([Promise.resolve("Good"),Promise.resolve("Good"),Promise.resolve("Good")]).then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//    console.error(error);
    
// })

// Promise.all([Promise.resolve("Good"),Promise.reject("vinith"),Promise.resolve("Good")]).then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//    console.error(error);
    
// })

// Promise.any([Promise.resolve("Good"),Promise.reject("vinith"),Promise.resolve("Good")]).then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//    console.error(error);
    
// })

// Promise.race([Promise.reject("Good-1"),Promise.reject("vinith-2"),Promise.resolve("Good-3")]).then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//    console.error(error);
    
// })

// Promise.allSettled([Promise.reject("Good-1"),Promise.reject("vinith-2"),Promise.resolve("Good-3")]).then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//    console.error(error);
    
// })

// const promise = Promise.reject("Done")

// promise.then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.error(err);
// })
// .finally(()=>{
//     console.log('All Completed');
    
// })

// const getPost = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const posts = ["post1","post2","post3"];
//             resolve(posts);
//         }, 1000);
//     });
// };

// const getComments = ()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const comments = ["comments1","comments2","comment3"];
//             resolve(comments);
//         },2000);
//     });
// };

// Promise.all([getPost(), getComments()])
// .then((results)=>{
//     console.log(results);
//     const [posts, comments] = results;
//     console.log(`Posts: ${posts}`);
//     console.log(`Comments: ${comments}`);
// })
// .catch((err)=>{
//     console.error(err);
    
// });

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.error(err);
    
// })

//Async function;
// async function welcome() {
//     return "Hello World";
// }
// console.log(welcome());

// welcome()
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.error(err);
    
// });

// async function getData(){
//     let blogPost = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Blog Post");
//         }, 2000);
//     });

//     let blogComment = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Comment For Blog");
//         }, 5000);
//     });

//     console.log("Fetching Post....");
//     let post = await blogPost;
//     console.log("Post : ", post);
//     console.log("Fetching Comment....");
//     let comment = await blogComment;
//     console.log("Comment : ", comment);
//     return [post, comment];   
// }

// console.log("Welcome to Blog Post");
// let data = getData();
// console.log(data);

// data.then((value)=>{
//     console.log(value); 
// })
// .catch((err)=>{
//     console.error(err);
    
// });

let result = function(marks){
    return new Promise(function (resolve, reject){
        console.log("Calcuating Result....");
        setTimeout(()=>{
            let total = 0;
            let result = "pass";
            marks.array.forEach(mark => {
                total += mark;
                if (mark<35){
                    result = "Fail";
                }
            });
            resolve({total: total, result: result });
        }, 2000);
    });
};

let grade = function (response){
    return new Promise(function (resolve, reject){
        if(response.result=="Pass"){
            let avg = response.total / 3;
            let gradeText = "Grade D"
            if (avg >= 90 && avg <= 100){
                gradeText = "Grade A";
            }else if (avg >= 80 && avg <= 89){
                gradeText = "Grade B"
            }else if (avg >= 70 && avg <= 79){
                gradeText = "Grade C"
        }
        resolve(gradeText);
    }else{
        reject("No Grade");
    }
});
};

// result([56,76,89])
// .then((value)=>{
//     console.log("Total : ", value.total);
//     console.log("Result : ", value.result);
//     return grade(value);   
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.error(err);
// });


async function getResults(){
    try{
        const value=await result([56,76,89]);
         console.log("Total : ", value.total);
         console.log("Result : ", value.result);
         const gradeText = await grade(value);
         console.log(gradeText);
         
    }catch(err){
        console.error(err);
        
    }
}
getResults();
