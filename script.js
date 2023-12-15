document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle1');
    const collapsePanel = document.getElementById('collapse1');

    toggleButton.addEventListener('click', function () {
        if (collapsePanel.style.maxHeight) {
            collapsePanel.style.maxHeight = null;
        } else {
            collapsePanel.style.maxHeight = collapsePanel.scrollHeight + 'px';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle2');
    const collapsePanel = document.getElementById('collapse2');

    toggleButton.addEventListener('click', function () {
        if (collapsePanel.style.maxHeight) {
            collapsePanel.style.maxHeight = null;
        } else {
            collapsePanel.style.maxHeight = collapsePanel.scrollHeight + 'px';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle3');
    const collapsePanel = document.getElementById('collapse3');

    toggleButton.addEventListener('click', function () {
        if (collapsePanel.style.maxHeight) {
            collapsePanel.style.maxHeight = null;
        } else {
            collapsePanel.style.maxHeight = collapsePanel.scrollHeight + 'px';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle4');
    const collapsePanel = document.getElementById('collapse4');

    toggleButton.addEventListener('click', function () {
        if (collapsePanel.style.maxHeight) {
            collapsePanel.style.maxHeight = null;
        } else {
            collapsePanel.style.maxHeight = collapsePanel.scrollHeight + 'px';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle5');
    const collapsePanel = document.getElementById('collapse5');

    toggleButton.addEventListener('click', function () {
        if (collapsePanel.style.maxHeight) {
            collapsePanel.style.maxHeight = null;
        } else {
            collapsePanel.style.maxHeight = collapsePanel.scrollHeight + 'px';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle6');
    const collapsePanel = document.getElementById('collapse6');

    toggleButton.addEventListener('click', function () {
        if (collapsePanel.style.maxHeight) {
            collapsePanel.style.maxHeight = null;
        } else {
            collapsePanel.style.maxHeight = collapsePanel.scrollHeight + 'px';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailInput');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const emailValidationMessage = document.getElementById('emailValidationMessage');

    getStartedBtn.addEventListener('click', function () {
        const email = emailInput.value;
        if (validateEmail(email)) {
            emailValidationMessage.textContent = ''; // Clear previous validation message
            // Add logic to handle successful submission (e.g., redirect to a new page)
            console.log('Email submitted:', email);
        } else {
            emailValidationMessage.textContent = 'Please enter a valid email address.';
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

