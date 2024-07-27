// Task 1
const resolvePromise = new Promise( (resolve) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    },2000);
});
resolvePromise.then((messege)=> {
    console.log(messege);
})

// Task 2

const rejectPromise = new Promise((_,reject) => {
    setTimeout(()=> {
        reject("Promise rejected after 2 seconds");
    },2000);
});
    rejectPromise.catch((error) => {
        console.log(error); 
    });

    // Task 3
    const fetchData = (data,delay) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            },delay);
        });
    };
//  Chaining the promise
fetchData("Fetching data from server 1",1000)
.then((messege) => {
    console.log(messege);
    return fetchData("Fetching data from server 2",2000);
})
.then((messege) => {
    console.log(messege);
    return fetchData("Fetching data from server 3",1500)
})
.then((messege) => {
    console.log(messege);
})

// Task 4
const asyncResolve = async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved value from async function");
      }, 2000);
    });
  
    const result = await promise;
    console.log(result); // Resolved value from async function
  };
  
  asyncResolve();

// Task 5

const asyncReject = async() => {
    const promise = new Promise((_,reject) => {
        setTimeout(() => {
          reject("Rejected value from async function");
        },2000);
    });

    try{
        const result = await promise;
        console.log(result);
    } catch(error) {
        console.log(error); // rejected value from async fncn
    }
        
};
asyncReject();

// Task 6
fetch("https://jsonplaceholder.typicode.com/posts")
.then((responnse) => responnse.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error fetching data" ,error);
});

/*
[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ]
*/

// Task 7

const fetchDataAsync = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error("Error fetching data", error);
    }
};
fetchDataAsync();
/*
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
*/

// Task 8
const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 1000, "First promise")
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 2000, "Second promise")
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(resolve, 3000, "Third promise")
  );
  
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("All promises resolved:", values);
  });
  
  // Task 9
  Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log("First promise resolved:", value);
  });