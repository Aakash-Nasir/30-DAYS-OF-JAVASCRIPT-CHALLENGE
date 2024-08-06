// Task 7

    document.addEventListener("DOMContentLoaded", () => {
    const sessionForm = document.getElementById("sessionForm");
    const sessionDisplayData =
      document.getElementById("sessionDisplayData");

    sessionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("sessionName").value;
      const email = document.getElementById("sessionEmail").value;
      const userData = { name, email };

      // Add validation for email
      if (!validateEmail(email)) {
        alert("Invalid email address");
        return;
      }

      sessionStorage.setItem("sessionUserData", JSON.stringify(userData));
      displaySessionUserData();
    });

    function displaySessionUserData() {
      const userData = JSON.parse(
        sessionStorage.getItem("sessionUserData")
      );
      if (userData) {
        sessionDisplayData.innerHTML = `Name: ${userData.name}, Email: ${userData.email}`;
      } else {
        sessionDisplayData.innerHTML = "No user data found";
      }
    }

    // Add a function to validate email
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }

    displaySessionUserData();
  });
  