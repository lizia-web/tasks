//Тема: 40 задач на об'єкти

// 1. Створи об’єкт user з полями name, age, email. Виведи всі значення.

function userFunc(obj) {
    for (let a in obj) {
        console.log(obj[a]);
    }
}

let user = { name: "Liza", age: 21, email: "emailAdress" };
userFunc(user);
console.log();

// 2. Додай у вже створений об’єкт нову властивість isAdmin зі значенням false.

function add(obj) {
    obj.isAdmin = false;
}

add(user);
console.log(user);
console.log();

// 3. Видали властивість email із об’єкта user.

function toDelete(obj) {
    delete obj.email;
}

toDelete(user);
console.log(user);
console.log();

// 4. Перевір, чи існує властивість age у об’єкті(через in).

function isAge(obj) {
    return "age" in obj;
}

console.log(isAge(user));
console.log();

// 5. Напиши функцію countKeys(obj), яка повертає кількість ключів в об'єкті.

function countKeys(obj) {
    let count = Object.keys(obj);
    return count.length;
}

console.log(countKeys(user));
console.log();

// 6. Напиши функцію, яка повертає масив значень об'єкта (аналог Object.values, але без нього).

function arrayValues(obj) {
    let array = [];
    for (let a in obj) {
        array.push(obj[a]);
    }

    return array;
}

console.log(arrayValues(user));
console.log();

// 7. Є об’єкт person.Додай метод sayHello(), який повертає рядок "Hello, my name is NAME".

function addMethod(obj) {
    obj.sayHello = () => { return `Hello, my name is ${obj.name}` };
}

let person = { name: "Liza", age: 21 };
addMethod(person);
console.log(person);
console.log(person.sayHello());
console.log();

// 8. Створи об’єкт car з методом start(), який має вивести "Engine started".Виклич його.

function newMethodCar(obj) {
    obj.start = () => { console.log("Engine started") };
}

let car = { color: "red", brand: "Toyota", model: "Camry" };
newMethodCar(car);
car.start();
console.log();

// 9. Напиши функцію clone(obj), яка робить поверхневу копію об’єкта.

function clone(obj) {
    return { ...obj };
}

console.log(clone(user));
console.log();

// 10. Є два об’єкти.Об’єднай їх у третій(без Object.assign).

function makeNewObject(obj1, obj2) {
    let obj3 = { ...obj1, ...obj2 };
    return obj3;
}

console.log(makeNewObject(user, car));
console.log();

// 11. Є об’єкт user із вкладеною адресою.Виведи місто.
const user1 = {
    name: "Liza",
    address: { city: "Kyiv", street: "Main" }
};

function showCity(obj) {
    return obj.address.city;
}

console.log(showCity(user1));
console.log();

// 12. Є список студентів(масив об'єктів). Виведи імена всіх студентів.

const students = [
    { name: "Liza", age: 21 },
    { name: "Lida", age: 19 },
    { name: "Anna", age: 17 }
];

function showStudents(arr) {
    arr.forEach(el => {
        console.log(el.name);
    });
}

showStudents(students);
console.log();

//   13. Напиши функцію getAdultUsers(users), яка повертає користувачів старших 18 років.

function getAdultUsers(users) {
    let arr = [];

    users.forEach(el => {
        if (el.age >= 18) {
            arr.push(el);
        }
    });

    return arr;
}

console.log(getAdultUsers(students));
console.log();

//   14. Є об’єкт зарплат: { Ann: 500, John: 700, Kate: 300 }.Знайди суму зарплат.

const salary = { Ann: 500, John: 700, Kate: 300 };

function totalSum(obj) {
    let sum = 0;

    for (let a in obj) {
        sum += obj[a];
    }

    return sum;
}

console.log(totalSum(salary));
console.log();

//   15. Напиши функцію, яка повертає ключ із найбільшим значенням.

function maxValue(obj) {
    let max = Object.keys(obj)[0];

    for (let a in obj) {
        if (obj[a] > obj[max]) {
            max = a;
        }
    }

    return max;
}

console.log(maxValue(salary));
console.log();

//   16. Створи об’єкт calculator із властивостями a, b і методами sum(), mul()

const calculator = { a: 5, b: 10, sum: () => { return calculator.a + calculator.b }, mul: () => { return calculator.a * calculator.b } }

console.log(calculator.sum());
console.log(calculator.mul());
console.log();

//   17. Напиши функцію, яка повертає об’єкт без указаного ключа.

function returnWithoutKey(obj, key) {
    let newObj = { ...obj };

    delete newObj[key];

    return newObj;
}

console.log(returnWithoutKey(user, "name"));
console.log();

//   18. Є об’єкт товару.Напиши метод, який зменшує кількість товару на складі.

const goods = [
    { name: "Milk", count: 16, price: 100 },
    { name: "Cheese", count: 8, price: 90 },
    { name: "Potato", count: 18, price: 150 },
];

function sale(arr, name) {
    arr.forEach(el => {
        if (el.name === name) {
            el.count -= 2;
        }
    });
}

console.log(goods);
sale(goods, "Milk")
console.log(goods);
console.log();

//   19. Напиши функцію, яка перевіряє, чи два об’єкти рівні за значеннями.

function isTheSame(obj1, obj2) {
    let arr1 = Object.values(obj1);
    let arr2 = Object.values(obj2);

    if (arr1.length != arr2.length)
        return "У об'єктів різна довжина!";

    arr1.sort();
    arr2.sort();


    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i])
            return "Значення не співпадають!";
    }

    return "Об'єкти рівні за значеннями!"
}

console.log(user);
console.log(user1);
console.log(isTheSame(user, user1));
console.log();
console.log(user);
console.log(user);
console.log(isTheSame(user, user));
console.log();

//   20. Є масив об'єктів товарів. Поверни тільки ті, що дорожчі за 100 грн.

function getGoodsWithPriceMoreThan(arr) {
    let newArr = [];

    arr.forEach(el => {
        if (el.price > 100) {
            newArr.push(el);
        }
    });

    return newArr;
}

console.log(getGoodsWithPriceMoreThan(goods));
console.log();

//   21. Напиши метод об’єкта, який повертає кількість ключів через this.

const obj1 = {
    name: "Liza",
    age: 21,
    isAdmin: false,
    keysCount: function keysCount() {
        return Object.keys(this).length;
    }
}

console.log(obj1);
console.log(obj1.keysCount());
console.log();

// 22. Створи об’єкт зі списком задач і методом addTask(), removeTask().

const toDoList = {
    toDo: ["create a new repository", "create a program"],
    addTask: function add(task) {
        this.toDo.push(task);
    },
    removeTask: function remove(task) {
        this.toDo.splice(this.toDo.findIndex(el => el === task), 1);
    }
}

console.log(toDoList);
toDoList.addTask("test program");
console.log(toDoList);
toDoList.removeTask("create a program");
console.log(toDoList);
console.log();

// 23. Напиши глибоке копіювання об’єкта без JSON.parse.

const objectForTest = {
    name: "Liza",
    age: 21,
    address: {
        city: "Kyiv",
        street: "main"
    },
    phone: {
        count: 2,
        firstPhone: {
            model: "model",
            date: "date"
        },
        secondPhone: {
            model: "model",
            date: "date"
        }
    }
};

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    let newObj = {};
    for (let a in obj) {
        newObj[a] = deepCopy(obj[a]);
    }

    return newObj;
}

console.log(deepCopy(objectForTest));
console.log();

// 24. Напиши функцію, що робить об’єкт незмінним(freeze) власною реалізацією.

function newFreeze(obj) {
    for (let a in obj) {
        Object.defineProperty(obj, a, {
            writable: false,
            configurable: false
        });
    }

    Object.preventExtensions(obj);

    return obj;
}

console.log(newFreeze(user));
// user.name = "Klara";
delete user.email;
// user.newMail = "jksnjn";
console.log(user);
console.log();

// 25. Є корзина товарів.Додай метод getTotalPrice().

let cart = {
    goods: [
        { name: "Milk", price: 6 },
        { name: "Cheese", price: 8 },
    ],
    getTotalPrice() {
        let totalPrice = 0;
        for (let a of this.goods) {
            totalPrice += a.price;
        }

        return totalPrice;
    }
}

console.log(cart.getTotalPrice());
console.log();

// 26. Є users = { 1: { ...}, 2: { ...}, 3: { ...} } — перетвори у масив.
let users = { 1: { name: "John" }, 2: { name: "Liza" }, 3: { name: "Klara" } };

function makeArray(obj) {
    return Object.values(obj);
}

console.log(makeArray(users));
console.log();

// 27. Є масив об’єктів.Перетвори його у об’єкт за ключем id.
let newArray = [{ name: "name1" }, { name: "name2" }, { name: "name3" }]
function makeObj(arr) {
    let newObj = {};

    arr.forEach(el => {
        for (let a in el) {
            newObj[el[a]] = el;
        }
    });
    return newObj;
}
console.log(makeObj(newArray));
console.log();

// 28. Створи функцію, яка рахує, скільки разів зустрічається значення об’єктів.

function countValues(arr) {
    let newObj = {};
    let count;

    arr.forEach(obj => {
        for (let a in obj) {
            if (obj[a] in newObj) {
                count = newObj[obj[a]];
                newObj[obj[a]] = count + 1;
            }
            else {
                newObj[obj[a]] = 1;
            }
        }
    })

    return newObj;
}

console.log(countValues([{ type: "fruit", type2: "vegetables" }, { type: "fruit" }, { type: "vegetables" }, { type: "fruit" }]));
console.log();

// 29. Напиши функцію invert(obj) → міняє місцями ключі та значення.

function invert(arr) {
    let newArr = [];
    let newObj = {};
    let temp;

    arr.forEach(obj => {
        for (let a in obj) {
            if (!(obj[a] in newObj)) {
                newObj[obj[a]] = a;
            }
            else {
                temp = [newObj[obj[a]]];
                temp.push(a);
                newObj[obj[a]] = temp;
                temp = null;
            }
        }
        newArr.push(newObj);
        newObj = {};
    });

    return newArr;
}

console.log([{ type: "fruit", type2: "vegetables" }, { type: "fruit" }, { type: "vegetables" }, { type: "fruit" }]);
console.log(invert([{ type: "fruit", type2: "vegetables" }, { type: "fruit" }, { type: "vegetables" }, { type: "fruit" }]));
console.log(invert([{ a: "x", b: "x" }]));
console.log();

// 30. Є об’єкт з датами.Перетвори всі дати(рядки) у Date - об’єкти.

let dates = { data1: "2023-07-12", data2: "2025-03-14", data3: "2025-07-03" };

function makeDateObj(obj) {
    let newObj = {};

    for (let a in obj) {
        newObj[a] = new Date(obj[a]);
    }

    return newObj;
}

console.log(makeDateObj(dates));
console.log();

// 31. Створи об’єкт із getter/setter для властивості fullName.

// console.log();
// console.log();

// 32. Створи фабрику об’єктів createUser(name, age)

// console.log();
// console.log();

// 33. Створи конструктор функцію User() з методами.

// console.log();
// console.log();

// 34. Створи об’єкт, який логує, скільки разів викликано будь-який його метод.

// console.log();
// console.log();

// 35. Напиши функцію, яка сортує масив об’єктів за віком.

// console.log();
// console.log();

// 36. Створи функцію, яка видаляє всі ключі зі значенням null.

// console.log();
// console.log();

// 37. Є об’єкт конфігурації. Зроби так, щоб будь-яка зміна логувалася у консоль.

// console.log();
// console.log();

// 38. Є список транзакцій. Порахуй баланс.

// console.log();
// console.log();

// 39. Напиши функцію, яка перетворює об’єкт у рядок формату URL query parameters.

// приклад: { page:2, limit:10 } → "?page=2&limit=10"

// console.log();
// console.log();


// 40. Напиши функцію, яка глибоко порівнює два об’єкти.

// console.log();
// console.log();
