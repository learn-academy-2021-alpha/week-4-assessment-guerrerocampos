// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function








// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

describe('when shuffledArray is called', () => {
    it('return array with first element removed, and array shuffled', () => {
        let array = ["purple", "blue", "green", "yellow", "pink"]
        let newArray = shuffledArray(array)
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        expect(newArray.length).toEqual(4)
    })
    it('return array with first element removed, and array shuffled', () => {
        let array2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        let newArray2 = shuffledArray(array2)
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(newArray2.length).toEqual(4)
    })
// }) 
// b) Create the function that makes the test pass.
// first i can call the shift method to remove the first item from the array
// then i gotta shuffle the array math.random?
// create a temporary array to hold
const shuffledArray = (array) => {
    array.shift();
    for (let i = array.length - 1; i > 0; i--) {
        let randomizer = Math.floor(Math.random() * (i + 1));
        let randomizedArray = array[i];
        array[i] = array[randomizer]
        array[randomizer] = randomizedArray;
    }
    return array;
}









// // --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// // a) Create a test with expect statements for each of the variables provided.

// var cubeAndSum1 = [2, 3, 4]

// var cubeAndSum2 = [0, 5, 10]



describe('when numSums is called', () => {
    it('return sum of all numbers cubed', () => {
        let array = [2, 3, 4]
        let newArray = numSums(array)
        // Expected output: 99
        expect(newArray).toEqual(99)
    })
    it('return sum of all numbers cubed', () => {
        let array2 = [0, 5, 10]
        let newArray2 = numSums(array2)
        // Expected output: 1125
        expect(newArray2).toEqual(1125)
    })
}) 
// b) Create the function that makes the test pass.
// map through array and cube the numbers
// add the cubed numbers


const numSums = (array) => {
    cubedNums = array.map(value => {
        return Math.pow(value, 3);
    })
    let addingNums = 0;
    cubedNums.forEach(value => {
        addingNums += value;
    });
    return addingNums;
}









// // --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, -59, 8, 24]
// // Expected output: [-59, 109]

describe('when minMax is called', () => {
    it('return the least and the greates number in the array in order', () => {
        let array = [3, 56, 90, -8, 0, 23, 6]
        let newArray = minMax(array)
        // Expected output: [-8, 90]
        expect(newArray).toEqual([-8, 90])
    })
    it('return the least and the greates number in the array in order', () => {
        let array2 = [109, 5, 9, -59, 8, 2]
        let newArray2 = minMax(array2)
        // Expected output: [-59, 109]
        expect(newArray2).toEqual([-59, 109])
    })
}) 
// b) Create the function that makes the test pass.
// create temporary variables to hol the min and the max values
// iterate through array and comare to see if value is greater thatn or less that previous one
// replace accordingly
// return whatever values are left in the min and max variables as an array
const minMax = (array) => {
    let min = array[0];
    let max = array[0];
    array.forEach(value => {
        if (value < min) {
            min = value;
        } else if (value > max) {
            max = value;
        }
    })
    return [min, max];
}


// fmf















// // --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// var testString1 = "albatross"
// // Expected output: "aLbAtRoSs"
// var testString2 = "jabberwocky"
// // Expected output: "jAbBeRwOcKy"



describe('when everyOther is called', () => {
    it('you should get a return with every other letter capitalized', () => {
        let string = "albatross"
        let newString = everyOther(string)
        // Expected output: "aLbAtRoSs"
        expect(newString).toEqual("aLbAtRoSs")
    })
    it('you should get a return with every other letter capitalized', () => {
        let string2 = "jabberwocky"
        let newString2 = everyOther(string2)
        // Expected output: "jAbBeRwOcKy"
        expect(newString2).toEqual("jAbBeRwOcKy")
    })
}) 
// b) Create the function that makes the test pass.
// first i gotta split the string into an array
// iterate through the array an dfind the index of each value
// if the value is odd, .toUpperCase
// join the array back into a string

const everyOther = (strr) => {
    let splitStrr = strr.split("");
    everyOtherValue = splitStrr.map((value, index) => {
        if (index % 2 != 0) {
            return value.toUpperCase();
        } else {
            return value;
        }
    })
    return everyOtherValue.join('');
}
















// // --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

// var testArray1 = [3, 7, 10, 5, 4, 3, 3]
// var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


test('when noDuplicates is called, you should get a new array with no duplicates', () => {
    let testArray1 = [3, 7, 10, 5, 4, 3, 3]
    let testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
// b) Create the function that makes the test pass.

const noDuplicates = (array1, array2) => {
    noDoubles = [];
    joinedArr = array1.concat(array2);
    joinedArr.forEach(value => {
        if (!noDoubles.includes(value)) {
            noDoubles.push(value);
        }
    })
    return noDoubles;
}

// can't figure out why push isn't pushed the last value that's being input if it recognizes it in the temporary array?