console.log("HELLO ARRAY");
// ARRAY

/*
array is collection  all type  data ;
representaion -> []
defination -> {}

example
let nums = [7,5];
    nums[3] = 9  //ADDING VALUE
console.log(nums[3]); //o/p = undefined //fetching value using index
console.log(nums);    //o/p = [7,5,<1 empty item> ,9]

*/
/*
// ADVANCE EXAMPLE
let vakues = [5,"Ashvani",{companyname:'telusko'},function(){console.log("HI")}];

console.log(vakues);

vakues[3]();   //calling function which is inside the function
let run = vakues[3];
run();
*/
/* example using arrow function
let vakues = [5,"Ashvani",{companyname:'telusko'},
              () => console.log("HI")]; //using arrow function 
    
              console.log(vakues);
vakues[3]();
        */
       /* example using (push,pop,shift,unshift)
let nums = [9,5,6,7,8];

console.log(values.push(6));
 //values.push(6);   // method to adding the values
 console.log(values.pop()); // it remove values from array last index
 console.log(values.shift()); // it remove value from starting
 console.log(values.unshift(2)); //it add the values from starting
 
console.log(values);

//whenever you  function belongs to   object is called method
              
    */
/*  
let num =[];
num[0] = 9;
num[99] =4;
//for of loop and for in loop
for(let i in num){
    console.log(num[i]);  // it work with index values
}

for( let j of num){    // work with values it iss called external
    console.log(num[j]);
}
*/

/*
let nums = [9,5,6,7,8];
      delete nums[0];  // wrong way of delete beacuse use more 
     console.log(nums);
              */
/*
 let nums = [9,5,6,7,8];
 nums.splice(1,2,4);   //it will delete all values from nums index 0 se
 console.log(nums);
   */
  /*
 let values = [9,5,6,7,8];
 values.forEach(num =>    //it itrate from all values 
    {
        if(num%2==0){
            console.log(num);
        }
    });                       // internal loop
    // here num is parameter
    */
   /*
   let values = [9,5,6,7,8];
   values.filter(function(num)
   {
    return num%2===0;
   })
.forEach( num => console.log(num));
  */
    /*
let values = [9,5,6,7,8];
values.filter( num => num%2===0)  // filter the values 
      .map(num => num * 2)
      .forEach( num => console.log(num));

console.log(values);
*/
/*
let values = [9,5,6,7,8];
let res =values.filter( num => num%2===0) 
      .map(num => num * 2)
      .reduce(function(num1 ,num2){
        return num1 + num2;
      },1);   // this adding 1 from starting 
console.log(res);

*/
/*
let arr = [3,5,8,6,4,9];

let reo = arr.filter(num => num%2==0)
             .map(num => num*2)
             .reduce((num1 , num2) => num1 + num2);
console.log(reo);
*/
//ARRAY DE-STRUCTRING (we creating some thing)
/*
let a = 9;
let b = 6;
let c = 5;

let values = [a,b,c];  // ARRAY STRUCTURING
console.log(values);

*/

/*
let values = [9,5,7,3,4];
 
let [a,b,c,d,e] = values;  // ARRAY DE- STRUCTURING
console.log([a,b,c,d,e]);
*/
/*
let values = [9,5,7,3,4];

let [a,b,c,...d] = values;  //rest parameter here is d
console.log(a,b,c);
console.log(d);   // typeof d is an ARRAY;

let str1 = "Sunita Hitesh Ninad"
let [x,y,...z] = str1.split(' ');
console.log(x,y,z);
    */
/* // rest and spread operator
function sum(num1,num2,...nums){ //keep it in paameter became rest
    let res = num1 + num2 ;
    for(let num of nums){
        res = res + num;
    }
    return res;
}
let df = sum(3,4,5,6,6,7,78,9);
console.log(df);
*/
/*
function sum(a,b,c,d,e){
    let res = a + b + c + d + e;
    return res;
}
let nums = [3,4,5,6,9];
let df = sum(...nums);  // as an argument became spread operator
console.log(df);

*/