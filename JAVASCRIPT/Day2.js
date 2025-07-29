// We Focus on Loop{
// WHILE LOOP
// While is pre condition(CHeck Conditon then  do )
// do while loop -- post condition
// let y = 1;  // initilse loop 
// while(y<=7){
//     console.log("HEllO BROTHER");
//   y++;   // increament/decreament
// }

// console.log(y);


// FOR LOOP 
//  intilise //condition inc
// for(let i = 1; i<=5; i++){
//    console.log("*");
//    }
 

//SWITCH 
// based on matching
// let day = "Mon";
// switch(day)
// {
//     case  "Sun" :
//     case "Sat"  :
//     console.log("6am");
//    break;

//    case "Fri" :
//    case "Mon" :
//    case "Tue" :
//    case "Thu" :
//         console.log("7am");
//         break;
//     case "Wed" :
//         console.log("8am");
//        break;
//    default : 

//        console.log("Keep Dreaming");
        
// }

// Skip something use >= Continue keyword
// for(let i = 1; i<=5; i++){
//     if(i===2){
//         continue;// o/p = 1; we can use also Continue then o/p = 1 ,3 4, 5,;
//     }
//     console.log(i);
    
// }

// Fu
// Function//

// Procedures(C languege Follow ) , Functions, Objects
// It is functional  programing language
// Functions are FIRST - CLASS citizens
// Fuction is created principle is DRY (DOnt Repeat Yourself);
//What is function
//It is Block of Statement which is can execute just by calling them 
//  dosomething(); // working the concept of Hosting 
//  function dosomething(){         // define
//       // 
//      let name = "Ashvani Yadav";
//      console.log(name);
     
//     //
// }
// dosomething();               // Calling


// function summ(){
//     let num = 8;
//     let num2 = 6

//     console.log(num + num2);
    
// }
// summ();

let num =56;
let num2 = 45;

// function addd(n1 , n2){
//     console.log(n1+n2);
// }

// adddd(num ,num2);

// function adddd(n1 , n2 ,n3=0){   //when dont initilse n3 then O/P = NaN
//     console.log(n1+n2 + n3);
// }

// adddd(num ,num2);    // here we can use (9,10); or String 

        // OBJECT
 
//  It is real world entity      
// 
// let book ={
//     "title": "Javascript" ,
//     "author": {
//         "Fristname": "john",
//         "lastname": "King"
//     } ,
//     "year" : 2018,

//     "num_of_copies": 1000
    
// }
// console.log(book.author);
// book.year =2999; // updation
// console.log(book);
// let empty = {};
// console.log(empty);

// let point ={ x:0,y:0};
// let p2 = {x: point.x ,y: point.y +1}
//  console.log(p2);
 
// let book ={
//     "title": "Javascript" ,
//     "author": "John" ,
//     "year" : 2018,

//     "num_of_copies": 1000
    
// }
// console.log(book);
// console.log(book.author);
// console.log(book.year);


 
// 2nd way defne object
// let book = new Object();
// book.tiile ="harrypotter";
// book.author = "JK howking";
// book.pages = 4000;
// book.publisher = "hk Mathur";
// book.year = 1997;
// console.log(book);
// console.log(book.pages);
//  // modificatiom
// book.pages =6000;
// book.author = "AShvani Yadav";
// console.log(book.pages);
// console.log(book.author);
// // second way Of Modification 
// book["author"] = "A.G. Yadav";

// console.log(book.author);


// 3 rd way of creating OBJECT

// let obj = Object.create({x:1,y:2});
// let o2 = obj.x + obj.y;
// console.log(o2);


// const  mcar = new Object(); // we can use let 
// mcar.company = "BMW";  // NEW keyword = maily use  for initlise and mainly for buliding functionality 
// mcar.year = 2019;
// mcar.color= "Black";
// mcar.model = "X7";
// mcar.price = 3900000;
// mcar.transmission = "Automatic";
// mcar.condion = "GooD";
// mcar.fuel = "PetroL";
// mcar.milege = 21;
// // console.log(mcar);


// // modified property
// mcar.model = "X9";
// mcar.transmission = "Mannual";
// mcar.fuel = "Disel";
// console.log(mcar);
// incapislation means resuse somthing

//HW /create student object in three ways

let stud = Object.create({"Name":"Ashvani yadav" , "age": 19, "Highest_Education":"Btech","subject":{PHY:67,CHEM:99,Math:98},"Graduation_Year": 2028});
console.log(stud);

/*
let student= new Object();
student.Name ="Ashvani yadav";
student.age = 19;
student.Highest_Education="Btech";
student.sub={PHY:67,CHEM:99,Math:98};
student.Graduation_Year= 2028;
console.log(student);
*/