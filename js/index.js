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

// Add this to your index.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if PDF viewer is loaded correctly
    const pdfViewer = document.querySelector('.pdf-preview-alt');
    if (pdfViewer) {
        pdfViewer.addEventListener('error', function() {
            this.parentElement.innerHTML = `
                <div class="pdf-fallback">
                    <i class="fas fa-file-pdf"></i>
                    <p>PDF preview not available</p>
                    <a href="cv/CV_FADHEL MUHAMMAD APRIANSYAH..pdf" download class="toolbar-btn">
                        <i class="fas fa-download"></i> Download PDF
                    </a>
                </div>
            `;
        });
    }

    // Handle modal for mobile devices
    function adjustModalForMobile() {
        const modal = document.getElementById('pdf-modal');
        if (window.innerWidth <= 768) {
            modal.style.padding = '0';
            document.querySelector('.modal-content').style.borderRadius = '0';
        } else {
            modal.style.padding = '1rem';
            document.querySelector('.modal-content').style.borderRadius = '12px';
        }
    }

    window.addEventListener('resize', adjustModalForMobile);
    adjustModalForMobile(); // Initial check
});