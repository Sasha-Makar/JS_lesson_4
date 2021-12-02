// 1- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function argSum (arg1, arg2){
    if (arguments.length===1){
        console.log(arg1);
    }else {
        console.log(arg1+arg2);
    }
}
argSum('okten',2);
argSum('okten');
argSum('j', 'hg');
argSum(5,5);
argSum(0);

console.log("**********");


// 2- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
function sumArr(arr1,arr2){
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]+arr2[i]);
    }
    return newArr;
}

console.log(sumArr(arr1, arr2));
console.log("********************");


// 3- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


let arrayObj = [
    {
        name: "Dima",
        age: 13
    },
    {
        model: "Camry"
    }
];
let arrObj2 = [{name: 'olya', age: 12, status : false}, {id : 1 , model: "toyota"}];

function arrOfKey (arr) {
    let emptyArray = [];
    for (let element of arr) {
        for (let elementKey in element) {
            emptyArray.push(elementKey)
        }
    } return emptyArray
        }

console.log(arrOfKey(arrayObj));
console.log(arrOfKey(arrObj2));

console.log("*******************");



// 4- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let newArr =  [{name: 'Dima', age: 13}, {model: 'Camry'}];

function arrOfValue (arr) {
    let emptyArray = [];
    for (let element of arr) {
            emptyArray.push(Object.values(element))
    }

            return emptyArray
    }
console.log(arrOfValue(newArr));
console.log(arrOfValue(arrObj2));











