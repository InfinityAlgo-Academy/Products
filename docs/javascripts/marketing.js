
document.addEventListener("DOMContentLoaded", function () {
    // 1. Live Stats Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/,/g, ''); // Remove commas

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                if (count < target) {
                    // Add comma formatting
                    counter.innerText = Math.ceil(count + inc).toLocaleString();
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString() + "+";
                }
            };
            updateCount();
        });
    };

    // Trigger animation when stats section is in view
    let animated = false;
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight > statsSection.offsetTop && !animated) {
                animateCounters();
                animated = true;
            }
        });
        // Trigger immediately if visible
        animateCounters();
    }

    // 2. Auto-Language Redirect (Smart Detection) - Optional enhancement
    // If user lands on root and prefers Arabic, suggest switch? 
    // For now, we trust the mkdocs-static-i18n plugin but ensure UI text switches
});
