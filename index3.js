// Знайди найбільше число в масиві.

function MaxNum(arr) {
    let max = arr[0];

    for (let a of arr) {
        if (a > max) {
            max = a;
        }
    }

    return "Максимальне число: " + max;
}

console.log(MaxNum([1,19,24,48,2,32]));
console.log("\n");

// Обчисли середнє значення елементів масиву.

function AverageNum(arr) {
    let average = 0;

    for (let a of arr) {
        average += a;
    }

    return "Середнє значення масиву: " + (average / arr.length);
}

console.log(AverageNum([1,2,3,4,5,6,7,8,9]));
console.log("\n");

// Порахуй, скільки разів певне значення зустрічається в масиві.

function RepeatNum(num, arr) {
    let count = 0;

    for (let a of arr) {
        if (a === num){
            count++;
        }
    }

    return `Значення ${num} повторюється ${count} раз(ів)`;
}

console.log(RepeatNum(0, [1,2,3,4,5,6]));
console.log(RepeatNum(1, [1,2,3,4,5,6]));
console.log(RepeatNum(5, [5,2,5,4,5,6]));
console.log("\n");

// Відфільтруй усі парні числа.

function EvenNums(arr) {
    return arr.filter(a => a % 2 === 0);
}

console.log(EvenNums([1,2,3,4,5,6,7]));
console.log("\n");

// Перетвори масив слів у рядок через кому.

function Func(arr) {
    return arr.join();
}

console.log(Func(["array", "join", "word", "world"]));
console.log("\n");

// Знайди друге найбільше число в масиві без sort().

function SecondMaxNumber(arr) {
    let max = arr[0];
    let secondMax = arr[0];

    for(let a of arr) {
        if (a > max) {
            max = a;
        }
    }

    for (let a of arr) {
        if (a > secondMax && a !== max) {
            secondMax = a;
        }
    }

    return `Максимальне число: ${max} та друге максимальне число: ${secondMax}\n`;
}

console.log(SecondMaxNumber([1,12,48,54,20,16,59]));
console.log("\n");

// Створи новий масив лише з унікальних елементів.

function UniqueArray(arr) {
    let newArray = [];

    for (let a of arr) {
        if (newArray.find(r => r === a) === undefined) {
            newArray.push(a);
        }
    }

    return newArray;
}

console.log(UniqueArray([1,2,3,1,5,1,6,2,8,1,6,9,1,4,2,3,8,5]));