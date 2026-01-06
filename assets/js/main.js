/**
 * GCT Bhakkar - Main JavaScript Entry Point
 * Initializes all components and utilities
 */

// Import components (for module bundlers)
// In standard HTML, these are loaded via script tags

/**
 * Main Application Controller
 */
const App = {
    /**
     * Initialize the application
     */
    init() {
        this.initComponents();
        this.initBackToTop();
        this.initPageTransition();
        console.log('GCT Bhakkar Website Initialized');
    },

    /**
     * Initialize dynamic components
     */
    initComponents() {
        // Navbar and Footer are auto-initialized via their own scripts
        // Initialize curriculum tabs
        this.initCurriculumTabs();
    },

    /**
     * Initialize curriculum tabs for department pages
     */
    initCurriculumTabs() {
        const tabs = document.querySelectorAll('.curriculum-tab');
        const contents = document.querySelectorAll('.curriculum-content');

        if (tabs.length === 0) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const year = tab.dataset.year;

                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const content = document.querySelector(`[data-year-content="${year}"]`);
                if (content) {
                    content.classList.add('active');
                }
            });
        });
    },

    /**
     * Initialize back to top button
     */
    initBackToTop() {
        // Create back to top button if not exists
        if (!document.querySelector('.back-to-top')) {
            const button = document.createElement('button');
            button.className = 'back-to-top';
            button.innerHTML = '<i class="fas fa-chevron-up"></i>';
            button.setAttribute('aria-label', 'Back to top');
            document.body.appendChild(button);
        }

        const button = document.querySelector('.back-to-top');

        // Show/hide on scroll
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Scroll to top on click
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    /**
     * Add page transition effect
     */
    initPageTransition() {
        // Add transition class to main content
        const main = document.querySelector('main');
        if (main) {
            main.classList.add('page-transition');
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
