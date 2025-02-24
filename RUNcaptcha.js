
const checkbox = document.getElementById('checkbox');
const messageSuccess = document.getElementById('message-success');
const messageFail = document.getElementById('message-fail');
const botCheck = document.getElementById('bot-check');

let startTime = null;
const minTime = 3000; 
const maxTime = 15000;

let failCount = 0;

function checkTime() {
    const endTime = Date.now();
    const duration = endTime - startTime;

    if (duration < minTime || duration > maxTime) {
        return false; 
    }
    return true;
}

function getRandomAnimation() {
    const animations = ['run', 'jump', 'shake', 'spin', 'slide', 'bounce', 'pirouette', 'wave'];
    return animations[Math.floor(Math.random() * animations.length)];
}

function moveCheckbox() {
    const container = document.getElementById('captcha-container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - checkbox.offsetWidth;
    const maxY = containerRect.height - checkbox.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    checkbox.style.left = `${randomX}px`;
    checkbox.style.top = `${randomY}px`;

    const animation = getRandomAnimation();
    checkbox.style.animation = `${animation} 0.5s ease-in-out`;

    setTimeout(() => {
        checkbox.style.animation = '';
    }, 500);
}

function chaoticMovement() {
    setInterval(() => {
        const container = document.getElementById('captcha-container');
        const containerRect = container.getBoundingClientRect();

        const maxX = containerRect.width - checkbox.offsetWidth;
        const maxY = containerRect.height - checkbox.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        checkbox.style.transitionDuration = '0.2s';
        checkbox.style.left = `${randomX}px`;
        checkbox.style.top = `${randomY}px`;
    }, 300);
}

document.addEventListener('mousemove', (event) => {
    if (!startTime) startTime = Date.now();

    const checkboxRect = checkbox.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (
        mouseX >= checkboxRect.left - 50 &&
        mouseX <= checkboxRect.right + 50 &&
        mouseY >= checkboxRect.top - 50 &&
        mouseY <= checkboxRect.bottom + 50
    ) {
        moveCheckbox();
    }
});


document.addEventListener('touchmove', (event) => {
    if (!startTime) startTime = Date.now(); 

    const touch = event.touches[0];
    const checkboxRect = checkbox.getBoundingClientRect();

    const touchX = touch.clientX;
    const touchY = touch.clientY;

    if (
        touchX >= checkboxRect.left - 50 &&
        touchX <= checkboxRect.right + 50 &&
        touchY >= checkboxRect.top - 50 &&
        touchY <= checkboxRect.bottom + 50
    ) {
        moveCheckbox();
    }
});

checkbox.addEventListener('click', () => {
    if (checkTime()) {
        messageFail.classList.add('hidden');
        messageSuccess.classList.remove('hidden');
        checkbox.disabled = true; 
    } else {
        failCount++; 
        messageFail.classList.remove('hidden');

        checkbox.style.transitionDuration = `${1 - failCount * 0.1}s`;

        if (failCount >= 3) {
            chaoticMovement();
        }
    }
});

botCheck.addEventListener('input', () => {
    messageFail.classList.remove('hidden');
});
