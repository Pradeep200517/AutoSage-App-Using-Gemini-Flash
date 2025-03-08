
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("script.js loaded!");

//     // Redirect to login.html when clicking the Login button in index.html
//     document.getElementById("loginBtn")?.addEventListener("click", function () {
//         console.log("Login button clicked! Redirecting to login.html");
//         window.location.href = "login.html";
//     });

//     // Redirect to login.html when clicking inside the Search box in index.html
//     document.getElementById("searchBox")?.addEventListener("click", function () {
//         console.log("Search box clicked! Redirecting to login.html");
//         window.location.href = "login.html";
//     });

//     // Handle login
//     function login() {
//         let username = document.getElementById("username").value.trim();
//         let password = document.getElementById("password").value.trim();

//         if (!username || !password) {
//             alert("Please enter both username and password!");
//             return;
//         }

//         // Simulating user authentication (Replace this with an actual backend check)
//         let storedUser = localStorage.getItem("username");
//         if (storedUser && storedUser === username) {
//             alert("Logged in successfully!");
//             window.location.href = "selection.html";
//         } else {
//             alert("Invalid credentials! Please Sign Up first.");
//         }
//     }

//     // Handle Sign-Up
//     function signIn() {
//         let username = document.getElementById("signInUsername").value.trim();
//         let password = document.getElementById("signInPassword").value.trim();

//         if (!username || !password) {
//             alert("Please enter a username and password!");
//             return;
//         }

//         // Store user credentials (Ideally, this should be handled by a backend)
//         localStorage.setItem("username", username);
//         alert("Signed up successfully! Now login.");
//         window.location.href = "login.html";
//     }

//     // Assign the functions globally
//     window.login = login;
//     window.signIn = signIn;
// });
document.addEventListener("DOMContentLoaded", function () {
    console.log("script.js loaded!");

    // Redirect to login.html when clicking the Login button in index.html
    document.getElementById("loginBtn")?.addEventListener("click", function () {
        console.log("Login button clicked! Redirecting to login.html");
        window.location.href = "login.html";
    });

    // Redirect to login.html when clicking inside the Search box in index.html
    document.getElementById("searchBox")?.addEventListener("click", function () {
        console.log("Search box clicked! Redirecting to login.html");
        window.location.href = "login.html";
    });

    // Handle login
    function login() {
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (!username || !password) {
            alert("Please enter both username and password!");
            return;
        }

        // Simulating user authentication (Replace this with an actual backend check)
        let storedUser = localStorage.getItem("username");
        if (storedUser && storedUser === username) {
            localStorage.setItem("loggedInUser", username); // Store logged-in user
            alert("Logged in successfully!");
            window.location.href = "selection.html";
        } else {
            alert("Invalid credentials! Please Sign Up first.");
        }
    }

    // Handle Sign-Up
    function signIn() {
        let username = document.getElementById("signInUsername").value.trim();
        let password = document.getElementById("signInPassword").value.trim();

        if (!username || !password) {
            alert("Please enter a username and password!");
            return;
        }

        // Store user credentials (Ideally, this should be handled by a backend)
        localStorage.setItem("username", username);
        alert("Signed up successfully! Now login.");
        window.location.href = "login.html";
    }

    // Display logged-in username in selection.html
    function displayUsername() {
        let loggedInUser = localStorage.getItem("loggedInUser") || "Guest";
        let usernameDisplay = document.getElementById("usernameDisplay");
        if (usernameDisplay) {
            usernameDisplay.textContent = `Logged in as: ${loggedInUser}`;
        }
    }

    // Call displayUsername when selection.html loads
    if (window.location.pathname.includes("selection.html")) {
        displayUsername();
    }

    // Assign the functions globally
    window.login = login;
    window.signIn = signIn;
});
// Display logged-in username in selection.html
function displayUsername() {
    let loggedInUser = localStorage.getItem("loggedInUser") || "Guest";
    let usernameDisplay = document.getElementById("usernameDisplay");
    let profileStatus = document.getElementById("profileStatus"); // Assuming this is the "Not logged in" section

    if (usernameDisplay) {
        usernameDisplay.textContent = `Logged in as: ${loggedInUser}`;
    }

    if (profileStatus) {
        if (loggedInUser !== "Guest") {
            profileStatus.textContent = loggedInUser; // Show username
        } else {
            profileStatus.textContent = "Not logged in"; // Default text
        }
    }
}

// Call displayUsername when selection.html loads
if (window.location.pathname.includes("selection.html")) {
    displayUsername();
}
