// Array Cloning Methods
let arr=[1,2,3];
// let narr=arr.slice();
// console.log(narr);
// let narr=arr.concat();
// console.log(narr);
// let narr=[].concat(arr);
// console.log(narr);
let narr=[...arr]; // spread operator

// for of loop
let fruits=["apple","mango","banana"];
let fruits1=[];
// for(let fruit of fruits){
//   fruits1.push(fruit.toUpperCase());
// }
// console.log(fruits1);

// for in loop
// returns index
for(let index in fruits){
  //fruits1.push(fruit.toUpperCase()); // op [0,1,2];
  console.log(fruits[index]);
}

console.log(fruits1);

// array destructuring
let arr1=[1,2,3,4,5,6];
let [a,b,c,d,e,f]=arr1;
console.log(a,b,c,d,e,f);