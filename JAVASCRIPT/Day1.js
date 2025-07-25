// const a = 1;
// // a=2; 
// console.log(a);

// let Firstname = "ashvani yadav";
// let age = 18;
// let isMarried = true;

// console.log("This persion " + Firstname +" and their age is "  +age );

// if(isMarried ===true){
//     console.log(Firstname + " IS Married");
    
// }
// else if (isMarried === false){
//      console.log(Firstname + " IS Not  Married");
// }


// // let ans = 0;
// // for(let i = 0; i<= 100000; i++){
// //     ans = ans + i;
// // }
// // console.log(ans);
// function natural(n){
//       let ans = 0;
//     for(let i = 0; i<=n; i++){
//      ans += i;

// }
// return ans;
// }
// let kihh = natural(4);

// console.log(kihh);


// function isprime(n){
//   if(n%2==0){
//     console.log("EVEN");
    
//   }else{
//         console.log("IS prime");
        
//   }

// }
// isprime(7);
// console.log(isprime);
// function naturall(n){
//   for(let i=1; i<=n; i++){
//    if(i%2==0){
//     console.log(i);
//    }
//   }
// }
// naturall(100);
// console.log(naturall);

 function evensum(n){
  let ank = 0;
  for(let i=1; i<=n; i++){
   if(i%2==0){
    ank += i;
   }
   
  }
  return ank;
}

console.log(evensum(100));
 
