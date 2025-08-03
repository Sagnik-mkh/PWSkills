const curry = (func) => {
    const curried = (...args) => args.length >= func.length ? func(...args) : (...nextArg) => curried(...args, ...nextArg)

    return curried;
}

const add = (a, b) => a + b;

const curriedAdd = curry(add);

console.log(curriedAdd(4)(5));