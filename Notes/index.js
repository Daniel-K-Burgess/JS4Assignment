console.log('Six time sfive = ${5 * 6}');
//dollar sign performs the operation, executes
let createFullName = (firstName, lastName) => firstName + ' ' + lastName;
//is the same as
let createFullName = (firstName, lastName) => '${firstName} ${lastName}';
console.log(createFullName('Tom', 'Sawyer'));

let someFunction = (a, b) => {
    let result = '';
    for (leti = 0; i < b; i++) {
        result += a;
    }
    return result;
}