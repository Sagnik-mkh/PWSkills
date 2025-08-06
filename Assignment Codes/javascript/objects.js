let students = {
    name: "Person 1",
    age: 22
}

let teacher = {
    subject: "Maths"
}
Object.preventExtensions(students);
let extensibleStatus = Object.isExtensible(students);

Object.seal(teacher);
let sealedStatus = Object.isSealed(teacher);

console.log("Extensible :", extensibleStatus, "\nSeal :", sealedStatus);