
//*******************************************Code for Simple Promise 
// let getpromise=new Promise(function(resolve,reject){
//     resolve('Promise resolve')
// });
// console.log(getpromise)
// getpromise.then((result)=>{
//     console.log(result)
// })
// .catch((result)=>{
//     console.log(result)
// })
// .finally(()=>{
// console.log("Finally")
// })


// ***********************Code for all Promise methods (all, allSettled, race)
// let data1=Promise.allSettled([
//     new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(" Resolve in 5 seconds")
//         }, 5000);
//     }),
//     new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("1 Resolve in 10 seconds")
//         }, 10000);
//     }),
//     new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject(" Reject in 7 seconds")
//         }, 7000);
//     })
// ]);
// data1.then((item)=>{
//     console.log("then block",item)
// })
// .catch((err)=>{
//     console.log("catch",err)
// })

//***************************************Promise Chaining 
let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
});
data.then((item)=>{
    console.log("1st",item)
    return item*10
}).then((item)=>{
    console.log("2nd", item)
    return item*10;
}).then((item)=>{
    console.log("3rd", item)
    return item*10;
})
.catch((err)=>{
    console.log(err)
})