//Тема: Умови та цикли

// Виведи всі числа від 1 до 10.

function Nums(num) {
    for (let i = 1; i<num+1; i++) {
        console.log(i);
    }
}

Nums(10);
console.log("\n");

// Обчисли факторіал числа.

function Factorial(num) {
    let res = 1;

    if (num === 0) {
        return res;
    }

    let i = 1;

    while(i !== num) {
        i++;
        res *= i;
        
    }

    return res;
}

console.log("Факторіал числа 5: " + Factorial(5));
console.log("Факторіал числа 0: " + Factorial(0));
console.log("Факторіал числа 1: " + Factorial(1));
console.log("\n");


// Виведи всі парні числа від 1 до 100.

function EvenNumbers(num) {
    let strNum = "";
    let j = 0;
    for (let i = 1; i < num + 1; i++) {
        if (i % 2 === 0) {
            strNum += i + " ";
            j++;
        }
        if (j === 6) {
            strNum += "\n";
            j = 0;
        }
        
    }

    return strNum;
}

console.log("Парні числа від 1 до 100:\n" + EvenNumbers(100));
console.log("\n");


// Знайди суму всіх чисел, кратних 3 і 5 до 1000 (класика з Project Euler).

function Func () {
    let res = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            res += i;
        }
    }

    return res;
}

console.log("Сума: " + Func());
console.log("\n");


// Намалюй у консолі “трикутник” із символів # (як у завданні з книги Eloquent JavaScript).

function Triangle () {
    let triangle = "";
    for (let i = 1; i < 10; i++){
        triangle += "#".repeat(i) + "\n";
    }
    console.log(triangle);
}

Triangle();
console.log("\n");

