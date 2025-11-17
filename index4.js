// Arrays. 40 tasks

// 1. Вивести всі елементи масиву у консоль.

function elements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

elements([1, 2, 3, 1, 2, 3, 4, 5, 6]);
console.log("\n");

// 2. Порахувати суму всіх елементів масиву.

function sumElements(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    });

    return sum;
}

console.log(sumElements([5, 9, 12, 87]));
console.log("\n");

// 3. Знайти найбільше та найменше число.

function maxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let a of arr) {
        if (a > max) {
            max = a;
        }
        if (a < min) {
            min = a;
        }
    }

    return { "result": { "Max: ": max, "Min: ": min } };
}

console.log(maxAndMin([12, 44, 1, 5, 98]));
console.log("\n");

// 4. Порахувати середнє значення чисел.

function average(arr) {
    let average = 0;

    for (let a of arr) {
        average += a;
    }

    return average / arr.length;
}

console.log(average([12, 44, 1, 5, 98]));
console.log("\n");

// 5. Перевернути масив без reverse() (через цикл).

function reverseFunc(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(reverseFunc([5, 4, 3, 2, 1]));
console.log("\n");

// 6. Знайти позицію елемента через indexOf().

function findPosition(arr, el) {
    return arr.indexOf(el);
}

console.log(findPosition([1, 2, 5, 3, 6, 4, 8], 8));
console.log("\n");

// 7. Перевірити, чи є число в масиві (через includes).

function checkElement(arr, el) {
    if (arr.includes(el)) {
        return "Елемент є у масиві";
    }
    else {
        return "Такого елементу немає";
    }
}

console.log(checkElement([1, 2, 12, 3, 6, 8], 4));
console.log(checkElement([1, 2, 12, 3, 6, 8], 8));
console.log("\n");

// 8. Видалити елемент з масиву за індексом (splice).

function deleteEl(arr, index) {
    arr.splice(index, 1)
    return arr;
}

console.log(deleteEl([1, 2, 3, 4, 5], 3));
console.log("\n");

// 9. Додати елемент у кінець (push) та на початок (unshift).

function addElement(arr, elStart, elEnd) {
    arr.push(elEnd);
    arr.unshift(elStart);
    return arr;
}

console.log(addElement([1, 2, 3, 4, 5], 18, 98));
console.log("\n");

// 10. Об’єднати два масиви у один (concat).

function twoArr(arr, arr2) {
    let newArr = arr.concat(arr2);
    return newArr;
}

console.log(twoArr([12, 34, 56], [1, 2, 3, 4, 5, 6]));
console.log("\n");

// 11. Помножити кожен елемент на 2.

function doubleElement(arr) {
    arr = arr.map(el => el * 2);
    return arr;
}

console.log(doubleElement([1, 2, 3, 4, 5, 6]));
console.log("\n");

// 12. Перетворити масив чисел у масив рядків.

function elementToString(arr) {
    arr = arr.map(el => String(el));
    return arr;
}

console.log(elementToString([1, 2, 3, 4, 5, 6]));
console.log("\n");

// 13. Взяти масив слів і зробити всі великі літери.

function elToTitle(arr) {
    arr = arr.map(el => el.charAt(0).toUpperCase() + el.slice(1));
    return arr;
}

console.log(elToTitle(["cheese", "title", "map"]));
console.log("\n");

// 14. З масиву рядків отримати довжину кожного слова.

function wordsLength(arr) {
    arr.forEach(el => {
        console.log(`Довжина слова ${el}: ` + el.length);
    })
}

wordsLength(["cheese", "map", "it"]);
console.log("\n");

// 15. З масиву об’єктів {name, age} повернути лише масив імен.

function names(arr) {
    let namesArray = [];

    arr.forEach(el => {
        namesArray.push(el.name);
    })

    return namesArray;
}

console.log(names([{ name: "John", age: 12 }, { name: "Jane", age: 18 }, { name: "Liza", age: 21 }]));
console.log("\n");

// 16. Залишити лише парні числа.

function evenNumbers(arr) {
    // let newArr = [];

    // arr.forEach(el => {
    //     if (el % 2 === 0) {
    //         newArr.push(el);
    //     }
    // });

    // return newArr;

    return arr.filter(el => el % 2 === 0);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]));
console.log("\n");

// 17. Залишити лише слова довші ніж 5 букв.

function words(arr) {
    return arr.filter(el => el.length > 5);

}

console.log(words(["cheese", "map", "square", "description"]));
console.log("\n");

// 18. З масиву об’єктів залишити тих, кому більше 18 років.

function age(arr) {

    return arr.filter(el => el.age > 18);

}

console.log(age([{ name: "John", age: 19 }, { name: "Jane", age: 12 }, { name: "Liza", age: 21 }]));
console.log("\n");

// 19. Відфільтрувати елементи, які не є нулем.

function notNull(arr) {
    return arr.filter(el => el !== 0);
}

console.log(notNull([0, 1, 2, 0, 5, 4, 0, 8, 9]));
console.log("\n");

// 20. Залишити лише унікальні значення (через filter).

function uniqueArray(arr) {

    return arr.filter((el, index) => arr.indexOf(el) === index);
}

console.log(uniqueArray([1, 2, 3, 1, 5, 2, 8, 4, 9, 3, 7]));
console.log("\n");

// 21. Порахувати суму чисел.

function sumNumbers(arr) {
    let result = 0;
    arr.forEach(el => {
        result += el;
    });

    return result;
}

console.log(sumNumbers([1, 2, 3, 4]));
console.log("\n");

// 22. Порахувати добуток чисел.

function multiplicationNumbers(arr) {
    let result = 1;
    arr.forEach(el => {
        result *= el;
    });

    return result;
}

console.log(multiplicationNumbers([1, 2, 3, 4]));
console.log("\n");

// 23. З масиву рядків зробити один рядок через кому.

function oneStr(arr) {
    return arr.join(", ");
}

console.log(oneStr(["Hello", "World", "!"]));
console.log("\n");

// 24. З масиву об’єктів {price} порахувати загальну суму.

function sumPrice(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el.price;
    });

    return sum;
}

console.log(sumPrice([{ price: 12 }, { price: 94 }, { price: 10 }]));
console.log("\n");

// 25. З масиву чисел знайти найчастіше значення (мода).

function modaNum(arr) {
    let count = 0;
    let num = arr[0];
    arr.forEach(el => {
        if (arr.filter(element => element === el).length > count) {
            count = arr.filter(element => element === el).length;
            num = el;
        }
    });

    return num;
}

console.log(modaNum([1, 2, 2, 2, 3, 4, 5, 1]));
console.log("\n");

// 26. Знайти перший елемент більший за 10 (find).

function elementGreaterTen(arr) {
    return arr.find(el => el > 10);
}

console.log(elementGreaterTen([1, 9, 18, 12, 94]));
console.log("\n");

// 27. Чи є хоча б одне від’ємне число? (some)

function negativeNum(arr) {
    return arr.some(el => el < 0);
}

console.log(negativeNum([1, 2, 3, 4, 5]));
console.log(negativeNum([1, 2, 3, -4, 5]));
console.log("\n");

// 28. Чи всі елементи більше 0? (every)

function greaterNull(arr) {
    return arr.every(el => el > 0);
}

console.log(greaterNull([1,2,3,4,5]));
console.log(greaterNull([1,2,3,4,5,0]));
console.log(greaterNull([1,2,-3,4,5]));
console.log("\n");

// 29. Знайти об’єкт із масиву за id.

function findObjectById(arr, id){
    let foundElement = "Не знайдено";

    // arr.forEach(el => {
    //     if (el.id === id) {
    //         foundElement = el; 
    //     } 
    // });

    if (arr.find(el => el.id === id))
    foundElement = arr.find(el => el.id === id);

    return foundElement;
}

console.log(findObjectById([{id:1, productName: "Cheese"}, {id:2, productName: "Milk"}], 1));
console.log(findObjectById([{id:1, productName: "Cheese"}, {id:2, productName: "Milk"}], 2));
console.log("\n");

// 30. Знайти перше слово, яке починається з літери “A”.

function firstLeterA(arr) {
    let word = null;
    // arr.forEach(el => {
    //     if (el[0] == "A" && !word) {
    //         word = el;
    //     }
    // });

    word = arr.find(el => el[0] === 'A' && !word);

    return word;
}

console.log(firstLeterA(["Bingo", "Almond", "Alice", "Banana"]));
console.log("\n");

// 31. Відсортувати числа від меншого до більшого (sort).

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([5,8,4,6,9,12]));
console.log("\n");

// 32. Відсортувати слова за алфавітом.

function sortWordsArray(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    return arr;
}

console.log(sortWordsArray(["Cheese", "Almond", "Banana"]));
console.log("\n");

// 33. Відсортувати масив об’єктів за віком.

function sortByAge(arr) {
    // arr.forEach(el => {
        
    // });
    arr.sort((a,b) => a.age - b.age);
    return arr;
}

console.log(sortByAge([{age: 18, name: "John"}, {age: 10, name: "Liza"}, {age: 20, name: 'Kate'}, {age: 100, name:"Greg"}]));
console.log("\n");

// 34. Взяти частину масиву (3 елементи) через slice.

function partOfArray(arr) {
    return arr.slice(1, 4);
}

console.log(partOfArray([1,2,3,4,5,6]));
console.log("\n");

// 35. Видалити 2 елементи всередині масиву (splice).

function partOfArrayDelete(arr) {
    arr.splice(1,2);
    return arr;
}

console.log(partOfArrayDelete([1,2,3,4,5,6]));
console.log("\n");

// 36. Замінити елемент в середині масиву через splice.

function changeElement(arr) {
    arr.splice(1, 1, "Two");
    return arr;
}

console.log(changeElement([1,2,3,4,5,6]));
console.log("\n");

// 37. Розгладити масив 2 рівня: [1, [2, 3], [4, 5]] → [1,2,3,4,5] (flat).

function flatFunc(arr) {
    return arr.flat();
}

console.log(flatFunc([1, [2, 3], [4, 5]]));
console.log("\n");

// 38. З масиву слів створити масив букв (flatMap).

function flatMapFunc(arr) {
    return arr.flatMap((el) => el.split(""));
}

console.log(flatMapFunc(["cheese", "array", "cat"]));
console.log("\n");

// 39. Зробити масив унікальних значень через Set.

function toSetArray(arr) {
    // let newArr = new Set(arr);

    let newArr = [...new Set(arr)];
    return newArr;
}

console.log(toSetArray([1,2,3,1,2,5,4,5,4]));
console.log("\n");

// 40. Порахувати, скільки разів кожен елемент зустрічається в масиві (використати об’єкт).

function getCount(arr) {
    let newObject = {};
    let count;

    arr.forEach(el => {
        if (newObject.hasOwnProperty(el)) {
            count = newObject[el];
            newObject[el] = count+1;
        } 
        else {
            newObject[el] = 1;
        }
    });

    return newObject;

}

console.log(getCount(["cheese", "map", "cheese", "green", "round", "cheese", "map"]));
console.log("\n");
