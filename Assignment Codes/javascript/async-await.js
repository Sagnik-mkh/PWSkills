/**
 * function returning a promise
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            success ? resolve("Data received") : reject("Error fetching data");
        }, 2000);
    });
}

//original call
// fetchData().then(console.log).catch(console.error);

//async-await call
async function getData() {
    try {
        const myData = await fetchData();
        console.log(myData);
    } catch (error) {
        console.log(error);
    }
}

getData();