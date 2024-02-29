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
//2a
let lengths = names.map(function(element) {
    return element.length;
});
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum / [names.length]);
//3 array.length - 1 to access the last element
//4  = arr[0] to access the first element 
//5
const names2 = ['Kelly', 'Sam', 'Kate'];
