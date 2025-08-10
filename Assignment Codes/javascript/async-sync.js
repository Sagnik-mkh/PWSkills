/**
 * Code to show JavaScript is synchronous in nature
 */

/**
 * Function to block time during execution
 */
function blockingTime() {
    console.log("Time blocking started");
    for (let i = 0; i < 10000000000; i++) { };
    console.log("Time blocking ended");
}

console.log("Starting...");

blockingTime();

console.log("End...");

/**
 * Adding a set time out to show Asynchronous behaviour during run time
 */

console.log("Starting again...");

(function timeOut() {
    console.log("Starting Time out");
    setTimeout(() => console.log("Time out comepleted"), 2000);
})();

blockingTime();

console.log("End of Global code");