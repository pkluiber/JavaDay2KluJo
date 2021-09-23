function calcage(currentYears, birthyear) {
    return currentYears - birthyear
}

var age = calcage(2021, 1992);

console.log(age);


function calcage1(birthyear) {
    var date = new Date();
    var year = date.getFullYear();
    return year - birthyear
}

var age1 = calcage1(1993);

console.log(age1)