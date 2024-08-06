// Task 1
let key = "myString";
let value = "Hello,LocalStorage!";

// Save a string to local storage
localStorage.setItem(key,value);

// Reterive the string from localStorage
const ReterivedString = localStorage.getItem(key);
console.log(ReterivedString);  // Output "Hello,LocalStorage!"

// Task 2
const myObject ={
                 channel : "Chai Aue Code",
                  subscriber : "1M"
                 };
console.log("OBJECT :" , myObject);
console.log("OBJECT TO JSON :" , JSON.stringify(myObject)); // Object to json

// save the object to local storage 
localStorage.setItem("myObject",JSON.stringify(myObject));

console.log("JSON :",localStorage.getItem("myObject"));
console.log("JSON TO OBJECT :", JSON.parse(localStorage.getItem("myObject")));

// Retrieve and parse the object  from localStorage
const reterivedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(reterivedObject);


// Task 4
let keyy = "myString";
let valuee = "Hello, Local Storage!";

// Save a string to localStorage
localStorage.setItem(key,value);

// log localStorage content before removal
console.log(localStorage.getItem(key));

// Remove an item from localstorage
localStorage.removeItem(key);

// Log localStorage content after remova;
console.log(localStorage.getItem(keyy));

// Task 5
let keyyy = "mySessionStorage";
let valueee = "Hello , SessionStorage!";

// Save a string to sessionStorage
sessionStorage.setItem(keyyy,valueee);

// Reterive the string from sessionStorage
const ReterivedSessionStorage = sessionStorage.getItem(keyyy);
console.log(ReterivedSessionStorage);

// Task 6
const mysessionObject = {
       channel: "chai aur code",
       mentor : "Hitesh Chaudhary"
};

// Save an object to sessionStorage
sessionStorage.setItem("mysessionObject",JSON.stringify(mysessionObject));

// Retrieve and parse the object from sessionStorage
const ReterivedSessionObject = JSON.parse(sessionStorage.getItem("mysessionObjecct"));

console.log(ReterivedSessionStorage);

// Task 8
/*const mysessionObjectt = { channel: "CHAI AUR CODE", 
                             subscribers: "1M",
                            Educator : "Hitesh Chaudhary"

 };

 sessionStorage.mysessionObjectt.setItem('mysessionObjectt',JSON.stringify(mysessionObjectt));
console.log(sessionStorage.getItem("mysessionObjectt"));

sessionStorage.removeItem("mysessionObjectt");
console.log(sessionStorage.getItem("mysessionObjectt"));
*/
// Task 9
function saveToBothStorages(key,value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);
    console.log("localStorage", localStorage.getItem(key));
    console.log("sessionStorage",sessionStorage.getItem(key));
}
saveToBothStorages("myKey","myValue");
// Output:
// localStorage: myValue
// sessionStorage: myValue

// Task 10
function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("localStorage",localStorage.length);
    console.log("sessionStorage",sessionStorage.length);
}
clearAllStorages();
// Output:
// localStorage: 0
// sessionStorage: 0
