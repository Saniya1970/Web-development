//objects
const student={
Name:"saniya",
div:"a",
marks:"88",
printmarks:function(){
console.log("marks=",this.marks);
},
};

const employee={
    calTax(){
        console.log("tax is high");
    },
};

const frd={
    salary:3000,
};

frd.__proto__=employee;

//class


class car{
    constructor(){
     console.log("creating new object")
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
        };
}
let toy =new car();

class parent{
hello(){
    console.log("hi sanu");
}
};

class Childe extends parent{

};

let obj =new Childe();

class Person{
    constructor(){
     this.species="homo-sapiens";
    }
eat(){
console.log("can eat");
}
sleep(){
    console.log("can sleep");
}
}

class Engineer extends Person{
    work(){
        console.log("work has done");
    }
    constructor(branch){
        super();//to envoke paent class constructor
        this.branch=branch;
    }
}

let saniyaobj = new Engineer("comp");

let DATA ="confidencial info";

class User{
    constructor(myname,email){
        this.myname=myname;
        this.email=email;
       
    }

    viewData(){
        console.log("data=",DATA);
    }
}

let student1 =new User("saniya","asc");
let teacher=new User("dfg","fgh");

class Admin extends User{
    constructor(myname,email){
       super(myname,email);
    }
    editData(){
        DATA="new data";
    }
}

let admin= new Admin("asd","sdf");

//try catch
let a=3;
let b=9;

console.log(a+b);

try{
console.log("a+b",a+c);
}
catch(err){
    console.log(err);
}