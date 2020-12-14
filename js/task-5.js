let input = prompt('Укажите пожалуйста вашу страну');

let country;

let result;

let costOfDelivery;

if (!input) {
    console.log('Отменено пользователем!');
} else if (input) {
    country = input.toLowerCase();
  switch (country) {
        case 'китай':
            result = 'китай';
            costOfDelivery = 100;
            break;
        case 'чили':
            result = 'чили';
            costOfDelivery = 250;
            break;
        case 'австралия':
            result = 'австралия';
            costOfDelivery = 170;
            break;
        case 'индия':
            result = 'индия';
            costOfDelivery = 80;
            break;
        case 'ямайка':
            result = 'ямайка';
            costOfDelivery = 120;
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
}
if (costOfDelivery) {
    console.log(`Доставка в ${result} будет стоить ${costOfDelivery} кредитов`)
}