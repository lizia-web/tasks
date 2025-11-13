// Напиши програму, яка запитує ім’я користувача і виводить “Привіт, [ім’я]!”

function Hello(name) {
    return `Hello, ${name}!\n`;
}

console.log(Hello("Liza"));

// Обчисли площу прямокутника за заданими сторонами a і b.

function AreaRectangle(a, b) {
    return "Площа прямокутника: " + (a * b) + "\n";
}

console.log(AreaRectangle(4,5));

// Перевір, чи є число парним або непарним.

function EvenOrOdd(number) {
    return number % 2 === 0 ? "Число парне!\n" : "Число непарне!\n";
}

console.log(EvenOrOdd(18));

// Обчисли суму цифр у числі (наприклад, 123 → 6).

function Sum(number) {
    let strNumber = String(number);
    let res = 0;
    for (let i = 0; i < strNumber.length; i++) {
        res += Number(strNumber[i]);
    }
    return `Сума цифр у числі ${number} = ${res}\n`;
}

console.log(Sum(12345));

// Перевір, чи є рік високосним.

function Year(year) {
    return ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) ? `Рік ${year} високосний\n` : `Рік ${year} не високосний\n`;
}

console.log(Year(2000));
console.log(Year(1900));
console.log(Year(1894));