// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log();

// let headings=document.getElementsByClassName("heading");
// console.dir(headings);

//  let newbtn=document.createElement("button");
//  newbtn.innerText="click me!";
//  console.log(newbtn);

// let div=document.querySelector("div");
// div.before(newbtn);

// let div=document.querySelector("div");
// div.onmouseover =() =>{
//     console.log("you are inside the div");
// }

// let btn=document.querySelector("#btn");
// btn.onclick=(evt)=>{
//     console.log(evt.type);
//     console.log(evt.target);
// };

//call back
// function getData(dataId, getNextData){
// setTimeout(() =>{
//     console.log("data",dataId);
//     if(getNextData){
//         getNextData();
//     }
// },2000);
// }

// getData(1,()=>{
//     getData(2);
// });

// lecture1
// const product={
//     name:"Parker",
//     price:270,
//     color:"black",
//     rating:4,
//     off:5
// };

// console.log(product);
// console.log(typeof product["name"])

// number divided by5
// let num=prompt("Enter number");

// console.log(num);
// if(num%5===0){
//     console.log("divided");
// }
// else
// console.log("not divided");

// lecture2
// let score=22;
// let grade;
// if(score>=90 && score<=100)
//     grade="A";
// else if(score>=70 && score<=89)
//     grade="B";
// else if(score>=60 && score<=69)
//     grade="C";
// else if (score>=50 && score<=59)
//     grade="D";
//     else (score>=0 && score<=49)
//         grade="F";
//         console.log(grade);

// lecture3
// let sum=0;
// let n=100;
// for(let i=1; i<=100; i++){
//     sum=sum+i;
// }
// console.log(sum);

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=20;
// do{
//     console.log("saniya");
// }while(i<=10);

// let str="My name is saniya";
// for(let i of str){
//     console.log(i);
// }

// let str1="My name is saniya";
// let size=0;
// for(let i of str1){
//     console.log(i);
//     size++;
// }
// console.log(size);

// let student={
//     name:"rahul",
//     cgpa:7.5,
//     result:true
// };
// for(let key in student){
// console.log("key=",key,"value=",student[key]);
// }

// for(n=0;n<=100;n++){
//     if(n%2==0){
//         console.log(n);
//     }
// }

// let gameNum=22;
// let userNum=prompt("Enter number");

// while(userNum!=gameNum){
//     userNum=prompt("you enter wrong, please try again");
// }
// console.log("You won");

// let str=prompt("Enter name");
// userName= "@"+ str+str.length;
// console.log(userName);

// let cities=["a","b","c","d","e","f"];
// for(city of cities){
//     console.log(city);
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg=sum/marks.length;

// console.log(avg);

// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let dis=items[i]/10;
//     items[i]=items[i]-dis;
    
// }
// console.log(items);

// let items=[250,645,300,900,50];
// let i=0;
// for(let val in items){
//   let offer=val/10;
//   items[i]=items[i]-offer;
//   console.log(`${items[i]}`);
//   i++;
// }

// lecture 4
// let comp=["a","b","c","d"];
// comp.shift();
// comp.splice(2,1,"ola");
// comp.push("amazon");

// lecture 5
// function countVowels(str){
//   let  count=0;
// for(const vol of str){
//     if(
//         vol==="a" ||
//         vol==="e"  ||
//         vol==="i"  ||
//         vol==="o"  ||
//         vol==="u"
//     ){
//     count++;
//     }
// }
// console.log(count);
// }

let nums=[1,2,3];

nums.forEach((num)=>{
    console.log(num*num);
});