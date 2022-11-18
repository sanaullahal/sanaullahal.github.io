
//Problem 1
let person= {
    name:null,
    dateOfBirth:null,

    getName:function(){
        return this.name;
    },

    setName:function(name){
        this.name= name;
    },

    getDateOfBirth:function(){
        return this.dateOfBirth;
    },

    setDateOfBirth:function(dateOfBirth){
        this.dateOfBirth= dateOfBirth;
    },

    toString:function(){
        return "Name: " +this.getName() +"\nDate of Birth: " +this.dateOfBirth.getFullYear() +"-" +this.dateOfBirth.getMonth() +"-" +this.dateOfBirth.getDate();
    }
}

const Ana= Object.create(person);
Ana.setName("Ana");
Ana.setDateOfBirth(new Date(1998, 11, 15));
console.log(Ana.toString());

const Bob= Object.create(person);
Ana.setName("Bob");
Ana.setDateOfBirth(new Date(1945, 10, 16));
console.log(Ana.toString());

const Carlos= Object.create(person);
Ana.setName("Carlos");
Ana.setDateOfBirth(new Date(1976, 08, 24));
console.log(Ana.toString());


//Problem-2

class Person{
   constructor(name){
       this.name= name;
   }

}

class Employee extends Person{
    constructor(name, salary, hireDate){
        super(name);
        this.salary= salary;
        this.hireDate= hireDate;
    }

    getdojob(){
        return this.dojob;
    }

    setdojob(dojob){
        this.dojob= dojob;
    }
    
}

let emp= new Employee("Anna", 249995.50, new Date(2021, 10, 20));
emp.setdojob("Programmer");

console.log(emp.name +" is a " +emp.getdojob() +" who earns $" +emp.salary);

let emp1= new Employee("Jim Hanson", 245990.50, new Date(2021, 10, 20));
emp1.setdojob("Software Engineer");

console.log(emp1.name +" is a " +emp1.getdojob() +" who earns $" +emp1.salary);