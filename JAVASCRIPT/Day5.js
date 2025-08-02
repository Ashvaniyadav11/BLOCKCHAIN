/*
class Strong { // parents class 
    constructor(name ) {
        this.name=name;
    }
    welcome(){
        console.log(`Ramram ${this.name}`);
    }
}
// this is child class
class Student extends Strong{
         constructor(name){
            console.log("this is a child class");
            
        super(name)// use keyword of inheritense
         }
}

let student = new Student("Ashvani Yadav");

student.welcome();

// method over riding
*/
/*
class  Person{
    constructor(name){
        this.name=name;
        this.occupation="java Developer";
    }
     greet(){
        console.log(`JAI SHREE YADUVANSHI ${this.name}`);
        console.log(`Occupation isnow ${this.occupation}`);
    }
   
}

class Student extends Person{
    constructor(name){
        super(name);

        this.occupation="Blockchain Developer";
    }
   
    }
    let obj1 = new Person("Ashvani Yadav" );


obj1.greet();
let obj2 = new Student("Aditya " );

obj2.greet();  // we can use parent class greet but vice versa not true
       
          // end inheritence

          */
// when ever you create a constractor  using function is constructor factory

// fuction A withsome object parameter 
//function B working with object1 or working with properties of function A

// it is base function
/*
function Animal(value){  //it is function inheritence
    var obj ={} // empty object
    obj.name=value.name;//asign a new attributes to the object oj called same;

    return obj;
}

// Dog is derived function
function Dog(value){
    var obj=Animal(value);
    obj.greet=function(){
        return`hello ${obj.name}`;
    }
    return obj;
}

var myCuteDog=Dog({name: "Snoop"});
console.log(myCuteDog.greet());

*/
//Static Method

class Person {
    constructor(name) {
        this.name=name;
        
    }
    getName(){
        return this.name;
    }
    static Create(gender){
        let name = gender == "Male" ? "John DOhn" : "Sanjeevani";
        return new Person(name);
    }
}

let name_gender = Person.Create("female");
console.log(name_gender);

