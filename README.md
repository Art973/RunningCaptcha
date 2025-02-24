# Капча: Убегающая галочка

Это интерактивная капча, где пользователь должен поймать убегающую галочку. Она защищает от ботов и работает на всех устройствах.

## Установка

1. Скопируйте файлы `RUNcaptcha.js` и `RUNcaptcha.css` в ваш проект.
2. Подключите файлы в HTML:
   ```html
   <link rel="stylesheet" href="RUNcaptcha.css">
   <script src="RUNcaptcha.js"></script>

# Использование
1. Добавьте контейнер для капчи в ваш HTML:

<div id="captcha-container">
    <button id="checkbox">✔</button>
</div>

2. Инициализируйте капчу в JavaScript:

document.addEventListener('DOMContentLoaded', () => {
    // Капча автоматически запустится
});

### Лицензия
Этот проект распространяется под лицензией MIT. Вы можете свободно использовать и модифицировать его.
