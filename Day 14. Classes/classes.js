// Task 1
 class Person {
  constructor(name,age) {
    this.name = name;
    this.age= age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }

 };

 const Person1 = new Person("Aakash",20);
 console.log(Person1.greet());

 // Task 2

 class  PersonA {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age : ${this.age}`);
    }
 };

 const Person2 = new PersonA("Aakash" , 22);
 console.log(Person2.greet());
 Person2.updateAge(23);
 console.log(Person2.greet());

// Task 3

class PersonAN{
 constructor(name, age){
    this.name = name;
    this.age = age;
 }
 greet() {
     return `Hello, my name is ${this.name} and I am ${this.age} years old`;
 
   }
}
 class Student extends PersonAN {
    constructor (name, age , studentId) {
        // this.name;
        // this.age;
        super(name,age);
        this.studentId = studentId;
    }
    greetStudentId() {
        return `Student Id : ${this.studentId}`;
    }
 }
 const student1 = new Student("Arpit Dalal",19,"A50504822040");
 console.log(student1.greetStudentId());

 // Task 4

 class PersonAK {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
     }
    }
     class StudentAK extends PersonAK{
        constructor(name,age,studentId) {
            super(name,age);
            this.studentId =studentId;
        }
            // Override the greet method of person class
            greet() {
                return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
            
            }
        }
            const student2 = new StudentAK("Haresh" , 20 , "A035");
            console.log(student2.greet());

            // Task 5

            class PersonAa {
                constructor(name,age) {
                    this.name = name;
                    this.age = age;
                }
                
  // Static method: we can call it without creating the instance of person class
  static genericGreet() {
    return "Hello! welcome to my github profile !";
  }

            }
            console.log(PersonAa.genericGreet()); 

// Task 6
class PersonAn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Static method: we can call it without creating the instance of person class
    static genericGreet() {
        return "Hello! welcome to my github profile !";
    }
    
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class StudentAn extends PersonAn {
    static studentCount = 0; // Initialize the static property
    
    constructor(name, age, studentId) {
        // super method calls the constructor of our parent class PersonAn to initialize the name and age fields
        super(name, age);
        this.studentId = studentId;
        StudentAn.studentCount++;
    }
    
    // Override the greet method of PersonAn class 
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const studentA = new StudentAn("Harshit", 19, "S1234");
const studentB = new StudentAn("Pranshu", 18, "S5678");
console.log(`Total number of students: ${StudentAn.studentCount}`);

// Task 7 class name is fName instead of Person

class fName {
    constructor(firstName, lastName,age) {
        this.firstName =  firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const fn = new fName("Aakash","Nasir",20);
console.log(fn.fullName);

// Taslk 8
class FName {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    set fullName(name) {
        console.log("hello " + name);
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const an = new FName("Aakash", "Nasir", 20);
console.log(an.fullName); // Output: Aakash Nasir
an.fullName = "Bhavesh Nasir"; // Output: hello Bhavesh Nasir
console.log(an.firstName); // Output: Bhavesh

// Task 9
class Account {
    // Private Instance Variable Of Account
    _balance;
  
    constructor(initialBalance) {
      this._balance = initialBalance;
    }
  
    deposit(amount) {
      this._balance += amount;
      this.logBalance();
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.log("Insufficient balance");
      }
      this.logBalance();
    }
  
    logBalance() {
      console.log(`Current balance: ${this._balance}`);
    }
  }
  

// Task 10
const instanceOfAccount = new Account(1000);
console.log(instanceOfAccount._balance);
instanceOfAccount.deposit(1000);
instanceOfAccount.withdraw(250);