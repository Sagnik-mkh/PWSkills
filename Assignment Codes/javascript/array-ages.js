function arrayMedian(arr) {
    if (arr.length % 2 == 0) return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    return arr.length / 2;
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();

let obj = {
    min : ages[0],
    max: ages[ages.length - 1],
    median: arrayMedian(ages),
    average: ages.reduce((total, value) => {
        return total + value;
    }) / ages.length
}

console.log("min :", obj.min);
console.log("max :", obj.max);
console.log("median :", obj.median);
console.log("average :", obj.average);
console.log("range :", obj.max - obj.min);
console.log("compare :", Math.abs(obj.min - obj.average), Math.abs(obj.max - obj.average))