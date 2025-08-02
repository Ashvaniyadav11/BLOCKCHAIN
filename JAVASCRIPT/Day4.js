// TODAY AGEND
// OOP CONCEPT
//abstruction
//inheritance
//pass by value and reference

// console.log("Hello");
// abtraction is method to hide irrelivent data only to useful data;
//class is used to define the Object behaviour
class Persion{  // every class need constructor
 // a class can have only one constructor;
 // you need to define all the attributes of class in the body of constructor;
    constructor(name,age){  //here we can set Default value;
       //this keyword  is used to point to the current object of the class

       
        this.name=name;
        this.age=age;
        
    }
    greet(){
        console.log(`Hello ${this.name}`);
        console.log( this.age);
        
        
        
    }
}

// let person1 = new Persion("Ashvani Yadav",23,"MSC","Blockchain","Pratapgarh","INDIAN",450000,"Male");
// person1.greet();

/*
parent class name is Persion
1 child class name is Student it is behave is like Persion class
1 child class -- Child -- behaves exactly like Student calss mean bahave exactly
like Persion class
*/
class Student extends Persion{
           constructor(name,age,desig,high_qual,city){
            //super points to the constructor of the parent class
            //using super -> the derived class mimics the behaviour of parent class`
             super(name , high_qual);
          
             this.name=name; 
             this.occupation=high_qual;
             this.city=city;
            /*
            this.name=name;
            this.age=age;
            this.desig=desig;
            this.high_qual=high_qual;
            this.city=city;
            */
           }
    greet_student(){
        console.log(this.name);
        console.log(this.occupation);
        console.log(this.city);
        
        
        // console.log(this.age);
        // console.log(this.desig);
        // console.log(this.high_qual);
        // console.log(this.city);
        
    }
}
class Child extends Student{

}


let student1 =new Student("Ashvani",19,"KOTAAA","M.TECH","Pratapgarh");

// student1.greet_student();
// let student_1 = new Student("Ashvam Yadav",19); 

// student_1.greet();

/*
create a class car class name ,brand total_sales
child classes - engine ,transmission, suspenstion,seating capacity,price,yol
*/

class Car {
    constructor(name ,brand ,company, total_sales) {
        this.name=name;
        this.brand=brand;
        this.company=company;
        this.total_sales=total_sales;
    }
}


class car_details extends Car {
    constructor(name,engine ,transmission, suspenstion,seating_capacity,price,yol) {
        super(name,engine ,transmission, suspenstion,seating_capacity,price,yol);
        this.name=name;
        this.engine=engine;
        this.transmission=transmission;
        this.suspenstion=suspenstion;
        this.seating_capacity=seating_capacity;
        this.price=price;
        this.yol=yol;
    }
    get_details() {
        console.table([this.name,this.engine,this.transmission,this.suspenstion,this.seating_capacity,this.price,this.yol]);
        
        // console.log(this.engine);
        // console.log(this.transmission);
        // console.log(this.suspenstion);
        // console.log(this.seating_capacity);
        // console.log(this.price);
        // console.log(this.yol);
        
    }
}

let car1= new car_details("ferarai","mustang","400990cc","sockeer",10,24000,2025);

car1.get_details();