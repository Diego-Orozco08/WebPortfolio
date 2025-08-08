// Necessary query selectors for the both nav menus and contact buttons
const menu = document.querySelector('#menu');
const menuEsp = document.querySelector('#menuESP');
const navLinksENG = document.querySelector('nav.LanENG .links');
const navLinksESP = document.querySelector('nav.LanESP .linksESP');
const contactBtnENG = document.querySelector('nav.LanENG .btn');
const contactBtnESP = document.querySelector('nav.LanESP .btn');
const logoENG = document.querySelector('nav.LanENG .logo');
const logoESP = document.querySelector('nav.LanESP .logo');

// Function to handle smooth scrolling without changing the URL
function setupSmoothScrolling(links) {
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the URL from updating
            event.preventDefault();
            
            // Get the target section's ID from the href attribute
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the menu after a link is clicked
                if (navLinksENG.classList.contains('active')) {
                    navLinksENG.classList.remove('active');
                    menu.classList.remove('bx-x');
                } else if (navLinksESP.classList.contains('active')) {
                    navLinksESP.classList.remove('active');
                    menuEsp.classList.remove('bx-x');
                }
            }
        });
    });
}

// Event listener for English menu
if (menu) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navLinksENG.classList.toggle('active');
    });
}
// Event listener for Spanish menu (if separate)
if (menuEsp) {
    menuEsp.addEventListener('click', () => {
        menuEsp.classList.toggle('bx-x');
        const currentNavLinks = document.querySelector(document.body.classList.contains('lang-en') ? 'nav.LanENG .links' : 'nav.LanESP .linksESP');
        if (currentNavLinks) {
            navLinksESP.classList.toggle('active');
        }
    });
}

// Get references to the download buttons
const cvBtn = document.getElementById('cvBtn');
// Change language depending on the toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and set up the smooth scrolling
    const allLinksENG = document.querySelectorAll('nav.LanENG .links a');
    const allLinksESP = document.querySelectorAll('nav.LanESP .linksESP a');
    // Combine all relevant links into one array for easy setup
    const allScrollLinks = [...allLinksENG, ...allLinksESP, contactBtnENG, contactBtnESP, logoENG, logoESP];
    setupSmoothScrolling(allScrollLinks);

    // Get references to the radio buttons
    const englishRadio = document.getElementById('glass-green');
    const spanishRadio = document.getElementById('glass-gold');
    const body = document.body;
    /**
     * Updates the display of language-specific content based on the selected language.
     * @param {string} lang - The language to display ('en' for English, 'es' for Spanish).
     */
    function updateLanguageDisplay(lang) {
        body.classList.remove('lang-en', 'lang-es');
        body.classList.add(`lang-${lang}`);
        let downloadText;
        let downloadHref;

        // Set the checked state for all radio buttons
        if (lang === 'en') {
            if (englishRadio) englishRadio.checked = true;
            downloadText = 'Download CV';
            downloadHref = './elements/CV (EN) - Diego Alejandro Orozco Silva.pdf';
        } else {
            if (spanishRadio) spanishRadio.checked = true;
            downloadText = 'Descargar CV';
            downloadHref = './elements/CV (ESP) - Diego Alejandro Orozco Silva.pdf';
        }
        // Update the button text using the new variable
        if (cvBtn){
            cvBtn.textContent = downloadText;
            cvBtn.href = downloadHref;
        }
    }

    // Add event listeners to all four radio buttons
    if (englishRadio) {
        englishRadio.addEventListener('change', function() {
            if (this.checked) {
                updateLanguageDisplay('en');
            }
        });
    }
    if (spanishRadio) {
        spanishRadio.addEventListener('change', function() {
            if (this.checked) {
                updateLanguageDisplay('es');
            }
        });
    }
    
    // Set initial language display based on the page load state
    if (englishRadio && englishRadio.checked) {
        updateLanguageDisplay('en');
    } else if (spanishRadio && spanishRadio.checked) {
        updateLanguageDisplay('es');
    } else {
        // Default to English if neither is checked
        updateLanguageDisplay('en');
    }
});