let a = 'Rohith';

let b = a[Math.floor(Math.random() * a.length)];

console.log(b);




let c = 'rohith';

let d = c[5];

console.log(d);


const result = Math.random().toString(36).substring(1,4);


console.log()
const mat = Math.random();
const num = 15;
console.log(mat);
console.log(mat.toString(36));


let arr = [5,8,10,7,9,11] 

// Replace 7,9,11 with 17,19,111

arr.splice(3,3,17,19,111);
console.log(arr);

//insert 100 in the beginning

arr.splice(0,1,100,5);
console.log(arr);

//insert 200 in the last but one position

arr.push(200)
console.log(arr);

// Add 1000 at the end
arr.push(1000)
console.log(arr);

//Insert 0 in the middle.Use arr.len to find middle.

arr.splice(4,0,0);
console.log(arr);



