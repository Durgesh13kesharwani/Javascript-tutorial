const student={ //way of making object
    fullName: "Durgesh Kesharwani",
    marks: 94.4,
    printMarks: function (){
        console.log("marks= ", this.marks);
    },
};

const employee={
    calcTax(){ // generally it is easy way to write fun for object
        console.log("tax rate is 10%");
    },
    calcTax2 : function(){ //it is also correct
        console.log("tax rate is 10%");
    },
};

const karanArjun={
    salary: 50000,
};

karanArjun.__proto__=employee; //by this method can use fun of called object

class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage; 
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand; // this ke saath jo likha hai vo object ki property hai..
    }
}
let fortuner = new ToyotaCar("fortuner",10);
fortuner.setBrand("fortuner");
let lexus=new ToyotaCar("lexus",12);

//inheritance same (use word extends)

//practise
let DATA ="secret information";
class user {
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data= ",DATA);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="xyz";
        console.log(DATA);
    }
}

let student1 = new user("durgesh","abs@email.com");
let student2 = new user("aman","abs@email.com");
let teacher1 = new user("dean","dean@email.com");
let admin1 = new admin("admin","admin@gmail.com");

//async and callback

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
},4000); //timeout

console.log("three");
console.log("four");

//callback

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum); // do not pass fun with paranthesis
//or
calculator(1,2,(a,b)=>{
    console.log(a+b);
});

//callback hell

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     console.log("getting data 2..");
//     getData(2,()=>{
//         console.log("getting data 3..");
//         getData(3,()=>{
//             getData(4);
//             console.log("getting data 4..");
//         });
//     });
// });

//promise

// let promise= new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     reject("some error occured");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//         //reject("network error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// //promise chain

// function asynFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asynFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetching data1....");
// asynFunc1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2....");
//     asynFunc2().then((res)=>{
//         console.log(res);
//     });
// });

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         },2000);
//     });
// }
// //promise chain
// console.log("getting data1....");
// getData(1)
//   .then((res)=>{
//     console.log("getting data2....");
//     return getData(2);
//   })
//   .then((res)=>{
//     console.log("getting data3....");
//     return getData(3);
//   })
//   .then((res)=>{
//     console.log(res);
// });

  //async-await

//   function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200); //this represent successful api call
//         },2000);
//     });
//   }

//   async function getWeatherData(){
//     await api();
//     await api();
//   }

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success"); //this represent successful api call
//         },2000);
//     });
// }
//async-await
// async function getAllData(){
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....")
//     await getData(5);
// }  

//IIFE

// (async function() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....")
//     await getData(5);
// } )(); 


//Fetch API

const URL="https://official-joke-api.appspot.com/random_ten";
const jokePara=document.querySelector("#joke");
const btn=document.querySelector("#btn");

const getJokes=async()=>{
    console.log("getting data....");
    let response=await fetch(URL);
    console.log(response); //json format
    let data=await response.json(); //object format
    jokePara.innerText=data[0].setup+data[0].punchline;
};

// function getJokes(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         jokePara.innerText=data[0].setup+data[0].punchline;
//     });
// }

btn.addEventListener("click",getJokes);