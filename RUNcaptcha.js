// Находим элементы
const checkbox = document.getElementById('checkbox');
const messageSuccess = document.getElementById('message-success');
const messageFail = document.getElementById('message-fail');
const botCheck = document.getElementById('bot-check');

// Временные метки для защиты от ботов
let startTime = null;
const minTime = 3000; // Минимальное время выполнения (в миллисекундах)
const maxTime = 15000; // Максимальное время выполнения (в миллисекундах)

// Счетчик неудачных попыток
let failCount = 0;

// Функция для проверки времени выполнения
function checkTime() {
    const endTime = Date.now();
    const duration = endTime - startTime;

    if (duration < minTime || duration > maxTime) {
        return false; // Подозрительное время выполнения
    }
    return true;
}

// Функция для выбора случайной анимации
function getRandomAnimation() {
    const animations = ['run', 'jump', 'shake', 'spin', 'slide', 'bounce', 'pirouette', 'wave'];
    return animations[Math.floor(Math.random() * animations.length)];
}

// Функция для перемещения галочки в случайное место
function moveCheckbox() {
    const container = document.getElementById('captcha-container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - checkbox.offsetWidth;
    const maxY = containerRect.height - checkbox.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Плавное перемещение
    checkbox.style.left = `${randomX}px`;
    checkbox.style.top = `${randomY}px`;

    // Случайная анимация
    const animation = getRandomAnimation();
    checkbox.style.animation = `${animation} 0.5s ease-in-out`;

    setTimeout(() => {
        checkbox.style.animation = ''; // Сбрасываем анимацию после завершения
    }, 500);
}

// Функция для хаотичного движения
function chaoticMovement() {
    setInterval(() => {
        const container = document.getElementById('captcha-container');
        const containerRect = container.getBoundingClientRect();

        const maxX = containerRect.width - checkbox.offsetWidth;
        const maxY = containerRect.height - checkbox.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Быстрое хаотичное перемещение
        checkbox.style.transitionDuration = '0.2s';
        checkbox.style.left = `${randomX}px`;
        checkbox.style.top = `${randomY}px`;
    }, 300); // Каждые 300 мс галочка меняет позицию
}

// Обработчик движения мыши
document.addEventListener('mousemove', (event) => {
    if (!startTime) startTime = Date.now(); // Запускаем таймер при первом движении

    const checkboxRect = checkbox.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Если курсор близко к галочке, она убегает
    if (
        mouseX >= checkboxRect.left - 50 &&
        mouseX <= checkboxRect.right + 50 &&
        mouseY >= checkboxRect.top - 50 &&
        mouseY <= checkboxRect.bottom + 50
    ) {
        moveCheckbox();
    }
});

// Обработчик касания (для мобильных устройств)
document.addEventListener('touchmove', (event) => {
    if (!startTime) startTime = Date.now(); // Запускаем таймер при первом касании

    const touch = event.touches[0];
    const checkboxRect = checkbox.getBoundingClientRect();

    const touchX = touch.clientX;
    const touchY = touch.clientY;

    // Если палец близко к галочке, она убегает
    if (
        touchX >= checkboxRect.left - 50 &&
        touchX <= checkboxRect.right + 50 &&
        touchY >= checkboxRect.top - 50 &&
        touchY <= checkboxRect.bottom + 50
    ) {
        moveCheckbox();
    }
});

// Обработчик клика по галочке
checkbox.addEventListener('click', () => {
    if (checkTime()) {
        // Скрываем сообщение об ошибке, если оно было показано
        messageFail.classList.add('hidden');
        messageSuccess.classList.remove('hidden');
        checkbox.disabled = true; // Отключаем кнопку после успеха
    } else {
        failCount++; // Увеличиваем счетчик неудачных попыток
        messageFail.classList.remove('hidden');

        // Ускоряем движение галочки после каждой неудачной попытки
        checkbox.style.transitionDuration = `${1 - failCount * 0.1}s`;

        // После 3 неудачных попыток включаем хаотичное движение
        if (failCount >= 3) {
            chaoticMovement();
        }
    }
});

// Защита от ботов: если скрытое поле заполнено, это подозрительно
botCheck.addEventListener('input', () => {
    messageFail.classList.remove('hidden');
});