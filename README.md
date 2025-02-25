Captcha: Escaping Checkbox
Escaping Checkbox Demo
An interactive captcha where users need to catch an escaping checkbox.

Overview
This is a fun and interactive captcha designed to protect your website from bots. The user must "catch" a moving checkbox that tries to escape when hovered or touched. It’s perfect for adding an extra layer of security while keeping the user experience engaging.

Key features:

Interactive animations : The checkbox runs, jumps, spins, and even performs pirouettes!
Mobile-friendly : Works seamlessly on touch devices.
Bot protection : Includes time-based checks and hidden fields to prevent bot automation.
Customizable : Easily integrate into any project with minimal setup.
### Installation

Step 1: Download the Files
Download the following files and add them to your project:

RUNcaptcha.js – Contains the JavaScript logic.
RUNcaptcha.css – Contains the styles for the captcha.
Alternatively, you can clone the repository:
git clone https://github.com/Art973/RunningCaptcha.git

Step 2: Include the Files in Your Project
Add the following lines to your HTML file to include the captcha:

<link rel="stylesheet" href="RUNcaptcha.css">
<script src="RUNcaptcha.js"></script>

# Usage
Step 1: Add the Captcha Container
Insert the following HTML code where you want the captcha to appear:

<div id="captcha-container">
    <button id="checkbox">✔</button>
</div>

Step 2: Initialize the Captcha
The captcha will automatically initialize when the page loads. However, if you want to manually trigger it, you can use the following JavaScript:

document.addEventListener('DOMContentLoaded', () => {
    // The captcha will start automatically
});

Step 3: Customize the Behavior (Optional)
You can customize the behavior of the captcha by modifying the RUNcaptcha.js file. For example:

Adjust the speed of the checkbox.
Change the animations or add new ones.
Modify the time limits for success/failure.

### How It Works
# User Interaction :
When the user hovers over or touches the checkbox, it moves to a random position on the screen.
The checkbox performs various animations (e.g., running, jumping, spinning) to make it harder to catch.

# Bot Protection :

The captcha includes a time-based check to ensure the user completes the task within a reasonable timeframe.
Hidden fields are used to detect automated scripts.

# Success/Failure Messages :

If the user successfully clicks the checkbox within the allowed time, a success message is displayed.
If the user fails or takes too long, an error message appears.

# Customization Options
You can customize the captcha to fit your needs by modifying the following:

CSS Customization
Edit the RUNcaptcha.css file to change the appearance of the checkbox:

#checkbox {
    width: 60px;
    height: 60px;
    background-color: green;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

JavaScript Customization
Modify the RUNcaptcha.js file to adjust the behavior:

const minTime = 3000; // Minimum time for success (in milliseconds)
const maxTime = 15000; // Maximum time for success (in milliseconds)

### Examples
## Basic Example
Here’s a complete example of how to use the captcha:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escaping Checkbox Captcha</title>
    <link rel="stylesheet" href="RUNcaptcha.css">
</head>
<body>
    <h1>Catch the Checkbox!</h1>
    <div id="captcha-container">
        <button id="checkbox">✔</button>
    </div>
    <p id="message-success" class="hidden">Success! You passed the captcha.</p>
    <p id="message-fail" class="hidden">Error! Please try again.</p>
    <script src="RUNcaptcha.js"></script>
</body>
</html>

# License
This project is licensed under the MIT License . Feel free to use, modify, and distribute it as you wish.

Credits
Inspired by creative captcha ideas.
Built with ❤️ by art973.
