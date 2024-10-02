console.log("durgesh kesharwani");
fullname="tony stark";
age=24;
price=99.99;
x=null;
y=undefined;
isFollow=true;
console.log(fullname);
console.log(age);
console.log(x);
console.log(y);
console.log(isFollow);
fullname=25;
console.log(fullname);
let a;
console.log(a); // this will give output undefined but do not get error
//const b;
// console.log(b); this will give error we have to declare const at starting since it can't be changed
console.log(typeof age);
let p=null;
console.log(typeof p); //type is object which is empty
let q;
console.log(typeof q); // this is undefined type
let c=BigInt("123");
let d=Symbol("hello");
console.log(typeof c); 
console.log(typeof d); 
const student={
    fullName: "durgesh kesharwani",
    age: 21,
    cgpa: 7.5,
    isPass: true,
};
console.log(student);
console.log(typeof student);
console.log(student["fullName"]);
console.log(student.age);
student["fullName"]= "Durgesh Kesharwani"
console.log(student["fullName"]);
const product={
    pname: "Parker Jotter Standard CT Ball, (Black)" ,
    isdeal:true,
    rating:4.2,
    ratedby:70002,
    Price: 270,
    Discount:15,
};
console.log(product); 
const profile={
    username:"@durgeshkesharwani",
    myname:"Durgesh Kesharwani",
    isFollow: true,
    noofpost: 195,
    nooffollowers: 569,
    nooffollowing: 4,
    about:"Apna college|Ex-Microsoft,DRDO",
};
console.log(profile); 
console.log(typeof profile.nooffollowers);
// Arithmetic operators
let val1 =5;
let val2 =2;
console.log("val1**val2=", val1**val2);
// logical operator
console.log("!(6<5) = ", !(6<5));
// if else    // same as c++
let mode="light";
let color;
if(mode==="dark"){
    color="black";
}else{
    color="white";
}
console.log(color);
//ternary operator
let ag=25;
ag>=18? console.log("adult"):console.log("not adult");

// alert and prompt

//alert("hello!"); //one time popup
//let name=  prompt("hello!"); //way to take input from user
//console.log(name);
//let number= prompt("Enter a number:");
// if(number%5===0){
//     console.log(number, "is multiple of 5");
// }else{
//     console.log(number, "is not a multiple of 5");
// }

//let scores=prompt("enter scores of student");
// if(scores>=80&&scores<=100){
//     console.log("Your grade is A");
// }
// else if(scores>=70&&scores<=89){
//     console.log("Your grade is B");
// }
// else if(scores>=60&&scores<=69){
//     console.log("Your grade is C");
// }
// else if(scores>=50&&scores<=59){
//     console.log("Your grade is D");
// }
// else if(scores>=0&&scores<=49){
//     console.log("Your grade is F");
// }
// else{
//     console.log("Invalid score");
// }

// loops // all same but 2 more added for of , for in

//for of
let str="apnacollege";
for(let i of str){
    console.log("i= ",i);
}
//for in
let stu={
    name: "Durgesh Kesharwani",
    age:21,
    cgpa:7.45,
    isPass:true,
};
for(let key in stu){
    console.log("key=", key, "value=",stu[key]);
}

//guess the number game que
// let gamenum=25;
// let usernum=prompt("guess the game number: ");
// while(usernum!=gamenum){
//     usernum=prompt("its wrong, guess again: ");
// }
// console.log("congrats, you are right");

// Template literals

let specialstring=`this is a template literal`;
console.log(typeof specialstring); 
let obj={
    item: "pen",
    price: 10,
};
let op= `the cost of ${obj.item} is ${5+5} rupees`;
console.log(op);

console.log("Durgesh\n\tKesharwani");
let st = "Durgesh\n\tKesharwani"; ///n and /t is count as 1-1 character
console.log(st.length);


let sttr = "ApnaCollege";
let newstr= sttr.toUpperCase();
console.log(newstr);
console.log(sttr); // no change in main string bcz string are immutable

let sr = "    Apna  College  JS    ";
console.log(sr.trim());
console.log(sr);
let numstr = "0123456";
console.log(numstr.slice(1,3)); // it will not include ending index so, 12 will be printed
let sdring = "hellololo";
console.log(sdring.replace('lo','p')); // it will replace only first occurence of replacing part
console.log(sdring.replaceAll('lo','p')); 

//practise
//let usernaam = prompt("Enter the full name without space: ");
// let user_namep1= "@"+ usernaam +usernaam.length;
// //let user_namep2= 
// console.log(user_namep1); 

// arrays :- it is a typeof 'object' which is key value pair but in key we always use index
let marks = [96,86,78,64,38];
console.log(marks);
console.log(typeof marks);
console.log(marks.length); // property
let heroes = ["ironman","thor","hulk","spiderman","batman"];
console.log(heroes);
console.log(marks[0]);
marks[0]=89;
console.log(marks[0]);
console.log(marks[100]); //output is undefined
// string char ka collection
// object key value ka collection
// similar type of elements or values ka collection // so these are iterables

// ek tarika for loop ka basic vala
// for of and for in or aega isme
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
let mark= [250,645,300,900,50];
for(let num of mark){
    num-=num/10; 
    console.log(num);
}

// Methods of Arrays // saare small letter se chalu hote hn

let foodItems = ["potato","apple","litchi","tomato"];
foodItems.push("chips","burger","paneer"); // add items in last and it will return size of array now
console.log(foodItems);
let deletedItem = foodItems.pop(); // push and pop original array me change lata hai
console.log(foodItems);
console.log("deleted", deletedItem);
console.log(foodItems.toString());// original array me change nhi krta
console.log(mark.toString()); // ye single string banata hai
let marvelHeroes =["thor","spiderman","ironman"];
let dcHeroes = ["superman","batman"];
let indianHeroes =["shaktiman","krish"];
let heroe=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroe);
marvelHeroes.unshift("antman"); // original array me change hota hai
console.log(marvelHeroes);
let heroo=marvelHeroes.shift(); // original array me change hota hai
console.log(heroo); 

// splice and slice 

let aray =[1,2,3,4,5,,6,7];
console.log(aray.splice(2,2,101,102));
console.log(aray);
//add element
console.log(aray.splice(2,0,101));
console.log(aray);
//delete element
console.log(aray.splice(3,1));
console.log(aray);
//replace element
console.log(aray.splice(3,1,101));
console.log(aray);
console.log(aray.splice(4)); // it will remove all element from and after the given index
console.log(aray);
console.log(aray.splice()); // it will give no change
console.log(aray);
let companies = ["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
// companies.splice(0,1);
// console.log(companies);
//or
// companies.shift();
// console.log(companies);
// companies.splice(2,1,"Ola");
// console.log(companies);
// companies.splice(6,0,"Amazon");
// console.log(companies);
companies.push("Amazon");
console.log(companies);
//Arrowfun
function sum(a,b){
    return a+b;
}
const arrowSum=(a,b)=>{
    return a+b;
}
function mul(a,b){
    return a*b;
}
let arrowmul=(a,b)=>{
    return a*b;
}
console.log(arrowmul(3,4));
arrowmul=5;
console.log(arrowmul);
const printHello=()=>console.log("hello");
printHello();

//practise 
//stttr="absbdbdsbs";
function numofVowels(stttr){
    let cnt=0;
    for(const char of stttr){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            cnt++;
        }
    }
    return cnt;
}
let ans=numofVowels("abiouesbdbdsbs");
console.log(ans);

const countvowel=(sttttr)=>{
    let cnt=0;
    for(const char of sttttr){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            cnt++;
        }
    }
    return cnt;
}
let anns=countvowel("abiouesbdbdsbs");
console.log(anns);

//forEach loop in Arrays //it can only be used for arrays , for string it will give error

let arr=["pune","delhi","mumbai"];
arr.forEach(function printVal(val){
    console.log(val);
});

//generally forEach is passed as arrow fun
arr.forEach((val,idx,arr)=>{ // forEach fun only have 3 argument val, idx and arr itself anyone can be used or not used depend on requirement
    console.log(val.toUpperCase(),idx,arr);
});
let numms=[1,2,3,,4,5,6];
numms.forEach((val)=>{
    console.log(val*val);
});

//or
let calcSqr=(val)=>{
    console.log(val*val);
}
numms.forEach(calcSqr);

// map fun used to create new array using old array

let newarr = numms.map((val)=>{
    return val*2;
});
console.log(newarr); 

// filter method of array

let arrr=[1,2,3,4,5,6,7];
let evenArr=arrr.filter((val)=>{
    return val%2===0;
});
console.log(evenArr);

//reduce method of array

const output=arrr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(output);
//window object
//window.console.log("helloo");

//DOM

//   let heading = document.getElementById("heading"); //h1
//   console.dir(heading);

//   let headings = document.getElementsByClassName("heading-class");
//   console.dir(headings);
//   console.log(headings);

//   let para=document.getElementsByTagName("p");
//   console.dir(para);

//   let firstel=document.querySelector(".heading-class");
//   console.dir(firstel);

//   let allel=document.querySelectorAll(".heading-class");
//   console.dir(allel);

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from Apna Collegestudents"; //concatinate
// let divs=document.querySelectorAll(".box");
// console.log(divs);
// let idx=1;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }
// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));
// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.innerText="Hello";

// let newBtn = document.createElement("button");
// newBtn.innerText= "click me!";
// console.log(newBtn);

// //div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// //remove
// let para=document.querySelector("p");
// para.remove();
// newHeading.remove();

//practice
// let newbtnn=document.createElement("button");
// newbtnn.innerText="click me!";
// //console.log("newbtnn");
// //let btn=document.querySelector("newbtnn");
// newbtnn.style.backgroundColor="red";
// newbtnn.style.color="white";

// document.querySelector("body").prepend(newbtnn);

// let para=document.createElement("p");
// para.getAttribute("class");
// para.setAttribute("class","newclass");
// para.classList.add("newClass");
// para.classList
// let para=document.querySelector("p");

//event handler

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };
// let div=document.querySelector("div");
// div.onmouseover=(evt)=>{
//     console.log("you are inside box");
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

//event listner

// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-handler1");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-handler2");
// });
// const handler3=()=>{
//     console.log("button 1 was clicked-handler3");
// };
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-handler4");
// });
// btn1.removeEventListener("click",handler3);

//practice
// let modebtn=document.querySelector("#mode");
// let currmode="light";
// modebtn.addEventListener("click",()=>{
//     if(currmode==="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode);
// });

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});
