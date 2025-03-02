// Task 1 - Business Dashboard – DOM Element Selection and Creation

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Selecting the dashboard container using getElementById and querySelector
    const dashboard = document.getElementById("dashboard");
    const dashboardAlt = document.querySelector("#dashboard");

    // Ensure the dashboard container exists to prevent errors
    if (!dashboard) return;

    function createMetricCard(title, id) {
        // Create a new div element for the metric card
        const card = document.createElement("div");

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

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

document.addEventListener("DOMContentLoaded", function () {
    // Ensure the script runs after the DOM has fully loaded
    setTimeout(() => {
        // Select all metric cards
        const metricCards = document.querySelectorAll(".metric-card");

        // Check if metric cards exist
        if (metricCards.length === 0) {
            console.error("No metric cards found!");
            return;
        }

        // Convert NodeList to an array and update each card
        Array.from(metricCards).forEach(card => {
            card.innerHTML += " - Updated"; // Append "- Updated" to each metric card
            card.style.backgroundColor = "#f0f0f0"; // Change background color
        });

        console.log("Task 2: Metric cards updated successfully.");
    }, 100); // Small delay to ensure elements are created first
});

// Task 3 - Dynamic Inventory Management – Adding and Removing Items

// Function to dynamically add an inventory item
function addInventoryItem(itemName) {
    // Retrieve the inventory list container
    const inventoryList = document.getElementById("inventoryList");

    // Create a new list item element
    const newItem = document.createElement("li");

    // Apply the "product-item" class to the new element
    newItem.setAttribute("class", "product-item");

    // Set a data attribute with the item name for reference
    newItem.setAttribute("data-product", itemName);

    // Define the displayed text as the item name
    newItem.textContent = itemName;

    // Attach a click event listener for item removal
    newItem.addEventListener("click", function () {
        // Remove the selected item from the inventory list
        inventoryList.removeChild(newItem);

        // Log the item removal action
        console.log(`Item removed: ${itemName}`);
    });

    // Insert the new item into the inventory list
    inventoryList.appendChild(newItem);
}
