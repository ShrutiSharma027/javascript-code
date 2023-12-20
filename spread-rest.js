// rest
// function age(age1,age2,age3,...other_ages){
//     console.log(age1,age2,age3)
//     console.log(other_ages)
// }
// age(20,30,40,50,60)

// spread
// let arr=[10,20,30]
// let arr1=[...arr,40,50]
// console.log(arr1)
// console.log(arr)

// let laptop1=["Dell",50000,2]
// let laptop2=["Lenovo",65000,3]
// console.log(laptop1)
// console.log(laptop2)
// console.log(...laptop1,laptop2)

// let laptop1={"Name":"Dell",
//               "Price": 35000,
//               "Warranty":"1year"
// }
// let warranty={"Origin":"India",
// "Chargerbattery":40000,
// "Battery_backup":"2years"
// }
// let laptop3={...laptop1,...warranty}
// console.log(laptop3)

const basic={
    "Firstname":"Shruti"
}
const company={
    "Companyname":"XYZ Lmt."
}
const Qualification={
    "Std":"Graduate"
}
const PI={ 
    "Age":300
}
// console.log(basic.Firstname)
// console.log(company.Companyname)
// console.log(Qualification.Std)
// console.log(PI.Age)
const profile={...basic,...company,...Qualification,...PI}
// console.log(profile.Firstname)

// let arr=[1,2,3]
// let arr1=[...arr]
// arr1.push(4)
// console.log(arr)
// console.log(arr1)

// const array=[10,20,30]
// const array1=[10,20,30]
// console.log(array)
// console.log(array1)
// const join=[...array,...array1]
// console.log(join)


const str=['my','name','is','kwl']
console.log(...str)

