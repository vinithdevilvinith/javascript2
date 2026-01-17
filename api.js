const btnText = document.querySelector("#btn-text");
const outputText = document.querySelector("#txt-output");

btnText.addEventListener("click",getTextFile);

function getTextFile(){
    fetch("data.txt")
    .then((res)=>res.text())
    .then((data)=>{
        outputText.innerHTML = data;
    })
}

//------------------------------------------------------------------------------------

const btnJson = document.querySelector("#btn-json");
const outputJson = document.querySelector("#json-output");

btnJson.addEventListener("click", getJsonData);

function getJsonData() {
    fetch("users.json")
    .then(res => res.json())
    .then(users => {

        let data = "<ul>";

        users.forEach(user => {
            data += `<li>${user.id} : ${user.product}</li>`;
        });

        data += "</ul>";
        outputJson.innerHTML = data;
    })
    .catch(err => {
        console.log("Error:", err);
    });
}

//---------------------------------------------------------------------------

// const btnApi = document.querySelector("#btn-api");
// const outputApi = document.querySelector("#api-output");

// btnApi.addEventListener("click", getApiData);

// async function getApiData() {
//     const response = await fetch("https://dummyjson.com/posts");
//     const jsonData = await response.json();
//     let output = "";
//     jsonData.forEach((post)=>{
//         output += `<div class='post'>
//         <h4>${post.title}</h4>
//         <p>${post.body}</p></div>`;
//     });
//     outputApi.innerHTML = output;
    
// }

const btnApi = document.querySelector("#btn-api");
const outputApi = document.querySelector("#api-output");

btnApi.addEventListener("click", getApiData);

async function getApiData() {
    const response = await fetch("https://dummyjson.com/posts");
    const jsonData = await response.json();

    let output = "";

    jsonData.posts.forEach(post => {
        output += `
        <div class="post">
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        </div>`;
    });

    outputApi.innerHTML = output;
}
