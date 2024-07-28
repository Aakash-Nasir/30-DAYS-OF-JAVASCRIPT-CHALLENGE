function throwError() {
    throw new Error("This is an intetional error");
}
try{
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
}

// Task 2
 function divide(a,b) {
    if(b === 0){
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
 }

 try{
    console.log(divide(4,2)); // Expected output 2
    console.log(divide(4,0)); //This will throw an error
 } catch (error) {
    console.log("caught an error:" , error.message);

 }

 // Task 3
 function testFinallyBlock() {
    try{
        console.log("In try  block");
        throw new Error("Error in try block");
         } catch(error) {
            console.log("In catch block:" , error.message);
         } finally{
            console.log("In finally block");
         }

 }
 testFinallyBlock();

 // Task 4
 class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwError() {
    throw new CustomError("This is a custom error.");
  }
  
  try {
    throwError();
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }

  //Task 5
  class ValidationError extends Error {
   constructor(message) {
     super(message);
     this.name = "ValidationError";
   }
 }
 
 function validateInput(input) {
   if (!input) {
     throw new ValidationError("Input cannot be empty.");
   }
   return true;
 }
 
 try {
   validateInput(""); // This will throw an error
 } catch (error) {
   console.log(`${error.name}: ${error.message}`);
 }
  
  // Task 6
  function randomPromise() {
   return new Promise((resolve, reject) => {
     const random = Math.random();
     if (random > 0.5) {
       resolve("Promise resolved!");
     } else {
       reject(new Error("Promise rejected."));
     }
   });
 }
 
 randomPromise()
   .then((message) => console.log(message))
   .catch((error) => console.log("Caught an error:", error.message));
      // Task 7

      function randomPromise() {
         return new Promise((resolve , reject) => {
            const random  = Math.random();
            if(random > 0.5) {
               resolve("promise resolved!");
            }else{
               reject(new Error("Promise reject"));
            }
         })
      }

      async function handlePromise() {
         try{
           const message = await randomPromise();
           console.log(message);
         } catch (error) {
            console.log("Caught an error :", error.message);
         }
      }
      handlePromise();

      // Task 8
      fetch("https://jsonplaceholder.typicode.com/postsssssssssssss")
      .then((response) => response.json())
      .catch((error) => console.log("Fetch error"));

      //Task 9
      async function fetchData() {
         try{
          const response = await fetch("https://jsonplaceholder.typicode.com/postsssssssssssss");
          const data = await response.json();
          console.log(data);

         } catch (error) {
            console.log("Fetch error:",error.message);
         }
      }
      fetchData();
