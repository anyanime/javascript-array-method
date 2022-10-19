//declare array variables to be used
const inventors = [
    { fname: 'Benjamin', lname: 'Graham', dob: 1894, death: 1976},
    { fname: 'John', lname: 'Templeton', dob: 1912, death: 2008},
    { fname: 'Jesse', lname: 'Iwemore', dob: 1999, death: 2022},
    { fname: 'John', lname: 'Neff', dob: 1931, death: 2019},
    { fname: 'George', lname: 'Soros', dob: 1930, death: 2022},
    { fname: 'Thomas', lname: 'Price', dob: 1985, death: 2022},
    { fname: 'John', lname: 'Bogle', dob: 1929, death: 2019},
    { fname: 'Peter', lname: 'Lynch', dob: 1944, death: 2022}
]

const people = [ 'Ime, Daniel', 'Bogle, John', 'Lynch, Peter', 'Gate, Bill', 'Bush, George', 'Obi, Mikel', 'Iwobi, Alex', 'Lionel, Messi', 'Christiano, Ronaldo', 'Ngolo, Kante', 'Taylor, Navas', 'Oliver, Kahn', 'Jay, Okocha', 'Didier, Drogba', 'David, Beckam', 'John, Titus', 'Benson, Anyanime', 'Imoh, Ikpe', 'Benson, Inem', 'Graham, Benjamin']

const vehicles = [ 'car', 'truck', 'bike', 'truck', 'car', 'bike', 'car', 'truck', 'bike', 'car', 'train', 'bike', 'train'];

//the filter method
//getting inventors born around 1900
const nineteen = inventors.filter(inventor => (inventor.dob >= 1900 && inventor.dob < 2000));

console.table(nineteen);

//the map method
//get the first and last name of inventors

const fullName = inventors.map(inventor => `${inventor.fname} ${inventor.lname}`);

console.table(fullName);

//sort method
//get the inventors by birthdate, oldest to youngest
const birthdate = inventors.sort((a, b) => a.dob > b.dob ? 1 : -1);

console.table(birthdate);

//reduce method
//getting the sum total the inventors years
const sumOfYears = inventors.reduce((sum, inventor) => {
    return sum + (inventor.death - inventor.dob);
}, 0);

console.log(sumOfYears);

//sort inventors by years lived
const oldest = inventors.sort((a, b) => {
    const last = a.death - a.dob;
    const next = b.death - b.dob;
  return  last > next ? -1 : 1;
})
console.table(oldest);

//sort exercise
//sort the variable of people alphabetically

const alpha = people.sort((first, next) => {
    const [aNext, aFirst] = first.split(', ');
    const [bNext, bFirst] = next.split(', ');
    return aNext > bNext ? 1 : -1;
});

console.log(alpha);

//reduce method on variable 'vehicle'
const motor = vehicles.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(motor)