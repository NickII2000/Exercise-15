/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && b.length <= 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && b.length <= 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && b.length <= 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
} while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);



// const isBirthday = true;
// const greeting = (isBirthday) ?
//     'С днём рождения, г-н Кузнецов! Хорошо вам повеселиться!' : 'Доброе утро, г-н Кузнецов.';
// console.log(greeting);

// let val = 7;

// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);



/* ЗАМЫКАНИЕ */

function createCounter() {
    let counter = 0;
    const myFunction = function () {
        console.log(++counter);
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);



let c = 4;

function addX(x) {
    return function (n) {
        return n + ++x;
    };
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);
d = addThree(c);
console.log('example partial application', d);
d = addThree(c);
console.log('example partial application', d);


// function makeCounter() {
//     var currentCount = 1;

//     return function () { // (**)
//         return currentCount++;
//     };
// }

// var counter = makeCounter(); // (*)

// // каждый вызов увеличивает счётчик и возвращает результат
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// // создать другой счётчик, он будет независим от первого
// var counter2 = makeCounter();
// console.log(counter2()); // 1


function makeCounter(x) {
    var currentCount = x;

    return function () { // (**)
        return ++currentCount;
    };
}

var counter = makeCounter(10); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13

// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter(777);
console.log(counter2()); // ++1

// var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
// console.log(f());  // 6

console.log(`Math.floor ====================`);
console.log(Math.floor(12.6));
console.log(Math.floor(12.5));
console.log(Math.floor(12.4));
console.log(`Math.round ====================`);
console.log(Math.round(12.6));
console.log(Math.round(12.5));
console.log(Math.round(12.4));
console.log(`Math.ceil ====================`);
console.log(Math.ceil(12.6));
console.log(Math.ceil(12.5));
console.log(Math.ceil(12.4));
console.log(`==============================`);
// helpdesk@skillaz.ru

// Teams
// Уникальный идентификатор
// 0003BFFDDE0F109A

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello(`Nick`));

// Место для второй задачи
function returnNeighboringNumbers(number) {
    let arr = [];
    for (let i = -1; i <= 1; i++) {
        arr.push(number + i);
    }
    return arr;
}

console.log(returnNeighboringNumbers(10));

// Место для третьей задачи
function getMathResult(number1, number2) {
    if (typeof (number2) !== 'number' || typeof (number2) === 'number' && number2 <= 0) {
        return number1;
    } else {
        let result = String(number1);
        for (let i = 2; i <= number2; i++) {
            result += `---${number1 * i}`;
        }
        return result;
    }
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, '5'));
console.log(getMathResult(11, 5));
console.log(getMathResult(12, 1));
console.log(getMathResult(13, 0));
console.log(getMathResult(14, null));
console.log(getMathResult(15, []));
console.log(getMathResult(16, {}));
console.log(getMathResult(17, undefined));