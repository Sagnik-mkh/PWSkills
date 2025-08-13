// Select the dropdown menu element by its data attribute
const dropDownList = document.querySelector("[data-drop-down]");

// Select the hamburger button
const btn = document.getElementById("btn");

// Select all clickable dropdown items
const listItems = document.querySelectorAll("[data-drop-down-item]");

// Function to open the dropdown menu
function dropDownOpen() {
    dropDownList.setAttribute("data-active", "active"); // Mark as active (for styling)
    dropDownList.setAttribute("data-drop-down", "open"); // Change state to "open"
}

// Function to close the dropdown menu
function dropDownClose() {
    dropDownList.setAttribute("data-active", "inactive"); // Mark as inactive
    dropDownList.setAttribute("data-drop-down", "closed"); // Change state to "closed"
}

// Helper function: check if dropdown is currently open
function isDropDownOpen() {
    return dropDownList.getAttribute("data-drop-down") === "open";
}

// When mouse enters the button, open dropdown if it’s closed
btn.addEventListener(`mouseover`, (event) => {
    if (!isDropDownOpen()) {
        dropDownOpen();
        btn.style.backgroundColor = "tomato";
    }
});

// When mouse leaves EITHER the button or the dropdown menu
[btn, dropDownList].forEach(element => {
    element.addEventListener(`mouseleave`, (event) => {
        const nextPointer = event.relatedTarget; // The element mouse is moving towards

        // Close only if mouse is not going to the button or dropdown menu
        if (!dropDownList.contains(nextPointer) && !btn.contains(nextPointer)) {
            dropDownClose();
            btn.style.backgroundColor = "dodgerblue";
        }
    });
});

// Add mouse click effects for each dropdown item
listItems.forEach(element => {

    // On mouse press down: mark item as clicked
    element.addEventListener(`mousedown`, (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to parent elements
        element.setAttribute("data-on-click", ""); // Add visual or functional marker
    });

    // On mouse release: remove the clicked marker
    element.addEventListener(`mouseup`, (event) => {
        event.stopPropagation();
        element.removeAttribute("data-on-click");
    });
});
