const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

// entrepreneurs entre 1970 et 1979 //
let result = entrepreneurs.filter(entrepreneur => (entrepreneur.year >= 1970 && entrepreneur.year < 1980));
console.log(result);

// noms et prénoms des entrepreneurs dans un array //
console.log('Les noms et prénoms :');
let name = [];
for (let index in entrepreneurs) {
    name.push(entrepreneurs[index].first + " " + entrepreneurs[index].last);
}
console.log(name);

// âge des entrepreneurs en 2019 //
console.log('Age des inventeurs');
for (let index2 in entrepreneurs) {
console.log(2019-entrepreneurs[index2].year);
}

// tri des entrepreneurs par ordre alphabétique //
console.log('Tri par ordre alphabétique:');
console.log(entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0)));
  