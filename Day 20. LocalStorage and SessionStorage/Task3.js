// Task 3
document.addEventListener("DOMContentLoaded",() => {
    const userForm = document.getElementById("userForm");
    const displayData = document.getElementById("displayData");

    userForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const userData = {name,email};
        
        //Add validation for email
        if(!validateEmail(email)) {
            alert("Invalid email address");
            return;
        }
        localStorage.setItem("userData",JSON.stringify(userData));
        displayUserData();

    });
function displayUserData() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if(userData) {
        displayData.innerHTML = `Name : ${userData.name}, Email: ${userData.email}`;

    } else {
         displayData.innerHTML = "No User data Found";
    }
}
// ADD Function to validate email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
         
}
displayUserData();
});