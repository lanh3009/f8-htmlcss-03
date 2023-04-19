function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

// Ví dụ khi sử dụng
var student = new Student("Long", "Bui");

console.log(student.firstName); // 'Long'
console.log(student.lastName); // 'Bui'
console.log(student.getFullName()); // 'Long Bui'

var date = new Date();
var year = date.getFullYear();
var hour = date.getHours();
var getNextYear = function () {
    var date = new Date();
    return date.getFullYear() + 1;
};
console.log(getNextYear());

function getRandomItem(array) {
    var mynumber = Math.floor(Math.random() * array.length);
    return array[mynumber];
}
var a = getRandomItem([1, 4, 70, 80, 90, 100]);
console.log(a);
