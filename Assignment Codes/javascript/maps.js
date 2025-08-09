/**
 * Creating a map
 */
const maps = new Map(
    [["monitor", "gigabyte"],
    ["keyboard", "amkette"],
    ["mouse", "razer"]]
);
console.log(maps);

/**
 * Adding new value to existing map
 */
maps.set("cpu", "amd");
console.log(maps);

/**
 * checking if a key exists in a map
 */
const ifExists = maps.has("cpu");
console.log(`cpu exists: ${ifExists}`);

/** 
 * retrieving a value associated with a key
 */
const value = maps.get("monitor");
console.log(`Value: ${value}`);

/**
 * Iterating through the key value pairs
 */
for (const ele of maps) {
    console.log(`Key: ${ele[0]}, Value: ${ele[1]}`);
}