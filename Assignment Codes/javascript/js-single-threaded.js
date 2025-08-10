/**
 * Creating a event loop blocking function
 */
function blockEventLoop() {
    console.log("Event Loop blocked");
    for (let i = 0; i < 10000000000; i++) { } // blocking time
    console.log("Event Loop released");
}

/**
 * Creating a function returning a promise
 */
function returnPromise() {
    return new Promise((resolve, reject) => {
        console.log("Processing Promise");
        setTimeout(() => {
            console.log("Promise Timer completed");
            resolve("Done");
        }, 2000);
    });
}

console.log("Starting...");
const myPromise = returnPromise();
myPromise.then(
    (value) => {
        console.log("Promise resolved with value:", value);
    },
    (value) => {
        console.log("Promise rejected with value:", value)
    }
);
setTimeout(() => {
    console.log("Completed Global Timer");
}, 2000);
blockEventLoop();
console.log("End of global code");