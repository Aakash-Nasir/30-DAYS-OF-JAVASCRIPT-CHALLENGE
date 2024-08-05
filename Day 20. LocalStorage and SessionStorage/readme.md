
## Feature Request:

1. **LocalStorage Script:** Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.

function localStorageScript() {
  // Save item
  localStorage.setItem("localKey", "localValue");

  // Retrieve item
  const localItem = localStorage.getItem("localKey");
  console.log("Retrieved from localStorage:", localItem);

  // Remove item
  localStorage.removeItem("localKey");
  console.log(
    "After removal from localStorage:",
    localStorage.getItem("localKey")
  );
}

localStorageScript();
// Output:
// Retrieved from localStorage: localValue
// After removal from localStorage: null


2. **SessionStorage Script:** Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.

function sessionStorageScript() {
  // Save item
  sessionStorage.setItem("sessionKey", "sessionValue");

  // Retrieve item
  const sessionItem = sessionStorage.getItem("sessionKey");
  console.log("Retrieved from sessionStorage:", sessionItem);

  // Remove item
  sessionStorage.removeItem("sessionKey");
  console.log(
    "After removal from sessionStorage:",
    sessionStorage.getItem("sessionKey")
  );
}

sessionStorageScript();

localStorageScript();
// Output:
// Retrieved from sessionStorage: sessionValue
// After removal from sessionStorage: null


3. **Storage Comparison Script:** Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.

function storageComparisonScript() {
  // Save item to both storages
  localStorage.setItem("compareKey", "compareValue");
  sessionStorage.setItem("compareKey", "compareValue");

  // Retrieve items
  const localItem = localStorage.getItem("compareKey");
  const sessionItem = sessionStorage.getItem("compareKey");
  console.log("Retrieved from localStorage:", localItem);
  console.log("Retrieved from sessionStorage:", sessionItem);

  // Compare results
  console.log("Comparison result:", localItem === sessionItem);
}

storageComparisonScript();
// Output:
// Retrieved from localStorage: compareValue
// Retrieved from sessionStorage: compareValue
// Comparison result: true
```

4. **Clear Storage Script:** Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.


function clearStorageScript() {
  // Clear both storages
  localStorage.clear();
  sessionStorage.clear();

  // Verify operation
  console.log("localStorage:", localStorage.length); // Output: 0
  console.log("sessionStorage:", sessionStorage.length); // Output: 0
}

clearStorageScript();
// Output:
// localStorage: 0
// sessionStorage: 0
```

## Achievements:

By the end of these activities, students will:

- Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
- Save, retrieve, and remove data from both localStorage and sessionStorage.
- Implement form data storage using localStorage and sessionStorage.
- Compare and contrast the use cases for localStorage and sessionStorage.
