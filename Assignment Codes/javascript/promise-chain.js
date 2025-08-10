/**
 * Delay function returing a promise
 */
function delay() {
    return new Promise((resolve, reject) => {
        console.log("Promise created");
        let randNum = Math.floor(Math.random() * 100);
        console.log("Setting Time out");
        setTimeout(() => {
            console.log("Time out completed");
            if (randNum % 2 == 0) resolve(randNum);
            else reject(randNum);
        }, 2000);
    })
}

const myPromise = delay();

myPromise.then(
    (value) => {
        console.log("Resolved 1:", value);
        return new Promise((resolve, reject) => {
            console.log("Timer 1 Starting");
            setTimeout(() => {
                console.log("Timer 1 done")
                resolve(value / 2);
            }, 2000);
        });
    },
    (value) => {
        console.log("Rejected: 1", value);
        return new Promise((resolve, reject) => {
            console.log("Timer 1 Starting");
            setTimeout(() => {
                console.log("Timer 1 done")
                resolve(value * 2);
            }, 2000);
        });
    }
).then(
    (value) => {
        console.log("Resolved 2:", value);
        return new Promise((resolve, reject) => {
            console.log("Timer 2 Starting");
            setTimeout(() => {
                console.log("Timer 1 done")
                resolve(value / 2);
            }, 2000);
        });
    },
    (value) => {
        console.log("Rejected: 2", value);
        return new Promise((resolve, reject) => {
            console.log("Timer 2 Starting");
            setTimeout(() => {
                console.log("Timer 1 done")
                resolve(value * 2);
            }, 2000);
        });
    }
).then(
    (value) => {
        console.log("Resolved 3:", value);
        return new Promise((resolve, reject) => {
            console.log("Timer 3 Starting");
            setTimeout(() => {
                console.log("Timer 1 done")
                resolve(value / 2);
            }, 2000);
        });
    },
    (value) => {
        console.log("Rejected: 3", value);
        return new Promise((resolve, reject) => {
            console.log("Timer 3 Starting");
            setTimeout(() => {
                console.log("Timer 1 done")
                resolve(value * 2);
            }, 2000);
        });
    }
);