
console.log(Math.ceil(7.000001));
console.log(Math.floor(7.000001));
console.log(Math.trunc(7.000001));
console.log(Math.pow(2,2));
console.log(Math.sqrt(9));
console.log(Math.abs(-100));
console.log(Math.sign(-100));
let a=Math.random()
console.log(a);


let r= Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log('rgb(',r,',',g,',',b,')');

console.log(Math.max(100,152,150,740,665,698,625,624,631,655))
console.log(Math.min(100,152,150,740,665,698,625,624,631,655))

// let arr = [18,15,12,13,17]
// console.log(`The 1st element of array is : ${arr[0]}`);

// console.log(Math.trunc(7.000001));
// console.log(Math.pow(2,2));
// console.log(Math.sqrt(9));
// console.log(Math.abs(-100));
// console.log(Math.sign(-100));
let x =(0,1)
console.log(`random : ${Math.random(x)}`);
console.log(`floor  : ${Math.floor(5.000001)}`);
console.log(`round  : ${Math.round(7.000001)}`);
console.log(`abs    : ${Math.abs(-9)}`);
console.log(`sqrt   : ${Math.sqrt(9)}`);
console.log(`pow    : ${Math.pow(2,3)}`);

let arr=[5,6,7,8,9,11]
for (const a in arr){
if(arr[a]%2==0)
{
    console.log(`${arr[a]} is even number`);
}
else
{
    console.log(`${arr[a]} is odd number`);                    //odd&even
}
}


let arr2=[15,49,50,55,19,19,44,49,99].reverse();
console.log("Reversed array is : ", arr2);               //reverse


let arr3 = [15, 49, 50, 55, 19, 19, 44, 49, 99];
result = arr3.filter((num) => num < 50);                 //number less than 50
console.log(result);


let arr4 = [85, 88, 90, 92, 80];
let sum=0;
for(let i=0;i<arr4.length;i++)
{
    let arr4= arr4[i];
    sum=sum+arr4;
}
avg=sum/arr4.length;
console.log(avg);

// let i=10
// while(i>=1)
// {
// console.log(i);    //printing 10 to 1
// i--;
// }