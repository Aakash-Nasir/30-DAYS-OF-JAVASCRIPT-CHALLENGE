//Task
var button = document.getElementById("task1");
var para = document.getElementsByClassName("para")
button.addEventListener("click" , () => {
    para[0].textContent = "Click here"
      
    button.addEventListener("dblclick" , function () {
        para[0].textContent = "Clicked Once Successfully";
    })
    para[0].textContent = "clicked twice successfully"
})

// Task 2
//   // Select the image element
const img = document.getElementById('myImage');
// Add a dblclick event listener
img.addEventListener('dblclick', function() {
    // Toggle the visibility
    if (img.style.display === 'none') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});

// Task 3 
const bgChanger = document.getElementsByClassName("bgChanger")
bgChanger[0].addEventListener("mouseover" , () =>{
bgChanger[0].style.backgroundColor = "green"

// Task 4
bgChanger[0].addEventListener("mouseout" , () => {
    bgChanger[0].style.backgroundColor = ""
})

})

// Task 5
var keyEvent = document.getElementById("keyEvent")
keyEvent.addEventListener("keydown" ,(e) => {
    console.log(e.code);
})
// Task 6
keyEvent.addEventListener("keyup",(e) => {
para[0].textContent = e.key
})
// Task 7

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(form.firstElementChild.value)
})
// Task 8
const state = document.querySelector(".activity4 form > [name = state]");
state.addEventListener("change",(e) => {
    e.preventDefault()
    console.log(e.target);

    const span = document.querySelector(".activity4 form span");
    span.innerHTML = e.target.options[e.target.selectedIndex].text;
});

// // Task 9

// const qualificationList = document.querySelector(".activity > ul");
// qualificationList.addEventListener('click' , (event) => {

//     const li = event.target;
//     console.log(`You Clicked: ${li.innerText}`);
// });

// const addNewBtn = document.querySelector(".activity5  > button");
// addNewBtn.addEventListener("click", () => {


//     const li = document.createElement("li");
//     li.textContent = "9th HBSE";
//     qualificationList.appendChild(li);
// });
// qualificationList.addEventListener("mouseover",(event) => {
//     const li = event.target;
//     li.style.backgroundColor = '#e5ca4e';
// });

// qualificationList.addEventListener("mouseout", (event) => {
//     const li = event.target;
//     li.style.backgroundColor= "transparent";
// });

  // Select the list element
  const list = document.getElementById('list');

  // Add a click event listener to the list using event delegation
  list.addEventListener('click', function(event) {
      if (event.target && event.target.matches('.list-item')) {
          console.log('Clicked list item text content:', event.target.textContent);
      }
  });

  // Select the parent element
  const parent = document.getElementById('parent');

  // Add an event listener to the parent element
  parent.addEventListener('click', function(event) {
      // Check if the event target matches the desired child element
      if (event.target && event.target.matches('.child')) {
          // Handle the event
          alert('Clicked: ' + event.target.textContent);
      }
  });

  // Function to add a new child element
  function addChild() {
      const newChild = document.createElement('div');
      newChild.className = 'child';
      newChild.textContent = 'New Child';
      parent.appendChild(newChild);
  }

  // Select the button and add a click event listener to add new child elements
  document.getElementById('addChild').addEventListener('click', addChild);





















