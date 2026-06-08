/* ========================================
   INTERACTIONS SCRIPT
   ========================================
   Handles user interactions: hero scroll effects,
   form submissions, search functionality
   ======================================== */

class Interactions {
    constructor() {
        this.hero = document.getElementById('hero');
        this.searchForm = document.getElementById('searchInput');
        this.newsletterForm = document.getElementById('newsletterForm');
        
        this.initScrollEffects();
        this.initSearch();
        this.initNewsletter();
    }
    
    // ========================================
    // HERO SCROLL EFFECTS
    // ========================================
    initScrollEffects() {
        if (!this.hero) return;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = this.hero.clientHeight;
            
            // Add scrolled class when user scrolls past hero
            if (scrollY > heroHeight * 0.3) {
                this.hero.classList.add('scrolled');
            } else {
                this.hero.classList.remove('scrolled');
            }
            
            // Parallax effect for hero content
            const heroContent = this.hero.querySelector('.hero-content');
            if (heroContent && scrollY < heroHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrollY / heroHeight) * 0.3;
            }
        });
        
        // Smooth scroll to content on scroll indicator click
        const scrollIndicator = this.hero.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                window.scrollBy({
                    top: this.hero.clientHeight * 0.8,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================
    initSearch() {
        const searchBtn = document.getElementById('searchBtn');
        if (!searchBtn || !this.searchForm) return;
        
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.performSearch();
        });
        
        this.searchForm.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch();
            }
        });
    }
    
    performSearch() {
        const query = this.searchForm.value.trim();
        if (!query) return;
        
        // In production, this would make an API call or navigate to results page
        console.log('Searching for:', query);
        
        // For demo: show an alert
        alert(`Searching for: "${query}"\n\nIn production, this would display search results.`);
        
        // Optional: Navigate to search results page
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
    
    // ========================================
    // NEWSLETTER SIGNUP
    // ========================================
    initNewsletter() {
        if (!this.newsletterForm) return;
        
        this.newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleNewsletterSignup();
        });
    }
    
    handleNewsletterSignup() {
        const emailInput = this.newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            this.showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // In production, this would send to a backend service
        console.log('Newsletter signup:', email);
        
        this.showNotification('Thank you for subscribing! Check your inbox for a welcome email.', 'success');
        emailInput.value = '';
    }
    
    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#DC143C' : '#2196F3'};
            color: white;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
            word-wrap: break-word;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @media (max-width: 600px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Interactions();
    });
} else {
    new Interactions();
}
