'use strict'

let numOrStr = prompt('input number or string');
console.log(numOrStr);
console.log(Number(numOrStr))
switch (numOrStr){
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    case numOrStr:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}