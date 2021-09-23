const calcage1 = (yearofbirth) => {
    var date = new Date();
    var year = date.getFullYear();
    return year - yearofbirth
}
var age1 = calcage1(1993);
console.log(age1)