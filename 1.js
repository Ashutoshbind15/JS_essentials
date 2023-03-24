// //console -->> printing

// console.log('Hello');

// //let and const -->> variables

// const a = 5;
// // a += 1;
// let b = 5;
// console.log(b);
// b += 1;
// console.log(b);

// // //Functions

// function adder(a, b) {
//   //operations
//   let c = a + b;

//   //return
//   return c;
// }

// console.log(adder(3, 2));

// const adderArrow = (a, b) => {
//   return a + b;
// };

// console.log(adderArrow(3, 2));

// const adderArrowBetter = (a, b) => a + b;
// console.log(adderArrowBetter(3, 2));

// const square = (a) => a * a;
// console.log(square(3));

// //Lexical Scoping??
// //referencing by val and by ref ??

// //OBJECTS

// const father = {
//   age: 60,
//   language: 'Typescript',
// };

// // //dot operator -> access

// console.log(father.age);
// console.log(father['age']);

// father.age = 70;
// father.prop2 = 'value';
// console.log(father);

// const mother = {
//   age: 50,
//   language: 'Javascript',
// };

// //manipulation

// mother.food = 'f1';
// console.log(mother);

// mother.age = 35;
// console.log(mother);

// mother['Prop'] = 7;
// console.log(mother);

// //referencing and cross refs

// const person = {
//   age: 6,
//   language: 'Typescript',
//   siblings: ['P2', 'P3', 'P4'],
//   parents: [father, mother],
// };

// console.log(person.parents[0].age);

// //iterating

// for (key in person) {
//   console.log(key, person[key]);
// }

// //arrays and strings

// const arr = [6, 2, 3, 4, 5];
// console.log(arr);
// arr[2] = 5;
// console.log(arr);

// for (i = 0; i < 5; i++) console.log(arr[i]);

// // //for of

// for (num of arr) {
//   console.log(num);
// }

// //for in

// for (num in arr) {
//   console.log(num, arr[num]);
// }

// pName = 'ash';
// console.log(pName);

// for (ch of pName) console.log(ch);

// //some useful props for array manipulation

// console.log(arr2);
// console.log(arr);

// arr2 = arr.map((el) => {
//   return {
//     value: el,
//   };
// });
// arr3 = arr.filter((el) => el < 5);
// console.log(arr3);
// console.log(arr);

//OOPS

//async

// const asd = async () => {
//   const { data } = await axios.get(
//     'https://nodefki5th-lg01--3000.local-credentialless.webcontainer.io/1'
//   );
//   console.log(data);
// };

// const helper = async () => {
//   await asd();
// };

// helper();
