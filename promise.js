
//***************************************Code for Simple Promie 
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


// ***********************Code for all Promise (all, allSettled, race)
let data=Promise.race([
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(" Resolve in 5 seconds")
        }, 5000);
    }),
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("1 Resolve in 10 seconds")
        }, 10000);
    }),
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject(" Reject in 7 seconds")
        }, 7000);
    })
]);
data.then((item)=>{
    console.log("then block",item)
})
.catch((err)=>{
    console.log("catch",err)
})