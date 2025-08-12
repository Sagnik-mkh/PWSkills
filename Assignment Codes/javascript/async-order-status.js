/**
 * Order status display using async await
 */

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const end = performance.now();
            resolve("User data acquired");
        }, 1000);
    });
}

function fetchOrderDetails() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Order details acquired");
        }, 2000);
    });
}

function fetchPaymentStatus() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Order Completed");
        }, 3000);
    })
}

async function myOrder() {
    try {
        const getUserData = await fetchUserData();
        console.log(getUserData);

        const getOrderDetails = await fetchOrderDetails();
        console.log(getOrderDetails);

        const getPaymentStatus = await fetchPaymentStatus();
        console.log(getPaymentStatus);
    } catch (error) {
        console.log(error);
    }
}

myOrder();