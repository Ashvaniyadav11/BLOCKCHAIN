//Function --> Object
// 
// function add(n1,n2){ // it is function statement 
//     return n1 + n2
    
// }             // in js everything treated as value

// console.log(add(5,6));

//functional programming means functions are first class citizen it has power to

// we can define ,pass ,return ,assign function

// let add = function(n1,n2){  //  it is function expression
//                             // anonymus fuction which has no name
// console.log("i add ");
//  return n1 + n2;            // here add behave like as function
// }

// let resu = add(8,9);
// console.log(resu);


let add = (n1,n2)=> n1 + n2;  // advance form of function
                              // arrow function 
                               // it also a anonymus function
                                  // here add behave like as function
                             // it is use when one statement is present 
                             // in multi statement use curley braces 
 
/*let resu = add(8,9);
console.log(resu);

const multi = (a,b) => a*b;
console.log(multi(45,67));
*/
/*
let student = new Object();
student.name = "Ashvani Yadav ";
student.highestqualification = "B.tech";
student.age = 19;
student.rollno = 43;
student.yearofpassing = 2028;
student.sub = ["Physic", "Chemistry"];
student.marks =[97,57];

student.marks =[45,57];

console.log(student);
*/



// let obj = new Object();
// obj.name ="Ashvani";
// obj.age=23;
// obj.yop =2028;
// obj.high_quali="B.tech";
// obj.dob=2006;
// console.log(obj);


function Student(name,age,yop,high_quali,dob){
//pointer.attribute = value;
    this.name=name;
    this.age=age;    // it not function it is contructor (Base )
    this.yop=yop;    // we use this keyword
    this.high_quali=high_quali;
    this.dob=dob;
}

 // object_type object_name = new(initisation keyword) constructor
let student_1 = new Student("Nitin",20,2028,"b.tech",2004);
const student_2 =new Student("Amit ", 19,2028,"btech",2004)
// console.table([student_1,student_2]);


/*memory stack
1004  
1008 // when you try to run code . code run line by line 
1012   in memory this value assign in memory.
1016
1020
*/
Student.prototype.HiSay = function(){
    console.log("Hello My name is "+this.name);

};

const hii = new Student("Ashvani Yadav");
hii.HiSay();

console.log();
