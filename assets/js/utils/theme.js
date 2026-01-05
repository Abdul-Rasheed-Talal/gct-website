/**
 * GCT Bhakkar - Theme Toggle & Smooth Effects
 * Handles light/dark theme switching and smooth page interactions
 */

class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || this.getSystemPreference();
        this.init();
    }

    init() {
        // Apply theme immediately to prevent flash
        this.applyTheme(this.theme);

        // Wait for DOM to attach event listeners
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupToggle());
        } else {
            this.setupToggle();
        }
    }

    getStoredTheme() {
        return localStorage.getItem('gct-theme');
    }

    getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('gct-theme', theme);
    }

    toggle() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    setupToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
}

/**
 * Smooth Scroll Handler
 */
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                const targetId = link.getAttribute('href');
                if (targetId && targetId !== '#') {
                    e.preventDefault();
                    this.scrollTo(targetId);
                }
            }
        });
    }

    scrollTo(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const navbarHeight = document.querySelector('.main-navbar')?.offsetHeight || 80;
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

/**
 * Lazy Image Loader with smooth fade-in
 */
class LazyImageLoader {
    constructor() {
        this.init();
    }

    init() {
        // Add loading="lazy" to images without it
        document.querySelectorAll('img:not([loading])').forEach(img => {
            img.setAttribute('loading', 'lazy');
        });

        // Use Intersection Observer for smooth loading
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });

            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                if (img.complete) {
                    img.classList.add('loaded');
                } else {
                    img.addEventListener('load', () => img.classList.add('loaded'));
                    observer.observe(img);
                }
            });
        } else {
            // Fallback for older browsers
            document.querySelectorAll('img').forEach(img => img.classList.add('loaded'));
        }
    }
}

/**
 * Scroll Animation Observer
 * Triggers animations when elements enter viewport
 */
class ScrollAnimator {
    constructor() {
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements immediately
            document.querySelectorAll('[data-animate]').forEach(el => {
                el.classList.add('animated');
            });
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const animation = el.dataset.animate;
                    const delay = parseInt(el.dataset.delay) || 0;

                    setTimeout(() => {
                        el.style.animation = `${animation} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
                        el.classList.add('animated');
                    }, delay);

                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }
}

/**
 * Counter Animation
 * Animates numbers when they enter viewport
 */
class CounterAnimator {
    constructor() {
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-counter]').forEach(el => {
            observer.observe(el);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter) || parseInt(element.textContent);
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            const current = Math.floor(start + (target - start) * easeProgress);

            element.textContent = current.toLocaleString() + (element.dataset.suffix || '');

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}

/**
 * Back to Top Button
 */
class BackToTop {
    constructor() {
        this.button = null;
        this.init();
    }

    init() {
        this.createButton();
        this.attachEvents();
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'back-to-top';
        this.button.setAttribute('aria-label', 'Back to top');
        this.button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(this.button);
    }

    attachEvents() {
        // Show/hide on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (window.scrollY > 500) {
                        this.button.classList.add('visible');
                    } else {
                        this.button.classList.remove('visible');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Click to scroll
        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    new SmoothScroll();
    new LazyImageLoader();
    new ScrollAnimator();
    new CounterAnimator();
    new BackToTop();
});

// Theme manager initializes immediately
const themeManager = new ThemeManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeManager, SmoothScroll, LazyImageLoader, ScrollAnimator };
}
