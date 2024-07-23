Activity 1: Selecting and Manipulating Elements
Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("task1").textContent = "New text content";

Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".task2").style.backgroundColor = "green";

Activity 2: Creating and Appending Elements
Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.textContent = "New list item 3";
document.querySelector("ul").appendChild(newLi);

Activity 3: Removing Elements
Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.getElementById("task5");
elementToRemove.parentNode.removeChild(elementToRemove);

Task 6: Remove the last child of a specific HTML element.
const parentElement = document.getElementById("task5");
parentElement.removeChild(parentElement.lastChild);

Activity 4: Modifying Attributes and Classes
Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.querySelector("img").setAttribute("src", "newImage.jpg");

Task 8: Add and remove a CSS class to/from an HTML element.
const element = document.getElementById("task8");
element.classList.add("newClass");
element.classList.remove("oldClass");

Activity 5: Event Handling
Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("task9Button").addEventListener("click", function () {
 document.getElementById("task9Text").textContent = "Text has been changed!";
});
Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("task10").addEventListener("mouseover", function () {
  this.style.borderColor = "red";
});
