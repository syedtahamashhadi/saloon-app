// let myArr = [{id:'3',name:'test3'},{id:'4',name:'test4'},{id:'5',name:'test5'}]


// myArr.includes()


// import moment from 'moment'
var moment = require('moment');

// console.log(moment().format())

let myTime = moment.utc().format()
console.log(myTime)


// const myArr = [3,2,1,0]

// myArr.reverse().map((val,index)=>{
//     console.log('Reverese Val is >>>' , val)
// })

let myStr = 'Quick Brwn Fox Jumps Over The Lazy Dog'

let myArr = myStr.trim().split('')

let myCharArr = myArr.map((val,index)=>{
    console.log('val>>',val)
    // val.trim().split('')
})

console.log('MyArray is >>' ,myCharArr)
