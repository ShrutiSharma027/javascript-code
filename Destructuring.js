// let laptop=["HP","Lenovo","Dell","Toshiba"]
// let [h,...other]=laptop;
// console.log(h,other)

let Laptop1={
    Name:"HP",
    Warranty:"2 years",
    Price:"35000",
    Batterbackup:"2 years",
    Size:"32 inch"
};

let{Name,...others}=Laptop1;
console.log(Name,others);
console.log("First")
console.log("Second")
setTimeout(() => {
    console.log("Asynchronous")
}, 5000);
console.log("Third")

