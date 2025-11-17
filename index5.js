//Тема: Об'єкти 

// Створи об’єкт user з полями name, age, email і виведи його у консоль.

function userFunc(obj) {
    console.log(obj);
}
let user = {name: "Liza", age: 21, email: "contact.elizabethkarshina@gmail.com"}
userFunc(user);
console.log();

// Зміни значення певного поля.

function changeUserData(obj) {
    obj.name = "Elizabeth";
}

changeUserData(user);
console.log(user);
console.log();


// Напиши функцію, що перевіряє, чи містить об’єкт певний ключ.

function isKey(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(isKey(user, "name"));
console.log(isKey(user, "surname"));
console.log();

// Знайди суму всіх чисел у об’єкті:
// {a: 5, b: 10, c: 20} → 35

function sum(obj) {
    let res = 0;
    for (let a in obj) {
        res += obj[a];
    }

    return res;
}

console.log(sum({a:5, b: 10, c: 20}));
console.log();

// Є масив користувачів. Виведи лише імена тих, кому менше 18 років.

function findUsers(arr) {
    let newArr = [];

    arr.forEach(el => {
        if (el.age < 18) {
            newArr.push(el);
        }
    });

    return newArr;
}

console.log(findUsers([{name: "Liza", age: 21}, {name: "Kate", age: 12}, {name: "Rosa", age: 9},]));
console.log();