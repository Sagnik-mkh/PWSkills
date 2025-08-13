// Select the main submit button and the full list container
const submitBtn = document.querySelector('[data-submit-btn]');
const fullList = document.getElementById("list");

// Handles "mousedown" — sets a data attribute to indicate click state
function handleMouseDown(event, btn) {
    event.stopPropagation(); // Prevent event from bubbling up
    btn.setAttribute("data-on-click", ""); // Add attribute for styling or logic
}

// Handles "mouseup" — removes the click state
function handleMouseUp(event, btn) {
    event.stopPropagation();
    btn.removeAttribute("data-on-click");
}

// Add mouse events to submit button when hovered
submitBtn.addEventListener("mouseenter", () => {
    // Start listening for click press/release when mouse enters button
    submitBtn.addEventListener("mousedown", event => handleMouseDown(event, submitBtn));
    submitBtn.addEventListener("mouseup", event => handleMouseUp(event, submitBtn));
});

// Remove mouse events when leaving button
submitBtn.addEventListener("mouseleave", (event) => {
    // Remove listeners so they don't keep stacking
    submitBtn.removeEventListener("mousedown", event => handleMouseDown(event, submitBtn));
    submitBtn.removeEventListener("mouseup", event => handleMouseUp(event, submitBtn));
    // Ensure click state is cleared when leaving
    handleMouseUp(event, submitBtn);
});

// Handle submit button click — add new list item
submitBtn.addEventListener(`click`, (event) => {
    event.stopPropagation();
    // Get trimmed input value
    const newItemName = document.querySelector('[data-input-name]').value.trim();
    if (newItemName == "") {
        alert("Enter a valid value");
        return;
    }

    // Create new list item structure
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");

    // Set attributes and text
    li.setAttribute("data-list-item", "");
    span.textContent = newItemName;
    button.setAttribute("type", "button");
    button.setAttribute("data-item-remove-btn", "");
    button.textContent = "remove";

    // Assemble the new item
    div.append(span);
    div.appendChild(button);
    li.appendChild(div);
    fullList.appendChild(li); // Add to list
});

// Listen for mouseover on the list — for remove buttons
fullList.addEventListener(`mouseover`, (event) => {
    if (event.target.matches("[data-item-remove-btn]")) {
        const removeBtn = event.target;

        // Add click-press/release styling only while hovering this remove button
        removeBtn.addEventListener(`mousedown`, event => handleMouseDown(event, removeBtn));
        removeBtn.addEventListener(`mouseup`, event => handleMouseUp(event, removeBtn));

        // On leaving remove button — cleanup and reset state
        removeBtn.addEventListener(`mouseleave`, event => {
            removeBtn.removeEventListener(`mousedown`, event => handleMouseDown(event, removeBtn));
            removeBtn.removeEventListener(`mouseup`, event => handleMouseUp(event, removeBtn));
            handleMouseUp(event, removeBtn);
        }, { once: true }); // Runs only once for that hover session
    }
});

// Handle click on remove button — delete its parent list item
fullList.addEventListener(`click`, (event) => {
    if (event.target.matches("[data-item-remove-btn]")) {
        event.target.parentNode.parentElement.remove(); // Removes <li>
    }
});
