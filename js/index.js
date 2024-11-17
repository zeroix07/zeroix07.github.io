// index.js
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu elements
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(menuButton);

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);

    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) {
        console.error('Sidebar element not found');
        return;
    }

    // Mobile menu functionality
    menuButton.addEventListener('click', function() {
        if (sidebar) {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Toggle menu icon
            const icon = menuButton.querySelector('i');
            if (icon) {
                icon.className = sidebar.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            }
        }
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        if (sidebar) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            const icon = menuButton.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (sidebar) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                const icon = menuButton.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        });
    });

    // Close menu on window resize (if screen becomes larger)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            const icon = menuButton.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });

    // Handle ESC key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            const icon = menuButton.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });
});