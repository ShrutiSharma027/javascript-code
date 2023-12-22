//********************************************* Mapping in js
// const arr=[2,4,6,8,10]
// const multiply=arr.map(item=>item*2)
// console.log(arr)
// console.log(multiply)

//********************************************* Filter in js
// let arr1 = [1, 2, 3, 4]
// let evenvalue = arr1.filter(item => item % 2 == 0)
// console.log(evenvalue)
// console.log(arr1, 'original')

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let big = arr.filter(item => item >= 5)
// console.log(big)
// console.log(arr, 'original')


// let std1 = [{
//     name: "Aman",
//     marks: 56
// },
// {
//     name: "Rohit",
//     marks: 72
// },
// {
//     name: "Shivani",
//     marks: 85
// },
// {
//     name: "Shruti",
//     marks: 90
// },
// {
//     name: "Abhishek",
//     marks: 75
// }]
// let max = std1.filter(student=>student.marks>=70)
// // let max = std1.filter((student)=>{console.log(student)})
// console.log(max)

//************************************************ Reduce in js

let arr=[2,4,6]
let sum=arr.reduce((a,b)=>{ 
    console.log(a,b)
    return a+b})
console.log(sum)
console.log(arr)