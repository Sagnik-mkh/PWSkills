/**
 * selecting the button
 */
const myBtn = document.getElementById("btn");

/**
 * Adding event listener to display alert
 */
myBtn.addEventListener(`click`, function myAlert(event) {
    event.stopPropagation();
    alert("Button is clicked");
});