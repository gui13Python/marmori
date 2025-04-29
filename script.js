document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position of target element, considering fixed header height
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Basic Form Placeholder Logic (Prevents actual submission for demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop form submission
            alert('Obrigado pela sua mensagem! (Este é um formulário de demonstração)');
            // In a real scenario, you would send data via AJAX or let the form submit to a backend endpoint.
            contactForm.reset(); // Optional: Clear the form
        });
    }

    // Optional: Add subtle animation on scroll or other enhancements later

});

