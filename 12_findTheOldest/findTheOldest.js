//assigning the original array to a new variable and operating map on that variable, so that the orig array remains untouched
const findTheOldest = function(ageList) {
    let newArray = ageList;
    let ages = newArray.map(function(person) {
        if (person.hasOwnProperty("yearOfDeath")) {
            return person.yearOfDeath-person.yearOfBirth;
        } else {
            let currentYear = new Date().getFullYear();
            return currentYear-person.yearOfBirth;
        }
    });
    //console.log(ages);
    // console.log("The highest age is " + Math.max(...ages));
    let index = ages.indexOf(Math.max(...ages));
    console.log("The index of the object with this age is " + ages.indexOf(Math.max(...ages)));
    console.log(ageList[ages.indexOf(Math.max(...ages))].name);
    return ageList[ages.indexOf(Math.max(...ages))];
};

/*
const findTheOldest = function (person) {
    let maxAge = 0;
    let index = 0;
    let age;
    for (i=0; i<person.length; i++) {
        if (person[i].hasOwnProperty("yearOfDeath")) {
            age = person[i].yearOfDeath-person[i].yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                index = i;
            }
        } else {
            let currentYear = new Date().getFullYear();
            age = currentYear-person[i].yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                index = i;
            }
        }
    }
    console.log(person[index].name);
    console.log(maxAge);
    return person[index];
}
*/
// Do not edit below this line
module.exports = findTheOldest;
