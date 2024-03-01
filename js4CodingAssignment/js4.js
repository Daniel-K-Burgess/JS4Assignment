//1a Declare the array, assign the elements to variables, subtract
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);
//1b Add another element and go again
ages.push(39);
console.log(ages[ages.length - 1] - ages[0]);
//1c Using the reduce method to add up the number in the array
//not sure if this counts as a loop
let average = ages.reduce(function (accumulator, currentValue) {
    return (accumulator + currentValue)
    // then divide by the number of items in the array
}) / ages.length;
console.log(average);
//2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck'];
//2a use map method to find number of characters in each element
let lengths = names.map(function(element) {
    return element.length;
});
//add them up
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
//divide the sum by the number of characters
console.log(sum / [names.length]);
//2b Use the join method
let allNames = names.join(" ");
console.log(allNames);

//3 array.length - 1 to access the last element
//4  = arr[0] to access the first element 
//5 I used map method to make a new array of the lengths of the elements
const names2 = ['Kelly', 'Sam', 'Kate'];
const names2Lengths = names2.map(function(element) {
    return element.length;
});
//6 Sum of all the elements with reduce method
console.log(names2Lengths);
let sum2 = names2Lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum2);
//7 Use repeat method
function wordN(word, n) {
    console.log(word.repeat(n));
}
wordN("Hello", 3);
//8 Simple function to add two strings
function firstLast(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
firstLast("George", "Washington");
//9 Another reduce method to add up the elements of the array
const numbers = [20, 30, 51];
const sumArray = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
//function to find if that number is less than 100 and returns a boolian
function greaterThan() {
    if (sumArray > 100) {
        return true;
    } return false
}
console.log (greaterThan(sumArray));
//10 arrow function to find the average. I used the same array from Q 9
function calculateAverage(array) {
    const sum = array.reduce((acc, val) => acc + val);
    return (sum / array.length)
}
console.log(calculateAverage(numbers));
//11 Declare two arrays to compare
const numbersArray = [1, 2, 3];
const numbersArray2 = [1, 2, 2];
//This is a function that compares the results of the average function performed on each
function isAverageGreater(array1, array2) {
    if (calculateAverage(array1) > calculateAverage(array2)) {
        return true;
    } return false;
}
console.log(isAverageGreater(numbersArray, numbersArray2));
//12 function to find if both statements are true
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true
    } return false
}
console.log(willBuyDrink(false, 11.50));
//13 I made this to add together the sums of the elements of two arrays
function sumOfArray(array3) {
    const sum2 = array3.reduce((acc, val) => acc + val);
    return (sum2)
}
function sumOfBoth(array4, array5) {
    return (sumOfArray(array4) + sumOfArray(array5));
}
console.log(sumOfBoth(numbersArray, numbersArray2));