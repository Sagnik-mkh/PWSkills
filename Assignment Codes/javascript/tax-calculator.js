//function for fixed tax portion slab wise
function calcFixedTax(salary) {
    //storing the slabs value
    let slabs = [0, 5, 10, 15, 20, 25, 30], tempSalary = salary, fixedTax = 0, counter = 0;
    while (tempSalary > 250000 && counter < slabs.length) {
        let currTax = 250000 * slabs[counter] / 100;
        fixedTax += currTax; counter++; tempSalary -= 250000;
    }
    return {
        currSlab: Math.min(counter, slabs.length - 1),
        taxTillNow: fixedTax,
        currTaxPct: slabs[Math.min(counter, slabs.length - 1)]
    };
}

//Calculate the final tax
function taxCalculator(salary) {
    if (salary <= 700000) {
        return 0;
    }
    let obj = calcFixedTax(salary);
    let tax = obj.taxTillNow + (salary - 250000 * obj.currSlab) * (obj.currTaxPct / 100);
    return tax;
}

let tax = taxCalculator(2000000);

console.log("Calculated Tax", tax);