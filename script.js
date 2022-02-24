// 1
let array=[1,2,3,4,5,6,7,8,9,10,11];

console.log(array.filter(element => !(element % 2)).reduceRight((sum, element) => sum + Math.sqrt(element), 0));

// 2
console.log(1.15+2.30);

// 3
let n = 7
let star='*'

function triangle(n, star){
    while (star.length<=n ){
        console.log(star);
        star+='*';
    }
}
triangle(n,star);

// 4
for (let i = 1; i <= 100; i ++) {
    if ((i % 3 == 0) && (i % 5 == 0))
        console.log('FizzBuzz');
    else
    if (i % 5 == 0)
        console.log('Buzz');
    else
    if ((i % 5 != 0) && (i % 3 == 0))
        console.log('Fizz');
    else
        console.log(i);
}

// 5
let sec = 1;
let min = 60*sec;
let hour = 60*min;
console.log(hour);

// 6
let name = prompt('Enter your name');
alert('Your name is ' + name);

// 7
let str = 'abcde';
console.log(str[0] + str[2] + str[4]);

// 8
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log(obj['Петя'], obj['Коля']);

// 9
let arr = [2, 5, 3, 9];
let res = arr[0]*arr[1]+arr[2]*arr[3]
console.log(res);

// 10
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr1[1][0]);

// 11
let time = prompt('Enter the number');
if (  0 <= time <= 59 ){
    if (time>=0 && time<=14){
        alert('In the first quarter');
    }else if (time>15 && time<=30){
        alert('In the second quarte');
    }else if(time>31 && time<=45){
        alert('In the third quarter');
    }else if(time>46 && time<=59){
        alert('In the fourth quarter')
    }
} else{
    alert('Enter another number')
}

// 12
let a = prompt('Enter the number');
if (a < 0){
    alert('Right');
}else{
    alert('Wrong');
}

// 13
let test = prompt('Enter the number');
if (test == true){
    alert('Right');
}else{
    alert('Wrong');
}

// 14
let num = prompt('Enter the number');
switch (num) {
    case 1:
        console.log('winter');
        break;
    case 2:
        console.log('Spring');
        break;
    case 3:
        console.log('Summer');
        break;
    case 4:
        console.log('Autumn');
        break;
    default:
        console.log('Please enter another number');
}

// 15
let arr2 = [1, 2, 3, 4, 5];
let i
for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

// 16
let a1 = 10;
let b = 3;
let result1 = a1 % b;
console.log(result1);

// 17
let a2 = 2;
let st = a2 ** 10;
console.log(st);

// 18
let a3 = 379;
let result3 = a3 ** (1/2);
console.log(result3);
console.log(a3.toFixed(0), a3.toFixed(1), a3.toFixed(2));

// 19
let arr3 = [4, -2, 5, 19, -130 , 0, 10];
let min1 = 10000;
let max1 = -10000;

for (i=0; i < arr3.length; i++){
    if (arr3[i] < min1){
        min1 = arr3[i];
    }
    if (arr[i]> max1){
        max1 = arr3[i];
    }
}
console.log(`Max = ${max1}, ' ', Min = ${min1}`);

// 20
function getRandomInt(min2, max2) {
    min2 = Math.ceil(min2);
    max2 = Math.floor(max2);
    return Math.floor(Math.random() * (max2 - min2)) + min2;
  }
console.log(getRandomInt(1,100));

// 21
const aaabbbccc = 'aaa bbb ccc';
console.log(aaabbbccc.substr(4, 3)); 
console.log(aaabbbccc.substring(4, 7));
console.log(aaabbbccc.slice(4, 7));

// 22
const js = 'js';
console.log(js.toUpperCase());

// 23
const str2 = 'я учу javascript!';
console.log(str2.length);

// 24
let str3 = 'я учу javascript!';
let k = 0;
console.log(str3.indexOf('учу'));

// 25
let str4 = 'я-учу-javascript!';
const hyphen = /-/gi;
const newstr = str4.replace(hyphen, '!');
console.log(newstr);

// 26
let str5 = 'я учу javascript!';
console.log(str5.split(''))

// 27
let arr4 = ['я', 'учу', 'javascript','!'];
console.log(arr4.join('+'));

// 28
let str6 = 'я учу javascript !';
console.log((str6.charAt(0).toUpperCase()));
console.log((str6.charAt(0).toUpperCase()), str6.slice(2));