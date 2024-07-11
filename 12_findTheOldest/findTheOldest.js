function findAge(deathYear, birthYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear-birthYear;
}

const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, currentPerson) => {
        const currentPersonAge = findAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        const oldestPersonAge = findAge(oldest.yearOfDeath, oldest.yearOfBirth);

        return oldestPersonAge < currentPersonAge ? currentPerson: oldest;
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
