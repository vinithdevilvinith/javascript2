// //SET: (to find duplication and remove that using set)

// const users =["ram","vani","vinith","rajesh"];
// console.log(users);
 
// const uniqueUsersSet =new Set(users);
// console.log(uniqueUsersSet);

// //using spread convert set to array


// //const uniqueUsersArray = [...uniqueUsersSet];
// const uniqueUsersArray=[...new Set(users)]
// console.log(uniqueUsersArray);

// //const mySet = new Set();
// //chaining
// const mySet = new Set([1,2,3,4]);
// mySet.add(5);
// mySet.add(5);
// mySet.add(7).add(10);
// mySet.delete(10);
// console.log(mySet.size)
// console.log(mySet);
// //to check is there are present or absent:
// console.log(mySet.has(4))
// console.log(mySet.has(10));
// //itrate:
// mySet.forEach((value)=>console.log(value));

// const set =new Set(["apple","banana","orange","graps"])
// console.log(set);

// const iterator =set.entries();
// console.log(iterator);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// const iteratorKey = set.keys();
// console.log(iteratorKey.next().value);
// console.log(iteratorKey.next().value);
// console.log(iteratorKey.next().value);

// /*
// 1.subset 
//   A = 1,2,3
//   B = 5,6,1,2,3,4
//   c = 1,3,4,5
// 2.union
// 3.Intersection
// 4.diffrence
// */

// //subset:
// Set.prototype.subset = function (otherset){
//     if(this.size>otherset.size){
//         return false;
//     }else{
//         for(var element of this){
//             if(!otherset.has(element))
//                 return false;
//         }
//         return true;
//     }

// }

// const setA = new Set([1,2,3]);
// const setB = new Set([5, 6, 1, 2, 3, 4]);
// const setC = new Set([1,3,4,5]);

// console.log(setA.subset(setB));
// console.log(setA.subset(setC));
// console.log(setC.subset(setB));

// //union:

// Set.prototype.union = function (otherset){
//    const unionset = new Set();
//    for(let element of otherset){
//     unionset.add(element);
//    }
//     for(let element of otherset){
//     unionset.add(element);
//    }
//    return unionset;
// };

// console.log(setA.union(setB));
// console.log(setA.union(setC));

// //intersection(means ... to find same value in A and B ):

// Set.prototype.intersection =function(otherset){
//     const intersectionSet = new Set();
//     for(let element of otherset){
//         if(this.has(element)){
//             intersectionSet.add(element);
//         }
//     }
//     return intersectionSet;
// }
// console.log(setA.intersection(setB));

// //diffrence:

// Set.prototype.diffrence = function (otherset) {
//   const diffrenceSet = new Set();
//   for (let element of otherset) {
//     if (!this.has(element)) {
//       diffrenceSet.add(element);
//     }
//   }
//   return diffrenceSet;
// };
// console.log(setA.diffrence(setB));

// //Tag Widget:

// class TagsInput{
//     constructor(){
//         this.tags = new Set();

//     }
//     addTag(newTag){
//         this.tags.add(newTag)
//         console.log(this.tags)
//     }
// }
// const input = new TagsInput();
// input.addTag("vani");
// input.addTag("zara");
// input.addTag("krish");
// input.addTag("vani");


// //-----------------------------------------------------------------------------------

// //Map object in javascript:

// const userMap=new Map();

// //Add element to the Map:

// userMap.set("name","vini");
// userMap.set("age", 22);
// userMap.set("city", "salem");
// userMap.set("contact", "9876543212");
// console.log(userMap);

// //update the value for "age":
// userMap.set("age",30);
// console.log(userMap);

// //mapSize:
// console.log("Map Size", userMap.size);

// //Delete Key:
// console.log("Before Delete : ",userMap);
// userMap.delete("city");
// console.log("After Delete : ", userMap);

// //get
// console.log(userMap.get("name"));

// //has
// console.log(userMap.has("name"));
// console.log(userMap.has("city"));

// //iterating Map with for....of
// for(const[key,value] of userMap) {
//     console.log(`${key} = ${value}`);
// }

// //key
// for (const key of userMap.keys()) {
//   console.log(key);
// }

// //value
// for (const value of userMap.values()) {
//   console.log(value);
// }

// //entries
// for (const [key, value] of userMap.entries()) {
//   console.log(`${key} = ${value}`);
// }

// //forEach
// userMap.forEach((value,key)=>{
//     console.log(`${key} = ${value}`);
// })

// //clear
// userMap.clear();
// console.log("after clear :",userMap)

// //Relation With Array objects:
// const arr =[
//     ["key1","value1"],
//     ["key2","value2"],

// ];
// const myMap=new Map(arr);
// console.log(myMap);
// console.log(myMap.get("key1"))

// //map object to array
// console.log(Array.from(myMap))

// //spread
// console.log(...myMap);
// console.log(Array.from(myMap.keys()))
// console.log(Array.from(myMap.values()));

// //Dont do this:

// const wrongMap = new Map();
// console.log(wrongMap);
// wrongMap["key1"]="data1";
// wrongMap["key2"] = "data2";
// console.log(wrongMap);
// console.log(wrongMap.has("key1"));

// //correct menthod to create map:
// const correctMap = new Map();
// console.log(correctMap);
// correctMap.set("key1","data1")
// correctMap.set("key2", "data2");
// console.log(correctMap);

// //NaN we use as a key
// console.log(Number("zara"));
// const myMaps =new Map();
// myMaps.set(NaN,"Not a Number");
// console.log(myMaps.get(NaN));

// //intreview Qn:(Map can be Merged with array);

// const first = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);
// const second = new Map([
//   [1, "first"],
//   [2, "second"],
 
// ]);
// const merged = new Map([...first,...second,[1,"Ist"]]);
// console.log(merged);

// console.log(merged.get(1));
// console.log(merged.get(2));
// console.log(merged.get(3));

// //1.counting the frequency of words in string:

// const sentance = "Fear lead to anger anger lead to hatred lead to conflict";
// const words =sentance.split(" ");
// console.log(words);
// const wordFrequency = new Map();
// for(let word of words){
//     if(wordFrequency.has(word)){
//         wordFrequency.set(word,wordFrequency.get(word) +1);
//     }else{
//         wordFrequency.set(word,1)
//     }
// }

// console.log(wordFrequency)

// //2.grouping object by a prpoerty:

// const people = [
//   { name: "vani", age: 21 },
//   { name: "krish", age: 22 },
//   { name: "zara", age: 23 },
//   { name: "puagl", age: 21 },
// ];
// const peopleByAge = new Map();
// for(let person of people){
//     const age = person.age;
//     if(peopleByAge.has(age)){
//     peopleByAge.get(age).push(person)
//     }else{
//         peopleByAge.set(age,[person])
//     }
// }
// console.log(peopleByAge)

// //3.Implementing a frequency counter:

// function frequencyCounter(arr){
//     const map=new Map();
//     for(let i=0;i<arr.length;i++){
//         const element =arr[i];
//             map.set(element,(map.get(element) || 0)+1)
        
//     }
//     return map
// }
// const array =[1,2,3,1,2,2,4];
// console.log(frequencyCounter(array));
// const array2=[1,44,1,43];
// console.log(frequencyCounter(array2));


//---------------------------------------------------------------------------------

//Event bubbling and Event Capturing:

// const grandparent = document.querySelector("#grandparent");
// const parent= document.querySelector("#parent");
// const child = document.querySelector("#child");


// grandparent.addEventListener("click",function(){
//     console.log("grandparent clicked")
// },false)
// parent.addEventListener("click", function () {
//   console.log("parent clicked");
// },false);
// child.addEventListener("click", function () {
//   console.log("child clicked");
// },false);


//event capturing


// grandparent.addEventListener(
//   "click",
//   function () {
//     console.log("grandparent clicked");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   function () {
//     console.log("parent clicked");
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   function () {
//     console.log("child clicked");
//   },
//   true
// );




// grandparent.addEventListener(
//   "click",
//   function () {
//     console.log("grandparent clicked");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   function () {
//     console.log("parent clicked");
//   },
//   false
// );
// child.addEventListener(
//   "click",
//   function (e) {
//     console.log("child clicked");
//     e.stopImmediatePropagation();
//   },
//   true
// );  
// child.addEventListener(
//   "click",
//   function (e) {
//     console.log("child clicked2");
   
//   },
//   true
// ); 

//---------------------------------------------------------------------------

//Event Delegation in javascript:-

// const catagories = document.getElementById("catagories");

// catagories.addEventListener("click",function(e){
//    // console.log(e.target);
//    if(e.target.className=="product"){
//     //console.log(e.target.id);
//     window.location.href="/"+e.target.dispatchEvent;
//    }
// })



// const frm=document.getElementById("frm");

// frm.addEventListener("keyup",(e)=>{
//     if(e.target.dataset.uppercase!=undefined){
//        e.target.value=e.target.value.toUpperCase();
//     }
// })


//---------------------------------------------------------------------------------

const txtInput =document.getElementById("txtInput");
txtInput.addEventListener("keyup",function(){
       optimizeFunction();
})
let counter =0;
const getDataFromApi=()=>{
  console.log("getting Data.....",counter++);

};

const debounceMethod=function(fn,delay){
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(()=>{
    fn.apply(this,arguments)
    },delay);
  };
};

const optimizeFunction = debounceMethod(getDataFromApi, 300);