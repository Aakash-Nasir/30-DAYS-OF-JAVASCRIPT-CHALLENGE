// Task 1
function _parent() {
    var house = 'WhiteHouse';
   
    function _child() {   
        var car = 'Tesla'; 
        console.log('I have:', house, car);
    }
   
    return _child;
}
var legacy = _parent();
console.log(typeof(legacy)); //legacy is of type function
legacy(); // I have: WhiteHouse Tesla

// Task 1 another example
function outerFunction() {
    var outerVar = "I am from outer function";

    return function innerFunction() {
        console.log(outerVar);
        
    };
}
const inner = outerFunction();
console.log(inner); // inner: [Function: innerFunction]
inner(); // I am from outer function

// Task 1 another example
function grandParent() {
    var house = 'GreenHouse';
   
    function parent() {   
        var car = 'Tesla';
        house = 'YellowHouse';
        
        function child() {   
            var scooter = 'Vespa';
            console.log('I have:', house, car, scooter);
        }
        
        return child;
    }
   
    return parent;
}

var legacyGenX = grandParent();
console.log(typeof(legacyGenX)); // legacyGenX is of type function

var legacyGenY = legacyGenX();
console.log(typeof(legacyGenY)); // legacyGenY is of type function

legacyGenY(); // I have: YellowHouse Tesla Vespa

// // Task 2
function createCounter() {
    let count = 0;
  
    return {
      increment() {
        count++;
      },
      getCount() {
        return count;
      },
    };
  }
  
  const counter = createCounter();
  console.log(counter); // counter: { increment: [Function: increment], getCount: [Function: getCount] }
  counter.increment(); // count: 1
  counter.increment(); // count: 2
  console.log(counter.getCount()); // 2

  // TASK 3
  function createUniqueIdGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    };
  }
  const generateId = createUniqueIdGenerator();
  console.log(generateId);
  console.log(generateId);
  console.log(generateId);

  // Task 4
  function greetUser(name) {
    return function() {
        console.log(`Hello ,${name}`);
    };
  }

  const greetAakash = greetUser("Aakash");
  greetAakash();

  // Task 5
  let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

functions.forEach((func) => func());

// Task 6
const itemManager = (function () {
    let items = [];
  
    return {
      addItem(item) {
        items.push(item);
      },
      removeItem(item) {
        items = items.filter((i) => i !== item);
      },
      listItems() {
        return items;
      },
    };
  })();
  
  console.log(itemManager);
  /*
  {
    addItem: [Function: addItem],
    removeItem: [Function: removeItem],
    listItems: [Function: listItems]
  }
  */
  console.log(itemManager.listItems()); // []
  itemManager.addItem("Apple");
  itemManager.addItem("Banana");
  itemManager.addItem("Mango");
  console.log(itemManager.listItems()); // [ 'Apple', 'Banana', 'Mango' ]
  itemManager.removeItem("Apple");
  console.log(itemManager.listItems()); // [ 'Banana', 'Mango' ]

  // Task 7
//   document.body.innerHTML = '<button id="myButton">Click me</button>';

//   function attachClickListener() {
//     let clickCount = 0;

//     document.getElementById("myButton").addEventListener("click",function () {
//         clickCount++;
//         console.log(`Button clicked ${clickCount} times`);
//     });
//   }

//   attachClickListener();

  // Task 8
  function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = args.toString();
      if (cache[key]) {
        return cache[key];
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  const factorial = memoize(function (n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  });
  
  console.log(factorial(5)); // 120
  console.log(factorial(6)); // 720

  // Task 9
  function add(a) {
    return function(b) {
        return function(c){
            return a+b+c;
        };
    };
  }
  console.log(add(11)(22)(33));

  // Task 10

  function multiply(a) {
    return function(b){
        return a*b;

    };
  }

  console.log(multiply(11)(12));