 function setTimeGreeting() {
            var greetingBanner = document.getElementById('greeting-banner');
            var currentHour = new Date().getHours();
            var greetingText = '';

            if (currentHour < 12) {
                greetingText = "Good morning! ☀️ Welcome to my portfolio!";
            } else if (currentHour < 18) {
                greetingText = "Good afternoon! 🌤️ Welcome to my portfolio!";
            } else {
                greetingText = "Good evening! 🌙 Welcome to my portfolio!";
            }

            greetingBanner.innerText = greetingText;
        }

        // Run greeting on page load
        setTimeGreeting();

        // 2. Dark Mode Toggle Feature
        function toggleDarkMode() {
            var bodyElement = document.body;
            var darkModeBtn = document.getElementById('dark-mode-btn');

            // Toggle 'dark-mode' CSS class on <body>
            bodyElement.classList.toggle('dark-mode');

            // Update button label
            if (bodyElement.classList.contains('dark-mode')) {
                darkModeBtn.innerText = "☀️ Light Mode";
            } else {
                darkModeBtn.innerText = "🌙 Dark Mode";
            }
        }

        // 3. Custom Greet Visitor Feature
        function greetVisitor() {
            var nameInput = document.getElementById('visitor-name');
            var greetingBanner = document.getElementById('greeting-banner');
            var visitorName = nameInput.value.trim();

            if (visitorName !== '') {
                greetingBanner.innerText = "Hello, " + visitorName + "! Thanks for visiting my page!";
                nameInput.value = '';
            } else {
                greetingBanner.innerText = "Please enter your name below!";
            }
        }

        // 4. Contact Form Submission Handler
        function handleFormSubmit(event) {
            event.preventDefault(); // Stop page refresh
            var messageBox = document.getElementById('form-message');
            messageBox.style.display = 'block';

            // Clear form inputs
            document.getElementById('contact-form').reset();
        }
