document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        // Display the loader
        const loader = document.createElement("div");
        loader.className = "loader";
        loader.innerHTML = `
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
        `;
        document.body.innerHTML = ""; // Clear the existing content
        document.body.appendChild(loader);

        // Redirect after 3 seconds
        setTimeout(() => {
            window.location.href = "admin-dashboard.html";
        }, 3000);
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
