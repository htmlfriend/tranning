//create a function sayPrimeOrNot it checks num and prints yes or no

// const isPrime = (num) => {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= num; i++) {
//     num/=2;
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }


// const sayPrimeOrNot = (num) => {
//   const printRes = isPrime(num);
//   printRes ? 'yes' : 'no';
//   console.log(printRes)
// }

// sayPrimeOrNot(9);


//export average() if no argument return null

// const sum = (...numbers) => {
//   let sumElem = 0;
//   for (let num of numbers) {
//     sumElem += num;
//   }
//   return sumElem;
// }

// const arrOfNumbers = [1, 22, 33];
// const arrOfNumbers2 = [4, 55, 44];
// console.log(sum(...arrOfNumbers, ...arrOfNumbers2));

// const everage = (...numbers) => {
//   let count = numbers.length;
//   if (count === 0) {
//     return null
//   }
//   return sum(numbers) / count
// }

// console.log(everage(1, 2, 3, 4, 5));

// console.log(everage(10, 20, 30, 40, 50));

// create union(...arrays) to join few arrays:
// use lodash uniq 

// const union = (first, ...arrays) => {
//   const concated = first.concat(...arrays);
//   let arr = [];
//   // return uniq(concated);
//   for (let num in concated) {
//     arr.push(concated[num])
//   }
//   return arr;
// }

// console.log(union([3, 2], [2, 2, 1], [true, true, false, 5]))


// anonimous function

// const sum = (x,y) =>{

//   const innerSum = (a,b) => {
//     return a + b;
//   }

//   return innerSum(x,y);
// }

// console.log(sum(45,55));

// upper function

// const user = [
//   { name: 'Igor', age: 19 },
//   { name: 'Danil', age: 1 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const compare = (a, b) => {
//   if (a.age === b.age) {
//     return 0;
//   }
//   return a.age > b.age ? 1 : -1;
// }

// const x = user.sort((a, b) => {
//   if (a.age === b.age) {
//     return 0;
//   }

//   return a.age > b.age ? 1 : -1;
// })
// // const x = user.sort(compare)

// console.log(x);

// const say = (fn) => {
//   const message = fn();
//   console.log(message);
// }

// const fn = () => 'hi how are you?';

// console.log(say(fn));

//higher order funcion

// 3. create takeOldest to sort object on age and datatime

// const users = [
//   { name: 'Igor', birthday: 44, datebirthday: 'Nov 19, 1988' },
//   { name: 'Danil', birthday: 22, datebirthday: 'Nov 22, 1990' },
//   { name: 'Vovan', birthday: 23, datebirthday: 'Nov 11, 1975' },
//   { name: 'Matvey', birthday: 11, datebirthday: 'Nov 19, 2001' },
//   { name: 'Crish', birthday: 33, datebirthday: 'Nov 19, 1995' },
//   { name: 'Rob', birthday: 232, datebirthday: 'Nov 19, 1992' }
// ];

// const takeOldest = (arr , count) => {
//   return arr.sort(compareParse).slice(0,count);  
// }

// const compareParse = (a, b) => {
//   if (makeToDate(a.datebirthday) === makeToDate(b.datebirthday)) {
//     return 0;
//   }

//   return makeToDate(a.datebirthday) > makeToDate(b.datebirthday) ? 1 : -1;
// }

// const makeToDate =(elem) => {
//   return Date.parse(elem);
// }

// console.log(takeOldest(users, 5));


//create list of the children
// const users = [
//   {
//     name: 'Tirion',
//     children: [
//       { name: 'Mira', birthday: '1983-03-23', gender: 'female' },
//     ],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03', gender: 'female' },
//       { name: 'Keit', birthday: '1933-05-14', gender: 'male' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [
//       { name: 'Tisha', birthday: '2012-11-03', gender: 'male' },
//     ],
//   },
// ];

// const findFemale = (arr) => {
//   const child = arr.map(({ children }) => children);
//   return child.flat().filter(({ gender }) => gender === 'female')
// }

// console.log(findFemale(users));
// const result = [];
// for (let {children} of users) {
//   result.push(children);
// }

// const result = (arr) => {

//   const child = arr.map((elem) => {
//    let s = elem.children.map(elem => {
//     return elem.name;
//   }).flat();
//   return s;
//   }).flat();
//   return child
// }


// console.log(result(users));

// const getChildern = (arr) => {
//   const child = arr.map(item => {
//     return item.children;
//   }).flat();
//   return child;
// }
// console.log(getChildern(users));
// getChildren(users);

// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];


// filter 

// const users = [
//   { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//   { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//   { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//   { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
//   { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
//   { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
//   { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
//   { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
//   { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
//   { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
// ];


// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };
// console.log(filterUsers(users))

//reduce

// const users = [
//   { name: 'Igor', age: 19 },
//   { name: 'Danil', age: 1 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const olderMan = users[0];
// for (const user of users) {
//   if (user.age > olderMan.age) {
//     olderMan = user;
//   } 
// }

// const myReduce = (collection, callback, init) => {
//   let acc = init;
//   for (const item of collection) {
//     acc = callback(acc,item)
//   }
//   return acc;
// }

// const olderMan =myReduce(users, (acc, users)=> (users.age> acc.age? users :acc), users[0])
// console.log(olderMan);
