let arr = [1,2,3,4,5];
console.log(arr);

let arr1 = [[1,2],'a',12,12];
console.log(arr1.length);
console.log(arr1[0].length);
console.log(arr1[0][1]);


let arr2 = '[1,2,3,4]';
let arr3 = [1,2,3,4];
console.log(arr2);

console.log(typeof arr2);

console.log(typeof arr3);

//push

let fruits = ['Apple','Bannana','Carrot','Beet root']
console.log(fruits);

fruits.push('Mango');
console.log(fruits);

// let newFruits = fruits.push('Mango');
// doubt
fruits.push('Mango');
let newFruits =fruits
console.log(newFruits);

// let newFruits = fruits.push('Orange');
// console.log(newFruits);


//pop

fruits.pop()
console.log(fruits);

fruits.pop()
console.log(fruits);

//shift()

fruits.shift()
console.log(fruits)

//unshift()
fruits.unshift('Apple')
console.log(fruits);

//delete array

delete fruits[2];
console.log(fruits);

//splice

fruits.splice(1,2); // start index , no.of.element remove
console.log(fruits);//delete

fruits.splice(1,0,'r','p')
console.log(fruits); // insert a element

fruits.splice(1,2,'m')
console.log(fruits);// replace

//slice

fruits.slice(0,3);
console.log(fruits);

console.log(fruits)

fruits.push('r','d','c')
console.log(fruits);

fruits.slice(0,5);
console.log(fruits);

//reverse

fruits.reverse()
console.log(fruits);

//join -- convert string to array

let str = fruits.join()
console.log(fruits);

console.log(typeof str);


//split() -- string to array

let str1 = 'a,b,c,d,e';

let array = str1.split(',');

console.log(array);

console.log(typeof array);



//concat and spread operator

let array1 = [1,2,3];
let array2 = [4,5,6];

let joinedArray = array1.concat(array2);
console.log(joinedArray);

let join = [...array1,...array2];
console.log(join);



