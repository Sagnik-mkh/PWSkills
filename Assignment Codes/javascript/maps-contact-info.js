/**
 * Creating a contact info class to store the details of a person
 */
class ContactInfo {
    constructor(name, age, email, location) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.location = location;
    }
}

/**
 * function to reterive contact info from name
 */
function getContactByName(maps, name) {
    if (maps.has(name)) return maps.get(name);
    return `Contact of ${name} not found`;
}

/**
 * Initializing persons and contact info using class ContactInfo
 */
const person1 = new ContactInfo("Sagnik", 24, "xyz@gmail.com", "India");
const person2 = new ContactInfo("Rahul", 22, "abc@gmail.com", "India");

/**
 * Initializing a new map
 */
const personMap = new Map();
personMap.set(person1.name, person1);
personMap.set(person2.name, person2);

/**
 * Calling the function to get conatct info by name
 */
const getInfo = getContactByName(personMap, "Rahul");
console.log(getInfo);