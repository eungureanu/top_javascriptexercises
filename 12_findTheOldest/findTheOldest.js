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

console.log(findTheOldest([
    {
      name: "Jane",//29
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Carly",//5
        yearOfBirth: 2018,
    },
    {
      name: "Victor",//29
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
      name: "Steve",//28
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray", //49
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
  ]));


/* function that changes the original array into an array with ages only and returns the index of the highest age
const getAges = function(ageList) {
    let ages = ageList.map(function(person) {
        return person.yearOfDeath-person.yearOfBirth;
        });
    console.log(ages);
    console.log("The highest age is " + Math.max(...ages));
    let index = ages.indexOf(Math.max(...ages));
    console.log("The index of the object with this age is " + ages.indexOf(Math.max(...ages)));
    return ages.indexOf(Math.max(...ages));
};
*/

// Do not edit below this line
module.exports = findTheOldest;
