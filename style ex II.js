function calcage(currentYear, yearofbirth) {
    return currentYear - yearofbirth
}
var age = calcage(2021, 1992);
console.log(age)

function calcage1(yearofbirth) {
    var date = new Date();
    var year = date.getFullYear();
    return year - yearofbirth
}
var age1 = calcage1(1993);
console.log(age1)
document.write(age)