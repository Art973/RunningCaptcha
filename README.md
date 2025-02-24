Captcha: Escaping Checkbox
This is an interactive captcha where the user needs to catch an escaping checkbox. It protects against bots and works on all devices.

# Installation
1. Copy the files RUNcaptcha.js and RUNcaptcha.css into your project.
2. Include the files in your HTML:

<link rel="stylesheet" href="RUNcaptcha.css">
<script src="RUNcaptcha.js"></script>

# Usage
3. Add a container for the captcha in your HTML:

<div id="captcha-container">
    <button id="checkbox">✔</button>
</div>

4. Initialize the captcha in JavaScript:

document.addEventListener('DOMContentLoaded', () => {
    // The captcha will start automatically
});

### License
This project is distributed under the MIT License. You are free to use and modify it as you wish.
