// // let myArr = [{id:'3',name:'test3'},{id:'4',name:'test4'},{id:'5',name:'test5'}]


// // myArr.includes()


// // import moment from 'moment'
// var moment = require('moment');

// // console.log(moment().format())

// // let myTime = moment.utc().format()
// // console.log(myTime)


// // // const myArr = [3,2,1,0]

// // // myArr.reverse().map((val,index)=>{
// // //     console.log('Reverese Val is >>>' , val)
// // // })

// // let myStr = 'Quick Brwn Fox Jumps Over The Lazy Dog'

// // let myArr = myStr.trim().split('')

// // let myCharArr = myArr.map((val,index)=>{
// //     console.log('val>>',val)
// //     // val.trim().split('')
// // })

// // console.log('MyArray is >>' ,myCharArr)

// // let regex = '/^\d{2}\-\d{2}$/'

// // let val = '02-04'
// // let name = 'Raheem'

// // let check = regex === val ? 'matched' : 'not-matched'
// // console.log(val.slice(3,5))

// // const date = new Date()

// // const expiry = new Date(date)

// // let tme =  date.getTime()
// // console.log(new Date(tme))
// // console.log('time =>',tme)
// // let myDate = moment().format('YYYY-MM-DD')


// // console.log('Date >>>' , moment().utc('18-07-2020').format() )

// // let regex = '/^[0-9]{3, 4}$/'
// // let val = '235'

// // console.log(/^[0-9]{3,4}$/.test(val))


// let myObj = [{name:'Test1',id:1},{name:'Test2',id:2},{name:'Test2',id:3},{name:'Test2',id:4}]

// let myNewObj = Array.from(myObj)


// let myNewObj2 = myNewObj.map((val)=>{
//     if(val.id == 2){
//         let newObj = {
//             name: 'Rahemm',
//             id: val.id
//         }
//         return newObj
//     }    
//     else{
//         return val
//     }
// })

// console.log('My Obj >>>>' , myObj);
// console.log('My NewObj >>>>' , myNewObj2);

function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }

//  console.log('Sorted Arr >> ' , bubbleSort([7,5,2,4,3,9]))




 let myArr = [7,5,2,4,3,9]

 const selectionSort = (arr) =>{
    
    for(let index = 0 ; index<arr.length ; index++){
        let currentVal = arr[index]                             //First looping through the arr and getting the value of that index
        
        for(let j = index+1 ; j<arr.length ; j++){              //Then looping through the arr from the next index
            let loopedVal = arr[j]
        
            if(currentVal>loopedVal){                           //Now Comparing the val from  each val next to the current index of the arr
                let temp = arr[index]                           //If current val is greater than the looped val it will be swapped
                arr[index] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr ;
}

selectionSort(myArr)
console.log(myArr)




