let message;

let input = prompt('Введите пароль');

const ADMIN_PASSWORD = 'jqueryismyjam';

if (input === null) {
    message = 'Отменено пользователем!';
} else if (input === 'jqueryismyjam') {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
} 
alert(message);