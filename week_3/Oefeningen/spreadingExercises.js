// Oefening 1
function copyArray(arr){
    return [...arr];
}

const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);
// console.log(copiedArray);

// Oefening 2
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Oefening 3
function addProperty(obj, key, value){
    return {...obj, [key]: value};
}

const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
// console.log(updatedObject); // Output: { name: 'Alice', age: 25 }

// Oefening 4
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
// console.log(mergedObject);

// Oefening 5
function add(...rest) {
    return rest.reduce((prev, cur) => prev + cur, 0);
}
// console.log(add(1, 5, 6), add(1, 5, 6, 5, 1561, 2, 5));

//Oefening 6
function combineAllArrays(...rest) {
    return rest.reduce((prev, cur) => [...prev, ...cur]);
}
// console.log(combineAllArrays([10, 12], [5, 4])); // [10, 12, 5, 4]
// console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6])); // [10, 12, 5, 4, 6, 6]

// Oefening 7
function addOnlyNumbers(...rest) {
    return rest.reduce((prev, cur) => {
        if(typeof cur === "number"){
            return prev + cur;
        }
        return prev + 0;
    })
}
console.log(addOnlyNumbers(1, 5, 6, "cat", "dog", 3));  