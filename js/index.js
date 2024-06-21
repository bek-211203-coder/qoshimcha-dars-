// let arr = [3,2,10,20,1,9];
// let result = arr.slice(4,7);
// console.log(result);

// let result = arr.find(function(value, index, ar){
//     return value %2==0 && value % 5 == 0;
// })
// console.log(result);

// let result = arr.findIndex(function(value, index, ar){
//     return value %2==0 && value % 5 == 0;
// })
// console.log(result);

// let result = arr.findLastIndex(function(value, index, ar){
//     return value %2==0 && value % 5 == 0;
// })
// console.log(result);
// let result = arr.findIndex(function(value, index, ar){
//     return value %2==0 &&   index > 5;
// })
// console.log(result);

// sum = 0;
// conter = 0;
// arr.forEach(function(value, index, ar){
//     if (value > 0){
//         sum += value;
//         conter++
//     }
// })
// console.log(sum)

// let arr1 = arr.map(function(value, index, ar){
//     return value **2
// });
// console.log(arr1)

// Asosiy metodlarga oid masalar

// masala 1
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     return arr.length;
// }
// console.log(massiv(arr));

// masala 2
// let arr = [3,2,10,20,1,9];
// function massiv(arr){
//     return arr.toString();
// }
// console.log(massiv(arr));

// masala 3
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//    let res = arr.join(',');
//     return res
// }
// console.log(massiv(arr));

// masala 4
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.push('lomborghini');
//     return arr
// }
// console.log(massiv(arr));

// masala 5
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.pop();
//     return arr
// }
// console.log(massiv(arr));

// masala 6
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.shift();
//     return arr
// }
// console.log(massiv(arr));

// masala 7
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.unshift('tesla');
//     return arr
// }
// console.log(massiv(arr));

// masala 8
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// let arr1 = [3,2,10,20,1,9];
// function massiv(arr){
//     let res = arr.concat(arr1);
//     return res;
// }
// console.log(massiv(arr));

// masala 9
// let arr =[1, 2,34, 5, 6,7];
// function deleteElement(arr){
//     arr.splice(0 , 1);
//     return arr;
// }
// console.log(deleteElement(arr))

// masala 10
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     let res = arr.slice(1, 3);
//     return res
// }
// console.log(massiv(arr));

// masala 11
// let arr = ['kiwi', 'banana', 'ananas', 'anjir', 'uzum', 'shaftoli', 'anor']
// function massiv(arr){
//     return arr.length;
// }
// console.log(massiv(arr));

// masala 12
// let arr = [3,2,10,20,1,9,5,65,8,12,47];
// function massiv(arr){
//     return arr.toString();
// }
// console.log(massiv(arr));

// masala 13
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//    let res = arr.join(' ');
//     return res
// }
// console.log(massiv(arr));

// masala 14
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.push('lomborghini');
//     arr.push('tesla');
//     return arr
// }
// console.log(massiv(arr));

// masala 15
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.pop();
//     arr.pop();
//     return arr
// }
// console.log(massiv(arr));

// masala 6
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.shift();
//     arr.shift();
//     return arr
// }
// console.log(massiv(arr));

// masala 17
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.unshift('tesla');
//     arr.unshift('opel');
//     return arr
// }
// console.log(massiv(arr));

// masala 18
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// let arr1 = [3,2,10,20,1,9];
// let arr3 = [true, false]
// function massiv(arr){
//     let res = arr.concat(arr1).concat(arr3);
//     return res;
// }
// console.log(massiv(arr));

// masala 19
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     arr.splice(3,1);
//     return arr
// }
// console.log(massiv(arr));

// masala 20
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     let res = arr.slice(3);
//     return res
// }
// console.log(massiv(arr));

// Search metodlariga oid masalalar.

// masala 1
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     let res = arr.includes('malibu');
//     return res
// }
// console.log(massiv(arr));

// masala 2
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari']
// function massiv(arr){
//     let res = arr.indexOf('bugatti');
//     return res
// }
// console.log(massiv(arr));

// masala 3
// let arr = ['malibu', 'trekker', 'bugatti', 'audi', 'ferari' , 'bugatti']
// function massiv(arr){
//     let res = arr.lastIndexOf('bugatti');
//     return res
// }
// console.log(massiv(arr));

// masala 4
// let arr = [3,2,10,20,1,9];
// let result = arr.find(function(value, index, ar){
//     return value %3==0 && index > 3;
// })
// console.log(result);

// masala 5
// let arr = [3,2,10,20,1,9];
// let res =arr.findIndex(function(value, index ,ar){
//     return value % 3 == 0;
// })
// console.log(res)
