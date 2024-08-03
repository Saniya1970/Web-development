// let btn1=document.querySelector("#btn1");

// // btn1.onclick = (e) =>{
// //     console.log(e);
// //     console.log(e.clientX,e.clientY);

// //   /*  let a=19;
// //     a++;
// //     console.log(a);*/
// // }

// btn1.addEventListener("click", () =>{
//     console.log("button was click");
// } )

// btn1.addEventListener("click", (e) =>{
//     console.log(e.type);
//     console.log(e.clientX,e.clientY)
// } )
// let div=document.querySelector("div");

// div.onmouseover= () =>{
//     console.log("hi saniya");
// }

// let mode=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currmode="light";


// mode.addEventListener("click" ,() =>{
// console.log("You are trying to change mode");

// if(currmode==="light"){
//     currmode="dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
// }
// else{
//     currmode="light";
//     body.classList.add("light");
//     body.classList.remove("dark");
// }
// console.log(currmode);
// }
// );

let btn2= document.querySelector("#btn2");
let body=document.querySelector("body");
let mymode="pink";

btn2.addEventListener("click",() =>{
    if(mymode==="pink"){
        mymode="green";
     body.classList.add("pink");
     body.classList.remove("green");
    }
    else{
        mymode="pink";
        body.classList.add("green");
        body.classList.remove("pink");
    }
});