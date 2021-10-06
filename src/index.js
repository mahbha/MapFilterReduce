//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for
// for(let i=0; i < companies.length; i++){
//   console.log(companies[i].name);
// }

//forEach
// companies.forEach(function(company) {
//   console.log(company.name);
// })

//filter
// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// })

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(company) {
//   if( company.category === "Retail" ){
//     return true;
//   }
//   return false;
// });

// //const retailCompanies = companies.filter (company => company.category === "Retail");
// console.log(retailCompanies);

//map

// const compnayNames = companies.map(function(company) {
//   return company.name;
// })

// //const compnayNames = companies.map(company => company.name);
// console.log(compnayNames);

// const agesSquare = ages.map(age => Math.sqrt(age));

// console.log(agesSquare);

//sort
// const sortedCompanies = companies.sort(function(a, b) {
//   if(a.start > b.start){
//     return 1;
//   } else {
//     return -1;
//   }
// });

//const sortedCompanies = companies.sort((a, b) => (a.start > b.strt ? 1 : -1));
//console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start)
//   },
//   0);

// const totalYears = companies.reduce((total, company) => total +
// (company.end - company.start), 0);

// console.log(totalYears);

//combine methos

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
