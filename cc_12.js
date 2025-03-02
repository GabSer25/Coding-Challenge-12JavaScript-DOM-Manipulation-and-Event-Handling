// Task 1 - Business Dashboard – DOM Element Selection and Creation

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Selecting the dashboard container using getElementById
    var dashboard = document.getElementById("dashboard");

    // Ensure the dashboard container exists to prevent errors
    if (!dashboard) return;

    function createMetricCard(title, id) {
        // Create a new div element for the metric card
        var card = document.createElement("div");

        // Add a CSS class for styling
        card.classList.add("metric-card");

        // Set a unique ID for the card
        card.setAttribute("id", id);

        // Populate the card with a title and a placeholder value
        card.innerHTML = `<h3>${title}</h3><p>$0</p>`;

        // Append the newly created metric card to the dashboard container
        dashboard.appendChild(card);
    }

    // Create and append metric cards for the dashboard
    createMetricCard("Revenue", "revenueCard");  // Adds a Revenue card
    createMetricCard("Profit", "profitCard");    // Adds a Profit card
    createMetricCard("Expenses", "expensesCard"); // Adds an Expenses card
});

