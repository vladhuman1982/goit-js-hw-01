let credits = 23580;

const pricePerDroid = 3000;

let input = prompt('Сколько вы хотите купить дроидов?');

let totalPrice;

if (input === null) {
    console.log('Отменено пользователем!');
} else if (input <= 0) {
    console.log('Вы не выбрали количество дроидов');
} else {
    totalPrice = pricePerDroid * input;
}
if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    credits -= totalPrice;
    console.log(`Вы купили ${input} дроидов, на счету осталось ${credits} кредитов.`);
}